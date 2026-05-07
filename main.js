/* ================================================
   MAIN — initialization and routing hook
   ================================================ */
function init() {
  applyI18n();
  renderHome();
  setupHorizontalScroll();
  setupAllScrollArrows();
  handleRoute();
}

window.addEventListener('popstate', handleRoute);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
