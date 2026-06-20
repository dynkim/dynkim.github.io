/* ================================================
   HORIZONTAL SCROLL: drag + arrow keys
   (Mouse wheel is intentionally NOT hijacked — vertical wheel
   scrolling stays on the page where users expect it.)
   ================================================ */
function attachHorizontalScroll(el) {
  // --- Click-and-drag to scroll ---
  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let moved = 0;          // total pixels moved during this drag
  const DRAG_THRESHOLD = 5; // px before we call it a drag (vs. a click)

  el.addEventListener('mousedown', (e) => {
    // Only left mouse button
    if (e.button !== 0) return;
    isDown = true;
    moved = 0;
    startX = e.pageX;
    startScroll = el.scrollLeft;
  });

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const dx = e.pageX - startX;
    moved = Math.max(moved, Math.abs(dx));
    if (moved > DRAG_THRESHOLD) {
      el.classList.add('dragging');
      e.preventDefault();
      el.scrollLeft = startScroll - dx;
    }
  });

  const endDrag = () => {
    if (!isDown) return;
    isDown = false;
    // Small timeout so the click event that fires right after mouseup
    // still sees the 'dragging' state and can be suppressed below.
    setTimeout(() => el.classList.remove('dragging'), 0);
  };
  el.addEventListener('mouseup', endDrag);
  el.addEventListener('mouseleave', endDrag);

  // Suppress the click on a card/image if the user was actually dragging.
  // Uses capture phase so it runs before the card's own onclick.
  el.addEventListener('click', (e) => {
    if (moved > DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // Prevent native image-drag ghost (uses delegation so it catches
  // images added later, e.g. when a project gallery is populated)
  el.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
}

function setupHorizontalScroll() {
  // Home grids keep horizontal scroll behaviors.
  // Project galleries now stack vertically, so they use normal page scroll.
  const grid  = document.getElementById('project-grid');
  const grid2 = document.getElementById('project-grid-2');
  const grid3 = document.getElementById('project-grid-3');
  attachHorizontalScroll(grid);
  attachHorizontalScroll(grid2);
  attachHorizontalScroll(grid3);


  // Arrow keys scroll the home grid (only when home view is active).
  // We scroll whichever grid the cursor is currently over; falls back to grid 1.
  // Escape returns to home from a project detail view.
  let lastHovered = grid;
  grid.addEventListener('mouseenter',  () => { lastHovered = grid;  });
  grid2.addEventListener('mouseenter', () => { lastHovered = grid2; });
   
  document.addEventListener('keydown', (e) => {
    const homeActive    = document.getElementById('view-home').classList.contains('active');
    const projectActive = document.getElementById('view-project').classList.contains('active');
    if (e.key === 'Escape' && (projectActive || document.getElementById('view-about').classList.contains('active') || document.getElementById('view-contact').classList.contains('active'))) { goHome(); return; }
    if (!homeActive) return;
    const step = 400;
    if (e.key === 'ArrowRight') { lastHovered.scrollLeft += step; }
    if (e.key === 'ArrowLeft')  { lastHovered.scrollLeft -= step; }
  });
}

/* ================================================
   SCROLL ARROWS: show/hide based on scroll position,
   clickable to step through the gallery.
   Returns an update() function the caller can invoke
   after content changes (e.g. loading a new project).
   ================================================ */
function setupScrollArrows(scrollEl, leftBtn, rightBtn) {
  const update = () => {
    const max = scrollEl.scrollWidth - scrollEl.clientWidth;
    const isScrollable = max > 4;
    const atStart = scrollEl.scrollLeft <= 4;
    const atEnd   = scrollEl.scrollLeft >= max - 4;

    leftBtn.classList.toggle('visible', isScrollable && !atStart);
    rightBtn.classList.toggle('visible', isScrollable && !atEnd);
  };

  scrollEl.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  const stepFor = () => Math.round(scrollEl.clientWidth * 0.8);
  leftBtn.addEventListener('click',  () => scrollEl.scrollBy({ left: -stepFor(), behavior: 'smooth' }));
  rightBtn.addEventListener('click', () => scrollEl.scrollBy({ left:  stepFor(), behavior: 'smooth' }));

  // Recalculate as images load (scrollWidth is only accurate once images size themselves)
  const watchImages = () => {
    scrollEl.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', update, { once: true });
    });
  };
  watchImages();

  update();
  return { update, watchImages };
}

let galleryArrows = null;
function setupAllScrollArrows() {
  setupScrollArrows(
    document.getElementById('project-grid'),
    document.getElementById('grid-arrow-left'),
    document.getElementById('grid-arrow-right')
  );
  setupScrollArrows(
    document.getElementById('project-grid-2'),
    document.getElementById('grid2-arrow-left'),
    document.getElementById('grid2-arrow-right')
  );
  // Gallery is now vertical; no scroll arrows needed there.
  const grid3 = document.getElementById('project-grid-3');
  if (grid3) {
    setupScrollArrows(
      grid3,
      document.getElementById('grid3-arrow-left'),
      document.getElementById('grid3-arrow-right')
    );
  }
}

function setupAutoScroll(grid, { speed = 0.35, resumeDelay = 500 } = {}) {
  if (!grid) return;
  if (grid._autoScrollStop) grid._autoScrollStop();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  grid.style.scrollBehavior = 'auto';

  // Remove stale clones
  grid.querySelectorAll('[data-clone]').forEach(n => n.remove());

  const originals = Array.from(grid.children);
  console.log('[autoScroll] grid:', grid.id, 'originals:', originals.length, 'scrollWidth:', grid.scrollWidth);
  if (!originals.length) return;

  originals.forEach(node => {
    const clone = node.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.dataset.clone = '1';
    grid.appendChild(clone);
  });
  grid.querySelectorAll('.project-card').forEach(applyLogoColorFromThumb);

  let paused = false;
  let resumeTimer = null;
  let raf;

  const tick = () => {
    if (!paused && !grid.classList.contains('dragging')) {
      const half = grid.scrollWidth / 2;
      grid.scrollLeft += speed;
      if (grid.scrollLeft >= half) grid.scrollLeft -= half;
      if (grid.scrollLeft < 0)     grid.scrollLeft += half;
    }
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);

  const pause = () => {
    clearTimeout(resumeTimer);
    paused = true;
  };
  const resume = () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, resumeDelay);
  };

  grid.addEventListener('pointerenter', pause);
  grid.addEventListener('pointerleave', resume);

  grid._autoScrollStop = () => {
    cancelAnimationFrame(raf);
    clearTimeout(resumeTimer);
    grid.removeEventListener('pointerenter', pause);
    grid.removeEventListener('pointerleave', resume);
    grid.querySelectorAll('[data-clone]').forEach(n => n.remove());
    delete grid._autoScrollStop;
  };
}