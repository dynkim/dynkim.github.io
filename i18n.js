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
    siteTitle:        'Doyeon Kim <em>—</em> 3D Designer',
    siteTagline:      '3D Content · 3D Architecture · Immersive Entertainment',
    navAbout:         'About',
    navContact:       'Contact',
    navBackToWork:    'Back to work',
    navAllProjects:   'All projects',
    selectedWork:     'Selected Work · 2026',
    selectedProjects: 'Selected Projects',
    scrollHint:       'Scroll horizontally to see more work',
    aboutHeading:     'Doyeon Kim <em>—</em> 3D Designer',
    aboutIntro:       'Hi, thanks for visiting my website! I&rsquo;m a 3D designer and college lecturer who loves blending technical workflows with a dash of creative storytelling. This is a collection of my past, recent, and ongoing projects, ranging from single assets to full environments. Whether I&rsquo;m sculpting in ZBrush or modeling in Maya, I focus on crafting diverse subjects&mdash;from peaceful gardens to space colonies&mdash;with an eye for realistic and grounded design. I&rsquo;m always looking for ways to make digital worlds feel inviting, so I hope you enjoy seeing how it all comes together!',
    contactHeading:   'Let&rsquo;s <em>talk</em>',
    contactIntro:     'Open to freelance projects, studio roles, and collaborations. Feel free to reach out via email or LinkedIn.',
    contactEmail:     'Email',
    contactLinkedIn:  'LinkedIn',
    specYear:         'Year',
    specClient:       'Client',
    specExternalPartner: 'External Partner',
    specStatus:       'Status',
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
    siteTitle:        '김도연 <em>—</em> 공간 디자이너',
    siteTagline:      '3D 콘텐츠 · 공간 디자인 · 이머시브 엔터테인먼트',
    navAbout:         '소개',
    navContact:       '연락처',
    navBackToWork:    '작업으로 돌아가기',
    navAllProjects:   '전체 작업',
    selectedWork:     '주요 작업 · 2026',
    selectedProjects: '다른 작업',
    scrollHint:       '좌우로 스크롤하여 더 보기',
    aboutHeading:     '김도연 <em>—</em> 공간 디자이너',
    aboutIntro:       '5년 차 디자이너로서, 오스카 시각효과상 수상자 Ben Grossmann이 설립한 Magnopus에서 게임, 버추얼 프로덕션, 이커머스 등 다양한 분야의 3D 콘텐츠 제작에 참여했습니다. 또한 라스베이거스 스피어, Fortnite 콘서트, 2028 LA 올림픽 체험 센터 등 다양한 프로젝트에서 3D 모델링부터 대규모 공간 제작까지 수행하며, 이머시브 엔터테인먼트의 경계를 확장하는 작업에 기여했습니다. 저는 차세대 엔터테인먼트 기술을 기반으로 새로운 방식의 스토리텔링을 구현하는 데 깊은 관심을 가지고 있습니다.',
    contactHeading:   '<em>함께</em> 이야기해요',
    contactIntro:     '프리랜스 프로젝트부터 스튜디오 합류, 다양한 형태의 협업까지 폭넓게 열려 있습니다. 이메일이나 링크드인으로 편하게 연락 주세요.',
    contactEmail:     '이메일',
    contactLinkedIn:  '링크드인',
    specYear:         '연도',
    specClient:       '클라이언트',
    specExternalPartner: '협력',
    specStatus:       '상태',
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
