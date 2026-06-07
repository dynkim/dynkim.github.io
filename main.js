/* ================================================
   MAIN — initialization and routing hook
   ================================================ */
// FIND:
function init() {
  applyI18n();
  renderHome();
  setupHorizontalScroll();
  setupAllScrollArrows();
  handleRoute();
  applyVariantResume();
}

function applyVariantResume() {
  const variant = detectVariant();
  if (variant !== 'environment') return;
  const file = 'PDF/김도연 - 이력서 3D 배경 디자이너.pdf';
  document.querySelectorAll('a.resume-btn, a.resume-cta').forEach(a => {
    a.href     = file;
    a.download = file;
  });
}