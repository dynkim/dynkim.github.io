/* ================================================
   PROJECT DATA — edit this array to add/remove work
   Each project needs:
     - id: unique slug
     - name, tag, wip (boolean)
     - description, year, software, role
     - thumb: main image shown on home
     - images: array of { src, caption } for the detail gallery
   ================================================ */
const PROJECTS = [
  {
    id: "secret-garden",
    name: { en: "Secret Garden", ko: "비밀의 정원" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "A project reconstructing the setting of Netflix's The Last Kingdom through a combination of photogrammetry and traditional 3D modeling.",
      ko: "포토그래메트리와 기존 방식의 3D 모델링으로 넷플릭스 더 라스트 킹덤의 배경을 재구성한 프로젝트." },
    year: "2025",
    software: "Unreal 5 · Maya · Blender · ZBrush · Substance · Reality Scan",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "organic modeling", "game ready", "photogrammetry"], ko: ["하드서페이스 모델링", "오가닉 모델링", "game ready", "포토그래메트리"] },
    thumb: "sg-03.jpg",
    logo: "unreal_logo.png",
    images: [
      { src: "sg-01.jpg", caption: { en: "Establishing shot — fountain and cloister", ko: "전경 — 분수와 회랑" } },
      { src: "sg-02.jpg", caption: { en: "Cupid statue — hero closeup", ko: "큐피드 조각상 — 히어로 클로즈업" } },
      { src: "sg-03.jpg", caption: { en: "Cloister interior — overgrown arches", ko: "회랑 내부 — 식물로 뒤덮인 아치" } },
      { src: "sg-04.jpg", caption: { en: "Vaulted ceiling and wrought-iron chandelier", ko: "볼트 천장과 단조 철 샹들리에" } },
      { src: "sg-05.jpg", caption: { en: "Chandelier detail", ko: "샹들리에 디테일" } },
      { src: "sg-06.jpg", caption: { en: "Light rays through gothic tracery", ko: "고딕 트레이서리를 통과하는 빛줄기" } },
      { src: "sg-07.jpg", caption: { en: "Stone planter and fallen leaves", ko: "석재 화분과 낙엽" } },
      { src: "sg-08.jpg", caption: { en: "Cloister hallway", ko: "회랑 통로" } },
      { src: "sg-09.jpg", caption: { en: "Modular asset kit", ko: "모듈러 에셋 키트" } },
      { src: "sg-10.jpg", caption: { en: "Fountain — isolated render", ko: "분수 — 단일 렌더" } },
      { src: "sg-11.jpg", caption: { en: "Photogrammetry workflow — capture to sculpt", ko: "포토그래메트리 워크플로우 — 캡처에서 스컬프트까지" } },
      { src: "sg-12.jpg", caption: { en: "Cupid statue — textured and wireframe", ko: "큐피드 조각상 — 텍스처드/와이어프레임" } },
      { src: "sg-13.jpg", caption: { en: "Cupid statue — rear view and topology", ko: "큐피드 조각상 — 후면도와 토폴로지" } },
      { src: "sg-14.jpg", caption: { en: "Iron wall torches — variants and wireframe", ko: "벽걸이 철 토치 — 베리에이션과 와이어프레임" } },
      { src: "sg-15.jpg", caption: { en: "Chandelier closeup", ko: "샹들리에 클로즈업" } },
      { src: "sg-16.jpg", caption: { en: "Chandelier — wireframe breakdown", ko: "샹들리에 — 와이어프레임 브레이크다운" } },
      { src: "sg-17.jpg", caption: { en: "Floor material — graph, vertex paint, lighting", ko: "바닥 머티리얼 — 그래프, 버텍스 페인트, 라이팅" } },
      { video: "sg-18.mp4", src: "sg-18-poster.jpg", caption: { en: "Camera flythrough", ko: "카메라 플라이스루" } },
      { video: "sg-19.mp4", src: "sg-19-poster.jpg", caption: { en: "Scene reveal sequence", ko: "씬 리빌 시퀀스" } },
    ]
  },
  {
    id: "sienar-chall-utilipede",
    name: { en: "Star Wars: Sienar-Chall Utilipede Transport", ko: "스타워즈: 시나르-챌 유틸리피드 트랜스포트" },
    tag: { en: "Star Wars, Vehicle", ko: "스타워즈, 비히클" },
    wip: false,
    description: { en: "A game-ready asset of the Star Wars starship Sienar-Chall, installed at Disney World Orlando. Sci-fi-style paneling was recreated using Substance 3D Designer and Painter.",
    ko: "올란도 디즈니 월드에 설치된 스타워즈 우주선 시나르-챌을 게임용 에셋으로 제작. 서브스턴스 3D 디자이너와 페인터를 사용해 SciFi 풍의 패널링을 재현한 프로젝트." },
    year: "2026",
    software: "Maya · Substance 3D Painter · Substance game ready · Photoshop · Marmoset",
    role: { en: "Modelling, Texturing", ko: "모델링, 텍스처링" },
    tags: { en: ["Star Wars", "hard-surface modeling", "mechanics", "sci-fi vehicle", "game ready"], ko: ["스타워즈", "하드서페이스 모델링", "메커닉", "SF", "game ready"] },
    thumb: "sn-01.jpg",
    logo: "star_wars_fanart_logo.png",
    images: [
      { src: "sn-01.jpg", caption: { en: "Hero render — Sienar-Chall Utilipede Transport", ko: "히어로 렌더 — 시나르-챌 유틸리피드 트랜스포트" } },
    ]
  },
  {
    id: "vintage-telephone",
    name: { en: "Vintage Telephone", ko: "빈티지 전화기" },
    tag: { en: "Prop", ko: "프롭" },
    wip: false,
    description: { en: "A mid-20th-century German mining telephone with a Fernsig cast housing and bakelite handset. The project focuses on worn paint, tarnished metal, and the brass nameplate.",
    ko: "Fernsig의 캐스트 하우징과 베이클라이트 핸드셋을 갖춘, 20세기 중반 독일 광업용 전화기. 닳은 페인트, 변색된 메탈, 황동 명판에 초점을 맞춘 프로젝트" },
    year: "2025",
    software: "Blender · ZBrush · Substance · Marmoset",
    role: { en: "Modelling + Texturing", ko: "모델링 + 텍스처링" },
    tags: { en: ["hard-surface modeling", "mechanics", "game ready"], ko: ["하드서페이스 모델링", "메커닉", "game ready"] },
    thumb: "vt-04.jpg",
    images: [
      { src: "vt-01.jpg", caption: { en: "Front hero shot", ko: "정면 히어로 샷" } },
      { src: "vt-02.jpg", caption: { en: "Three-quarter view", ko: "3/4 뷰" } },
      { src: "vt-03.jpg", caption: { en: "Side profile", ko: "측면 프로파일" } },
      { src: "vt-04.jpg", caption: { en: "Dial and nameplate — hero closeup", ko: "다이얼과 명판 — 히어로 클로즈업" } },
      { src: "vt-05.jpg", caption: { en: "Dial detail — light backdrop", ko: "다이얼 디테일 — 밝은 배경" } },
      { src: "vt-06.jpg", caption: { en: "Environment context — factory window", ko: "환경 맥락 — 공장 창문" } },
      { src: "vt-07.jpg", caption: { en: "Earpiece detail", ko: "이어피스 디테일" } },
      { src: "vt-08.jpg", caption: { en: "Mouthpiece detail", ko: "마우스피스 디테일" } },
      { src: "vt-09.jpg", caption: { en: "Handset — front, side, back", ko: "핸드셋 — 정면/측면/후면" } },
      { src: "vt-10.jpg", caption: { en: "Handset — three-quarter views", ko: "핸드셋 — 3/4 뷰" } },
      { src: "vt-11.jpg", caption: { en: "Wireframe — three-quarter", ko: "와이어프레임 — 3/4" } },
      { src: "vt-12.jpg", caption: { en: "Wireframe — angled", ko: "와이어프레임 — 앵글드" } },
      { src: "vt-13.jpg", caption: { en: "Handset — wireframe breakdown", ko: "핸드셋 — 와이어프레임 브레이크다운" } },
      { src: "vt-14.jpg", caption: { en: "Texture map — Base Color", ko: "텍스처 맵 — Base Color" } },
      { src: "vt-15.jpg", caption: { en: "Texture map — Roughness", ko: "텍스처 맵 — Roughness" } },
      { src: "vt-16.jpg", caption: { en: "Texture map — Normal", ko: "텍스처 맵 — Normal" } },
      { src: "vt-17.jpg", caption: { en: "Texture map — Metallic", ko: "텍스처 맵 — Metallic" } },
      { src: "vt-18.jpg", caption: { en: "Texture map — Ambient Occlusion", ko: "텍스처 맵 — Ambient Occlusion" } },
    ]
  },
  {
    id: "japanese-izakaya",
    name: { en: "Japanese Izakaya", ko: "이자카야" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "A virtual space project for VR experiences. A late-night izakaya — an environment built from red leather stools, brass trim, paper lanterns, and exposed ductwork. Focused on warm practical lighting, shelves packed with sake and whisky, and the contrast between an industrial ceiling and traditional decor.",
    ko: "VR 체험용 가상 공간 프로젝트. 한밤의 이자카야 — 빨간 가죽 스툴, 황동 트림, 종이 등롱, 노출 덕트로 구성한 환경. 따뜻한 실용 조명, 사케와 위스키로 빼곡한 선반, 산업적 천장과 전통적 장식의 대비에 집중." },
    year: "2024",
    software: "Unreal 5 · Blender · Substance",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "game ready", "VR"], ko: ["하드서페이스 모델링", "game ready", "VR"] },
    thumb: "jb-01.jpg",
    logo: "unreal_logo.png",
    images: [
      { src: "jb-01.jpg", caption: { en: "Establishing shot — bar interior", ko: "전경 — 바 내부" } },
      { src: "jb-02.jpg", caption: { en: "Espresso machine and tap handles", ko: "에스프레소 머신과 탭 핸들" } },
      { src: "jb-03.jpg", caption: { en: "Shelf dressing — top-down detail", ko: "선반 드레싱 — 탑다운 디테일" } },
      { src: "jb-04.jpg", caption: { en: "Paper lanterns and ductwork", ko: "종이 등롱과 덕트" } },
      { src: "jb-05.jpg", caption: { en: "Bar counter — wide angle", ko: "바 카운터 — 와이드 앵글" } },
      { src: "jb-06.jpg", caption: { en: "Stools and back bar — atmospheric shot", ko: "스툴과 백바 — 분위기 컷" } },
      { src: "jb-07.jpg", caption: { en: "Beer tap + CRT monitor — wireframe breakdown", ko: "맥주 탭 + CRT 모니터 — 와이어프레임 브레이크다운" } },
      { src: "jb-08.jpg", caption: { en: "Wall fan + bar stool — wireframe breakdown", ko: "벽걸이 선풍기 + 바 스툴 — 와이어프레임 브레이크다운" } },
      { video: "jb-09.mp4", src: "jb-09-poster.jpg", caption: { en: "Camera flythrough", ko: "카메라 플라이스루" } },
    ]
  },
  {
    id: "espresso-machine",
    name: { en: "Espresso Machine", ko: "에스프레소 머신" },
    tag: { en: "Prop", ko: "프롭" },
    wip: false,
    description: { en: "A Dalla Corte EVO2 commercial espresso machine, dressed with travel stickers, a sticky note, and years of cafe wear.",
    ko: "Dalla Corte EVO2 상업용 에스프레소 머신을 여행 스티커, 포스트잇, 수년간의 카페 사용감으로 드레싱." },
    year: "2024",
    software: "Blender · Substance · Marmoset",
    role: { en: "Modelling, Materials, Lighting", ko: "모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "mechanics", "game ready"], ko: ["하드서페이스 모델링", "메커닉", "game ready"] },
    thumb: "em-02.jpg",
    images: [
      { src: "em-01.jpg", caption: { en: "Three-quarter hero render", ko: "3/4 히어로 렌더" } },
      { src: "em-02.jpg", caption: { en: "Opposite side — California stickers", ko: "반대편 — California 스티커" } },
      { src: "em-03.jpg", caption: { en: "Wireframe overlay on grid", ko: "그리드 위 와이어프레임 오버레이" } },
      { video: "em-04.mp4", src: "em-04-poster.jpg", caption: { en: "Turntable", ko: "턴테이블" } },
      { src: "em-05.jpg", caption: { en: "Texture map — Base Color", ko: "텍스처 맵 — Base Color" } },
      { src: "em-06.jpg", caption: { en: "Texture map — Roughness", ko: "텍스처 맵 — Roughness" } },
      { src: "em-07.jpg", caption: { en: "Texture map — Normal", ko: "텍스처 맵 — Normal" } },
      { src: "em-08.jpg", caption: { en: "Texture map — Metallic", ko: "텍스처 맵 — Metallic" } },
      { src: "em-09.jpg", caption: { en: "Texture map — Ambient Occlusion", ko: "텍스처 맵 — Ambient Occlusion" } },
    ]
  },
  {
    id: "cyberpunk-seoul",
    name: { en: "A.D. 2077 Seoul — Riders", ko: "A.D. 2077 서울 — 라이더스" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "Cyberpunk Seoul — a full-CG animation imagining a near future overtaken by climate change and the rule of transnational corporations. The project began as an ode to the delivery riders who roamed the city around the clock during the pandemic.",
    ko: "사이버펑크 서울 — 기후 변화와 초국적 기업의 지배가 도래한 근미래를 상상한 풀 CG 애니메이션. 팬데믹 시기 24시간 돌아다니는 배달 라이더에 영감을 얻어 시작된 프로젝트." },
    year: "2025",
    software: "Unreal 5 · Maya · 3Ds Max · Zbrush · Substance · Photoshop · Nuke · After Effects",
    role: { en: "Full Environment — Modelling, Materials, Lighting, Rigging, Animation, Composition", ko: "환경 전반 — 모델링, 머티리얼, 라이팅, 리깅, 애니메이션, 컴포지션" },
    tags: { en: ["hard-surface modeling", "sci-fi", "futuristic", "animation", "environment design", "rigging", "composition"], ko: ["하드서페이스 모델링", "SF", "퓨처리스틱", "game ready", "애니메이션", "환경 디자인", "리깅", "컴포지션"] },
    thumb: "cp-01.jpg",
    images: [
      { src: "cp-01.jpg", caption: { en: "Key art — A.D. 2077 Seoul", ko: "키 아트 — A.D. 2077 서울" } },
      { video: "cp-02.mp4", src: "cp-02-poster.jpg", caption: { en: "Camera flythrough", ko: "카메라 플라이스루" } },
      { video: "cp-03.mp4", src: "cp-03-poster.jpg", caption: { en: "Alternate angle / cut", ko: "다른 앵글 / 컷" } },
    ]
  },
];

/* Secondary section — "Selected Projects" row.
   Uses a separate id namespace so URL hashes can't collide with PROJECTS. */
const PROJECTS_SECONDARY = [
  {
    id: "wizard-of-oz-sphere",
    name: { en: "Wizard of OZ at Sphere Las Vegas, Magnopus", ko: "스피어 라스베이거스의 〈오즈의 마법사〉, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "Contributed to The Wizard of Oz project screened at the Las Vegas Sphere. Reimagined the Sphere as an interactive digital space, drawing on the film's Kansas setting and the Emerald City as motifs.",
      ko: "라스베이거스 스피어에서 상영된 〈The Wizard of Oz〉 프로젝트에 참여. 영화의 캔자스 배경과 에메랄드시티를 모티브로 스피어를 인터랙션 가능한 디지털 공간으로 재탄생시킴." },
    year: "2025",
    client: 'Sphere Entertainment',
    externalPartner: 'Google, Warner Bros.',
    status: { en: 'Released', ko: '출시됨' },
    software: "Unreal 5 · OKO · Maya · Substance game ready, Substance 3D Painter",
    role: { en: "3D Artist — Spatial Design, BIM Optimization, Digital Twin", ko: "3D 아티스트 — 공간 디자인, BIM 데이터 최적화, 디지털 트윈" },
    tags: { en: ["hard-surface modeling", "AR/VR", "game ready"], ko: ["하드서페이스 모델링", "AR/VR", "game ready"] },
    thumb: "spwz-01.jpg",
    logo: "sphere_logo.png",
    logoWhite: "sphere_logo_white.png",
    images: [
      {
        summary: true,
        text: {
          en: {
            title: "Key Contributions",
            bulleted: true,
            items: [
              "Built the Wizard of Oz visuals as spatial design from the Sphere's roughly 6 GB BIM data.",
              "Simulated the performance, visuals, and special effects for the Kansas (sepia-toned) and Emerald City (emerald-toned) themes.",
              "Collaborated with the Sphere Entertainment show team, contributing to on-site physical designs such as the Throne of Oz.",
              "Helped build a real-time remote collaboration workflow across studio, on-site, and client teams, improving communication efficiency and content quality."
            ]
          },
          ko: {
            title: "핵심 성과",
            bulleted: true,
            items: [
              "약 6GB 규모의 Sphere BIM 데이터를 바탕으로 오즈의 마법사 비주얼을 공간 디자인으로 구현.",
              "캔자스(세피아 톤)·에메랄드시티(에메랄드 톤) 테마의 공연 및 비주얼·특수효과 시뮬레이션.",
              "Sphere Entertainment 공연팀과 협업하며 오즈의 왕좌 등 현장 실물 디자인에 기여.",
              "스튜디오·현장·클라이언트 간 실시간 원격 협업 워크플로우 구축으로 소통 효율 및 콘텐츠 품질 향상에 기여."
            ]
          }
        }
      },
      { src: "spwz-04.webp", caption: "" },
      { text: { en: {
          title: "Project Background",
          items: [
            "Sphere Entertainment, Google, Warner Bros., and Magnopus set out to reconstruct The Wizard of Oz as an immersive entertainment experience at the Sphere, building a digital space where the show's simulation, rehearsals, and visual tests could be carried out."
          ]
        },
        ko: {
          title: "프로젝트 배경",
          items: [
            "Sphere Entertainment, Google, Warner Bros., Magnopus는 Sphere에서 〈The Wizard of Oz〉를 immersive entertainment 경험으로 재구성하며, 공연의 시뮬레이션·리허설·비주얼 테스트를 수행할 수 있는 디지털 공간 제작을 추진했다."
          ]
        } } },
      { src: "spwz-06.JPG", caption: "" },
      { src: "spwz-03.jpg", caption: "" },
      { text: { en: {
          title: "",
          bulleted: true,
          items: [
            "Analyzed the Sphere BIM model and built a digital space that enabled real-time collaboration.",
            "Reinterpreted the film's two core visual themes (Kansas and the Emerald City) as spatial design.",
            "Supported show-prop design and on-site physical design in collaboration with the Sphere Entertainment show team."
          ]
        },
        ko: {
          title: "",
          bulleted: true,
          items: [
            "Sphere BIM 모델을 분석하고 실시간 협업이 가능한 디지털 공간 구축.",
            "영화의 두 핵심 비주얼 테마(캔자스·에메랄드 시티)를 공간 디자인으로 재해석.",
            "Sphere Entertainment 공연팀과 협업해 공연 소품 디자인 및 현장 실물 디자인 지원."
          ]
        } } },
      { src: "spwz-05.png", caption: "" },
      { text:
        { en: {
            title: "Action",
            bulleted: true,
            items: [
              "Used Unreal 5, Maya, and Blender to reduce roughly 6 GB of BIM data down to 100 MB, working with the cross-platform development team to optimize it to a level that supported real-time collaboration.",
              "Created digital spaces in the two visual themes\u2014sepia and emerald\u2014using Wizard of Oz\u2013themed, fan-facing content built on LED, signage, and holograms.",
              "Worked continuously with the Sphere Entertainment show team on on-site physical design, such as the Throne of Oz, and simulated the show's visuals."
            ]
          },
          ko: {
            title: "Action",
            bulleted: true,
            items: [
              "Unreal 5·Maya·Blender를 활용해 약 6GB BIM 데이터를 100MB로 경량화하고, cross-platform 개발팀과 협력해 실시간 협업 작업이 가능한 수준으로 최적화.",
              "오즈의 마법사 테마의 LED·사이니지·홀로그램 기반 팬 전용 콘텐츠를 활용해, 세피아와 에메랄드 두 가지 비주얼 테마의 디지털 공간을 구현.",
              "Sphere Entertainment 공연팀과 지속적으로 협업하며 오즈의 왕좌 디자인 등 현장 실물 디자인 작업에 참여 및 공연 비주얼 시뮬레이션."
            ]
          } } ,},
      { video: "spwz-video-01.mp4", src: "sspwz-video-01-poster.jpg", caption: "" },
      { video: "spwz-video-02.mp4", src: "sspwz-video-02-poster.jpg", caption: "" },
      { text:
        { en: {
            title: "Result",
            bulleted: true,
            items: [
              "Studio, on-site, and client teams could share real-time simulation and feedback in the same digital space regardless of physical location, enabling advance quality checks of signage footage and show special effects.",
              "The show opened successfully on August 28, 2025, selling over one million tickets and earning more than $130 million in about two months.",
              "Demonstrated the ability to design spaces that balance art and technology in large-scale, cross-reality immersive entertainment, and to build real-time collaboration workflows."
            ]
          },
          ko: {
            title: "Result",
            bulleted: true,
            items: [
              "스튜디오·현장·클라이언트 팀이 물리적 위치에 관계없이 동일한 디지털 공간에서 실시간 시뮬레이션·피드백 공유가 가능해져, 사이니지 영상 및 공연 특수효과의 품질 사전 검증 가능.",
              "2025년 8월 28일 공연 성공적 개막, 약 두 달 만에 티켓 100만 장 판매·수익 1억 3천만 달러 이상 달성.",
              "cross-reality 기반 대규모 몰입형 엔터테인먼트 제작에서 아트·기술 균형을 고려한 공간 디자인 역량과 실시간 협업 워크플로우 구축 능력 입증."
            ]
          } } ,},
      { video: "spwz_testvid_01.mp4", src: "spwz_testvid_01-poster.jpg", caption: "", narrow: true },
      { text: {
          en: {
            title: "Problem-Solving Through Collaboration",
            items: [
              "The core challenge was to optimize 6 GB of BIM data for a cross-platform, real-time-collaboration environment while reinterpreting the world of The Wizard of Oz as a digital space.",
              "Even after the BIM metadata was cleaned up, an excess of 3D geometry data remained, so we reduced it in stages as a team and ran repeated runtime tests.",
              "This produced a digital-twin environment that ran reliably on every supported device (web, mobile, and VR), allowing studio, on-site, and client teams to collaborate in real time.",
              "In connection with the show's spatial design, we also collaborated with the Sphere Entertainment show team to raise the polish of the Throne of Oz, signage footage, and pyrotechnic staging."
            ]
          },
          ko: {
            title: "협업을 통한 문제 해결 사례",
            items: [
              "6GB 규모의 BIM 데이터를 실시간 협업이 가능한 cross-platform에 최적화하는 동시에, 영화 〈The Wizard of Oz〉의 세계관을 디지털 공간으로 재해석하는 것이 핵심 과제였다.",
              "BIM의 메타데이터 정리 이후에도 과도하게 남은 3D geometry 데이터를 팀과 함께 단계적으로 경량화하고 반복적인 런타임 테스트를 수행했다.",
              "이를 통해 웹·모바일·VR 등 모든 지원 디바이스에서 안정적으로 구동되는 디지털 트윈 환경을 구축했고, 스튜디오·현장·클라이언트 팀 모두가 실시간 협업이 가능했다.",
              "또한, 공연 공간 디자인과 연계해 Sphere Entertainment 공연팀과 협업하며, 오즈의 왕좌, 사이니지 영상, 파이로테크닉 연출의 완성도를 높였다."
            ]
          } }
      },
    ]
  },
  {
    id: "la-2028-olympics",
    name: { en: "LA28 Olympics Experience Center's Cross-reality Space Design, Magnopus", ko: "LA28 올림픽 익스피리언스 센터 몰입형 체험관 디자인, Magnopus" },
    tag: { en: "Cross-Reality, Architecture", ko: "XR 경험, 전시관 디자인" },
    wip: false,
    description: { en: "Won final selection for the roughly 1,300-square-meter 'Olympics Experience Center' near the LA Convention Center. Built the digital space on Magnopus' cross-reality platform 'OKO,' designing a space where visitors can virtually experience LA's SoFi Stadium transformed into an Olympic swimming venue. In collaboration with Gensler, led the proposal to final selection by the LA28 Olympic Games Organizing Committee.",
      ko: "LA 컨벤션 센터 인근 400평 규모의 '올림픽 익스피리언스 센터' 조성 사업 최종 선정. Magnopus의 cross-reality 플랫폼 'OKO'를 활용해 디지털 공간 제작. 올림픽 수영장으로 탈바꿈한 LA SoFi 스타디움을 가상으로 체험할 수 있는 공간을 디자인. Gensler와 협업 통해 LA28 올림픽대회조직위원회로부터 제안안 최종 선정을 이끌어냄." },
    client: 'LA28 Olympic Games Organizing Committee',
    externalPartner: 'Gensler',
    status: { en: 'Awarded Through RFP', ko: '최종 선정' },
    year: "2025",
    software: "Unreal 5 · OKO · Maya · Substance 3D Painter/Designer",
    role: { en: "3D Artist — Stadium Design, 3D UI Design, Performance Test, Team Lead (5 artists and developers)", ko: "3D 아티스트 — 스타디움 디자인, 3D UI 디자인, 성능 테스트, 5인 팀(아티스트 및 개발자) 공동 리드" },
    tags: { en: ["environment design", "cross-reality", "game ready"], ko: ["배경 디자인", "크로스-리얼리티", "게임 준비"] },
    thumb: "laoly-01.jpg",
    images: [
      {
        summary: true,
        text: {
          en: {
            title: "Key Contributions",
            bulleted: true,
            items: [
              "Designed the Olympics Experience Center in collaboration with Gensler, earning final selection by the LA28 Organizing Committee.",
              "Co-led a five-person team of 3D artists and developers and aligned KPIs between art and development to achieve stable real-time rendering of the SoFi Stadium digital twin on both web browsers and the Quest 3.",
              "Documented the Unreal Engine 5–based cross-platform workflow and 3D optimization process, helping cut debugging time and improve collaboration efficiency on later projects."
            ]
          },
          ko: {
            title: "핵심 참여 내용",
            bulleted: true,
            items: [
              "Gensler와 협업해 올림픽 익스피리언스 센터 체험관 디자인해, LA28 Organizing Committee로부터 최종 선정.",
              "3D 아티스트·개발자 5인 팀 공동 리드 및 아트·개발 간 KPI 조율을 통해 SoFi Stadium 디지털 트윈 공간을 웹브라우저 및 퀘스트 3 환경에서도 안정적인 실시간 렌더링 구현.",
              "Unreal Engine 5 기반 cross-platform 워크플로우 및 3D 최적화 프로세스를 문서화해 후속 프로젝트의 디버깅 시간 단축과 협업 효율 향상에 기여.",
            ]
          }
        }
      },
      { video: "LA28_video_FINAL-crop.mp4", src: "LA28_video_FINAL-crop-poster.jpg", caption: "" },
      { src: "LAConventionCenter_Solar.webp", caption: "" },
      { text: { en: {
          title: "Project Background",
          items: [
            "The LA28 Organizing Committee issued an RFP for an XR-based experience-center design to build the roughly 1,300-square-meter 'Olympics Experience Center' near the LA Convention Center.",
            "The project aimed to promote the region's stadiums and landmarks and to build an immersive space that combined Olympic-sponsor content; around ten global studios, including Magnopus, competed for it.",
            "Building on its cross-reality platform 'OKO,' Magnopus partnered with Gensler to produce an immersive digital experience-center proposal."
          ]
        },
                ko: {
          title: "프로젝트 배경",
          items: [
            "LA28 Organizing Committee는 LA 컨벤션 센터 인근에 약 400평 규모의 '올림픽 익스피리언스 센터'를 조성하기 위해 XR 기반 체험관 디자인 RFP를 진행했다.",
            "프로젝트는 LA 지역의 스타디움과 랜드마크를 홍보하고, 올림픽 후원사 콘텐츠를 결합한 몰입형 공간 구축이 목표였으며, Magnopus를 포함한 약 10개 글로벌 스튜디오가 경쟁에 참여했다.",
            "Magnopus는 cross-reality 플랫폼 'OKO'를 기반으로, Gensler와 협력해 몰입형 디지털 체험관 제안안을 제작했다.",
          ]
        } } },
        { text: { en: {
          title: "Task",
          items: [
            "Co-led a team of five 3D artists and developers, responsible for building a large-scale digital stadium space that ran reliably across web, AR, and VR, and for completing the experience demo for the final client presentation.",
            "In particular, we had to recreate the 70,000–100,000-capacity SoFi Stadium as a digital twin while optimizing it to run smoothly on mobile and XR devices."
          ]
        },
                ko: {
          title: "Task",
          items: [
            "3D 아티스트 및 개발자 5인으로 구성된 팀을 공동 리드하며, 웹/AR/VR 환경에서 안정적으로 구동 가능한 대규모 디지털 스타디움 공간을 제작하고, 최종 클라이언트 프레젠테이션용 체험 데모를 완성하는 역할을 맡았다.",
            "특히 7만~10만 명 규모의 SoFi Stadium을 디지털 트윈으로 구현하면서도 모바일·XR 디바이스에서 원활히 동작할 수 있도록 최적화해야 했다.",
          ]
        } } },
      { pair: [
        { src: "InglewoodStadiumDesktop.webp", caption: "" },
        { src: "sofi_fly_over.gif", caption: "" }
      ] },
      { text: { en: {
          title: "Action",
          bulleted: true,
          items: [
            "Built an Olympic swimming venue based on SoFi Stadium using Unreal Engine 5 and 3D tools.",
            "Worked with the art director to stage lighting and spaces that fit the concept of the Olympic Games, rendered in 3D optimized for a real-time experience.",
            "Using the cross-reality platform, carried out spatial design (the Hype Room) with Gensler in real time, quickly validating the technical feasibility (in Unreal) of design feedback and sharing it across teams.",
            "Reconciled KPI conflicts between art and development and, to support mobile and XR devices, reduced gigabytes of stadium data into an optimized digital space under 100 MB."
          ]
        },
                ko: {
          title: "Action",
          bulleted: true,
          items: [
            "Unreal Engine 5과 3D 툴 활용해 SoFi Stadium 기반 올림픽 수영 경기장 제작.",
            "아트 디렉터와 협업하여 올림픽 경기의 콘셉트에 부합한 조명, 공간을 실시간 경험에 최적화된 3D로 연출.",
            "Cross-reality 플랫폼 사용, Gensler와 실시간으로 공간 디자인(Hype Room)을 진행해 디자인 피드백의 기술적 구현 가능성(Unreal)을 빠르게 검증하고 각 팀에 공유.",
            "아트·개발 간 KPI 충돌을 조율하고 모바일 및 XR 디바이스 대응을 위해 기가바이트 단위의 스타디움 데이터를 100MB 미만의 최적화된 디지털 공간으로 구축."
          ]
        } } },
        { pair: [
        { src: "laoly_06.jpg", caption: "" },
        { src: "laoly_07.jpg", caption: "" }
      ] },
      { text: { en: {
          title: "Result",
          bulleted: true,
          items: [
            "Cut map re-entry time to within about 20 seconds on Quest 3 and successfully delivered an interactive digital stadium space that ran without stutter on mobile and XR environments.",
            "By stabilizing and optimizing the interactive elements, we successfully presented the demo of the 'Hype Room'\u2014the experience center's centerpiece\u2014contributing to final selection in the LA28 Olympics Experience Center RFP.",
            "After the project, documented and distributed the Unreal Engine 5\u2013based optimization and debugging workflow built up during the collaboration, cutting graphics-debugging time on later projects and improving cross-team collaboration."
          ]
        },
                ko: {
          title: "Result",
          bulleted: true,
          items: [
            "Quest 3 기준 맵 재진입 시간을 약 20초 이내로 단축하고, 모바일·XR 환경에서도 끊김 없이 동작하는 인터랙티브 디지털 스타디움 공간 구현에 성공했다.",
            "인터랙션 요소 안정화 및 최적화를 통해 체험관 핵심 공간인 'Hype Room' 데모를 성공적으로 선보였으며, LA28 올림픽 익스피리언스 센터 RFP 최종 선정에 기여했다.",
            "프로젝트 종료 후, 협업 과정에서 축적된 Unreal Engine 5 기반 최적화 및 디버깅 워크플로우를 문서화·배포해 후속 프로젝트의 그래픽 디버깅 시간을 단축하고 팀 간 협업 효율 향상에 기여했다.",
          ]
        } } },
        { src: "laoly_15.png", caption: "" },
      { text: { en: {
          title: "Problem-Solving Through Collaboration",
          items: [
            "Co-leading the five-person SoFi Stadium team, I resolved KPI conflicts between 3D art and interaction development to reach consensus. We repeatedly ran play-performance tests in the target web and mobile environments and reviewed data from comparable past projects to set reasonable targets for each development area.",
            "Managing the environment's resource usage within scope, we halved map-loading time (rebooting the space within 20 seconds on Quest 3) and raised overall polish by stabilizing the interactive elements.",
            "This let us successfully present the demo of the 'Hype Room,' the largest part of the experience center, contributing to winning the RFP."
          ]
        },
                ko: {
          title: "협업을 통한 문제 해결 사례",
          items: [
            "5인으로 구성된 SoFi 스타디움 제작 팀을 공동 리드하며 3D 아트와 인터랙션 개발 간 KPI 충돌을 조정해 합의점을 도출했다. 목표로 하는 웹·모바일 환경에서 플레이 성능 테스트를 반복하고, 기존 유사 프로젝트의 데이터를 복기 해 각 개발 파트의 목표치를 합리적으로 조율했다.",
            "범위 내에서 게임 배경의 리소스 사용률을 관리했고, 그 결과 맵 접속 시간을 절반으로 단축하고(퀘스트3 상 20초 내 공간 재부팅), 인터랙션 요소들을 안정화 시킴으로써 완성도를 높였다.",
            "이를 통해 체험관 내 가장 큰 비중을 차지하는 'Hype Room'의 데모를 성공적으로 보였고, RFP에 최종 선정되는 데 기여했다.",
          ]
        } } },
      ]
  },
  {
    id: "welcome-to-oko",
    name: { en: "Cross-reality Platform Space Design—Welcome to OKO, Magnopus", ko: "크로스 리얼리티 플랫폼 공간 디자인 — Welcome to OKO, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "A project creating the Space Museum—the tutorial and onboarding space for Magnopus' cross-reality platform 'OKO.' It was built to tell the story of Magnopus' technology and journey to new sign-ups and external clients.",
      ko: "Magnopus의 cross-reality 플랫폼 'OKO'의 튜토리얼 및 온보딩 공간인 스페이스 뮤지엄 제작 프로젝트. 신규 가입자와 외부 클라이언트에게 Magnopus의 기술과 행보를 스토리텔링하기 위해 제작됐다." },
    year: "2024",
    client: 'Magnopus',
    externalPartner: false,
    status: { en: 'Released', ko: '출시됨' },
    software: "Unreal 5 · OKO · Substance · Miro",
    role: { en: "3D Artist — Environment, Material Library, Workflow", ko: "3D 아티스트 — 환경, 머티리얼 라이브러리, 워크플로우" },
    tags: { en: ["hard-surface modeling", "futuristic", "AR/VR", "game ready"], ko: ["하드서페이스 모델링", "퓨처리스틱", "AR/VR", "game ready"] },
    thumb: "welcomeoko-01.jpg",
    logo: "oko_logo.png",
    images: [
      { summary: true, text: { en: {
          title: "Key Contributions",
          bulleted: true,
          items: [
            "As a 3D artist, led the full design and production of the space.",
            "Built a cross-platform environment on Unreal 5 that can be explored and interacted with from web, mobile, and VR clients.",
            "Now serves as the flagship space introducing OKO to more than ten global organizations, including Amazon Studios, Epic Games, Gensler, and Deloitte."
          ]
        },
        ko: "핵심 참여 내용: 3D 아티스트로서 공간 전체 디자인 및 제작을 담당. Unreal 5을 기반으로 웹/모바일/VR 클라이언트 어디서든 탐험하고 상호작용할 수 있는 cross-platform 공간을 구현. Amazon Studios, Epic Games, Gensler, Deloitte 등 10여 개 이상의 글로벌 조직에 OKO를 소개하는 대표 공간으로 활용 중이다." } },
      { src: "welcomeoko-01.jpg", caption: "" },
      { text: { en: "Project Background: Welcome to OKO is the official onboarding and branding space built to replace the earlier low-poly tutorial space, using Unreal 5–based gamification and storytelling to effectively introduce Magnopus' cross-reality platform 'OKO' and its project capabilities. Beyond a simple tutorial, it was conceived as a guided-walkthrough experience with a future-museum concept that presents Magnopus' projects and technological direction.",
        ko: "프로젝트 배경: Welcome to OKO는 기존 로우폴리의 튜토리얼 공간을 대체해, Unreal 5 기반의 게이미피케이션과 스토리텔링 경험을 통해 Magnopus의 cross-reality 플랫폼 'OKO'와 프로젝트 역량을 효과적으로 소개하기 위해 제작된 공식 온보딩·브랜딩 공간이다. 단순한 튜토리얼을 넘어 Magnopus의 프로젝트와 기술 방향성을 소개하는 미래 박물관 콘셉트의 가이디드 워크스루 경험을 목표로 삼았다." } },
      { src: "magoko_page_1.jpg", caption: "" },
      { pair: [
        { src: "magoko_page_2.webp", caption: "" },
        { src: "magoko_page_3.webp", caption: "" }
      ] },
      { text: { en: "Core Skills: Built the Space Museum's assets and environments on Unreal 5, Maya, Blender, Substance, and the OKO platform, while establishing a cross-platform workflow and a Miro-based collaboration process that improved production efficiency. To collaborate closely with the art director and the senior environment artist building the sister spaces, I proactively proposed a Miro-based visual version-control system and helped systematize the review and feedback process.",
        ko: "핵심 역량: Unreal 5와 Maya, Blender, Substance, OKO 플랫폼 기반으로 스페이스 뮤지엄 에셋과 배경을 구축하고, cross-platform 워크플로우 및 Miro 기반 협업 프로세스를 정립해 제작 효율을 동시에 향상시켰다. 아트 디렉터 및 다른 자매 공간을 제작하던 시니어 엔바이러먼트 아티스트와의 긴밀한 협업을 위해, 주도적으로 Miro 기반의 비주얼 버전 관리 체계를 제안했으며 리뷰 및 피드백 프로세스를 체계화하는 데 기여했다." } },
      { src: "okodevelopgif.gif", caption: "" },
      { text: { en: "Outcomes & Collaboration: Compiled and distributed a workflow guide to resolve compatibility issues between OKO and Unreal Engine, improving platform stability and collaboration efficiency and cutting production time on later projects by about 50%. The new guide also supported the OKO-workflow onboarding of more than 20 artists. Beyond that, I documented the material algorithms within the OKO solution that caused per-platform visual discrepancies and, working with the engineering team, proposed a direction for refactoring.",
        ko: "성과 및 협업 경험: OKO와 Unreal Engine 간의 호환성 이슈를 해결하기 위한 워크플로우 가이드를 정리·배포해 플랫폼 안정성과 협업 효율을 개선했으며, 이를 통해 후속 프로젝트의 프로덕션 시간을 약 50% 단축했다. 또한, 새로운 가이드로 20명 이상의 아티스트의 OKO 워크플로우 온보딩을 지원했다. 나아가 OKO 솔루션에 속한 플랫폼별 비주얼 편차를 유발하는 머티리얼 알고리즘들을 문서화해 엔지니어링 팀과 협업하며 리팩터링 방향을 제안했다." } },
      { src: "welcomeoko-02.png", caption: "" },
      { src: "Planeterium_blockout_WIP.png", caption: "" },
      { src: "Planeterium_WIP.jpg", caption: "" },
      { text: { en: "Problem-Solving Through Collaboration: To resolve per-device rendering discrepancies in cross-reality environments, I analyzed and documented the material workflow and collaborated with the engineering team to build a standardized production guide, keeping visual quality stable across diverse platforms.",
        ko: "협업을 통한 문제 해결 사례: Cross-reality 환경에서 발생하는 디바이스별 렌더링 편차 문제를 해결하기 위해 머티리얼 워크플로우를 분석·문서화하고 엔지니어링 팀과 협업해 표준화된 제작 가이드를 구축함으로써, 다양한 플랫폼에서도 안정적인 비주얼 품질을 유지할 수 있도록 했다." } },
      { pair: [
        { src: "Deloitte_onboarding_01.jpg", caption: "" },
        { src: "Deloitte_onboarding_02.jpg", caption: "" }
      ] },
      { text: { en: "Key Results: Welcome to OKO has become the flagship demo space introducing Magnopus' cross-reality capabilities and immersive-storytelling strength to global organizations such as Amazon Studios, Epic Games, Gensler, and Deloitte, and through it I helped improve environment production, workflow design, and collaboration processes. In particular, the data accumulated while refactoring the problems found during the Space Museum's production—in collaboration with development and other departments—became key guidelines and reference material that helped new team members joining later OKO-based projects adapt quickly to the workflow.",
        ko: "핵심 및 성과: Welcome to OKO는 Amazon Studios, Epic Games, Gensler, Deloitte 등 글로벌 조직에 Magnopus의 cross-reality 기술력과 immersive storytelling 역량을 소개하는 대표 데모 공간으로 자리 잡았으며, 프로젝트를 통해 환경 제작·워크플로우 설계·협업 프로세스를 개선하는 데 기여했다. 특히 Welcome to OKO의 스페이스 뮤지엄 제작 과정에서 발견된 문제들을 리팩터링하며 개발 및 타 부서와 협업해 축적한 데이터는, 이후 OKO 기반 프로젝트에 투입된 신규 팀원들이 워크플로우에 빠르게 적응할 수 있도록 돕는 핵심 가이드라인과 참고 자료로 활용되었다." } },
    ]
  },
  {
    id: "fallout-vault-33",
    name: { en: "The World of Fallout Sizzle—Vault 33, Magnopus", ko: "The World of Fallout 시즐 — Vault 33, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "A web-based interactive (game) project promoting Amazon Studios' Fallout Season 2. Contributed to building Fallout's 'Vault 33' space on Magnopus' cross-reality platform 'OKO,' refining one of the show's signature settings into a high-quality digital space explorable in real time on web and AR.",
      ko: "Amazon Studios의 〈Fallout〉 시즌 2 홍보를 위한 웹 기반 인터랙티브(게임) 프로젝트. Magnopus의 cross-reality 플랫폼 'OKO'에 〈Fallout〉의 'Vault 33' 공간 구축에 참여. 〈Fallout〉의 시그니처 배경을 웹·AR 환경에서 실시간으로 탐험 가능한 고퀄리티 디지털 공간으로 구현했다." },
    year: "2025",
    client: 'Amazon Studios',
    externalPartner: false,
    status: { en: 'Released', ko: '출시됨' },
    software: "Unreal 5 · OKO · Maya · Substance",
    role: { en: "3D Artist — Asset Optimization", ko: "3D 아티스트 — 에셋 최적화" },
    tags: { en: ["hard-surface modeling", "sci-fi", "AR/VR", "game ready"], ko: ["하드서페이스 모델링", "SF", "AR/VR", "game ready"] },
    thumb: "flout-01.jpg",
    logo: "fallout_logo.png",
    logoWhite: true,
    logoRight: "amazon_logo.png",
    logoRightWhite: true,    
    images: [
      { summary: true, text: { en: {
          title: "Key Contributions",
          bulleted: true,
          items: [
            "As a 3D artist, optimized high-spec production assets for web and AR.",
            "Refined the Fallout world into a browser experience explorable in real time, preserving the franchise's signature post-apocalyptic mood and cinematic quality."
          ]
        },
        ko: "핵심 참여 내용: 3D 아티스트로서 고사양 프로덕션 에셋을 웹·AR 환경에 최적화하고, 원작 특유의 포스트 아포칼립스 무드와 시네마틱 퀄리티를 유지한 채 브라우저에서 실시간으로 탐험 가능한 〈Fallout〉 세계를 구현하는 작업을 담당했다." } },
      { src: "flout-01.jpg", caption: "" },
      { text: { en: "Project Background: To promote Amazon Studios' Fallout Season 2, Magnopus set out to build an OKO-based interactive web experience that delivered game-grade spatial exploration on web and AR. The goal was to prove that the OKO platform could extend a large cinematic IP into a real-time, cross-reality interactive experience.",
        ko: "프로젝트 배경: Amazon Studios의 〈Fallout〉 시즌 2 홍보를 위해, Magnopus는 OKO 플랫폼 기반의 인터랙티브 웹 경험을 제작하며 원작 게임 수준의 공간 탐험을 웹·AR 환경에서 구현하고자 했다. 이를 통해 OKO 플랫폼이 대형 시네마틱 IP를 cross-reality 기반의 실시간 인터랙티브 경험으로 확장할 수 있음을 입증하고자 했다." } },
      { video: "IMG_9608.mp4", src: "IMG_9608-poster.jpg", caption: { en: "AR Test", ko: "AR 테스트" }, narrow: true },
      { text: { en: "Core Skills: Using environment-production and optimization skills in Maya, Substance, and Unreal 5, I refined the high-spec Vault 33 assets for web and AR runtimes, maintaining stable performance and visual polish across a range of devices. By optimizing 3D assets and textures and running repeated runtime tests that accounted for the characteristics of the cross-reality platform, I established a stable workflow.",
        ko: "핵심 역량: Maya, Substance, Unreal 5 기반의 환경 제작 및 최적화 역량을 활용해, 고사양 Vault 33 에셋을 웹·AR 런타임 환경에 맞춰 재구성하고 다양한 디바이스에서도 안정적인 퍼포먼스와 시각적 완성도를 유지했다. 3D 에셋과 텍스처를 최적화하고, cross-reality 플랫폼 특성을 고려한 반복적인 런타임 테스트를 통해 안정적인 워크플로우를 구축했다." } },
      { text: { en: "Outcomes & Collaboration: Optimized gigabyte-scale, high-spec Vault assets for a web- and AR-based real-time streaming environment and, working with the virtual-production art team and the OKO development team, delivered a Vault 33 demo that ran reliably with no installation—contributing to the release of The World of Fallout. To collaborate closely with other teams, I ran repeated performance validations and presented concrete metrics from them to drive the refactoring needed for optimization.",
        ko: "성과 및 협업 경험: 기가바이트 단위의 고사양 Vault 에셋을 웹·AR 기반 실시간 스트리밍 환경에 최적화하고, 버추얼프로덕션 아트팀과 OKO 개발 팀과의 협업을 통해 별도 설치 없이 안정적으로 구동되는 Vault 33 데모 구현 및 〈The World of Fallout〉 릴리즈에 기여했다. 타 팀과의 긴밀한 협업을 위해 반복적인 성능 검증을 수행하고, 이를 기반으로 한 구체적인 수치를 제시해 최적화에 필요한 리팩토링을 이끌어냈다. " } },
      { link: "https://fallout-s2.amazonstudios.com/#/caswennan", poster: "falloutsizzleloading.jpg", label: { en: "Step inside The World of Fallout", ko: "The World of Fallout 속으로 들어가기" }, aspect: "16/9" },
      { text: { en: "Problem-Solving Through Collaboration: To resolve performance bottlenecks that kept recurring in real-time web and AR environments, I reorganized the 'Vault 33' asset structure and ran repeated per-platform runtime tests, establishing optimization criteria and team-agreed targets for a stable playable demo. This helped deliver a cross-reality demo that ran without stutter even when pitching to the project's final decision-makers.",
        ko: "협업을 통한 문제 해결 사례: 실시간 웹·AR 환경에서 반복적으로 발생하던 성능 병목 문제를 해결하기 위해 'Vault 33' 에셋 구조를 재정비하고 플랫폼별 런타임 테스트를 반복 수행하며, 안정적인 플레이 데모 구현을 위한 최적화 기준과 팀 간 합의된 목표치를 수립했다.  이를 통해 프로젝트의 최종 의사 결정권자 대상 피칭 환경에서도 끊김 없이 동작하는 cross-reality 데모 구현에 기여했다." } },
      { text: { en: "Key Results & Contributions: This project demonstrated my practical ability to optimize a high-spec, Unreal 5–based cinematic IP into a web- and AR-based game experience and to coordinate collaboration between art and development—ultimately contributing to the official launch of The World of Fallout and to validating the OKO platform's technical capabilities.",
        ko: "핵심 성과 및 기여: 본 프로젝트를 통해 Unreal 5 기반의 고사양 시네마틱 IP를 웹·AR 기반 게임 경험으로 최적화하는 실무 역량과 아트·개발 간 협업 조율 능력을 입증했으며, 결과적으로 〈The World of Fallout〉 정식 프로젝트 공개와 OKO 플랫폼의 기술력 검증에 기여했다." } }
    ]
  },
  {
    id: "gap-cross-reality-retail",
    name: { en: "Gap — Cross-Reality Retail Experience, Magnopus", ko: "Gap — 크로스 리얼리티 리테일 익스피리언스, Magnopus" },
    tag: { en: "Cross-Reality, Retail", ko: "크로스 리얼리티, 리테일" },
    wip: false,
    description: { en: "A tech-demo project applying Magnopus' cross-reality platform 'OKO' to the retail sector. Built an AR-based virtual retail shop for the fashion brand Gap, delivering clothing and brand experiences in a real-time cross-reality environment.",
      ko: "Magnopus의 cross-reality 플랫폼 'OKO'를 리테일 분야에 적용하기 위한 기술 데모 프로젝트. 패션 브랜드 Gap을 대상으로 AR 기반의 가상 리테일 샵을 제작해, 의류 및 브랜드 경험을 실시간 cross-reality 환경에서 구현했다." },
    year: "2025",
    client: "Gap",
    externalPartner: 'Fuse Technical Group',
    status: { en: 'Partnered', ko: '파트너쉽' },
    software: "Unreal 5 · OKO · Maya · Blender",
    role: { en: "3D Artist — AR, Debugging, Assets, Optimization", ko: "3D 아티스트 — AR, 디버깅, 에셋, 최적화" },
    tags: { en: ["cross-reality", "AR/VR", "retail", "game ready", "gaussian splatting"], ko: ["크로스 리얼리티", "AR/VR", "리테일", "게임 레디", "gaussian splatting"] },
    thumb: "gap-01.png",
    images: [
      { summary: true, text: { en: {
          title: "Key Contributions",
          bulleted: true,
          items: [
            "Reliably produced a cross-reality retail demo despite a tight two-week schedule and an external-studio environment.",
            "Used real-time collaboration to rebuild location-based content, resolve per-client rendering issues, and connect with digital signage.",
            "Gap's executives (CEO, CFO, CBSO) took part."
          ]
        },
        ko: "핵심 참여 내용: 제한된 2주 일정과 외부 스튜디오 환경에서도 cross-reality 리테일 데모를 안정적으로 제작하며, 실시간 협업을 통해 위치 기반 콘텐츠 재구축·클라이언트별 렌더링 이슈 해결·디지털 사이니지와 연결을 성공적으로 수행했다. Gap의 경영진(CEO·CFO·CBSO)이 함께 참여했다." } },
      { src: "gap-01.png", caption: { en: "", ko: "" } },
      { text: { en: "Project Background: This project began as Magnopus' effort to extend 'OKO'—the cross-reality platform it had developed in-house since Expo 2020 Dubai—into industries beyond entertainment. It aimed in particular to validate the potential of XR-based shopping experiences and brand-experience spaces in the fashion and retail sector, focusing on a real-time interactive retail experience rather than a simple product display. Accordingly, we set out to recreate Gap's clothing and brand space in a virtual environment and to build a cross-platform retail demo that could deliver the same user experience across web, AR, and digital signage.",
        ko: "프로젝트 배경: 본 프로젝트는 Magnopus가 2020 Expo Dubai 부터 자체 개발한 cross-reality 플랫폼 'OKO'를 엔터테인먼트 외 산업으로 확장하기 위해 시작됐다. 특히 패션·리테일 산업에서 XR 기반 쇼핑 경험 및 브랜드 체험 공간의 가능성을 검증하는 것을 목표로 삼았으며, 단순한 제품 전시가 아닌 실시간 인터랙티브 리테일 경험 구현에 초점을 맞췄다. 이에 따라 Gap 의류 및 브랜드 공간을 가상 환경에 구현하고, 웹·AR·디지털사이니지 상에서 동일한 사용자 경험을 제공할 수 있는 cross-platform 리테일 데모 제작이 추진됐다." } },
      { pair: [
        { src: "gap-02.jpg", caption: "" },
        { src: "gap-03.jpg", caption: "" }
      ] },
      { text: { en: "Core Skills: Drawing on 3D content-creation skills in Maya, Blender, and Unreal 5 and experience operating cross-reality platforms, I recreated fashion apparel and the retail space as a digital environment optimized for web, AR, and digital signage. In particular, I established optimization criteria to minimize rendering differences between the web and AR platforms and, using data and workflow documentation from previous projects, quickly analyzed and resolved rendering bugs.",
        ko: "핵심 역량: Maya·Blender·Unreal 5 기반의 3D 콘텐츠 제작 역량과 cross-reality 플랫폼 운용 경험을 바탕으로, 패션 의류와 리테일 공간을 웹·AR·디지털사이니지에 최적화된 디지털 공간으로 구현했다. 특히 웹·AR 플랫폼 간 렌더링 차이를 최소화하기 위한 최적화 기준을 수립하고, 기존 프로젝트 데이터와 워크플로우 문서를 기반으로 렌더링 버그를 빠르게 분석해 해결했다." } },
      { src: "gap-08.jpg", caption: { en: "", ko: "" } },
      {pair: [
      { src: "gap-04.jpg", caption: { en: "", ko: "" } },
      { src: "gap-09.jpg", caption: { en: "", ko: "" } },  
      ] },
      { text: { en: "Outcomes & Collaboration: Successfully built the cross-reality retail demo within the short two-week window and delivered a solid presentation to Gap's executives, contributing to forming the partnership. Throughout the project—where the production team, 2D/3D content teams, and development team collaborated simultaneously—I reconciled technical requirements and schedule conflicts across each area to maintain the project's polish. I also secured AR accuracy and interaction stability even at a new studio through remote collaboration with the QA team and a real-time feedback system.",
        ko: "성과 및 협업 경험: 2주라는 짧은 기간 안에 cross-reality 기반 리테일 데모를 성공적으로 구축하고, Gap 경영진 대상 프레젠테이션을 안정적으로 완료해 파트너십 구축에 기여했다. 프로젝트 진행 과정에서는 프로덕션 팀·2D/3D 콘텐츠 팀·개발 팀이 동시에 협업하는 구조 속에서, 각 파트 간 기술적 요구사항과 일정 충돌을 조율하며 프로젝트 완성도를 유지했다. 또한 원격으로 QA팀과 협업 및 실시간 피드백 체계를 통해 새로운 스튜디오에서도 AR 정확성과 인터랙션 안정성을 확보했다." } },
      { src: "gap-05.jpg", caption: { en: "", ko: "" } },
      { text: { en: {
          title: "Problem-Solving Through Collaboration",
          bulleted: false,
          items: [
            "During the OKO platform refactoring, I found that the same 3D asset rendered differently across the web, Unreal, and AR environments, which meant the existing retail-shop assets had to be overhauled entirely.",
            "To fix it, I re-established per-platform rendering criteria based on the workflow and optimization data accumulated and updated across previous cross-reality projects, and quickly set new targets that minimized the impact of the refactoring. This let us finish the demo reliably with no delay to the project schedule.",
            "While evaluating whether to adopt the newly introduced Gaussian Splat feature, I analyzed in advance that—despite its excellent visual quality—it could cause performance-optimization problems, and steered the team to defer its use. This guided the team's decision toward prioritizing demo stability and real-time performance."
          ]
        },
        ko: {
          title: "협업을 통한 문제 해결 사례",
          bulleted: false,
          items: [
            "OKO 플랫폼 리팩토링 과정에서 Web·Unreal·AR 환경 간 동일한 3D 에셋이 서로 다르게 렌더링되는 문제를 발견했고, 이로 인해 기존 리테일 샵 에셋을 전면 수정해야 하는 상황이 발생했다.",
            "이를 해결하기 위해 기존 cross-reality 프로젝트 마다 축적·업데이트해온 워크플로우 및 최적화 데이터를 기반으로 플랫폼별 렌더링 기준을 재정립했고, 리팩토링 영향을 최소화할 수 있는 새로운 목표치를 빠르게 수립했다. 이를 통해 프로젝트 일정 지연 없이 데모를 안정적으로 완성할 수 있었다.",
            "또한 신규 기능으로 도입된 Gaussian Splat 기술 적용 여부를 검토하는 과정에서, 시각적 품질은 우수하지만 성능 최적화 문제가 발생할 가능성을 사전에 분석해 사용 계획을 보류하도록 조율했다. 이를 통해 데모 안정성과 실시간 퍼포먼스를 우선시하는 방향으로 팀 의사결정을 유도했다."
          ]
        } } },
      { src: "gap-07.jpg", caption: { en: "", ko: "" } },  
      { text: { en: "Key Results & Contributions: By successfully delivering a demanding cross-reality retail project within a limited timeframe and an external environment, I demonstrated skills in technical validation, collaboration coordination, and real-time problem-solving. In particular, at the center of a project involving experts from many fields, I communicated directly with the client and executives and, on that basis, built collaboration experience coordinating technical decisions and project direction with the teams involved. This project also showed that the OKO platform can serve not only entertainment but the fashion and retail sector, effectively proving the breadth of Magnopus' cross-reality technology applications and its business-expansion potential.",
        ko: "핵심 성과 및 기여: 고난도 cross-reality 리테일 프로젝트를 제한된 기간과 외부 환경에서 성공적으로 수행하며, 기술 검증·협업 조율·실시간 문제 해결 역량을 입증했다. 특히 다양한 분야의 전문가들이 참여하는 프로젝트 중심에서 직접 클라이언트 및 경영진과 소통하며, 이를 바탕으로 관련된 팀들과 기술적 의사결정과 프로젝트 방향성을 조율하는 협업 경험을 축적했다. 또한 본 프로젝트는 OKO 플랫폼이 엔터테인먼트뿐 아니라 패션·리테일 산업에서도 활용될 수 있음을 보여준 사례로, Magnopus의 cross-reality 기술 응용 범위와 사업 확장 가능성을 효과적으로 입증했다." } },
      ]
  },
  {
    id: "fortnite-concert-snoopdogg-icespice",
    name: { en: "Fortnite Concert — Snoop Dogg & Ice Spice at Time Square, Magnopus", ko: "Fortnite 콘서트 — Snoop Dogg & Ice Spice at Time Square, Magnopus" },
    tag: { en: "Cross-Reality, Fortnite Concert", ko: "크로스 리얼리티, Fortnite 콘서트" },
    wip: false,
    description: { en: "Contributed to the Snoop Dogg & Ice Spice concert for 2024 Fortnite Festival Season 6, helping build a digital performance environment that connects game and real-world space on Magnopus' cross-reality platform 'OKO.' Recreated New York's Times Square as a digital twin to deliver a real-time interactive concert environment.",
      ko: "2024 Fortnite Festival Season 6의 Snoop Dogg & Ice Spice 콘서트 프로젝트에 참여하여, Magnopus의 cross-reality 플랫폼 'OKO'를 기반으로 게임과 현실 공간을 연결하는 디지털 공연 환경 구축에 기여했다. 뉴욕 Times Square 를 디지털 트윈으로 제작해 실시간 인터랙티브 공연 환경으로 구현했다." },
    year: "2024",
    client: "Epic Games",
    externalPartner: false,
    status: { en: 'Live Event Completed', ko: 'Live Event 운영 완료' },
    software: "Unreal 5 · OKO · Maya · Blender · Substance",
    role: { en: "3D Artist — Environment, Materials, Optimization", ko: "3D 아티스트 — 환경, 머티리얼, 최적화" },
    tags: { en: ["hard-surface modeling", "cross-reality", "fortnite"], ko: ["하드서페이스 모델링", "크로스 리얼리티", "Fortnite"] },
    thumb: "fortnite-01.jpg",
    logo: "fortnite_logo.png",  
    images: [
      { summary: true, text: { en: {
          title: "Key Contributions",
          bulleted: true,
          items: [
            "Joined the five-person OKO Fortnite task force as a 3D artist.",
            "Built the New York Times Square–based game space.",
            "Contributed to the pipeline for real-time performance simulation."
          ]
        },
        ko: "핵심 참여 내용: 5인 규모의 OKO 포트나이트 TF팀에 3D 아티스트로 참여하여, 뉴욕 타임스퀘어 기반의 게임 공간 제작 담당 및 실시간 공연 시뮬레이션을 위한 파이프라인 구축에 참여했다. " } },
      { src: "fortnite-01.jpg", caption: { en: "", ko: "" } },
      { src: "fortnite-02.jpg", caption: "" },
      { text: { en: "Project Background: Because the project had to connect an in-game event and real-world staging at the same time, the core challenge was integrating the actual performance venue and the virtual performance environment into a single cross-reality workflow. Times Square in particular is a difficult place to rehearse physically—owing to its complex administrative zoning, dense crowds, and the ownership structure of its many advertising billboards—so a separate, simulatable game space was built to address this.",
        ko: "프로젝트 배경: 본 프로젝트는 게임 내부 이벤트와 현실 공간 연출을 동시에 연결해야 하는 프로젝트 특성상, 실제 공연 현장과 가상 공연 환경을 하나의 cross-reality 워크플로우로 통합하는 것이 핵심 과제였다. 특히 Times Square 는 복잡한 행정 구역, 밀집된 군중 환경, 다수의 광고 전광판 소유권 구조 등으로 인해 물리적 리허설이 어려운 장소였으며, 이를 해결하기 위해 시뮬레이션이 가능한 별개의 게임 공간 제작이 진행됐다." } },
      { src: "fortnite-03.jpg", caption: { en: "", ko: "" } },
      { text: { en: "Core Skills: Using Maya, Blender, and Unreal Engine 5, I built a space modeled on New York's Times Square, optimized for simulating crowds, cameras, and billboard footage in mobile and web environments.",
        ko: "핵심 역량: Maya, Blender, Unreal Engine 5을 활용하여, 뉴욕 타임스퀘어를 본딴 공간을 구현했다. 모바일 및 웹 환경에서 군중, 카메라, 그리고 전광판 영상 시뮬레이션을 위해 최적화했다." } },
      { text: { en: "Outcomes & Collaboration: By creating a complex urban–game performance-simulation space, I helped complete the whole project within a tight 81-day schedule. Maintaining a continuous feedback loop with the art director and the concert production team, I supported advance verification of animation, cameras, crowd flow, and more in the digital space before the actual performance. This reduced show-operation risk and improved the efficiency of producing the real-time live event.",
        ko: "성과 및 협업 경험: 복잡한 도심-게임 공연 시뮬레이션 공간을 만들어, 전체 프로젝트를 81일이라는 제한된 일정 안에 성공적으로 완수하는데 기여했다. 아트 디렉터 및 콘서트 제작팀과 지속적인 피드백 루프를 유지하며, 실제 공연 이전 단계에서 애니메이션·카메라·군중 흐름 등을 디지털 공간 상에서 사전 검증할 수 있도록 지원했다. 이를 통해 공연 운영 리스크를 줄이고, 실시간 라이브 이벤트 제작 효율성을 향상시켰다." } },
      { src: "fortnite-07.jpg", caption: "" },
      { src: "fortnite-04.jpg", caption: "" },
      { text: { en: "Problem-Solving Through Collaboration: A precise interactive space was needed to prevent the risks that could arise from complex billboards and dense crowds, so I collaborated with the interaction developers and the art team to build an optimal simulation space. Because we had to secure interaction stability while preserving the visual polish of the show's staging, I reasonably balanced each team's requirements and aligned KPIs, completing a large-scale scene that could run reliably.",
        ko: "협업을 통한 문제 해결 사례: 복잡한 전광판과 군중 밀집 환경으로 인해 발생할 수 있는 리스크를 방지하기 위한 정교한 인터랙티브 공간이 필요했고, 인터랙션 개발자 및 아트팀과 협업해 최적의 시뮬레이션 공간을 구축했다. 공연 연출의 시각적 완성도를 유지하면서도 인터랙션 안정성을 확보해야 했기 때문에, 각 팀의 요구사항을 합리적으로 조정하며 KPI를 조율했다. 이를 통해 안정적으로 구동될 수 있도록 대규모 씬을 완성했다." } },
      { src: "fortnite-06.jpg", caption: { en: "", ko: "" } },
      { text: { en: "Key Results: Through this project, I gained hands-on experience of how digital-twin and real-time simulation technologies from the military and logistics fields are applied and extended into the entertainment industry. I contributed to the successful operation of the Fortnite concert and helped Magnopus secure follow-on collaboration opportunities on later Daft Punk–related projects. The OKO task force also proved its real-time content-production and optimization capabilities despite a limited schedule and a complex game-space environment, building experience delivering large-scale cross-reality entertainment projects.",
        ko: "핵심 및 성과: 본 프로젝트를 통해 군사·로지스틱스 분야의 디지털 트윈 및 실시간 시뮬레이션 기술이 엔터테인먼트 산업에 적용·확장되는 과정을 실무적으로 경험했다. 포트나이트 콘서트의 성공적인 운영에 기여하며, Magnopus가 이후 Daft Punk 관련 프로젝트에서도 후속 협업 기회를 확보하는 데 일조했다. 또한 OKO TF팀은 제한된 일정과 복잡한 게임 공간 환경 속에서도 실시간 콘텐츠 제작 및 최적화 역량을 입증하며, 대규모 cross-reality 엔터테인먼트 프로젝트 수행 경험을 축적했다." } },
      ]
  },
];
const PROJECTS_DIGITALART = [
  {
    id: "legacy-vr",
    name: { en: "Legacy", ko: "Legacy" },
    tag: { en: "VR Experience", ko: "VR 경험" },
    wip: false,
    description: {
      en: "A VR work tracing three generations of the artist's family — grandfather, father, and artist — through old TV commercials and handwritten notes.",
      ko: "VR로 들여다본 3대의 가족사 — 할아버지, 아버지, 그리고 작가. 옛 TV 광고와 오래된 메모로 풀어낸 한국 현대사와 개인사."
    },
    year: "2024",
    software: "Unreal 5 · Maya · Substance",
    role: { en: "Concept · VR · 3D · Narrative", ko: "기획 · VR · 3D · 내러티브" },
    tags: {
      en: ["VR Experience", "Media Art", "Love Machine — Group Exhibition", "Broad Art Center, LA"],
      ko: ["VR 경험", "미디어 아트", "Love Machine — 단체전", "Broad Art Center, LA"]
    },
    thumb: "legacy1.jpg",
    thumbVideo: "legacy5.MP4",
    thumbSquare: true,
images: [
        {
        summary: true,
        text: {
          en: "Legacy is a VR work that peers into the artist's own family history.",
          ko: {
            title: "",
            bulleted: false,
            items: [
              "Legacy는 VR을 통해 작가 본인의 가족사를 엿보는 작업이다.",
            ]
          }
        }
      },
      { src: "legacy4.jpg", caption: { en: "", ko: "" } },
      { split: {
        imageSide: "left",
        image: { src: "legacy1.jpg", caption: { en: "", ko: "" } },
        text: {
          en: "Across three generations — grandfather, father, and artist — it unfolds modern Korean history and personal memory through old TV commercials and aged handwritten notes. At the intersection of grand history and intimate daily life, it explores how a person's character and experience take shape.",
          ko: "할아버지–아버지–작가, 3대에 걸친 한국 현대사와 개인사를 옛 TV 광고와 오래된 메모를 통해 풀어냈다. 거시적 역사와 미시적 삶이 교차하는 지점에서 개인의 성격과 경험이 어떻게 형성되었는지 탐색한다."
        }
      } },
      { split: {
        imageSide: "right",
        image: { src: "legacy2.jpg", caption: { en: "", ko: "" } },
        text: {
          en: "It asks what legacy is left behind in the process. Through virtual reality, it seeks to share the universal yet unfamiliar experience of the Korean father–son relationship with an American audience, minimizing cultural resistance.",
          ko: "그 과정에서 어떤 유산이 남겨졌는지를 스스로 질문한다. VR이라는 가상현실 매체를 통해 한국의 아버지–아들 관계가 지닌 보편적이면서도 낯선 경험을 문화적 저항을 최소화한 방식으로 더 다양한 관객과 공유하고자 했다."
        }
      } },
      { src: "legacy3.jpg", caption: { en: "", ko: "" } },
    ]  
  },
  {
    id: "when-we-become-you-and-i-again",
    name: { en: "When We Become You and I Again", ko: "When We Become You and I Again" },
    tag: { en: "Projection Mapping · Installation", ko: "프로젝션 맵핑 · 설치" },
    wip: false,
    description: {
      en: "Drift — a site-specific projection work on immigration, language loss, and the unstable state of being adrift.",
      ko: "표류(Drift) — 이민의 삶과 모국어 상실, 그리고 '표류'라는 상태를 시각화한 장소 특정적 프로젝션 작업."
    },
    year: "2023",
    software: "TouchDesigner · Unreal 5 · Projection Mapping",
    role: { en: "Concept · 3D · Projection", ko: "기획 · 3D · 프로젝션" },
    tags: {
      en: ["Projection Mapping", "Media Art", "Installation"],
      ko: ["프로젝션 맵핑", "미디어 아트", "설치"]
    },
    thumb: "youandme2.jpg",
    thumbVideo: "youandme8.mp4",
    images: [
      { src: "youandme1.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "Drift is a work that unfolds the artist's experience of immigrant life in LA as a visual narrative of 'drifting' — a psychological and physical state.",
        ko: "표류(Drift)는 작가가 LA에서 살아가며 체험한 이민의 삶을 '표류'라는 심리적·물리적 상태의 시각적 내러티브로 풀어낸 작업이다. 이민이 동반하는 상실 중 특히 모국어의 상실이 야기하는 불안정함이, 기존 문화에서는 느끼지 못했던 존재의 불완전성으로 이어지는 지점에 주목했다."
      } },
      { src: "youandme2.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "The countless lifeboats projection-mapped onto the floor, viewed closely, are made of the letters '우리' and 'we.'",
        ko: "바닥에 프로젝션 맵핑된 무수한 구명정들은 가까이서 들여다보면 '우리'와 'we'라는 글자로 이루어져 있음을 확인할 수 있다. 알 수 없는 난파 현장에서 떠밀려온 이 글자의 구명정들은 한국 이민자뿐 아니라 세계 여러 나라에서 온 이민자들이 새로운 환경에 적응하며 겪는 문화·언어적 정체성의 혼란을 상징한다."
      } },
      { src: "youandme3.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "The roughly 10-minute looping video reveals the history of immigration as endlessly arriving waves, taking on a site-specific character that quietly commemorates those who left to put down new roots.",
        ko: "약 10분간 반복되는 긴 루프 영상은 끊임없이 밀려오는 파도로 비유되는 이민의 역사를 시청각적으로 드러내며, 동시에 새로운 뿌리를 내리기 위해 떠나온 이들을 잔잔히 기념하는 장소 특정적 성격을 취한다."
      } },
      { vimeo: "807471214" },
      { article: {
          url: "https://dailybruin.com/2023/04/04/graduate-student-doyeon-kim-conveys-theme-of-identity-through-3d-simulations",
          source: "Daily Bruin",
          author: "Christine Kao",
          date: { en: "April 4, 2023", ko: "2023년 4월 4일" },
          thumb: "youandme-dailybruin.png",
          // Title kept in English in both languages (original headline).
          title: "Graduate student Doyeon Kim conveys theme of identity through 3D simulations",
          excerpt: {
            en: "A Daily Bruin feature on Doyeon Kim's graduate work, exploring how she uses 3D simulation and immersive media to examine immigration, language, and identity.",
            ko: "이민, 언어, 정체성을 3D 시뮬레이션과 이머시브 미디어로 탐구하는 김도연의 대학원 작업을 다룬 Daily Bruin 기사."
          }
        } },
    ]
  },
  {
    id: "k-town-2023",
    name: { en: "K-Town 2023", ko: "K-Town 2023" },
    tag: { en: "Animation · Installation", ko: "애니메이션 · 설치" },
    wip: false,
    description: {
      en: "Interviews with first-generation Korean immigrants in LA Koreatown, reconstructed as animated storefronts.",
      ko: "LA 한인타운의 이민 1세대와의 인터뷰에서 출발해 스토어프론트를 애니메이션으로 재현한 작업."
    },
    year: "2023",
    software: "Maya · Unreal 5 · After Effects",
    role: { en: "Concept · 3D · Animation", ko: "기획 · 3D · 애니메이션" },
    tags: {
      en: ["Animation", "Media Art", "Installation"],
      ko: ["애니메이션", "미디어 아트", "설치"]
    },
    thumb: "ktown1.jpg",
    images: [
      { video: "ktown5.mp4" },
      { src: "ktown1.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "K-Town began from conversations with first-generation immigrants the artist met at Korean markets, restaurants, and laundromats in LA Koreatown.",
        ko: "케이타운(K-Town)은 작가가 LA Koreatown의 한인 마트, 음식점, 세탁소 등에서 만난 이민 1세대와의 대화에서 출발한 작업이다. 실제 인터뷰를 바탕으로 개인의 이민사와 자영업 과정에서 겪은 사건들을 애니메이션으로 재현하고, 이를 인터뷰 내러티브와 병치했다."
      } },
      { src: "ktown2.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "Personal events at the storefronts they worked in or owned are rendered at a reduced scale, visualizing the distinctive yet universal experiences of LA's first-generation Korean immigrants in a more intimate, fragile form.",
        ko: "이들이 근무하거나 소유한 스토어프론트(storefront)에서 벌어진 개인적 사건들을 실제 상점보다 축소된 스케일로 구현함으로써, LA 한인 이민 1세대가 지닌 차별적이면서도 보편적인 경험과 감정을 보다 친밀하고 연약한 형태로 시각화했다."
      } },
      { src: "ktown3.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "At the same time, it reveals their solid, existential place and value in LA society in a monumental form, drawing empathy for a journey of making meaning through adaptation, compromise, and painful history.",
        ko: "동시에 이들이 LA 사회에서 차지하는 단단하고 실존적인 위치와 가치를 기념비적 형태로 드러내며, 현지 적응과 타협, 그리고 아픈 역사를 딛고 존재의 의미를 만들어가는 여정에 대한 공감을 이끌어내고자 했다."
      } },
      { vimeo: "840554999" },
      { text: {
        en: "The storefronts that appear in K-Town 2023 stand in for the identities of the Korean small-business owners the artist met in LA Koreatown. As first-generation immigrants, they recount in their own voices the journeys that brought them here and the daily life of running their own businesses. Their spoken accounts are placed alongside the miniaturized storefronts, so that personal memory and reconstructed space speak to one another.",
        ko: "K-Town 2023에서 등장하는 스토어프론트(Storefronts)는 LA 코리아타운에서 만난 한인 자영업자들의 정체성을 대변한다. 이들은 이민 1세대로, 이곳에 오기까지의 여정과 자영업을 꾸리며 살아온 일상을 직접 자신의 목소리로 들려준다. 이들의 구술은 축소된 스토어프론트와 병치되어, 개인의 기억과 재현된 공간이 서로 말을 건네도록 한다."
      } },
    ]
  },
  {
    id: "mumbling-after-silence",
    name: { en: "Mumbling after Silence", ko: "Mumbling after Silence" },
    tag: { en: "3D Simulation", ko: "3D 시뮬레이션" },
    wip: false,
    description: {
      en: "A 3D simulation breathing life into Korean and English letters to explore a wavering identity.",
      ko: "3D 시뮬레이션으로 한글과 영어 문자에 생명력을 불어넣어 정체성을 탐구한 작업."
    },
    year: "2022",
    software: "Maya · Houdini · 3D Simulation",
    role: { en: "Concept · 3D · Simulation", ko: "기획 · 3D · 시뮬레이션" },
    tags: {
      en: ["3D Simulation", "Media Art", "Typography"],
      ko: ["3D 시뮬레이션", "미디어 아트", "타이포그래피"]
    },
    thumb: "mumbling1.jpg",
    images: [
      { src: "mumbling1.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "Using 3D computer simulation to breathe life into letters, this work explores questions of identity through Korean and English words.",
        ko: "3D 컴퓨터 시뮬레이션을 이용해 문자에 생명력을 불어넣은 작업으로, 이 시기 한글, 영어의 단어들을 이용해 정체성에 대한 고민을 작업으로 풀어내고자 했다."
      } },
      { src: "mumbling2.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "Glimpsing and experiencing the lives of long-settled immigrants in an entirely different society and culture during a short study-abroad period, the artist could not help but feel an incompleteness and sense of loss unfelt within one's home country.",
        ko: "짧은 유학 시기 동안 전혀 다른 사회, 문화 환경에서 오래동안 거주해온 이민자들의 삶을 엿보고 또 스스로 체험하면서, 모국 안에서는 느낄 수 없는 불완전성과 상실감을 느낄 수 밖에 없었다."
      } },
      { src: "mumbling3.jpg", caption: { en: "", ko: "" } },
      { text: {
        en: "Against this backdrop, the work tries to grasp a wavering identity through letters, while depicting the daily life of people from different cultures living together as a pendulum swinging between chaos and harmony.",
        ko: "이러한 배경에서 문자를 통해 흔들리는 정체성을 붙잡고자함과 동시에 기타 다른 문화권에서 온 이들이 함께 살며 일어나는 일상을 혼란과 조화를 진자 운동하는 모습으로 그려내고자 한 작업이다."
      } },
    ]
  },
  {
    id: "spectra-studio-showcase-fall-2022",
    name: { en: "Spectra Studio Showcase Fall 2022", ko: "Spectra Studio Showcase Fall 2022" },
    tag: { en: "Group Exhibition", ko: "단체전" },
    wip: false,
    description: {
      en: "Spectra Studio is a Los Angeles multidisciplinary collective merging art and technology across media art, installation, projection, robotics, and light and sound. Our work was screened at the Spectra Studio Showcase in December 2022.",
      ko: "Spectra Studio는 미디어 아트, 인스톨레이션, 프로젝션, 로보틱스, 빛과 소리를 아우르며 예술과 기술을 결합하는 로스앤젤레스 기반의 다학제 컬렉티브입니다. 우리의 작업은 2022년 12월 Spectra Studio 쇼케이스에서 상영되었습니다."
    },
    year: "2022",
    software: "TBD",
    role: { en: "TBD", ko: "TBD" },
    tags: {
      en: ["Group Exhibition", "Media Art"],
      ko: ["단체전", "미디어 아트"]
    },
    thumb: "spectra1.jpg",
    thumbVideo: "spectra4.MP4",
    images: [
      { video: "spectra4.MP4", caption: { en: "", ko: "" } },
      { pair: [
        { src: "spectra1.jpg", caption: { en: "", ko: "" } },
        { src: "spectra2.jpg", caption: { en: "", ko: "" } },
      ] },
      { text: {
        en: "Spectra Studio is a multidisciplinary collective based in Los Angeles that merges art with technology — drawing on media art, computer science, and mechanical engineering. The collective works across installation, projection, sculpture, robotics, and light and sound to evoke emotion and reflect on how we relate to the physical, the digital, and the unknown. Our work was screened as part of the Spectra Studio Showcase in December 2022.",
        ko: "Spectra Studio는 로스앤젤레스를 기반으로 활동하는 다학제 컬렉티브로, 미디어 아트·컴퓨터 과학·기계 공학을 바탕으로 예술과 기술을 결합합니다. 인스톨레이션, 프로젝션, 조각, 로보틱스, 빛과 소리를 아우르는 작업을 통해 감정을 불러일으키고, 우리가 물리적인 것·디지털·미지의 것과 맺는 관계를 성찰합니다. 우리의 작업은 2022년 12월 Spectra Studio 쇼케이스에서 상영되었습니다."
      } },
      { src: "spectra3.jpg", caption: { en: "", ko: "" } },
      { row: [
        { map: "1846 Sichel St, Los Angeles, CA 90031", zoom: 18, satellite: true },
        { instagram: "CmGS33AL5rb" },
      ] },
    ]
  },
];

/* Exhibition posters — display-only cards (no detail view). Managed as ordinary
   projects so they render through renderProjectsInto like any other row.
   `displayOnly: true` skips the detail link/meta; thumb carries its own
   `posters/` path (a slash in `thumb` overrides the default images/ prefix). */
const PROJECTS_DIGITALART2 = [
  { id: "poster-disorient-ringularity",  displayOnly: true, name: { en: "Disorient: Ringularity",          ko: "디스오리엔트: 링귤래리티" },                 thumb: "posters/disorient-ringularity-전시-포스터.jpg" },
  { id: "poster-love-machine",           displayOnly: true, name: { en: "Love Machine",                    ko: "러브 머신" },                               thumb: "posters/Love-Machine-전시-포스터.jpg" },
  { id: "poster-mumbling-after-silence", displayOnly: true, name: { en: "Mumbling after Silence",          ko: "Mumbling after Silence" },                  thumb: "posters/Mumbling-after-Silence-전시-포스터.jpg" },
  { id: "poster-texture-2023",           displayOnly: true, name: { en: "tex·ture 2023",                   ko: "tex·ture 2023 국제전" },                     thumb: "posters/tex-ture-2023-국제전-포스터.jpg" },
  { id: "poster-when-we-become",         displayOnly: true, name: { en: "When We Become You and I Again",  ko: "When We Become You and I Again" },          thumb: "posters/When-We-Become-You-and-I-Again-포스터.jpg" },
  { id: "poster-seoul-auction-blue-nft", displayOnly: true, name: { en: "Seoul Auction Blue NFT",          ko: "서울옥션블루 NFT 작가 공모전" },              thumb: "posters/서울옥션블루-nft-작가-공모전-포스터.jpg" },
  { id: "poster-ars-electronica-garden", displayOnly: true, name: { en: "Ars Electronica Garden Seoul",    ko: "아르스 일렉트로니카 가든 서울 페스티벌" },    thumb: "posters/아르스-일렉트로니카-가든-서울-페스티벌-전시-포스터.jpg" },
  { id: "poster-anthropocene-tomorrow",  displayOnly: true, name: { en: "Anthropocene: Tomorrow",          ko: "인류세: 내일" },                            thumb: "posters/인류세의-내일-포스터.jpg" },
  { id: "poster-disorient-ergo-sphere",  displayOnly: true, name: { en: "Disorient: Ergo Sphere",          ko: "디스오리엔트: 에르고 스피어" },              thumb: "posters/disorient_Ergo-Sphere_포스터.jpg" },
  { id: "poster-hertzherz",              displayOnly: true, name: { en: "HertzHerz",                       ko: "헤르츠헤르츠" },                            thumbVideo: "posters/HertzHerz영상.mp4" },
];

/* Combined lookup so openProject() can resolve any id from either section. */
const ALL_PROJECTS = [...PROJECTS, ...PROJECTS_SECONDARY, ...PROJECTS_DIGITALART, ...PROJECTS_DIGITALART2];

/* ================================================
   VARIANT SYSTEM — controls project order AND
   per-variant UI string overrides per domain.

   overrides: { en: { key: value }, ko: { key: value } }
   Any key here takes precedence over the global UI_STRINGS
   table in i18n.js. Only specify keys that differ from the
   global defaults — everything else falls through automatically.
   ================================================ */
const VARIANTS = {
  default: {
    row1: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'gap-cross-reality-retail'],
    row2: ['secret-garden', 'sienar-chall-utilipede', 'vintage-telephone', 'japanese-izakaya', 'espresso-machine', 'cyberpunk-seoul'],
    row3: ['legacy-vr', 'when-we-become-you-and-i-again', 'k-town-2023', 'mumbling-after-silence', 'spectra-studio-showcase-fall-2022'],    
    label1: { en: 'Selected Work · 2026',              ko: '주요 작업 · 2026' },
    label2: { en: 'Selected Projects',                  ko: '다른 작업' },
    label3: { en: 'Digital Art Exhibition',  ko: '디지털 아트 전시' },
    // Per-slide auto-scroll speed (px/frame). Higher = faster, negative = right-to-left.
    speeds: { grid1: 0.35, grid2: 0.45, grid3: 0.3 },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> 3D Artist',
        siteTagline:  '3D Worlds · Props · Environments',
        aboutHeading: 'Doyeon Kim <em>•</em> 3D Artist',
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 3D 아티스트',
        siteTagline:  '3D 월드 · 프롭 · 환경',
        aboutHeading: '김도연 <em>•</em> 3D 아티스트',
      },
    },
  },
  vfx: {
    row1: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    row2: ['wizard-of-oz-sphere', 'fortnite-concert-snoopdogg-icespice', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'gap-cross-reality-retail'],
    label1: { en: '3D · Environments & Animation · 2026', ko: '3D · 환경 & 애니메이션 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '개인 작업' },
    // Per-slide auto-scroll speed (px/frame). Higher = faster, negative = right-to-left.
    speeds: { grid1: 0.4, grid2: 0.55 },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> 3D Artist',
        siteTagline:  '3D Environments · VFX · Virtual Production',
        aboutHeading: 'Doyeon Kim <em>•</em> 3D Artist',
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 3D 아티스트',
        siteTagline:  '3D 환경 · VFX · 버추얼 프로덕션',
        aboutHeading: '김도연 <em>•</em> 3D 아티스트',
      },
    },
  },
  lbe: {
    row1: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'gap-cross-reality-retail'],
    row2: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    label1: { en: 'Featured Project Contributions',       ko: '주요 참여 프로젝트' },
    label2: { en: 'Selected Work · 2026',                 ko: '주요 작업' },
    // Per-slide auto-scroll speed (px/frame). Higher = faster, negative = right-to-left.
    speeds: { grid1: 0.5, grid2: 0.3 },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> 3D Spatial Designer',
        siteTagline:  '3D Content · 3D Architecture · Immersive Entertainment',
        aboutHeading: 'Doyeon Kim <em>•</em> 3D Spatial Designer',
        aboutIntro:   '5-year designer who has contributed to 3D content production across games, virtual production, and e-commerce at Magnopus, founded by Oscar-winning VFX artist Ben Grossmann. I have worked on projects spanning the Las Vegas Sphere, Fortnite concerts, and the LA 2028 Olympics Experience Center — from 3D modelling to large-scale spatial design — pushing the boundaries of immersive entertainment.',
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 3D 공간 디자이너',
        siteTagline:  '3D 콘텐츠 · 공간 디자인 · 이머시브 엔터테인먼트',
        aboutHeading: '김도연 <em>•</em> 3D 공간 디자이너',
        aboutIntro:   '5년 차 디자이너로서, 오스카 시각효과상 수상자 Ben Grossmann이 설립한 Magnopus에서 게임, 버추얼 프로덕션, 이커머스 등 다양한 분야의 3D 콘텐츠 제작에 참여했습니다. 또한 라스베이거스 스피어, Fortnite 콘서트, 2028 LA 올림픽 체험 센터 등 다양한 프로젝트에서 3D 모델링부터 대규모 공간 제작까지 수행하며, 이머시브 엔터테인먼트의 경계를 확장하는 작업에 기여했습니다.',
      },
    },
  },
  game: {
    row1: ['cyberpunk-seoul', 'sienar-chall-utilipede', 'japanese-izakaya', 'secret-garden', 'vintage-telephone', 'espresso-machine'],
    row2: ['fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'gap-cross-reality-retail'],
    label1: { en: 'Game Environment Art · 2026',          ko: '게임 환경 아트 · 2026' },
    label2: { en: 'Featured Project Contributions',       ko: '주요 참여 프로젝트' },
    // Per-slide auto-scroll speed (px/frame). Higher = faster, negative = right-to-left.
    speeds: { grid1: 0.7, grid2: 0.35, grid3: 0.25, posters: 0.45 },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> Environment Artist',
        siteTagline:  'Game Environments · Props · Real-Time Art',
        aboutHeading: 'Doyeon Kim <em>•</em> Environment Artist',
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 배경 아티스트',
        siteTagline:  '게임 환경 · 프롭 · 리얼타임 아트',
        aboutHeading: '김도연 <em>•</em> 배경 아티스트',
      },
    },
  },
  environment: {
    row1: ['fallout-vault-33', 'welcome-to-oko', 'fortnite-concert-snoopdogg-icespice', 'wizard-of-oz-sphere', 'la-2028-olympics', 'gap-cross-reality-retail'],
    row2: ['japanese-izakaya', 'sienar-chall-utilipede', 'cyberpunk-seoul', 'secret-garden', 'vintage-telephone', 'espresso-machine'],
    label1: { en: 'Environment Design · 2026',            ko: '환경 디자인 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '개인 작업' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> 3D Environment Designer',
        siteTagline:  'Environments · Worldbuilding · Real-Time Spaces',
        aboutHeading: 'Doyeon Kim <em>•</em> 3D Environment Designer',
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 3D 배경 디자이너',
        siteTagline:  '환경 · 월드빌딩 · 리얼타임 공간',
        aboutHeading: '김도연 <em>•</em> 3D 배경 디자이너',
      },
    },
  },
  modeler3d: {
    row1: ['sienar-chall-utilipede', 'cyberpunk-seoul', 'japanese-izakaya', 'secret-garden', 'vintage-telephone', 'espresso-machine'],
    row2: ['fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'gap-cross-reality-retail'],
    label1: { en: 'Game Art · 2026',                     ko: '게임 아트 · 2026' },
    label2: { en: 'Selected Projects',                   ko: '개인 작업' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> 3D Modeler',
        siteTagline:  'Realistic · Organic · Hard Surface · Game-Ready Assets',
        aboutHeading: 'Doyeon Kim <em>•</em> 3D Modeler',
        aboutIntro:   'I am a 3D modeler specialising in environment art, props, and real-time workflows — from ZBrush and Maya to Unreal Engine. My work spans game-ready assets, full environments, and immersive spatial experiences, always with an eye for grounded, detail-driven design. I am currently based in Korea, working across personal projects, studio collaborations, and teaching 3D production.',    
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 3D 모델러',
        siteTagline:  '리얼리스틱 · 오가닉 · 하드서페이스 · 게임 레디 에셋',
        aboutHeading: '김도연 <em>•</em> 3D 모델러',
        aboutIntro:   '5년 차 3D 모델러로서, 오스카 시각효과상 수상자 Ben Grossmann이 설립한 Magnopus에서 게임, 버추얼 프로덕션, 이커머스 등 다양한 분야의 3D 콘텐츠 제작에 참여했습니다. 또한 라스베이거스 스피어, Fortnite 콘서트, 2028 LA 올림픽 체험 센터 등 다양한 프로젝트에서 3D 모델링부터 대규모 공간 제작까지 수행하며, 이머시브 엔터테인먼트의 경계를 확장하는 작업에 기여했습니다. ZBrush·Maya·Blender·Unreal Engine·Substance 3D를 사용하며 현재 개인 프로젝트, 스튜디오 협업, 강의를 병행하고 있습니다.',
      },
    },
  },
  digitalart: {
    // rowN renders into #project-grid-N (== DOM position N, top to bottom).
    row1: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'gap-cross-reality-retail'],
    row2: ['poster-disorient-ringularity', 'poster-disorient-ergo-sphere', 'poster-hertzherz', 'poster-love-machine', 'poster-mumbling-after-silence', 'poster-texture-2023', 'poster-when-we-become', 'poster-seoul-auction-blue-nft', 'poster-ars-electronica-garden', 'poster-anthropocene-tomorrow'],
    row3: ['legacy-vr', 'k-town-2023', 'when-we-become-you-and-i-again', 'mumbling-after-silence', 'spectra-studio-showcase-fall-2022'],
    row4: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    // labelN shows above #project-grid-N (rendering.js assigns by DOM position).
    label1: { en: 'Professional Projects',                ko: '프로페셔널 프로젝트' },
    label2: { en: 'Exhibition Posters',                   ko: '전시 포스터' },
    label3: { en: 'Digital Art Exhibition',               ko: '디지털 아트 전시' },
    label4: { en: 'Technical Projects',                   ko: '테크니컬 프로젝트' },
    // Per-slide auto-scroll speed (px/frame). Higher = faster, negative = right-to-left.
    speeds: { grid1: 2, grid2: 1, grid3: 2, grid4: 1 },
    // Per-row card height (any CSS length). Unset rows fall back to the
    // .project-card default (min(55vh, 480px)). Here grid2 (posters) and grid4 are halved.
    heights: { grid2: 'min(27.5vh, 240px)', grid4: 'min(27.5vh, 240px)' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>•</em> Digital Artist',
        siteTagline:  'Media Art · 3D · Immersive Worlds',
        aboutHeading: 'Doyeon Kim <em>•</em> Digital Artist',
        aboutIntro:   'I am a digital artist and 3D artist who has contributed to 3D content production across games, virtual production, and e-commerce at Magnopus, founded by Oscar-winning VFX artist Ben Grossmann. I have worked on projects spanning the Las Vegas Sphere, Fortnite concerts, and the LA 2028 Olympics Experience Center. I use ZBrush · Maya · Blender · Unreal Engine · Substance 3D, and am currently working across personal projects, studio collaborations, and teaching 3D production.',
      },
      ko: {
        siteTitle:    '김도연 <em>•</em> 디지털 아티스트',
        siteTagline:  '미디어 아트 · 3D · 이머시브 월드',
        aboutHeading: '김도연 <em>•</em> 디지털 아티스트',
        aboutIntro:   '디지털 아티스트로서, 오스카 시각효과상 수상자 Ben Grossmann이 설립한 Magnopus에서 게임, 버추얼 프로덕션, 이커머스 등 다양한 분야의 3D 콘텐츠 제작에 참여했습니다. 또한 라스베이거스 스피어, Fortnite 콘서트, 2028 LA 올림픽 체험 센터 등 다양한 프로젝트에서 3D 모델링부터 대규모 공간 제작까지 수행하며, 이머시브 엔터테인먼트의 경계를 확장하는 작업에 기여했습니다. ZBrush·Maya·Blender·Unreal Engine·Substance 3D를 사용하며 현재 개인 프로젝트, 스튜디오 협업, 강의를 병행하고 있습니다.',
      },
    },
  },
};

function detectVariant() {
  const host = window.location.hostname;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase().replace(/^#/, '');

  let variant = null;
  if      (host.includes('vfx')         || path.startsWith('/vfx')         || hash === 'vfx')         variant = 'vfx';
  else if (host.includes('lbe')         || path.startsWith('/lbe')         || hash === 'lbe')         variant = 'lbe';
  else if (host.includes('environment') || path.startsWith('/environment') || hash === 'environment') variant = 'environment';
  else if (host.includes('modeler3d')   || path.startsWith('/modeler3d')   || hash === 'modeler3d')   variant = 'modeler3d';
  else if (host.includes('game')        || path.startsWith('/game')        || hash === 'game')        variant = 'game';
  else if (host.includes('digitalart')  || path.startsWith('/digitalart')  || hash === 'digitalart')  variant = 'digitalart';
  if (variant) {
    try { sessionStorage.setItem('variant', variant); } catch (e) {}
    return variant;
  }
  try {
    const saved = sessionStorage.getItem('variant');
    if (saved && VARIANTS[saved]) return saved;
  } catch (e) {}
  return 'default';

};
