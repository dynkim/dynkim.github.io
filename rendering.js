/* ================================================
   RENDER HOME GRID
   ================================================ */
function renderProjectsInto(grid, list) {
  if (!grid) return;
  grid.innerHTML = list.map(p => {
    const name = t(p.name);
    const tag = t(p.tag);
    // A thumb with a slash carries its own path (e.g. posters/foo.jpg);
    // otherwise it defaults to the images/ folder.
    const thumbSrc = p.thumb && p.thumb.includes('/') ? p.thumb : `images/${p.thumb}`;
    const media = p.thumbVideo
      ? `<video src="videos/${p.thumbVideo}" poster="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img src="${thumbSrc}" alt="${name}" loading="lazy" />`;

    // Display-only cards (e.g. exhibition posters): no detail view, so render a
    // plain div with just the image — no onclick, no meta overlay, no logo.
    if (p.displayOnly) {
      return `
      <div class="project-card poster-card">
        <div class="project-thumb">${media}</div>
      </div>`;
    }

    const logoFilter = p.logoWhite ? 'filter: brightness(0) invert(1);' : '';
    const logoRightFilter = p.logoRightWhite ? 'filter: brightness(0) invert(1);' : '';
    const logo = p.logo
      ? `<img class="project-logo" src="images/${p.logo}" alt="" aria-hidden="true" style="${p.logoScale ? `--logo-scale: ${p.logoScale};` : ''}${logoFilter}" ${p.logoWhite ? 'data-force-white="1"' : ''}/>`
      : '';    
    const logoRight = p.logoRight
      ? `<img class="project-logo project-logo-right" src="images/${p.logoRight}" alt="" aria-hidden="true" style="${p.logoRightScale ? `--logo-scale: ${p.logoRightScale};` : ''}${logoRightFilter}" />`
      : '';      
      return `
      <button class="project-card" onclick="openProject('${p.id}')" aria-label="Open ${name}">
        <div class="project-thumb">${media}</div>
        ${logo}
        ${logoRight}
        <div class="project-meta">
          <div class="project-name">${name}</div>
          <div class="project-tag ${p.wip ? 'wip' : ''}">${tag}</div>
        </div>
      </button>`;
  }).join('');
  grid.querySelectorAll('.project-card').forEach(applyLogoColorFromThumb);
}

function sortVariantProjects(projects) {
  return typeof variantSort === 'function' ? variantSort(projects) : projects;
}

function renderHome() {
  const variant = VARIANTS[detectVariant()];
  const row1 = variant.row1.map(id => ALL_PROJECTS.find(p => p.id === id)).filter(Boolean);
  const row2 = variant.row2.map(id => ALL_PROJECTS.find(p => p.id === id)).filter(Boolean);
  const row3 = (variant.row3 || []).map(id => ALL_PROJECTS.find(p => p.id === id)).filter(Boolean);
  const row4 = (variant.row4 || []).map(id => ALL_PROJECTS.find(p => p.id === id)).filter(Boolean);
  // Grid id number == row number == DOM position. Any row may hold display-only
  // posters; that's per-project (displayOnly flag), not per-row.
  renderProjectsInto(document.getElementById('project-grid-1'), sortVariantProjects(row1));
  renderProjectsInto(document.getElementById('project-grid-2'), sortVariantProjects(row2));
  renderProjectsInto(document.getElementById('project-grid-3'), sortVariantProjects(row3));
  renderProjectsInto(document.getElementById('project-grid-4'), sortVariantProjects(row4));

  // Per-row card height: set --card-h on each grid (cards inherit it). Unset
  // rows clear the override and fall back to the CSS default.
  const heights = variant.heights || {};
  const setCardHeight = (id, val) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (val) el.style.setProperty('--card-h', val);
    else     el.style.removeProperty('--card-h');
  };
  setCardHeight('project-grid-1', heights.grid1);
  setCardHeight('project-grid-2', heights.grid2);
  setCardHeight('project-grid-3', heights.grid3);
  setCardHeight('project-grid-4', heights.grid4);
  // Section labels by DOM position: the Nth .section-label in the home view
  // shows variant.label{N}. Keeps label N aligned with #project-grid-N / rowN
  // regardless of each page's data-i18n keys.
  const variantLabels = [variant.label1, variant.label2, variant.label3, variant.label4];
  document.querySelectorAll('#view-home .section-label').forEach((el, i) => {
    const lab = variantLabels[i];
    if (lab) el.textContent = lab[currentLang] || lab.en;
  });
// Kick off after the browser has had one frame to measure the grid.
// speed = px per frame (~60fps). Higher = faster. Negative = right-to-left.
// Per-variant overrides live in VARIANTS[...].speeds; anything unset falls
// back to these defaults.
const DEFAULT_SCROLL_SPEEDS = { grid1: 0.35, grid2: 0.35, grid3: 0.25, grid4: 0.45 };
const speeds = { ...DEFAULT_SCROLL_SPEEDS, ...(variant.speeds || {}) };
setTimeout(() => {
  setupAutoScroll(document.getElementById('project-grid-1'), { speed: speeds.grid1 });
  setupAutoScroll(document.getElementById('project-grid-2'), { speed: speeds.grid2 });
  setupAutoScroll(document.getElementById('project-grid-3'), { speed: speeds.grid3 });
  setupAutoScroll(document.getElementById('project-grid-4'), { speed: speeds.grid4 });
    },
  100);
}

/* ================================================
   OPEN / CLOSE PROJECT
   ================================================ */
function openProject(id, push = true) {
  const p = ALL_PROJECTS.find(x => x.id === id);
  if (!p) return;

  const isSecondaryRow = typeof PROJECTS_SECONDARY !== 'undefined'
    && PROJECTS_SECONDARY.some(x => x.id === id);

  document.getElementById('detail-title').textContent = t(p.name);
  document.getElementById('detail-description').textContent = t(p.description);
  const resolvedTags = t(p.tags);
  const tagsString = Array.isArray(resolvedTags) ? resolvedTags.join(' · ') : (resolvedTags || '');
  const tagsRow = tagsString
    ? `<div>${ui('specTags')} / <span>${tagsString}</span></div>`
    : '';
  const clientRows = isSecondaryRow
    ? `
    <div>${ui('specClient')} / <span>${t(p.client)}</span></div>
    <div>${ui('specExternalPartner')} / <span>${t(p.externalPartner)}</span></div>
    <div>${ui('specStatus')} / <span>${t(p.status)}</span></div>`
    : '';
  document.getElementById('detail-specs').innerHTML = `
    <div>${ui('specYear')} / <span>${t(p.year)}</span></div>${clientRows}
    <div>${ui('specSoftware')} / <span>${t(p.software)}</span></div>
    <div>${ui('specRole')} / <span>${t(p.role)}</span></div>
    ${tagsRow}
  `;

  const gallery = document.getElementById('gallery');
  gallery.innerHTML = p.images.map(item => {

    // ── TEXT / SUMMARY BLOCK ──────────────────────────────────────────────
    if (item.text != null || item.koBullets) {
  const cls = (item.summary ? 'gallery-text summary' : 'gallery-text')
      // Legacy: koBullets sibling (kept for any data that hasn't been
      // migrated to the new { title, items, bulleted } shape under text.ko).
      if (item.koBullets && currentLang === 'ko') {
        const { title, items } = item.koBullets;
        const bulletItems = items
          .map(i => `<li>${i}</li>`)
          .join('');
        return `<div class="${cls} ko-bullet-list">
          <p class="ko-bullet-title">${title}</p>
          <ul class="ko-bullet-items">${bulletItems}</ul>
        </div>`;
      }

      const resolved = t(item.text);

      // Labeled block: resolved text is an object of shape
      //   { title, items, bulleted }
      // Renders a centred accent title above line-broken items. Used to
      // structure Korean project narratives into 프로젝트 배경 / Task /
      // Action / Result sections.
      if (resolved && typeof resolved === 'object' && !Array.isArray(resolved) && Array.isArray(resolved.items)) {
        const { title, items, bulleted } = resolved;
        const listCls = bulleted ? 'labeled-items bulleted' : 'labeled-items';
        const titleHtml = title ? `<p class="labeled-title">${title}</p>` : '';
        const listHtml = items.map(i => `<li>${i}</li>`).join('');
        return `<div class="${cls} labeled-block"><div class="labeled-block-inner">${titleHtml}<ul class="${listCls}">${listHtml}</ul></div></div>`;
      }
      // Default text rendering path (string or array of strings)
      const paras = Array.isArray(resolved) ? resolved : [resolved];
      const emphasizeHead = para => {
        if (!isSecondaryRow || currentLang !== 'ko') return para;
        return para.replace(
          /^(\s*[가-힣][가-힣\s]{0,24}[:：])/,
          '<strong class="gallery-text-head">$1</strong>'
        );
      };
      return `<div class="${cls}">${paras.map(para => `<p>${emphasizeHead(para)}</p>`).join('')}</div>`;
    }

    if (item.link) {
      const safeUrl = item.link.replace(/"/g, '&quot;');
      const label = t(item.label) || (item.poster ? ui('embedDefault') : ui('ctaDefault'));
      if (item.poster) {
        const aspect = item.aspect || '16/9';
        return `
          <div class="gallery-embed" style="aspect-ratio: ${aspect}">
            <a class="gallery-embed-poster" href="${safeUrl}" target="_blank" rel="noopener noreferrer" aria-label="${label}">
              <img src="images/${item.poster}" alt="" loading="lazy" />
              <span class="gallery-embed-cta">
                <span class="play-icon">▶</span>
                <span>${label}</span>
              </span>
            </a>
          </div>
          <div class="gallery-embed-fallback">
            <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${ui('embedFallback')}</a>
          </div>
        `;
      }
      return `<div class="gallery-cta"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label} <span class="arrow">→</span></a></div>`;
    }

    if (item.vimeo) {
      const aspect = item.aspect || '16/9';
      const src = `https://player.vimeo.com/video/${item.vimeo}?title=0&byline=0&portrait=0&dnt=1`;
      return `
        <div class="gallery-embed" style="aspect-ratio: ${aspect}">
          <iframe src="${src}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        </div>
      `;
    }

    const renderMediaItem = m => {
      const caption = t(m.caption);
      const media = m.video
        ? `<video src="videos/${m.video}" poster="${m.src ? 'images/' + m.src : ''}" autoplay muted loop playsinline preload="metadata"></video>`
        : `<img src="images/${m.src}" alt="${caption || ''}" loading="lazy" />`;
      const cls = m.narrow ? 'gallery-item narrow' : 'gallery-item';
      return `<div class="${cls}">${media}<div class="caption">${caption || ''}</div></div>`;
    };

    if (item.split) {
      const { image, text, imageSide } = item.split;
      const resolvedText = t(text);
      const paras = Array.isArray(resolvedText) ? resolvedText : [resolvedText];
      const textHtml = `<div class="gallery-split-text">${paras.map(p => `<p>${p}</p>`).join('')}</div>`;
      const imageHtml = renderMediaItem(image);
      const order = imageSide === 'right'
        ? `${textHtml}${imageHtml}`
        : `${imageHtml}${textHtml}`;
      return `<div class="gallery-split">${order}</div>`;
    }

    if (item.pair) {
      return `<div class="gallery-pair">${item.pair.map(renderMediaItem).join('')}</div>`;
    }
    return renderMediaItem(item);
  }).join('');

  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (push) history.pushState({ view: 'project', id }, '', `#${id}`);
}

function applyLogoColorFromThumb(card) {
  const thumb = card.querySelector('.project-thumb img');
  const logo  = card.querySelector('.project-logo');
  if (!thumb || !logo) return;
  if (logo.dataset.forceWhite) return;

  const sample = () => {
    const canvas = document.createElement('canvas');
    canvas.width  = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    try {
      ctx.drawImage(thumb, 0, 0, thumb.naturalWidth, thumb.naturalHeight, 0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      // Perceived brightness (ITU-R BT.601)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      if      (brightness > 220) logo.style.filter = 'brightness(0) drop-shadow(0 2px 8px rgba(255,255,255,0.3))';
      else if (brightness > 160) logo.style.filter = 'brightness(0) invert(0.45) drop-shadow(0 2px 8px rgba(0,0,0,0.4))';
      else                       logo.style.filter = 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.5))';  
    } catch (e) {
      // Cross-origin fallback — keep CSS default
    }
  };

  if (thumb.complete && thumb.naturalWidth) {
    sample();
  } else {
    thumb.addEventListener('load', sample, { once: true });
  }
}