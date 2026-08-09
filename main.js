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
  // Resume file per variant + language. Anything not listed falls back to the
  // Korean 공간디자이너 résumé that ships hardcoded in index.html.
  const DEFAULT_RESUME = 'PDF/김도연-공간디자이너.pdf';
  const files = {
    default: {
      en: 'PDF/DOYEON_KIM_3D_Artist.pdf',
      ko: DEFAULT_RESUME,
    },
    environment: {
      en: 'PDF/김도연 - 이력서 3D 배경 디자이너.pdf',
      ko: 'PDF/김도연 - 이력서 3D 배경 디자이너.pdf',
    },
    modeler3d: {
      en: 'PDF/김도연 - 이력서 3D 모델러.pdf',
      ko: 'PDF/김도연 - 이력서 3D 모델러.pdf',
    },
    digitalart: {
      en: 'PDF/Doyeon_Kim_3D_Artist_Resume.pdf',
      ko: 'PDF/김도연 CV_포트폴리오.pdf',
    },
    '3dart': {
      en: 'PDF/Doyeon_Kim_3D_Artist_Resume.pdf',
      ko: 'PDF/김도연 CV_포트폴리오.pdf',
    },
  };
  const variantFiles = files[variant] || {};
  const file = variantFiles[currentLang] || DEFAULT_RESUME;
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