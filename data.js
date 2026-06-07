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
    description: { en: "A gothic cloister reclaimed by nature, built around a photogrammetry-scanned cupid fountain. Combines modular architecture with hand-scanned statuary, wrought-iron lighting, and a procedural floor material.", 
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
    description: { en: "A hard-surface study of the Sienar-Chall Utilipede Transport — a Star Wars canon utility freighter. Focus on mechanical paneling, weathered industrial metal, and faithful silhouette work from reference.", 
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
    description: { en: "A mid-century German industrial wall telephone — Fernsig-branded, cast housing, bakelite handset. Modelled and textured with a focus on worn paint, tarnished metal, and the brass nameplate.", 
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
    description: { en: "A late-night Tokyo izakaya — red leather stools, brass trim, paper lanterns, exposed ductwork. Focus on warm practical lighting, densely-dressed shelves of sake and whisky, and the interplay between industrial ceiling and traditional decor.", 
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
    description: { en: "A Dalla Corte EVO2 commercial espresso machine, dressed with travel stickers, a sticky note, and years of cafe wear. Modelled and textured as a hero prop for the Japanese Izakaya scene — the red anchor piece behind the bar.", 
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
    description: { en: "Cyberpunk Seoul — an alley lined with neon signage in Korean, Japanese, Russian, and Arabic, volumetric holograms drifting overhead, and a sunset haze. Title graphics for a fictional short, 'Riders: Deliver for Future.'", 
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
    description: { en: "An immersive 16K Wizard of Oz experience for the 366-foot Las Vegas Sphere, built as a digital twin in Magnopus' OKO cross-reality platform alongside Sphere Entertainment, Google, and Warner Bros. Optimized a 6 GB BIM model into a real-time space testable from web, iOS, Android, and VR.", 
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
          en: "In a groundbreaking collaboration with Sphere Entertainment, Google, and Warner Bros., Magnopus successfully delivered an immersive Wizard of Oz experience for the 16K-resolution Las Vegas Sphere. As a key 3D artist on the project, I optimized a massive physical venue model into an accessible digital twin using the proprietary OKO cross-reality platform.",
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
      { text: { en: "In August 2025, Sphere Entertainment presented an immersive version of the classic film The Wizard of Oz at the 366-foot-tall, 16K-resolution grand-size Sphere. In collaboration with Google, Warner Bros., and Magnopus, the world-leading entertainment venue brought the 1939 film into the present, expanding the frames of the original movie to completely enclose the audience in a marvelous, interactive experience of its magical world.",
        ko: {
          title: "프로젝트 배경",
          items: [
            "Sphere Entertainment, Google, Warner Bros., Magnopus는 Sphere에서 〈The Wizard of Oz〉를 immersive entertainment 경험으로 재구성하며, 공연의 시뮬레이션·리허설·비주얼 테스트를 수행할 수 있는 디지털 공간 제작을 추진했다."
          ]
        } } },
      { src: "spwz-06.JPG", caption: "" },
      { src: "spwz-03.jpg", caption: "" },
      { text: { en: "The Wizard of Oz at Sphere was realized through a joint effort between Sphere Entertainment, Magnopus, Warner Bros., and Google. As a 3D artist brought onto the project at Magnopus, I supported the team in making our artists\u2019 imagination and creativity tangible. Magnopus\u2019 proprietary cross-reality platform, OKO, played a crucial role in making this possible. Serving as our main tool, OKO allowed our team to craft a digital-twin simulated space of the Las Vegas Sphere, where all work was pre-rendered, tested, examined, and rehearsed before being put on the physical stage.", 
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
        { en: "We began with the fundamental step of digital construction: examining the BIM model of the Sphere, which was incredibly heavy at around 6 GB. Even after cropping the sections we needed for real-time simulation, half the size remained\u2014still far too heavy for cross-reality workflows. This required a dedicated team effort to reduce the size and optimize the environment, making it accessible across all client devices\u2014such as web, iOS, and Android\u2014while establishing the theme of the Wizard of Oz show in the digital space. This optimization opened up vast potential for testing and sharing among studio teams, on-site teams, and clients.", 
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
        { en: "After optimizing the Sphere\u2019s interior, we were left with its integral framework, allowing us to dive into the artistic s alongside other artists from Magnopus and Sphere Entertainment. We anchored the experience around two distinct visual moments from the movie: the prevailing sepia tones representing Kansas at the beginning, and the vibrant emerald tones of the Emerald City later on. Through numerous iterations, the optimized space gained color and was prepared for additional visual, architectural, and even pyrotechnic tests.", 
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
          en: "Building a digital-twin space of the Sphere in a cross-reality platform eliminated the distance between the actual venue, the studio, and all involved teams, regardless of their physical location. This was made possible entirely by the platform\u2019s real-time interoperability, which allowed simulations to be conducted and shared with anyone, whether they were using a PC, Mac, mobile phone, or VR headset. To fully harness this magical technology, the 3D art team was essential in logically and artistically optimizing the data to minimize potential bottlenecks while connecting teams. Beyond technical optimization, we meticulously conveyed the design, feel, and mood of The Wizard of Oz, ensuring its original theme blended seamlessly into the digital space, and ultimately, the physical venue. The Wizard of Oz at Sphere was a mind-boggling project in terms of both technology and art, and at this intersection, Magnopus\u2019 solutions team and 3D artists pioneered one of the most advanced methods in creating an immersive experience.",
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
    description: { en: "A digital twin of SoFi Stadium reimagined as the LA28 Olympic aquatic center — built on Magnopus' OKO platform with Gensler as the centerpiece of a winning pitch for the 14,000-square-foot Olympics Experience Center. Cut load times in half and lifted runtime performance ~60% across web, mobile, and VR.", 
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
          en: "In a groundbreaking collaboration with Sphere Entertainment, Google, and Warner Bros., Magnopus successfully delivered an immersive Wizard of Oz experience for the 16K-resolution Las Vegas Sphere. As a key 3D artist on the project, I optimized a massive physical venue model into an accessible digital twin using the proprietary OKO cross-reality platform.",
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
      { text: { en: "The Olympics Experience Center is a 14,000-square-foot(1,300-square-meter) immersive venue planned near the Los Angeles Convention Center, designed to give visitors a behind-the-scenes look at the upcoming Olympic Games. To secure the project, Magnopus partnered with Gensler to demonstrate how integrating digital entertainment with architectural design can elevate the visitor experience. We anchored our pitch around a virtual replica of SoFi Stadium, building it as a fully navigable digital environment.", 
                ko: {
          title: "프로젝트 배경",
          items: [
            "LA28 Organizing Committee는 LA 컨벤션 센터 인근에 약 400평 규모의 '올림픽 익스피리언스 센터'를 조성하기 위해 XR 기반 체험관 디자인 RFP를 진행했다.",
            "프로젝트는 LA 지역의 스타디움과 랜드마크를 홍보하고, 올림픽 후원사 콘텐츠를 결합한 몰입형 공간 구축이 목표였으며, Magnopus를 포함한 약 10개 글로벌 스튜디오가 경쟁에 참여했다.",
            "Magnopus는 cross-reality 플랫폼 'OKO'를 기반으로, Gensler와 협력해 몰입형 디지털 체험관 제안안을 제작했다.",
          ]
        } } },
        { text: { en: "", 
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
      { text: { en: "I was responsible for establishing the visual direction and coordinating a team of five artists to build the stadium\u2019s architecture, including the swimming venue, broadcasting area, and surrounding plaza. The environment was heavily optimized to run seamlessly across web, mobile, and VR, allowing the LA28 committee to explore the proposed space from any device. Through rigorous iteration, we balanced performance and atmosphere, cutting load times in half and improving runtime performance by 60%, all while preserving the grand scale of an Olympic venue.", 
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
      { text: { en: "Our visual goal was to capture the immense scale and openness of SoFi Stadium converted into an Olympic aquatic center. Given the stadium\u2019s massive interior volume, we developed a comprehensive set design to seamlessly connect the competition area with the spectator experience. Leveraging our team\u2019s firsthand experience visiting the physical venue, we efficiently blocked out the foundational layouts for key areas, including the competition and practice pools, broadcasting zones, camera rails, and referee stations. We also drew inspiration from the Paris Olympic swimming facilities and the Lucas Oil Stadium, which served as an excellent real-world precedent for transforming a large arena into a swimming venue. Because our baseline requirement was to enable full interactivity within the OKO platform, we actively utilized its native VR and AR features to review and iterate our designs in a true spatial context.", 
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
      { text: { en: "The demo successfully illustrated how visitors would interact with the future Experience Center, helping Magnopus win the bid over ten competing studios. For our team, the project was an opportunity to realize the full potential of cross-reality technology: collaborative iteration across geographies, simulation prior to construction, and the creation of a digital space that goes beyond previewing a physical venue. We built an interactive Olympic stadium where users can experience the space not just as visitors, but through a variety of engaging roles.", 
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
    description: { en: "The tutorial space for Magnopus' OKO cross-reality platform — a futuristic museum that introduces new users to the studio's work. Authored a small library of tiling and trim materials (warm wood, polished marble, brushed metal, emissive planets) and established a Miro-based version-control workflow. Now the front door of OKO for 10+ clients including Deloitte, Gensler, and Amazon Studios.", 
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
      { summary: true, text: { en: "Welcome to OKO is the tutorial space for Magnopus' proprietary cross-reality platform, OKO—a futuristic museum designed to introduce new users to the studio's work and storytelling lineage. As a 3D Artist at Magnopus, I translated the concept into a fully realized environment and helped establish the workflow that supported the platform's wider rollout.", 
        ko: "핵심 참여 내용: 3D 아티스트로서 공간 전체 디자인 및 제작을 담당. Unreal 5을 기반으로 웹/모바일/VR 클라이언트 어디서든 탐험하고 상호작용할 수 있는 cross-platform 공간을 구현. Amazon Studios, Epic Games, Gensler, Deloitte 등 10여 개 이상의 글로벌 조직에 OKO를 소개하는 대표 공간으로 활용 중이다." } },
      { src: "welcomeoko-01.jpg", caption: "" },
      { text: { en: "OKO is Magnopus' real-time, cross-reality platform that lets teams and clients collaborate inside the same digital space across PC, mobile, and VR. The Welcome to OKO map serves as the front door of that platform—a guided walkthrough that introduces visitors to the studio's identity, capabilities, and past projects. The brief called for a futuristic museum that could feel grounded yet imaginative, with enough narrative pacing to carry first-time users through unfamiliar terrain while staying performant on every supported device.", 
        ko: "프로젝트 배경: Welcome to OKO는 기존 로우폴리의 튜토리얼 공간을 대체해, Unreal 5 기반의 게이미피케이션과 스토리텔링 경험을 통해 Magnopus의 cross-reality 플랫폼 'OKO'와 프로젝트 역량을 효과적으로 소개하기 위해 제작된 공식 온보딩·브랜딩 공간이다. 단순한 튜토리얼을 넘어 Magnopus의 프로젝트와 기술 방향성을 소개하는 미래 박물관 콘셉트의 가이디드 워크스루 경험을 목표로 삼았다." } },
      { src: "magoko_page_1.jpg", caption: "" },
      { pair: [
        { src: "magoko_page_2.webp", caption: "" },
        { src: "magoko_page_3.webp", caption: "" }
      ] },
      { text: { en: "Welcome to OKO replaced an earlier iteration of the tutorial space, with the brief calling for a refreshed visual identity that aligned with the platform's evolving brand direction. Working from a minimal set of concept sketches, I translated the level design into the museum environment, breaking the look down into a small library of distinctive material studies—warm wood, polished marble, brushed metal, and emissive planets that sit in the gallery like miniature suns. Each material was authored as a tiling or trim set, then layered through modular architecture to keep file sizes low without flattening the atmosphere. To keep the team aligned across iterations, I helped establish a visual version-control and feedback workflow in Miro, which made it easier to converge on shared decisions across reviews.", 
        ko: "핵심 역량: Unreal 5와 Maya, Blender, Substance, OKO 플랫폼 기반으로 스페이스 뮤지엄 에셋과 배경을 구축하고, cross-platform 워크플로우 및 Miro 기반 협업 프로세스를 정립해 제작 효율을 동시에 향상시켰다. 아트 디렉터 및 다른 자매 공간을 제작하던 시니어 엔바이러먼트 아티스트와의 긴밀한 협업을 위해, 주도적으로 Miro 기반의 비주얼 버전 관리 체계를 제안했으며 리뷰 및 피드백 프로세스를 체계화하는 데 기여했다." } },
      { src: "okodevelopgif.gif", caption: "" },
      { text: { en: "", 
        ko: "성과 및 협업 경험: OKO와 Unreal Engine 간의 호환성 이슈를 해결하기 위한 워크플로우 가이드를 정리·배포해 플랫폼 안정성과 협업 효율을 개선했으며, 이를 통해 후속 프로젝트의 프로덕션 시간을 약 50% 단축했다. 또한, 새로운 가이드로 20명 이상의 아티스트의 OKO 워크플로우 온보딩을 지원했다. 나아가 OKO 솔루션에 속한 플랫폼별 비주얼 편차를 유발하는 머티리얼 알고리즘들을 문서화해 엔지니어링 팀과 협업하며 리팩터링 방향을 제안했다." } },
      { src: "welcomeoko-02.png", caption: "" },
      { src: "Planeterium_blockout_WIP.png", caption: "" },
      { src: "Planeterium_WIP.jpg", caption: "" },
      { text: { en: "Welcome to OKO has since served as the primary introduction to Magnopus' platform for clients across more than ten organizations, including Deloitte, Gensler, and Amazon Studios. Beyond its role as a demo, it became a working blueprint—a space that proved how cross-reality environments can carry a studio's narrative while staying lightweight enough to live anywhere. Even now, it remains the first stop most new users take into OKO: a small museum that quietly does the work of welcoming an entire platform.", 
        ko: "협업을 통한 문제 해결 사례: Cross-reality 환경에서 발생하는 디바이스별 렌더링 편차 문제를 해결하기 위해 머티리얼 워크플로우를 분석·문서화하고 엔지니어링 팀과 협업해 표준화된 제작 가이드를 구축함으로써, 다양한 플랫폼에서도 안정적인 비주얼 품질을 유지할 수 있도록 했다." } },
      { pair: [
        { src: "Deloitte_onboarding_01.jpg", caption: "" },
        { src: "Deloitte_onboarding_02.jpg", caption: "" }
      ] },
      { text: { en: "Welcome to OKO has since served as the primary introduction to Magnopus' platform for clients across more than ten organizations, including Deloitte, Gensler, and Amazon Studios. Beyond its role as a demo, it became a working blueprint—a space that proved how cross-reality environments can carry a studio's narrative while staying lightweight enough to live anywhere. Even now, it remains the first stop most new users take into OKO: a small museum that quietly does the work of welcoming an entire platform.", 
        ko: "핵심 및 성과: Welcome to OKO는 Amazon Studios, Epic Games, Gensler, Deloitte 등 글로벌 조직에 Magnopus의 cross-reality 기술력과 immersive storytelling 역량을 소개하는 대표 데모 공간으로 자리 잡았으며, 프로젝트를 통해 환경 제작·워크플로우 설계·협업 프로세스를 개선하는 데 기여했다. 특히 Welcome to OKO의 스페이스 뮤지엄 제작 과정에서 발견된 문제들을 리팩터링하며 개발 및 타 부서와 협업해 축적한 데이터는, 이후 OKO 기반 프로젝트에 투입된 신규 팀원들이 워크플로우에 빠르게 적응할 수 있도록 돕는 핵심 가이드라인과 참고 자료로 활용되었다." } },
    ]
  },
  {
    id: "fallout-vault-33",
    name: { en: "The World of Fallout Sizzle—Vault 33, Magnopus", ko: "The World of Fallout 시즐 — Vault 33, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "A high-fidelity Vault 33 sizzle for Amazon Studios' Fallout Season 2 — a slice of the show's signature location, optimized for browser and AR delivery on Magnopus' OKO platform. Tightened source assets from 100+ MB per piece down to runtime weights that ran cleanly on every supported client. The pitch led to the launch of The World of Fallout at fallout-s2.amazonstudios.com.", 
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
      { summary: true, text: { en: "Before Amazon Studios commissioned Magnopus to launch The World of Fallout—an interactive web experience timed to the show's second season—the OKO team built a Vault 33 sizzle to anchor the pitch. As a 3D Artist on the OKO side, I optimized assets pulled from the series and helped stress-test whether the platform could carry Fallout's world at game-grade fidelity, straight into a web browser and on AR.", 
        ko: "핵심 참여 내용: 3D 아티스트로서 고사양 프로덕션 에셋을 웹·AR 환경에 최적화하고, 원작 특유의 포스트 아포칼립스 무드와 시네마틱 퀄리티를 유지한 채 브라우저에서 실시간으로 탐험 가능한 〈Fallout〉 세계를 구현하는 작업을 담당했다." } },
      { src: "flout-01.jpg", caption: "" },
      { text: { en: "Amazon Studios was looking for a way to extend the Fallout universe beyond the screen for Season 2—not a typical behind-the-scenes featurette, but an immersive, fully interactive space that fans could explore from any device. Magnopus' OKO platform sat at the center of those conversations, and the studio needed to show, not tell, what cross-reality could do for a property of this scale. The bet was that a high-fidelity slice of Vault 33—one of the show's signature locations—could land in a browser without a download, an install, or a compromise to the post-apocalyptic patina fans already loved.", 
        ko: "프로젝트 배경: Amazon Studios의 〈Fallout〉 시즌 2 홍보를 위해, Magnopus는 OKO 플랫폼 기반의 인터랙티브 웹 경험을 제작하며 원작 게임 수준의 공간 탐험을 웹·AR 환경에서 구현하고자 했다. 이를 통해 OKO 플랫폼이 대형 시네마틱 IP를 cross-reality 기반의 실시간 인터랙티브 경험으로 확장할 수 있음을 입증하고자 했다." } },
      { video: "IMG_9608.mp4", src: "IMG_9608-poster.jpg", caption: { en: "AR Test", ko: "AR 테스트" }, narrow: true },
      { text: { en: "On the OKO side, my focus was asset optimization. The source assets came straight from the production pipeline—high-fidelity Unreal builds originally authored for LED volumes and visual effects—which meant the platform's brief asked for the opposite of what those assets were tuned for: a real-time experience that had to stream cleanly to web and AR clients. The first stress test made the gap obvious—a single Vault asset weighed in at over 100 MB, far too heavy for cross-reality workflows to carry without stuttering. I worked through Vault 33 piece by piece, tightening geometry and material setups so the environment could hold its visual weight while running cleanly on browser and AR sessions alike. Every iteration was measured against runtime performance across clients; the goal was a hands-off, hiccup-free demo for an audience of decision-makers.", 
        ko: "핵심 역량: Maya, Substance, Unreal 5 기반의 환경 제작 및 최적화 역량을 활용해, 고사양 Vault 33 에셋을 웹·AR 런타임 환경에 맞춰 재구성하고 다양한 디바이스에서도 안정적인 퍼포먼스와 시각적 완성도를 유지했다. 3D 에셋과 텍스처를 최적화하고, cross-reality 플랫폼 특성을 고려한 반복적인 런타임 테스트를 통해 안정적인 워크플로우를 구축했다." } },
      { text: { en: "", 
        ko: "성과 및 협업 경험: 기가바이트 단위의 고사양 Vault 에셋을 웹·AR 기반 실시간 스트리밍 환경에 최적화하고, 버추얼프로덕션 아트팀과 OKO 개발 팀과의 협업을 통해 별도 설치 없이 안정적으로 구동되는 Vault 33 데모 구현 및 〈The World of Fallout〉 릴리즈에 기여했다. 타 팀과의 긴밀한 협업을 위해 반복적인 성능 검증을 수행하고, 이를 기반으로 한 구체적인 수치를 제시해 최적화에 필요한 리팩토링을 이끌어냈다. " } },
      { link: "https://fallout-s2.amazonstudios.com/#/caswennan", poster: "falloutsizzleloading.jpg", label: { en: "Step inside The World of Fallout", ko: "The World of Fallout 속으로 들어가기" }, aspect: "16/9" },
      { text: { en: "The pitch landed. Amazon Studios commissioned Magnopus to take the experience to launch as The World of Fallout, a web-based 360° exploration of locations from across both seasons that anyone can step into through a browser at fallout-s2.amazonstudios.com. For the team, the project was a clean demonstration of what OKO had been built for—turning a heavy, cinematic IP into a real-time space the public could explore from any device, no install required.", 
        ko: "협업을 통한 문제 해결 사례: 실시간 웹·AR 환경에서 반복적으로 발생하던 성능 병목 문제를 해결하기 위해 'Vault 33' 에셋 구조를 재정비하고 플랫폼별 런타임 테스트를 반복 수행하며, 안정적인 플레이 데모 구현을 위한 최적화 기준과 팀 간 합의된 목표치를 수립했다.  이를 통해 프로젝트의 최종 의사 결정권자 대상 피칭 환경에서도 끊김 없이 동작하는 cross-reality 데모 구현에 기여했다." } },
      { text: { en: "", 
        ko: "핵심 성과 및 기여: 본 프로젝트를 통해 Unreal 5 기반의 고사양 시네마틱 IP를 웹·AR 기반 게임 경험으로 최적화하는 실무 역량과 아트·개발 간 협업 조율 능력을 입증했으며, 결과적으로 〈The World of Fallout〉 정식 프로젝트 공개와 OKO 플랫폼의 기술력 검증에 기여했다." } }
    ]
  },
  {
    id: "gap-cross-reality-retail",
    name: { en: "Gap — Cross-Reality Retail Experience, Magnopus", ko: "Gap — 크로스 리얼리티 리테일 익스피리언스, Magnopus" },
    tag: { en: "Cross-Reality, Retail", ko: "크로스 리얼리티, 리테일" },
    wip: false,
    description: { en: "A cross-reality retail environment for Gap, built on Magnopus' OKO platform — a navigable digital flagship store optimized for web, mobile, and AR. Focus on accurate brand materiality, modular store fixtures, and real-time lighting that mirrors Gap's physical retail language.", 
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
      { summary: true, text: { en: "Before Amazon Studios commissioned Magnopus to launch The World of Fallout—an interactive web experience timed to the show's second season—the OKO team built a Vault 33 sizzle to anchor the pitch. As a 3D Artist on the OKO side, I optimized assets pulled from the series and helped stress-test whether the platform could carry Fallout's world at game-grade fidelity, straight into a web browser and on AR.", 
        ko: "핵심 참여 내용: 제한된 2주 일정과 외부 스튜디오 환경에서도 cross-reality 리테일 데모를 안정적으로 제작하며, 실시간 협업을 통해 위치 기반 콘텐츠 재구축·클라이언트별 렌더링 이슈 해결·디지털 사이니지와 연결을 성공적으로 수행했다. Gap의 경영진(CEO·CFO·CBSO)이 함께 참여했다." } },
      { src: "gap-01.png", caption: { en: "", ko: "" } },
      { text: { en: "", 
        ko: "프로젝트 배경: 본 프로젝트는 Magnopus가 2020 Expo Dubai 부터 자체 개발한 cross-reality 플랫폼 'OKO'를 엔터테인먼트 외 산업으로 확장하기 위해 시작됐다. 특히 패션·리테일 산업에서 XR 기반 쇼핑 경험 및 브랜드 체험 공간의 가능성을 검증하는 것을 목표로 삼았으며, 단순한 제품 전시가 아닌 실시간 인터랙티브 리테일 경험 구현에 초점을 맞췄다. 이에 따라 Gap 의류 및 브랜드 공간을 가상 환경에 구현하고, 웹·AR·디지털사이니지 상에서 동일한 사용자 경험을 제공할 수 있는 cross-platform 리테일 데모 제작이 추진됐다." } },
      { pair: [
        { src: "gap-02.jpg", caption: "" },
        { src: "gap-03.jpg", caption: "" }
      ] },
      { text: { en: "", 
        ko: "핵심 역량: Maya·Blender·Unreal 5 기반의 3D 콘텐츠 제작 역량과 cross-reality 플랫폼 운용 경험을 바탕으로, 패션 의류와 리테일 공간을 웹·AR·디지털사이니지에 최적화된 디지털 공간으로 구현했다. 특히 웹·AR 플랫폼 간 렌더링 차이를 최소화하기 위한 최적화 기준을 수립하고, 기존 프로젝트 데이터와 워크플로우 문서를 기반으로 렌더링 버그를 빠르게 분석해 해결했다." } },
      { src: "gap-08.jpg", caption: { en: "", ko: "" } },
      {pair: [
      { src: "gap-04.jpg", caption: { en: "", ko: "" } },
      { src: "gap-09.jpg", caption: { en: "", ko: "" } },  
      ] },
      { text: { en: "", 
        ko: "성과 및 협업 경험: 2주라는 짧은 기간 안에 cross-reality 기반 리테일 데모를 성공적으로 구축하고, Gap 경영진 대상 프레젠테이션을 안정적으로 완료해 파트너십 구축에 기여했다. 프로젝트 진행 과정에서는 프로덕션 팀·2D/3D 콘텐츠 팀·개발 팀이 동시에 협업하는 구조 속에서, 각 파트 간 기술적 요구사항과 일정 충돌을 조율하며 프로젝트 완성도를 유지했다. 또한 원격으로 QA팀과 협업 및 실시간 피드백 체계를 통해 새로운 스튜디오에서도 AR 정확성과 인터랙션 안정성을 확보했다." } },
      { src: "gap-05.jpg", caption: { en: "", ko: "" } },
      { text: { en: "",
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
      { text: { en: "", 
        ko: "핵심 성과 및 기여: 고난도 cross-reality 리테일 프로젝트를 제한된 기간과 외부 환경에서 성공적으로 수행하며, 기술 검증·협업 조율·실시간 문제 해결 역량을 입증했다. 특히 다양한 분야의 전문가들이 참여하는 프로젝트 중심에서 직접 클라이언트 및 경영진과 소통하며, 이를 바탕으로 관련된 팀들과 기술적 의사결정과 프로젝트 방향성을 조율하는 협업 경험을 축적했다. 또한 본 프로젝트는 OKO 플랫폼이 엔터테인먼트뿐 아니라 패션·리테일 산업에서도 활용될 수 있음을 보여준 사례로, Magnopus의 cross-reality 기술 응용 범위와 사업 확장 가능성을 효과적으로 입증했다." } },
      ]
  },
  {
    id: "fortnite-concert-snoopdogg-icespice",
    name: { en: "Fortnite Concert — Snoop Dogg & Ice Spice at Time Square, Magnopus", ko: "Fortnite 콘서트 — Snoop Dogg & Ice Spice at Time Square, Magnopus" },
    tag: { en: "Cross-Reality, Fortnite Concert", ko: "크로스 리얼리티, Fortnite 콘서트" },
    wip: false,
    description: { en: "A cross-reality retail environment for Gap, built on Magnopus' OKO platform — a navigable digital flagship store optimized for web, mobile, and AR. Focus on accurate brand materiality, modular store fixtures, and real-time lighting that mirrors Gap's physical retail language.", 
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
      { summary: true, text: { en: "", 
        ko: "핵심 참여 내용: 5인 규모의 OKO 포트나이트 TF팀에 3D 아티스트로 참여하여, 뉴욕 타임스퀘어 기반의 게임 공간 제작 담당 및 실시간 공연 시뮬레이션을 위한 파이프라인 구축에 참여했다. " } },
      { src: "fortnite-01.jpg", caption: { en: "", ko: "" } },
      { src: "fortnite-02.jpg", caption: "" },
      { text: { en: "", 
        ko: "프로젝트 배경: 본 프로젝트는 게임 내부 이벤트와 현실 공간 연출을 동시에 연결해야 하는 프로젝트 특성상, 실제 공연 현장과 가상 공연 환경을 하나의 cross-reality 워크플로우로 통합하는 것이 핵심 과제였다. 특히 Times Square 는 복잡한 행정 구역, 밀집된 군중 환경, 다수의 광고 전광판 소유권 구조 등으로 인해 물리적 리허설이 어려운 장소였으며, 이를 해결하기 위해 시뮬레이션이 가능한 별개의 게임 공간 제작이 진행됐다." } },
      { src: "fortnite-03.jpg", caption: { en: "", ko: "" } },
      { text: { en: "", 
        ko: "핵심 역량: Maya, Blender, Unreal Engine 5을 활용하여, 뉴욕 타임스퀘어를 본딴 공간을 구현했다. 모바일 및 웹 환경에서 군중, 카메라, 그리고 전광판 영상 시뮬레이션을 위해 최적화했다." } },
      { text: { en: "", 
        ko: "성과 및 협업 경험: 복잡한 도심-게임 공연 시뮬레이션 공간을 만들어, 전체 프로젝트를 81일이라는 제한된 일정 안에 성공적으로 완수하는데 기여했다. 아트 디렉터 및 콘서트 제작팀과 지속적인 피드백 루프를 유지하며, 실제 공연 이전 단계에서 애니메이션·카메라·군중 흐름 등을 디지털 공간 상에서 사전 검증할 수 있도록 지원했다. 이를 통해 공연 운영 리스크를 줄이고, 실시간 라이브 이벤트 제작 효율성을 향상시켰다." } },
      { src: "fortnite-07.jpg", caption: "" },
      { src: "fortnite-04.jpg", caption: "" },
      { text: { en: "", 
        ko: "협업을 통한 문제 해결 사례: 복잡한 전광판과 군중 밀집 환경으로 인해 발생할 수 있는 리스크를 방지하기 위한 정교한 인터랙티브 공간이 필요했고, 인터랙션 개발자 및 아트팀과 협업해 최적의 시뮬레이션 공간을 구축했다. 공연 연출의 시각적 완성도를 유지하면서도 인터랙션 안정성을 확보해야 했기 때문에, 각 팀의 요구사항을 합리적으로 조정하며 KPI를 조율했다. 이를 통해 안정적으로 구동될 수 있도록 대규모 씬을 완성했다." } },
      { src: "fortnite-06.jpg", caption: { en: "", ko: "" } },
      { text: { en: "", 
        ko: "핵심 및 성과: 본 프로젝트를 통해 군사·로지스틱스 분야의 디지털 트윈 및 실시간 시뮬레이션 기술이 엔터테인먼트 산업에 적용·확장되는 과정을 실무적으로 경험했다. 포트나이트 콘서트의 성공적인 운영에 기여하며, Magnopus가 이후 Daft Punk 관련 프로젝트에서도 후속 협업 기회를 확보하는 데 일조했다. 또한 OKO TF팀은 제한된 일정과 복잡한 게임 공간 환경 속에서도 실시간 콘텐츠 제작 및 최적화 역량을 입증하며, 대규모 cross-reality 엔터테인먼트 프로젝트 수행 경험을 축적했다." } },
      ]
  },
];

/* Combined lookup so openProject() can resolve any id from either section. */
const ALL_PROJECTS = [...PROJECTS, ...PROJECTS_SECONDARY];

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
    row1: ['secret-garden', 'sienar-chall-utilipede', 'vintage-telephone', 'japanese-izakaya', 'espresso-machine', 'cyberpunk-seoul'],
    row2: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'gap-cross-reality-retail'],
    label1: { en: 'Selected Work · 2026',              ko: '주요 작업 · 2026' },
    label2: { en: 'Selected Projects',                  ko: '다른 작업' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>—</em> 3D Artist',
        siteTagline:  '3D Worlds · Props · Environments',
        aboutHeading: 'Doyeon Kim <em>—</em> 3D Artist',
      },
      ko: {
        siteTitle:    '김도연 <em>—</em> 3D 아티스트',
        siteTagline:  '3D 월드 · 프롭 · 환경',
        aboutHeading: '김도연 <em>—</em> 3D 아티스트',
      },
    },
  },
  vfx: {
    row1: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    row2: ['wizard-of-oz-sphere', 'fortnite-concert-snoopdogg-icespice', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'gap-cross-reality-retail'],
    label1: { en: '3D · Environments & Animation · 2026', ko: '3D · 환경 & 애니메이션 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>—</em> 3D Artist',
        siteTagline:  '3D Environments · VFX · Virtual Production',
        aboutHeading: 'Doyeon Kim <em>—</em> 3D Artist',
      },
      ko: {
        siteTitle:    '김도연 <em>—</em> 3D 아티스트',
        siteTagline:  '3D 환경 · VFX · 버추얼 프로덕션',
        aboutHeading: '김도연 <em>—</em> 3D 아티스트',
      },
    },
  },
  lbe: {
    row1: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'gap-cross-reality-retail'],
    row2: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    label1: { en: 'Featured Project Contributions',       ko: '주요 작업' },
    label2: { en: 'Selected Work · 2026',                 ko: '주요 참여 프로젝트' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>—</em> 3D Spatial Designer',
        siteTagline:  '3D Content · 3D Architecture · Immersive Entertainment',
        aboutHeading: 'Doyeon Kim <em>—</em> 3D Spatial Designer',
        aboutIntro:   '5-year designer who has contributed to 3D content production across games, virtual production, and e-commerce at Magnopus, founded by Oscar-winning VFX artist Ben Grossmann. I&rsquo;ve worked on projects spanning the Las Vegas Sphere, Fortnite concerts, and the LA 2028 Olympics Experience Center — from 3D modelling to large-scale spatial design — pushing the boundaries of immersive entertainment.',
      },
      ko: {
        siteTitle:    '김도연 <em>—</em> 3D 공간 디자이너',
        siteTagline:  '3D 콘텐츠 · 공간 디자인 · 이머시브 엔터테인먼트',
        aboutHeading: '김도연 <em>—</em> 3D 공간 디자이너',
        aboutIntro:   '5년 차 디자이너로서, 오스카 시각효과상 수상자 Ben Grossmann이 설립한 Magnopus에서 게임, 버추얼 프로덕션, 이커머스 등 다양한 분야의 3D 콘텐츠 제작에 참여했습니다. 또한 라스베이거스 스피어, Fortnite 콘서트, 2028 LA 올림픽 체험 센터 등 다양한 프로젝트에서 3D 모델링부터 대규모 공간 제작까지 수행하며, 이머시브 엔터테인먼트의 경계를 확장하는 작업에 기여했습니다.',
      },
    },
  },
  game: {
    row1: ['cyberpunk-seoul', 'sienar-chall-utilipede', 'japanese-izakaya', 'secret-garden', 'vintage-telephone', 'espresso-machine'],
    row2: ['fallout-vault-33', 'fortnite-concert-snoopdogg-icespice', 'wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'gap-cross-reality-retail'],
    label1: { en: 'Game Environment Art · 2026',          ko: '게임 환경 아트 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
    overrides: {
      en: {
        siteTitle:    'Doyeon Kim <em>—</em> Environment Artist',
        siteTagline:  'Game Environments · Props · Real-Time Art',
        aboutHeading: 'Doyeon Kim <em>—</em> Environment Artist',
      },
      ko: {
        siteTitle:    '김도연 <em>—</em> 배경 아티스트',
        siteTagline:  '게임 환경 · 프롭 · 리얼타임 아트',
        aboutHeading: '김도연 <em>—</em> 배경 아티스트',
      },
    },
  },
  environment: {
    row1: ['fallout-vault-33', 'welcome-to-oko', 'fortnite-concert-snoopdogg-icespice', 'wizard-of-oz-sphere', 'la-2028-olympics', 'gap-cross-reality-retail'],
    row2: ['japanese-izakaya', 'sienar-chall-utilipede', 'cyberpunk-seoul', 'secret-garden', 'vintage-telephone', 'espresso-machine'],    label1: { en: 'Environment Design · 2026',            ko: '환경 디자인 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
  overrides: {
    en: {
      siteTitle:    'Doyeon Kim <em>—</em> 3D Environment Designer',
      siteTagline:  'Game Environments · Worldbuilding · VR/AR',
      aboutHeading: 'Doyeon Kim <em>—</em> 3D Environment Designer',
    },
    ko: {
      siteTitle:    '김도연 <em>—</em> 3D 배경 디자이너',
      siteTagline:  '게임 배경 · 월드빌딩 · VR/AR',
      aboutHeading: '김도연 <em>—</em> 3D 배경 디자이너',
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
  else if (host.includes('game')        || path.startsWith('/game')        || hash === 'game')        variant = 'game';
  else if (host.includes('environment') || path.startsWith('/environment') || hash === 'environment') variant = 'environment';

  if (variant) {
    try { sessionStorage.setItem('variant', variant); } catch (e) {}
    return variant;
  }
  try {
    const saved = sessionStorage.getItem('variant');
    if (saved && VARIANTS[saved]) return saved;
  } catch (e) {}
  return 'default';
}
