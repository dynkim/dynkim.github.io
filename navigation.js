function goHome() {
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-about').classList.remove('active');
  document.getElementById('view-contact').classList.remove('active');
  document.getElementById('view-home').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ view: 'home' }, '', '#');
}

function goAbout() {
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-contact').classList.remove('active');
  document.getElementById('view-about').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ view: 'about' }, '', '#about');
}

function goContact() {
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-about').classList.remove('active');
  document.getElementById('view-contact').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState({ view: 'contact' }, '', '#contact');
}
