/* ================================================
   MAIN — initialization and routing hook
   ================================================ */
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
  const files = {
    environment: 'PDF/김도연 - 이력서 3D 배경 디자이너.pdf',
    modeler3D: 'PDF/김도연 - 이력서 게임 모델러.pdf',  // ← add this line
  };
  const file = files[variant];
  if (!file) return;
  document.querySelectorAll('a.resume-btn, a.resume-cta').forEach(a => {
    a.href     = file;
    a.download = file;
  });
}

window.addEventListener('popstate', handleRoute);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}