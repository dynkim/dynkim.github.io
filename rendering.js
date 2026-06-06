/* ================================================
   RENDER HOME GRID
   ================================================ */
function renderProjectsInto(grid, list) {
  grid.innerHTML = list.map(p => {
    const name = t(p.name);
    const tag = t(p.tag);
    const media = p.thumbVideo
      ? `<video src="videos/${p.thumbVideo}" poster="images/${p.thumb}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img src="images/${p.thumb}" alt="${name}" loading="lazy" />`;
    const logo = p.logo
      ? `<img class="project-logo" src="images/${p.logo}" alt="" aria-hidden="true" style="${p.logoScale ? `--logo-scale: ${p.logoScale};` : ''}" />`
      : '';    return `
      <button class="project-card" onclick="openProject('${p.id}')" aria-label="Open ${name}">
        <div class="project-thumb">${media}</div>
        ${logo}
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
  renderProjectsInto(document.getElementById('project-grid'),   sortVariantProjects(row1));
  renderProjectsInto(document.getElementById('project-grid-2'), sortVariantProjects(row2));
  // Update section labels to match this variant + current language
  const l1 = document.querySelector('[data-i18n="selectedWork"]');
  const l2 = document.querySelector('[data-i18n="selectedProjects"]');
  if (l1) l1.textContent = variant.label1[currentLang] || variant.label1.en;
  if (l2) l2.textContent = variant.label2[currentLang] || variant.label2.en;
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
      const cls = item.summary ? 'gallery-text summary' : 'gallery-text';

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
        return `<div class="${cls} labeled-block">${titleHtml}<ul class="${listCls}">${listHtml}</ul></div>`;
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

    const renderMediaItem = m => {
      const caption = t(m.caption);
      const media = m.video
        ? `<video src="videos/${m.video}" poster="${m.src ? 'images/' + m.src : ''}" autoplay muted loop playsinline preload="metadata"></video>`
        : `<img src="images/${m.src}" alt="${caption || ''}" loading="lazy" />`;
      const cls = m.narrow ? 'gallery-item narrow' : 'gallery-item';
      return `<div class="${cls}">${media}<div class="caption">${caption || ''}</div></div>`;
    };

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