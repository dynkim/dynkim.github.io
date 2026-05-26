/* ================================================
   ROUTING (hash-based, supports reload/share)
   ================================================ */
function handleRoute() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'about') {
    goAbout(false);
  } else if (hash === 'contact') {
    goContact(false);
  } else if (hash && ALL_PROJECTS.find(p => p.id === hash)) {
    openProject(hash, false);
  } else {
    goHome(false);
  }
}
