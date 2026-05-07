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
    return `
      <button class="project-card" onclick="openProject('${p.id}')" aria-label="Open ${name}">
        <div class="project-thumb">${media}</div>
        <div class="project-meta">
          <div class="project-name">${name}</div>
          <div class="project-tag ${p.wip ? 'wip' : ''}">${tag}</div>
        </div>
      </button>`;
  }).join('');
}

function renderHome() {
  const variant = VARIANTS[detectVariant()];
  const row1 = variant.row1.map(id => ALL_PROJECTS.find(p => p.id === id)).filter(Boolean);
  const row2 = variant.row2.map(id => ALL_PROJECTS.find(p => p.id === id)).filter(Boolean);
  renderProjectsInto(document.getElementById('project-grid'),   row1);
  renderProjectsInto(document.getElementById('project-grid-2'), row2);
  // Update section labels to match this variant + current language
  const l1 = document.querySelector('[data-i18n="selectedWork"]');
  const l2 = document.querySelector('[data-i18n="selectedProjects"]');
  if (l1) l1.textContent = variant.label1[currentLang] || variant.label1.en;
  if (l2) l2.textContent = variant.label2[currentLang] || variant.label2.en;
}

/* ================================================
   OPEN / CLOSE PROJECT
   ================================================ */
function openProject(id) {
  const p = ALL_PROJECTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('detail-title').textContent = t(p.name);
  document.getElementById('detail-description').textContent = t(p.description);
  // Resolve tags through the i18n helper. Empty arrays / missing field skip the row.
  const resolvedTags = t(p.tags);
  const tagsString = Array.isArray(resolvedTags) ? resolvedTags.join(' · ') : (resolvedTags || '');
  const tagsRow = tagsString
    ? `<div>${ui('specTags')} / <span>${tagsString}</span></div>`
    : '';
  document.getElementById('detail-specs').innerHTML = `
    <div>${ui('specYear')} / <span>${t(p.year)}</span></div>
    <div>${ui('specSoftware')} / <span>${t(p.software)}</span></div>
    <div>${ui('specRole')} / <span>${t(p.role)}</span></div>
    ${tagsRow}
  `;

  const gallery = document.getElementById('gallery');
  gallery.innerHTML = p.images.map(item => {
    if (item.text) {
      const resolved = t(item.text);
      const paras = Array.isArray(resolved) ? resolved : [resolved];
      const cls = item.summary ? 'gallery-text summary' : 'gallery-text';
      return `<div class="${cls}">${paras.map(para => `<p>${para}</p>`).join('')}</div>`;
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
    // Side-by-side pair — two media items rendered with zero gap
    if (item.pair) {
      return `<div class="gallery-pair">${item.pair.map(renderMediaItem).join('')}</div>`;
    }
    // Single image or video
    return renderMediaItem(item);
  }).join('');

  // Switch views
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });

  // URL hash for shareable links & back-button support
  history.pushState({ view: 'project', id }, '', `#${id}`);
}
