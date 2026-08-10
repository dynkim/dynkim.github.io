/* ================================================
   HORIZONTAL SCROLL: drag + arrow keys
   (Mouse wheel is intentionally NOT hijacked — vertical wheel
   scrolling stays on the page where users expect it.)
   ================================================ */
function attachHorizontalScroll(el) {
  if (!el) return;
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
  const grid  = document.getElementById('project-grid-1');
  const grid2 = document.getElementById('project-grid-2');
  const grid3 = document.getElementById('project-grid-3');
  const grid4 = document.getElementById('project-grid-4');
  attachHorizontalScroll(grid);
  attachHorizontalScroll(grid2);
  attachHorizontalScroll(grid3);
  attachHorizontalScroll(grid4);


  // Arrow keys scroll the home grid (only when home view is active).
  // We scroll whichever grid the cursor is currently over; falls back to grid 1.
  // Escape returns to home from a project detail view.
  let lastHovered = grid;
  if (grid)  grid.addEventListener('mouseenter',  () => { lastHovered = grid;  });
  if (grid2) grid2.addEventListener('mouseenter', () => { lastHovered = grid2; });   
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

  const stepFor = () => Math.round(scrollEl.clientWidth * 0.6);
  // Pause the auto-scroll loop around a click so it doesn't overwrite the
  // smooth scrollBy on the next frame; resume() re-arms after resumeDelay and
  // picks up from the new position. Re-arms on each click so rapid clicks work.
  const arrowStep = (dir) => {
    if (scrollEl._autoScrollPause) {
      scrollEl._autoScrollPause();
      scrollEl._autoScrollResume();
    }
    scrollEl.scrollBy({ left: dir * stepFor(), behavior: 'smooth' });
  };
  leftBtn.addEventListener('click',  () => arrowStep(-1));
  rightBtn.addEventListener('click', () => arrowStep(1));

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
    document.getElementById('project-grid-1'),
    document.getElementById('grid1-arrow-left'),
    document.getElementById('grid1-arrow-right')
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
  const grid4 = document.getElementById('project-grid-4');
  if (grid4) {
    setupScrollArrows(
      grid4,
      document.getElementById('grid4-arrow-left'),
      document.getElementById('grid4-arrow-right')
    );
  }
}

function setupAutoScroll(grid, { speed = 0.35, resumeDelay = 500 } = {}) {
  if (!grid) return;
  if (grid._autoScrollStop) grid._autoScrollStop();

  grid.style.scrollBehavior = 'auto';

  // Remove stale clones, keep just the originals.
  grid.querySelectorAll('[data-clone]').forEach(n => n.remove());

  const originals = Array.from(grid.children);
  if (!originals.length) return;

  // Append one full copy of the originals (a "set").
  const appendSet = () => {
    originals.forEach(node => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.dataset.clone = '1';
      grid.appendChild(clone);
    });
  };

  // `unit` = width of one set = the seamless repeat period. We wrap by this,
  // NOT scrollWidth/2: if a single set is narrower than the viewport, the wrap
  // point would sit past the clamped max scrollLeft and the strip would freeze
  // at the end before snapping back. Measuring the real unit + cloning enough
  // sets so (scrollWidth - clientWidth) >= unit keeps the wrap reachable.
  let unit = 0;
  const measure = () => {
    const firstClone = grid.querySelector('[data-clone]');
    if (!firstClone) return;
    unit = firstClone.offsetLeft - originals[0].offsetLeft;
    // Add sets until there's at least a full viewport of content beyond one unit.
    let guard = 0;
    while (unit > 0 && grid.scrollWidth - grid.clientWidth < unit && guard < 16) {
      appendSet();
      guard++;
    }
    grid.querySelectorAll('.project-card').forEach(applyLogoColorFromThumb);
  };

  appendSet();
  measure();
  // Clones are fresh nodes; the observer only knows the originals so far.
  if (typeof observeLazyVideos === 'function') observeLazyVideos(grid);
  // Lazy thumbnails/posters report ~0 width until they load; re-measure then,
  // and on resize, so `unit` reflects real layout. Debounced through rAF so a
  // burst of image loads triggers one forced reflow, not one per image.
  let _measureRAF;
  const scheduleMeasure = () => {
    cancelAnimationFrame(_measureRAF);
    _measureRAF = requestAnimationFrame(measure);
  };
  grid.querySelectorAll('img').forEach(img => {
    if (!img.complete) img.addEventListener('load', scheduleMeasure, { once: true });
  });
  window.addEventListener('resize', scheduleMeasure);

  // `content-visibility: auto` on .scroll-wrapper skips layout while a row is
  // off-screen, so offsetLeft (and therefore `unit`) reads 0 there. Re-measure
  // once the row is actually rendered.
  let visObserver = null;
  if ('IntersectionObserver' in window) {
    visObserver = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) scheduleMeasure();
    }, { rootMargin: '200px' });
    visObserver.observe(grid);
  }

  let paused = false;
  let resumeTimer = null;
  let raf;
  // Track the scroll position as a float ourselves. Reading back
  // grid.scrollLeft rounds to an integer in many browsers, so a 0.35/frame
  // increment would round away to 0 and never advance. Accumulate here instead.
  let pos = grid.scrollLeft;

  const tick = () => {
    if (paused || grid.classList.contains('dragging')) {
      // User is in control — keep our accumulator in sync with reality.
      pos = grid.scrollLeft;
    } else if (unit > 0) {
      pos += speed;
      if (pos >= unit) pos -= unit;
      if (pos < 0)     pos += unit;
      grid.scrollLeft = pos;
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

  // Let other controls (e.g. the scroll arrows) hand off cleanly: pause the
  // loop, let their smooth scroll run, then resume from wherever it lands.
  // While paused, tick() keeps `pos` synced to the real scrollLeft, so there's
  // no fight over scrollLeft and no snap-back.
  grid._autoScrollPause  = pause;
  grid._autoScrollResume = resume;

  grid._autoScrollStop = () => {
    cancelAnimationFrame(raf);
    cancelAnimationFrame(_measureRAF);
    clearTimeout(resumeTimer);
    grid.removeEventListener('pointerenter', pause);
    grid.removeEventListener('pointerleave', resume);
    window.removeEventListener('resize', scheduleMeasure);
    if (visObserver) visObserver.disconnect();
    grid.querySelectorAll('[data-clone]').forEach(n => n.remove());
    delete grid._autoScrollStop;
    delete grid._autoScrollPause;
    delete grid._autoScrollResume;
  };
}