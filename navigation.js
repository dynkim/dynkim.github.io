function goHome(push = true) {
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-about').classList.remove('active');
  document.getElementById('view-contact').classList.remove('active');
  document.getElementById('view-home').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (push) {
    history.pushState(
      { view: 'home' },
      '',
      window.location.pathname + window.location.search
    );
  }
}

function goAbout(push = true) {
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-contact').classList.remove('active');
  document.getElementById('view-about').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (push) history.pushState({ view: 'about' }, '', '#about');
}

function goContact(push = true) {
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-about').classList.remove('active');
  document.getElementById('view-contact').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (push) history.pushState({ view: 'contact' }, '', '#contact');
}
