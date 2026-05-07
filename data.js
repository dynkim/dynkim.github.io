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
    description: { en: "A gothic cloister reclaimed by nature, built around a photogrammetry-scanned cupid fountain. Combines modular architecture with hand-scanned statuary, wrought-iron lighting, and a procedural floor material.", ko: "포토그래메트리로 스캔한 큐피드 분수를 중심으로, 자연이 다시 차지한 고딕 회랑 구성. 모듈러 아키텍처, 직접 스캔한 조각상, 단조 철 조명, 프로시저럴 바닥 머티리얼의 결합." },
    year: "2025",
    software: "Unreal 5 · Blender · ZBrush · Substance · RealityScan",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "organic modeling", "game ready"], ko: ["하드서피스 모델링", "오가닉 모델링", "게임 레디"] },
    thumb: "sg-03.jpg",
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
    description: { en: "A hard-surface study of the Sienar-Chall Utilipede Transport — a Star Wars canon utility freighter. Focus on mechanical paneling, weathered industrial metal, and faithful silhouette work from reference.", ko: "스타워즈 정사 우주의 유틸리티 화물선, 시나르-챌 유틸리피드 트랜스포트의 하드서피스 모델링 연구. 기계적 패널링, 풍화된 산업용 메탈, 레퍼런스에 충실한 실루엣 작업에 집중." },
    year: "2026",
    software: "Maya · Substance 3D Painter · Substance 3D Designer · Marmoset",
    role: { en: "Modelling, Texturing", ko: "모델링, 텍스처링" },
    tags: { en: ["hard-surface modeling", "mechanics", "sci-fi vehicle", "sci-fi", "game ready"], ko: ["하드서피스 모델링", "메커닉", "SF 비히클", "SF", "게임 레디"] },
    thumb: "sn-01.jpg",
    images: [
      { src: "sn-01.jpg", caption: { en: "Hero render — Sienar-Chall Utilipede Transport", ko: "히어로 렌더 — 시나르-챌 유틸리피드 트랜스포트" } },
    ]
  },
  {
    id: "vintage-telephone",
    name: { en: "Vintage Telephone", ko: "빈티지 전화기" },
    tag: { en: "Prop", ko: "프롭" },
    wip: false,
    description: { en: "A mid-century German industrial wall telephone — Fernsig-branded, cast housing, bakelite handset. Modelled and textured with a focus on worn paint, tarnished metal, and the brass nameplate.", ko: "Fernsig 브랜드의 캐스트 하우징과 베이클라이트 핸드셋을 갖춘, 20세기 중반 독일 산업용 벽걸이 전화기. 닳은 페인트, 변색된 메탈, 황동 명판에 초점을 맞춘 모델링·텍스처링." },
    year: "2025",
    software: "Blender · ZBrush · Substance · Marmoset",
    role: { en: "Modelling + Texturing", ko: "모델링 + 텍스처링" },
    tags: { en: ["hard-surface modeling", "mechanics", "game ready"], ko: ["하드서피스 모델링", "메커닉", "게임 레디"] },
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
    name: { en: "Japanese Izakaya", ko: "일본식 이자카야" },
    tag: { en: "Environment", ko: "환경" },
    wip: false,
    description: { en: "A late-night Tokyo izakaya — red leather stools, brass trim, paper lanterns, exposed ductwork. Focus on warm practical lighting, densely-dressed shelves of sake and whisky, and the interplay between industrial ceiling and traditional decor.", ko: "한밤의 도쿄 이자카야 — 빨간 가죽 스툴, 황동 트림, 종이 등롱, 노출 덕트로 구성한 환경. 따뜻한 실용 조명, 사케와 위스키로 빼곡한 선반, 산업적 천장과 전통적 장식의 대비에 집중." },
    year: "2025",
    software: "Unreal 5 · Blender · Substance",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "game ready"], ko: ["하드서피스 모델링", "게임 레디"] },
    thumb: "jb-01.jpg",
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
    description: { en: "A Dalla Corte EVO2 commercial espresso machine, dressed with travel stickers, a sticky note, and years of cafe wear. Modelled and textured as a hero prop for the Japanese Izakaya scene — the red anchor piece behind the bar.", ko: "Dalla Corte EVO2 상업용 에스프레소 머신을 여행 스티커, 포스트잇, 수년간의 카페 사용감으로 드레싱. Japanese Izakaya 씬의 메인 프롭이자 바 뒤를 빨갛게 잡아주는 앵커 피스로 모델링·텍스처링." },
    year: "2025",
    software: "Blender · Substance · Marmoset",
    role: { en: "Modelling + Texturing", ko: "모델링 + 텍스처링" },
    tags: { en: ["hard-surface modeling", "mechanics", "game ready"], ko: ["하드서피스 모델링", "메커닉", "게임 레디"] },
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
    description: { en: "Cyberpunk Seoul — an alley lined with neon signage in Korean, Japanese, Russian, and Arabic, volumetric holograms drifting overhead, and a sunset haze. Title graphics for a fictional short, 'Riders: Deliver for Future.'", ko: "사이버펑크 서울 — 한국어, 일본어, 러시아어, 아랍어 네온 간판이 늘어선 골목, 머리 위로 떠다니는 볼류메트릭 홀로그램, 노을빛 안개로 채운 환경. 가상의 단편 〈Riders: Deliver for Future〉를 위한 타이틀 그래픽." },
    year: "2025",
    software: "Unreal 5 · Blender · Substance",
    role: { en: "Full Environment — Modelling, Materials, Lighting", ko: "환경 전반 — 모델링, 머티리얼, 라이팅" },
    tags: { en: ["hard-surface modeling", "sci-fi", "futuristic", "game ready"], ko: ["하드서피스 모델링", "SF", "퓨처리스틱", "게임 레디"] },
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
    description: { en: "An immersive 16K Wizard of Oz experience for the 366-foot Las Vegas Sphere, built as a digital twin in Magnopus' OKO cross-reality platform alongside Sphere Entertainment, Google, and Warner Bros. Optimized a 6 GB BIM model into a real-time space testable from web, iOS, Android, and VR.", ko: "366피트(약 112m) 높이의 라스베이거스 스피어를 위한 16K 몰입형 〈오즈의 마법사〉 경험. Magnopus의 크로스 리얼리티 플랫폼 OKO 위에 디지털 트윈으로 구축. Sphere Entertainment, Google, Warner Bros.와의 협업으로 6GB BIM 모델을 웹·iOS·Android·VR에서 실시간 검증 가능한 공간으로 최적화." },
    year: "2025",
    software: "Unreal 5 · OKO · Maya · Substance",
    role: { en: "3D Artist — Asset Optimization, Digital Twin, Theme Integration", ko: "3D 아티스트 — 에셋 최적화, 디지털 트윈, 테마 통합" },
    tags: { en: ["hard-surface modeling", "AR/VR", "game ready"], ko: ["하드서피스 모델링", "AR/VR", "게임 레디"] },
    thumb: "spwz-01.jpg",
    images: [
      { summary: true, text: { en: "In a groundbreaking collaboration with Sphere Entertainment, Google, and Warner Bros., Magnopus successfully delivered an immersive Wizard of Oz experience for the 16K-resolution Las Vegas Sphere. As a key 3D artist on the project, I optimized a massive physical venue model into an accessible digital twin using the proprietary OKO cross-reality platform.", ko: "Sphere Entertainment, Google, Warner Bros.와의 획기적 협업으로, Magnopus가 16K 해상도의 라스베이거스 스피어를 위한 몰입형 〈오즈의 마법사〉 경험을 성공적으로 선보임. 이 프로젝트의 주요 3D 아티스트로서, 거대한 실제 공연장 모델을 자체 크로스 리얼리티 플랫폼 OKO 위에서 누구나 접근 가능한 디지털 트윈으로 최적화." } },
      { src: "spwz-04.webp", caption: "" },
      { text: { en: "In August 2025, Sphere Entertainment presented an immersive version of the classic film The Wizard of Oz at the 366-foot-tall, 16K-resolution grand-size Sphere. In collaboration with Google, Warner Bros., and Magnopus, the world-leading entertainment venue brought the 1939 film into the present, expanding the frames of the original movie to completely enclose the audience in a marvelous, interactive experience of its magical world.", ko: "2025년 8월, Sphere Entertainment는 366피트(약 112m) 높이, 16K 해상도의 거대 공연장 스피어에서 고전 영화 〈오즈의 마법사〉의 몰입형 버전을 선보였다. Google, Warner Bros., 그리고 Magnopus와 협업한 이 세계적 엔터테인먼트 베뉴는 1939년 작 원작 영화의 프레임을 확장하여, 관객을 그 마법 같은 세계로 완전히 감싸 안는 인터랙티브한 경험을 만들어냈다." } },
      { src: "spwz-03.jpg", caption: "" },
      { src: "spwz-02.jpg", caption: "" },
      { text: { en: "The Wizard of Oz at Sphere was realized through a joint effort between Sphere Entertainment, Magnopus, Warner Bros., and Google. As a 3D artist brought onto the project at Magnopus, I supported the team in making our artists\u2019 imagination and creativity tangible. Magnopus\u2019 proprietary cross-reality platform, OKO, played a crucial role in making this possible. Serving as our main tool, OKO allowed our team to craft a digital-twin simulated space of the Las Vegas Sphere, where all work was pre-rendered, tested, examined, and rehearsed before being put on the physical stage.", ko: "스피어에서의 〈오즈의 마법사〉는 Sphere Entertainment, Magnopus, Warner Bros., 그리고 Google이 함께한 결과물이다. Magnopus에서 이 프로젝트에 합류한 3D 아티스트로서, 저는 팀이 아티스트들의 상상력과 창의성을 손에 잡히는 형태로 구현해 나가는 과정을 지원했다. 이 모든 것을 가능하게 한 핵심에는 Magnopus가 자체 개발한 크로스 리얼리티 플랫폼 OKO가 있었다. 메인 툴로 활용된 OKO를 통해 우리 팀은 라스베이거스 스피어의 디지털 트윈 시뮬레이션 공간을 구축할 수 있었고, 실제 무대에 올리기 전 모든 작업을 사전에 렌더링하고 테스트하며, 검증하고 리허설할 수 있었다." } },
      { src: "spwz-05.png", caption: "" },
      { text: 
        { en: "We began with the fundamental step of digital construction: examining the BIM model of the Sphere, which was incredibly heavy at around 6 GB. Even after cropping the sections we needed for real-time simulation, half the size remained\u2014still far too heavy for cross-reality workflows. This required a dedicated team effort to reduce the size and optimize the environment, making it accessible across all client devices\u2014such as web, iOS, and Android\u2014while establishing the theme of the Wizard of Oz show in the digital space. This optimization opened up vast potential for testing and sharing among studio teams, on-site teams, and clients.", ko: "디지털 환경 구축의 출발점은, 약 6GB에 달하는 어마어마한 용량의 스피어 BIM 모델을 살펴보는 일이었다. 실시간 시뮬레이션에 필요한 부분만 잘라낸 뒤에도 절반에 가까운 용량이 남아 있었고, 그것조차 크로스 리얼리티 워크플로우에는 여전히 너무 무거웠다. 이 때문에 팀 차원의 집중적인 작업이 필요했고, 우리는 환경의 용량을 줄이고 최적화하여 웹, iOS, Android 등 모든 클라이언트 디바이스에서 접근 가능하도록 만들면서, 동시에 디지털 공간 안에 〈오즈의 마법사〉의 테마를 자리잡게 했다. 이 최적화 덕분에 스튜디오 팀, 현장 팀, 그리고 클라이언트 사이의 테스트와 공유가 광범위하게 가능해졌다." } ,},
      { video: "spwz-video-01.mp4", src: "sspwz-video-01-poster.jpg", caption: "" },
      { video: "spwz-video-02.mp4", src: "sspwz-video-02-poster.jpg", caption: "" },
      { text:
        { en: "After optimizing the Sphere\u2019s interior, we were left with its integral framework, allowing us to dive into the artistic tasks alongside other artists from Magnopus and Sphere Entertainment. We anchored the experience around two distinct visual moments from the movie: the prevailing sepia tones representing Kansas at the beginning, and the vibrant emerald tones of the Emerald City later on. Through numerous iterations, the optimized space gained color and was prepared for additional visual, architectural, and even pyrotechnic tests.", ko: "스피어 내부 최적화를 마치고 나니 핵심 골조만 남았고, 그제서야 우리는 Magnopus와 Sphere Entertainment의 다른 아티스트들과 함께 본격적인 아트 작업에 뛰어들 수 있었다. 우리는 영화 속 두 개의 뚜렷한 비주얼 순간을 경험의 중심축으로 삼았다 — 초반부 캔자스를 대표하는 세피아 톤, 그리고 후반부 에메랄드 시티의 생동감 넘치는 에메랄드 톤이 그 두 축이었다. 수많은 이터레이션을 거치며 최적화된 공간은 점차 색을 입었고, 추가적인 비주얼, 건축적, 더 나아가 불꽃 효과 테스트까지 받아낼 준비를 갖춰갔다." } ,},
      { video: "spwz_testvid_01.mp4", src: "spwz_testvid_01-poster.jpg", caption: "", narrow: true },
      { text: [
        { en: "Building a digital-twin space of the Sphere in a cross-reality platform eliminated the distance between the actual venue, the studio, and all involved teams, regardless of their physical location. This was made possible entirely by the platform\u2019s real-time interoperability, which allowed simulations to be conducted and shared with anyone, whether they were using a PC, Mac, mobile phone, or VR headset. To fully harness this magical technology, the 3D art team was essential in logically and artistically optimizing the data to minimize potential bottlenecks while connecting teams. Beyond technical optimization, we meticulously conveyed the design, feel, and mood of The Wizard of Oz, ensuring its original theme blended seamlessly into the digital space, and ultimately, the physical venue. The Wizard of Oz at Sphere was a mind-boggling project in terms of both technology and art, and at this intersection, Magnopus\u2019 solutions team and 3D artists pioneered one of the most advanced methods in creating an immersive experience.", ko: "크로스 리얼리티 플랫폼 위에 스피어의 디지털 트윈 공간을 구축한 덕분에, 실제 공연장과 스튜디오, 그리고 참여한 모든 팀 사이의 거리는 물리적 위치와 상관없이 사라졌다. 이것은 전적으로 플랫폼의 실시간 상호운용성 덕분이었으며, 이를 통해 PC든, Mac이든, 모바일이든, VR 헤드셋이든 누구나 시뮬레이션을 수행하고 공유할 수 있었다. 이 마법 같은 기술을 온전히 활용하기 위해서는, 3D 아트 팀이 잠재적인 병목을 최소화하면서 팀들을 연결할 수 있도록 데이터를 논리적이고 예술적으로 최적화하는 일이 필수였다. 기술적인 최적화를 넘어, 우리는 〈오즈의 마법사〉의 디자인과 감성, 무드를 세심하게 전달하여 작품의 원래 테마가 디지털 공간에, 그리고 종국에는 실제 공연장에 자연스럽게 녹아들도록 했다. 스피어에서의 〈오즈의 마법사〉는 기술과 아트 양면에서 경이로운 프로젝트였고, 그 교차점에서 Magnopus의 솔루션 팀과 3D 아티스트들은 몰입형 경험을 만들어내는 가장 진보된 방법 중 하나를 개척했다." }
      ] },
    ]
  },
  {
    id: "la-2028-olympics",
    name: { en: "LA 2028 Olympics Experience Center's Cross-reality Space Design, Magnopus", ko: "LA 2028 올림픽 체험관 크로스 리얼리티 공간 디자인, Magnopus" },
    tag: { en: "Cross-Reality, Architecture", ko: "크로스 리얼리티, 건축" },
    wip: false,
    description: { en: "A digital twin of SoFi Stadium reimagined as the LA28 Olympic aquatic center — built on Magnopus' OKO platform with Gensler as the centerpiece of a winning pitch for the 14,000-square-foot Olympics Experience Center. Cut load times in half and lifted runtime performance ~60% across web, mobile, and VR.", ko: "LA28 올림픽 수영 경기장으로 재해석한 SoFi Stadium의 디지털 트윈. Gensler와 함께 Magnopus의 OKO 플랫폼 위에 구축. 14,000평방피트(약 1,300제곱미터) 규모의 올림픽 체험관 수주를 따낸 피칭의 중심. 웹·모바일·VR 전반에서 로딩 시간 절반 단축, 런타임 성능 약 60% 향상." },
    year: "2024",
    software: "Unreal 5 · OKO · Maya · Substance",
    role: { en: "3D Artist — Visual Direction, Team Lead (5 artists)", ko: "3D 아티스트 — 비주얼 디렉션, 5인 팀 리드" },
    tags: { en: ["hard-surface modeling", "AR/VR", "game ready"], ko: ["하드서피스 모델링", "AR/VR", "게임 레디"] },
    thumb: "laoly-01.jpg",
    images: [
      { summary: true, text: { en: "Ahead of the 2028 Los Angeles Olympic Games, Magnopus received an RFP from the LA28 Organizing Committee to design an immersive Olympics Experience Center. As a 3D Artist at Magnopus, I developed a digital twin of SoFi Stadium within the OKO cross-reality platform, serving as the centerpiece of the pitch that won the commission.", ko: "2028 로스앤젤레스 올림픽을 앞두고, Magnopus가 LA28 조직위원회로부터 몰입형 올림픽 체험관 디자인 RFP를 받음. Magnopus의 3D 아티스트로서 크로스 리얼리티 플랫폼 OKO 안에 SoFi Stadium의 디지털 트윈 구축, 수주로 이어진 피칭의 중심에 자리매김." } },
      { video: "LA28_video_FINAL-crop.mp4", src: "LA28_video_FINAL-crop-poster.jpg", caption: "" },
      { src: "LAConventionCenter_Solar.webp", caption: "" },
      { text: { en: "The Olympics Experience Center is a 14,000-square-foot(1,300-square-meter) immersive venue planned near the Los Angeles Convention Center, designed to give visitors a behind-the-scenes look at the upcoming Olympic Games. To secure the project, Magnopus partnered with Gensler to demonstrate how integrating digital entertainment with architectural design can elevate the visitor experience. We anchored our pitch around a virtual replica of SoFi Stadium, building it as a fully navigable digital environment.", ko: "올림픽 체험관은 로스앤젤레스 컨벤션 센터 인근에 들어설 14,000평방피트(약 1,300제곱미터) 규모의 몰입형 공간으로, 방문객에게 다가오는 올림픽 경기의 비하인드 신을 보여주기 위해 기획되었다. 이 프로젝트를 따내기 위해 Magnopus는 Gensler와 손잡고, 디지털 엔터테인먼트와 건축 디자인을 결합했을 때 방문객 경험이 어떻게 한층 끌어올려질 수 있는지를 보여주고자 했다. 우리는 SoFi Stadium의 가상 복제본을 피칭의 중심에 두고, 이를 완전히 탐색 가능한 디지털 환경으로 구축했다." } },
      { pair: [
        { src: "InglewoodStadiumDesktop.webp", caption: "" },
        { src: "sofi_fly_over.gif", caption: "" }
      ] },
      { text: { en: "I was responsible for establishing the visual direction and coordinating a team of five artists to build the stadium\u2019s architecture, including the swimming venue, broadcasting area, and surrounding plaza. The environment was heavily optimized to run seamlessly across web, mobile, and VR, allowing the LA28 committee to explore the proposed space from any device. Through rigorous iteration, we balanced performance and atmosphere, cutting load times in half and improving runtime performance by 60%, all while preserving the grand scale of an Olympic venue.", ko: "저는 비주얼 디렉션을 잡고, 다섯 명의 아티스트로 구성된 팀을 조율하여 수영 경기장, 중계 구역, 그리고 주변 플라자를 포함한 스타디움 건축물을 구축하는 작업을 맡았다. 환경 전반은 웹, 모바일, VR에서 매끄럽게 구동되도록 강도 높은 최적화를 거쳤고, 그 결과 LA28 위원회는 어떤 디바이스에서든 제안된 공간을 자유롭게 탐색할 수 있었다. 끈질긴 이터레이션을 거치며 우리는 성능과 분위기 사이의 균형을 잡았고, 로딩 시간을 절반으로 줄이는 동시에 런타임 성능을 60% 끌어올렸으며, 그 와중에도 올림픽 베뉴의 웅장한 스케일은 그대로 살려두었다." } },
      { pair: [
        { src: "laoly_06.jpg", caption: "" },
        { src: "laoly_07.jpg", caption: "" }
      ] },
      { text: { en: "Our visual goal was to capture the immense scale and openness of SoFi Stadium converted into an Olympic aquatic center. Given the stadium\u2019s massive interior volume, we developed a comprehensive set design to seamlessly connect the competition area with the spectator experience. Leveraging our team\u2019s firsthand experience visiting the physical venue, we efficiently blocked out the foundational layouts for key areas, including the competition and practice pools, broadcasting zones, camera rails, and referee stations. We also drew inspiration from the Paris Olympic swimming facilities and the Lucas Oil Stadium, which served as an excellent real-world precedent for transforming a large arena into a swimming venue. Because our baseline requirement was to enable full interactivity within the OKO platform, we actively utilized its native VR and AR features to review and iterate our designs in a true spatial context.", ko: "비주얼 측면에서 우리의 목표는, 올림픽 수영 경기장으로 탈바꿈한 SoFi Stadium의 압도적인 스케일과 개방감을 그대로 담아내는 것이었다. 거대한 내부 볼륨을 가진 이 스타디움의 특성을 고려해, 경기 구역과 관중 경험이 자연스럽게 연결되도록 종합적인 세트 디자인을 구상했다. 직접 베뉴를 방문한 팀원들의 현장 경험을 바탕으로, 경기용·연습용 풀, 중계 구역, 카메라 레일, 심판석 등 핵심 영역의 기반 레이아웃을 효율적으로 잡아냈다. 또한 파리 올림픽의 수영 시설과, 대형 아레나를 수영 경기장으로 변환한 훌륭한 실제 선례인 Lucas Oil Stadium에서도 영감을 얻었다. 기본 요건이 OKO 플랫폼 안에서의 완전한 인터랙티비티를 구현하는 것이었기에, 우리는 OKO의 네이티브 VR과 AR 기능을 적극 활용해 진정한 공간적 맥락 안에서 디자인을 검토하고 반복적으로 다듬었다." } },
      { src: "laoly_15.png", caption: "" },
      { text: { en: "The demo successfully illustrated how visitors would interact with the future Experience Center, helping Magnopus win the bid over ten competing studios. For our team, the project was an opportunity to realize the full potential of cross-reality technology: collaborative iteration across geographies, simulation prior to construction, and the creation of a digital space that goes beyond previewing a physical venue. We built an interactive Olympic stadium where users can experience the space not just as visitors, but through a variety of engaging roles.", ko: "이 데모는 미래의 체험관에서 방문객이 어떻게 공간과 상호작용하게 될지를 설득력 있게 보여주었고, Magnopus가 열 곳이 넘는 경쟁 스튜디오를 제치고 수주를 따내는 데 결정적인 역할을 했다. 우리 팀에게 이 프로젝트는 크로스 리얼리티 기술의 잠재력을 온전히 실현해 볼 수 있는 기회였다 — 지리적 거리를 뛰어넘는 협업과 이터레이션, 시공 이전의 시뮬레이션, 그리고 단순히 실제 공연장을 미리 보여주는 데 그치지 않는 디지털 공간의 창출이 그 결과였다. 우리는 사용자가 단순한 방문객으로서가 아니라, 다양하고 흥미로운 역할로 공간을 체험할 수 있는 인터랙티브한 올림픽 스타디움을 만들어냈다." } },
    ]
  },
  {
    id: "welcome-to-oko",
    name: { en: "Cross-reality Platform Space Design—Welcome to OKO, Magnopus", ko: "크로스 리얼리티 플랫폼 공간 디자인 — Welcome to OKO, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "The tutorial space for Magnopus' OKO cross-reality platform — a futuristic museum that introduces new users to the studio's work. Authored a small library of tiling and trim materials (warm wood, polished marble, brushed metal, emissive planets) and established a Miro-based version-control workflow. Now the front door of OKO for 10+ clients including Deloitte, Gensler, and Amazon Studios.", ko: "Magnopus의 크로스 리얼리티 플랫폼 OKO의 튜토리얼 공간이자, 새로 합류한 사용자에게 스튜디오의 작업을 소개하는 미래형 미술관. 따뜻한 우드, 광택 마블, 브러시드 메탈, 이미시브 행성 등 타일링·트림 머티리얼의 작은 라이브러리 구축, Miro 기반의 비주얼 버전 관리 워크플로우 정립. 현재 Deloitte, Gensler, Amazon Studios 등 10여 곳 이상의 클라이언트에게 OKO를 소개하는 정문 역할 수행 중." },
    year: "2024",
    software: "Unreal 5 · OKO · Substance · Miro",
    role: { en: "3D Artist — Environment, Material Library, Workflow", ko: "3D 아티스트 — 환경, 머티리얼 라이브러리, 워크플로우" },
    tags: { en: ["hard-surface modeling", "futuristic", "AR/VR", "game ready"], ko: ["하드서피스 모델링", "퓨처리스틱", "AR/VR", "게임 레디"] },
    thumb: "welcomeoko-01.jpg",
    images: [
      { summary: true, text: { en: "Welcome to OKO is the tutorial space for Magnopus' proprietary cross-reality platform, OKO—a futuristic museum designed to introduce new users to the studio's work and storytelling lineage. As a 3D Artist at Magnopus, I translated the concept into a fully realized environment and helped establish the workflow that supported the platform's wider rollout.", ko: "Welcome to OKO는 Magnopus가 자체 개발한 크로스 리얼리티 플랫폼 OKO의 튜토리얼 공간이자, 새로 합류한 사용자에게 스튜디오의 작업과 스토리텔링 계보를 소개하기 위해 디자인된 미래형 미술관. Magnopus의 3D 아티스트로서 컨셉을 실제 환경으로 구현, 플랫폼의 본격적 확대 전개를 뒷받침할 워크플로우 정립에 기여." } },
      { src: "welcomeoko-01.jpg", caption: "" },
      { text: { en: "OKO is Magnopus' real-time, cross-reality platform that lets teams and clients collaborate inside the same digital space across PC, mobile, and VR. The Welcome to OKO map serves as the front door of that platform—a guided walkthrough that introduces visitors to the studio's identity, capabilities, and past projects. The brief called for a futuristic museum that could feel grounded yet imaginative, with enough narrative pacing to carry first-time users through unfamiliar terrain while staying performant on every supported device.", ko: "OKO는 Magnopus가 자체 개발한 실시간 크로스 리얼리티 플랫폼으로, 팀과 클라이언트가 PC, 모바일, VR을 가로지르는 동일한 디지털 공간 안에서 함께 협업할 수 있게 해준다. Welcome to OKO 맵은 그 플랫폼의 정문 역할을 한다 — 방문자에게 스튜디오의 정체성과 역량, 그리고 지나온 프로젝트들을 차근차근 안내하는 가이디드 워크스루다. 브리프는 단단하면서도 상상력 넘치는 미래형 미술관을 요구했고, 처음 들어선 사용자가 낯선 지형을 자연스럽게 통과할 수 있도록 충분한 내러티브의 호흡을 갖추는 동시에, 지원하는 모든 디바이스에서 매끄럽게 구동되어야 했다." } },
      { src: "magoko_page_1.jpg", caption: "" },
      { pair: [
        { src: "magoko_page_2.webp", caption: "" },
        { src: "magoko_page_3.webp", caption: "" }
      ] },
      { text: { en: "Welcome to OKO replaced an earlier iteration of the tutorial space, with the brief calling for a refreshed visual identity that aligned with the platform's evolving brand direction. Working from a minimal set of concept sketches, I translated the level design into the museum environment, breaking the look down into a small library of distinctive material studies—warm wood, polished marble, brushed metal, and emissive planets that sit in the gallery like miniature suns. Each material was authored as a tiling or trim set, then layered through modular architecture to keep file sizes low without flattening the atmosphere. To keep the team aligned across iterations, I helped establish a visual version-control and feedback workflow in Miro, which made it easier to converge on shared decisions across reviews.", ko: "Welcome to OKO는 이전 버전의 튜토리얼 공간을 대체하는 작업이었고, 브리프는 진화하는 플랫폼의 브랜드 방향성과 결을 맞춘 새로운 비주얼 아이덴티티를 요구했다. 최소한의 컨셉 스케치를 출발점으로 삼아, 저는 레벨 디자인을 미술관 환경으로 옮겨내면서 그 룩을 몇 가지 뚜렷한 머티리얼 스터디 — 따뜻한 우드, 광택을 살린 마블, 브러시드 메탈, 그리고 갤러리 안에 작은 태양처럼 떠 있는 이미시브 행성들 — 의 작은 라이브러리로 정리했다. 각 머티리얼은 타일링 혹은 트림 세트로 작성한 뒤, 모듈러 아키텍처를 통해 레이어드 방식으로 활용해, 파일 용량은 낮게 유지하면서도 분위기는 평면적으로 무너지지 않도록 했다. 또한 이터레이션 사이에서 팀이 한 방향을 보도록, Miro 위에서의 비주얼 버전 관리 및 피드백 워크플로우를 정립하는 데 일조했고, 이 덕분에 리뷰 때마다 합의에 이르는 일이 한결 수월해졌다." } },
      { src: "okodevelopgif.gif", caption: "" },
      { src: "welcomeoko-02.png", caption: "" },
      { text: { en: "Partway through production, I identified compatibility issues between Magnopus' OKO plug-in and Unreal Engine, where unsupported material functions were creating visual disparity across platforms and hindering cross-reality builds. I documented the affected nodes, requested refactoring from the engineering team, and put together a workflow guide for the wider 3D art group. The resulting documentation cut troubleshooting overhead significantly—follow-up projects saw production time drop by roughly 50%—and helped onboard 20+ artists from cross-functional teams and Sony PCL onto the OKO platform.", ko: "프로덕션 중반에, 저는 Magnopus의 OKO 플러그인과 Unreal Engine 사이의 호환성 이슈를 발견했다. 지원되지 않는 머티리얼 함수들이 플랫폼별로 비주얼 편차를 만들어 내고 있었고, 이는 크로스 리얼리티 빌드의 발목을 잡고 있었다. 저는 영향을 받는 노드들을 문서화하고, 엔지니어링 팀에 리팩터링을 요청한 뒤, 3D 아트 팀 전반을 위한 워크플로우 가이드를 정리했다. 그 결과 만들어진 문서는 트러블슈팅 부담을 크게 줄여, 이후 진행된 프로젝트들에서는 프로덕션 시간이 약 50% 단축되었고, 다양한 부서의 아티스트와 Sony PCL의 인력 등 20명 이상이 OKO 플랫폼에 안착하는 데 도움이 되었다." } },
      { src: "Planeterium_blockout_WIP.png", caption: "" },
      { src: "Planeterium_WIP.jpg", caption: "" },
      { text: { en: "Welcome to OKO has since served as the primary introduction to Magnopus' platform for clients across more than ten organizations, including Deloitte, Gensler, and Amazon Studios. Beyond its role as a demo, it became a working blueprint—a space that proved how cross-reality environments can carry a studio's narrative while staying lightweight enough to live anywhere. Even now, it remains the first stop most new users take into OKO: a small museum that quietly does the work of welcoming an entire platform.", ko: "Welcome to OKO는 이후 Deloitte, Gensler, Amazon Studios를 비롯한 10여 개 이상의 조직에 Magnopus의 플랫폼을 소개하는 가장 첫 번째 통로 역할을 해왔다. 데모로서의 역할을 넘어, 이 공간은 일종의 작동하는 청사진이 되었다 — 크로스 리얼리티 환경이 어떻게 스튜디오의 내러티브를 담아내면서도 어디서든 가볍게 작동할 수 있는지를 입증해 보인 공간이었다. 지금도 대부분의 새로운 사용자는 OKO에 발을 들이는 첫 길목으로 이 공간을 거쳐 간다 — 플랫폼 전체를 환영하는 일을, 조용히 해내고 있는 작은 미술관이다." } },
      { pair: [
        { src: "Deloitte_onboarding_01.jpg", caption: "" },
        { src: "Deloitte_onboarding_02.jpg", caption: "" }
      ] },
      //{ src: "Deloitte_onboarding_01.jpg", caption: "" },
      //{ src: "Deloitte_onboarding_02.jpg", caption: "" },
    ]
  },
  {
    id: "fallout-vault-33",
    name: { en: "The World of Fallout Sizzle—Vault 33, Magnopus", ko: "The World of Fallout 시즐 — Vault 33, Magnopus" },
    tag: { en: "Cross-Reality, Environment", ko: "크로스 리얼리티, 환경" },
    wip: false,
    description: { en: "A high-fidelity Vault 33 sizzle for Amazon Studios' Fallout Season 2 — a slice of the show's signature location, optimized for browser and AR delivery on Magnopus' OKO platform. Tightened source assets from 100+ MB per piece down to runtime weights that ran cleanly on every supported client. The pitch led to the launch of The World of Fallout at fallout-s2.amazonstudios.com.", ko: "Amazon Studios의 〈Fallout〉 시즌 2를 위한 Vault 33 시즐. 시리즈의 시그니처 로케이션을 한 조각 잘라낸 고퀄리티 슬라이스로, Magnopus의 OKO 플랫폼 위에서 브라우저·AR로 매끄럽게 전달되도록 최적화. 한 에셋당 100MB가 넘던 소스 자산을 모든 지원 디바이스에서 깔끔하게 구동되는 런타임 무게로 경량화. 이 피칭이 fallout-s2.amazonstudios.com에서 공개된 〈The World of Fallout〉의 정식 출시로 이어짐." },
    year: "2025",
    software: "Unreal 5 · OKO · Maya · Substance",
    role: { en: "3D Artist — Asset Optimization", ko: "3D 아티스트 — 에셋 최적화" },
    tags: { en: ["hard-surface modeling", "sci-fi", "AR/VR", "game ready"], ko: ["하드서피스 모델링", "SF", "AR/VR", "게임 레디"] },
    thumb: "flout-01.jpg",
    images: [
      { summary: true, text: { en: "Before Amazon Studios commissioned Magnopus to launch The World of Fallout—an interactive web experience timed to the show's second season—the OKO team built a Vault 33 sizzle to anchor the pitch. As a 3D Artist on the OKO side, I optimized assets pulled from the series and helped stress-test whether the platform could carry Fallout's world at game-grade fidelity, straight into a web browser and on AR.", ko: "Amazon Studios가 Magnopus에 시즌 2 공개 일정에 맞춘 인터랙티브 웹 경험 〈The World of Fallout〉을 의뢰하기 전, OKO 팀이 피칭의 중심을 잡아줄 Vault 33 시즐을 제작. OKO 측의 3D 아티스트로서 시리즈에서 가져온 에셋 최적화, 이 플랫폼이 〈Fallout〉의 세계관을 게임 수준의 퀄리티로 — 웹 브라우저 안에서 그리고 AR 위에서 그대로 — 구현해낼 수 있는지에 대한 스트레스 테스트 참여." } },
      { src: "flout-01.jpg", caption: "" },
      { text: { en: "Amazon Studios was looking for a way to extend the Fallout universe beyond the screen for Season 2—not a typical behind-the-scenes featurette, but an immersive, fully interactive space that fans could explore from any device. Magnopus' OKO platform sat at the center of those conversations, and the studio needed to show, not tell, what cross-reality could do for a property of this scale. The bet was that a high-fidelity slice of Vault 33—one of the show's signature locations—could land in a browser without a download, an install, or a compromise to the post-apocalyptic patina fans already loved.", ko: "Amazon Studios는 시즌 2를 맞아 〈Fallout〉의 세계를 화면 너머로까지 확장할 방법을 찾고 있었다 — 흔한 비하인드 영상이 아니라, 팬들이 어떤 디바이스에서든 탐험할 수 있는 몰입적이고 완전히 인터랙티브한 공간이었다. 그 논의의 한가운데에는 Magnopus의 OKO 플랫폼이 있었고, 스튜디오는 이 정도 규모의 IP에 크로스 리얼리티가 무엇을 해줄 수 있는지를 말이 아닌 실물로 보여줘야 했다. 우리의 베팅은 이것이었다 — 시리즈의 시그니처 로케이션 중 하나인 Vault 33의 고퀄리티 한 조각을, 다운로드도 설치도 없이, 그리고 팬들이 이미 사랑한 포스트 아포칼립스 특유의 묵은 질감을 양보하는 일 없이, 그대로 브라우저 안에 안착시킬 수 있다는 것." } },
      { video: "IMG_9608.mp4", src: "IMG_9608-poster.jpg", caption: { en: "AR Test", ko: "AR 테스트" }, narrow: true },
      // AR test footage / stills slot in here — pair { } or video { } block
      { text: { en: "On the OKO side, my focus was asset optimization. The source assets came straight from the production pipeline—high-fidelity Unreal builds originally authored for LED volumes and visual effects—which meant the platform's brief asked for the opposite of what those assets were tuned for: a real-time experience that had to stream cleanly to web and AR clients. The first stress test made the gap obvious—a single Vault asset weighed in at over 100 MB, far too heavy for cross-reality workflows to carry without stuttering. I worked through Vault 33 piece by piece, tightening geometry and material setups so the environment could hold its visual weight while running cleanly on browser and AR sessions alike. Every iteration was measured against runtime performance across clients; the goal was a hands-off, hiccup-free demo for an audience of decision-makers.", ko: "OKO 측에서 제가 집중한 것은 에셋 최적화였다. 소스 에셋은 LED 볼륨과 비주얼 이펙트를 위해 만들어진 고퀄리티 Unreal 빌드로, 프로덕션 파이프라인에서 그대로 넘어온 것들이었다. 다시 말해 플랫폼의 브리프는, 이 에셋들이 본래 맞춰져 있던 방향과 정반대를 요구했다 — 웹과 AR 클라이언트에 매끄럽게 스트리밍되어야 하는 실시간 경험이었던 것이죠. 첫 스트레스 테스트는 그 격차를 곧바로 드러냈다. Vault 에셋 하나의 용량이 100MB를 넘었고, 이는 크로스 리얼리티 워크플로우가 끊김 없이 감당하기에는 한참 무거운 무게였다. 저는 Vault 33을 조각 단위로 훑어가며, 환경이 비주얼 무게감은 그대로 가져가면서도 브라우저와 AR 세션 양쪽에서 깔끔하게 구동되도록 지오메트리와 머티리얼 셋업을 다듬어 나갔다. 모든 이터레이션은 클라이언트별 런타임 성능을 기준으로 검증되었고, 목표는 의사 결정권자들 앞에서 멈춤 없이 작동하는, 별도의 손길이 필요 없는 데모를 만드는 것이었다." } },
      // Second AR / web-build comparison shot ideal here
      { link: "https://fallout-s2.amazonstudios.com/#/caswennan", poster: "falloutsizzleloading.jpg", label: { en: "Step inside The World of Fallout", ko: "The World of Fallout 속으로 들어가기" }, aspect: "16/9" },
      { text: { en: "The pitch landed. Amazon Studios commissioned Magnopus to take the experience to launch as The World of Fallout, a web-based 360° exploration of locations from across both seasons that anyone can step into through a browser at fallout-s2.amazonstudios.com. For the team, the project was a clean demonstration of what OKO had been built for—turning a heavy, cinematic IP into a real-time space the public could explore from any device, no install required.", ko: "피칭은 통했다. Amazon Studios는 Magnopus에 이 경험을 〈The World of Fallout〉의 형태로 정식 공개하는 작업을 의뢰했고, 그 결과 누구나 fallout-s2.amazonstudios.com 주소를 통해 브라우저로 발을 들일 수 있는, 시즌 1·2의 로케이션을 360°로 탐험하는 웹 기반 경험이 탄생했다. 우리 팀에게 이 프로젝트는 OKO가 무엇을 위해 만들어졌는지를 정직하게 보여준 사례였다 — 무게감 있는 시네마틱 IP를, 별도의 설치 없이 누구나 어떤 디바이스에서든 탐험할 수 있는 실시간 공간으로 옮겨놓는 일이었다." } }
    ]
  },
];

/* Combined lookup so openProject() can resolve any id from either section. */
const ALL_PROJECTS = [...PROJECTS, ...PROJECTS_SECONDARY];

/* ================================================
   VARIANT SYSTEM — controls project order per domain
   Edit the id arrays below to reorder for each audience.
   ================================================ */
const VARIANTS = {
  default: {
    row1: ['secret-garden', 'sienar-chall-utilipede', 'vintage-telephone', 'japanese-izakaya', 'espresso-machine', 'cyberpunk-seoul'],
    row2: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33'],
    label1: { en: 'Selected Work · 2026',              ko: '주요 작업 · 2026' },
    label2: { en: 'Selected Projects',                  ko: '다른 작업' },
  },
  vfx: {
    // VFX studios: 3D environments & modeling-heavy work first
    row1: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    row2: ['wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko', 'fallout-vault-33'],
    label1: { en: '3D · Environments & Animation · 2026', ko: '3D · 환경 & 애니메이션 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
  },
  lbe: {
    // Location/XR studios: real-world & location-based projects first
    row1: ['la-2028-olympics', 'wizard-of-oz-sphere', 'welcome-to-oko', 'fallout-vault-33'],
    row2: ['secret-garden', 'japanese-izakaya', 'cyberpunk-seoul', 'sienar-chall-utilipede', 'vintage-telephone', 'espresso-machine'],
    label1: { en: 'Location & Experience Design · 2026',  ko: '공간 & 체험 디자인 · 2026' },
    label2: { en: '3D Art',                               ko: '3D 아트' },
  },
  game: {
    // Game studios: game-engine environments & props first
    row1: ['cyberpunk-seoul', 'sienar-chall-utilipede', 'japanese-izakaya', 'secret-garden', 'vintage-telephone', 'espresso-machine'],
    row2: ['fallout-vault-33', 'wizard-of-oz-sphere', 'la-2028-olympics', 'welcome-to-oko'],
    label1: { en: 'Game Environment Art · 2026',          ko: '게임 환경 아트 · 2026' },
    label2: { en: 'Selected Projects',                    ko: '다른 작업' },
  },
};

/* Returns 'vfx', 'lbe', 'game', or 'default'.
   Matches against hostname (production: vfx.doyeonkim.com, doyeonkim-lbe.netlify.app, …)
   or URL path (local/dev: /LBE/, /Game/, /vfx/). */
function detectVariant() {
  const host = window.location.hostname;
  const path = window.location.pathname.toLowerCase();
  if (host.includes('vfx')  || path.startsWith('/vfx'))  return 'vfx';
  if (host.includes('lbe')  || path.startsWith('/lbe'))  return 'lbe';
  if (host.includes('game') || path.startsWith('/game')) return 'game';
  return 'default';
}
