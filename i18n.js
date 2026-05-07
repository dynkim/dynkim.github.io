/* ================================================
   I18N — bilingual UI strings + helper
   ================================================
   Content fields can be either:
     - plain strings              (same in every language)
     - { en: "...", ko: "..." }   (resolved via t() at render time)
   Empty Korean strings fall back to English.
*/
const UI_STRINGS = {
  en: {
    siteTitle:        'Doyeon Kim <em>—</em> 3D Artist',
    siteTagline:      '3D Worlds · Props · Work in Progress',
    navAbout:         'About',
    navContact:       'Contact',
    navBackToWork:    'Back to work',
    navAllProjects:   'All projects',
    selectedWork:     'Selected Work · 2026',
    selectedProjects: 'Selected Projects',
    scrollHint:       'Scroll horizontally to see more work',
    aboutHeading:     'Doyeon Kim <em>—</em> 3D Artist',
    aboutIntro:       'Hi, thanks for visiting my website! I&rsquo;m a 3D artist and college lecturer who loves blending technical workflows with a dash of creative storytelling. This is a collection of my past, recent, and ongoing projects, ranging from single assets to full environments. Whether I&rsquo;m sculpting in ZBrush or modeling in Maya, I focus on crafting diverse subjects&mdash;from peaceful gardens to space colonies&mdash;with an eye for realistic and grounded design. I&rsquo;m always looking for ways to make digital worlds feel inviting, so I hope you enjoy seeing how it all comes together!',
    contactHeading:   'Let&rsquo;s <em>talk</em>',
    contactIntro:     'Open to freelance projects, studio roles, and collaborations. Feel free to reach out via email or LinkedIn.',
    contactEmail:     'Email',
    contactLinkedIn:  'LinkedIn',
    specYear:         'Year',
    specSoftware:     'Software',
    specRole:         'Role',
    specTags:         'Tags',
    embedFallback:    'Open in a new tab ↗',
    ctaDefault:       'Visit →',
    embedDefault:     'Launch experience',
    resumeBtn:        'Resume',
    resumeDownload:   'Download Resume',
  },
  ko: {
    siteTitle:        '김도연 <em>—</em> 3D 아티스트',
    siteTagline:      '3D 월드 · 프롭 · 작업 중',
    navAbout:         '소개',
    navContact:       '연락처',
    navBackToWork:    '작업으로 돌아가기',
    navAllProjects:   '전체 작업',
    selectedWork:     '주요 작업 · 2026',
    selectedProjects: '다른 작업',
    scrollHint:       '좌우로 스크롤하여 더 보기',
    aboutHeading:     '김도연 <em>—</em> 3D 아티스트',
    aboutIntro:       '반갑다. 제 웹사이트에 찾아준 모든 분께 고맙다. 저는 기술적인 워크플로우에 약간의 창의적인 스토리텔링을 곁들이는 일을 좋아하는 3D 아티스트이자 대학 강사다. 이 웹사이트는 단일 에셋부터 전체 환경에 이르기까지, 지난 작업과 최근 작업, 진행 중인 프로젝트들을 모아둔 공간이다. ZBrush로 조각하든 Maya로 모델링하든, 평화로운 정원에서 우주 식민지까지 다양한 주제를 사실적이고 안정감 있는 디자인으로 풀어내는 데 집중한다. 디지털 세계가 더 친근하게 느껴지도록 만들 방법을 늘 고민하고 있으니, 이 작업들이 어떻게 어우러지는지 즐겁게 둘러봐 주길 바란다.',
    contactHeading:   '<em>이야기</em> 나누자',
    contactIntro:     '프리랜스 프로젝트, 스튜디오 합류, 다양한 형태의 협업에 열려 있다. 이메일이나 링크드인으로 편하게 연락 바람.',
    contactEmail:     '이메일',
    contactLinkedIn:  '링크드인',
    specYear:         '연도',
    specSoftware:     '소프트웨어',
    specRole:         '역할',
    specTags:         '태그',
    embedFallback:    '새 탭에서 열기 ↗',
    ctaDefault:       '바로가기 →',
    embedDefault:     '체험 시작하기',
    resumeBtn:        '이력서',
    resumeDownload:   '이력서 다운로드',
  }
};

let currentLang = 'en';
try {
  const saved = localStorage.getItem('lang');
  if (saved === 'en' || saved === 'ko') currentLang = saved;
} catch (e) {}

/* Resolve a value in the current language. Plain strings pass through;
   { en, ko } objects pick the current language with English fallback;
   arrays recurse. */
function t(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(t);
  const v = value[currentLang];
  if (v != null && v !== '') return Array.isArray(v) ? v.map(t) : v;
  if (value.en != null) return Array.isArray(value.en) ? value.en.map(t) : value.en;
  return '';
}

function ui(key) {
  return (UI_STRINGS[currentLang] && UI_STRINGS[currentLang][key]) ||
         UI_STRINGS.en[key] || '';
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-toggle [data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === currentLang);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = ui(el.dataset.i18n);
    if (val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = ui(el.dataset.i18nHtml);
    if (val) el.innerHTML = val;
  });
}

function setLang(lang) {
  if (lang !== 'en' && lang !== 'ko') return;
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyI18n();
  if (typeof renderHome === 'function') renderHome();
  const projectView = document.getElementById('view-project');
  if (projectView && projectView.classList.contains('active')) {
    const id = (location.hash || '').replace(/^#/, '');
    if (id && typeof openProject === 'function') openProject(id);
  }
}

function toggleLang() { setLang(currentLang === 'en' ? 'ko' : 'en'); }
