/* ================================================
   ROUTING (hash-based, supports reload/share)
   ================================================ */
function handleRoute() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'about') {
    goAbout();
  } else if (hash === 'contact') {
    goContact();
  } else if (hash && ALL_PROJECTS.find(p => p.id === hash)) {
    openProject(hash);
  } else {
    goHome();
  }
}
