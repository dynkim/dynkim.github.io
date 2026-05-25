# Notion으로 사이트 콘텐츠 관리하기 — 실행 계획서 (초보자용)

이 문서는 지금 `data.js` 파일에 손으로 적어 넣고 있는 프로젝트 글들을 **Notion에서 편집하면 사이트에 자동으로 반영되도록** 만드는 계획서입니다. 코딩에 익숙하지 않아도 따라갈 수 있게 풀어 썼습니다.

---

## 이게 왜 필요한가?

**지금 상황**:
- 글을 수정하려면 → 코드 에디터(VS Code 등)로 `data.js` 파일을 열고 → 따옴표·콤마·괄호 사이를 조심하면서 텍스트만 바꾸고 → git으로 GitHub에 올려야 함
- 단점: 글 한 줄 고치려고 코드를 만지게 됨. 실수로 따옴표 하나 빼먹으면 사이트 전체가 깨질 수 있음.

**바꾸려는 방향**:
- 글을 수정하려면 → Notion에서 그냥 글을 고침 → 버튼 한 번 누르면 사이트가 알아서 업데이트됨
- 코드를 직접 안 건드려도 됨. Notion의 깔끔한 편집기에서 작업.

---

## 큰 그림 (어떻게 작동하나?)

```
   [Notion]           [GitHub Actions]         [data.js]          [사이트]
  글을 편집함  →  자동 실행되는 로봇이  →  새로 만들어짐  →   업데이트됨
                  Notion 내용을 읽어서
                  파일로 만들어줌
```

용어 풀이:
- **Notion** → 우리가 잘 아는 그 노션. 여기를 "콘텐츠 편집 도구"로 사용.
- **GitHub Actions** → GitHub에 있는 무료 자동화 서비스. "이런 일이 생기면 이런 작업을 해줘"라고 미리 시켜둘 수 있음. 예: "버튼을 누르면 Notion에서 데이터를 가져와서 파일을 만들어줘."
- **data.js** → 지금 사이트가 사용하는 콘텐츠 파일. 이걸 사람이 직접 안 쓰고, 자동으로 만들어지게 바꿈.

**중요 원칙**: 브라우저(사이트 방문자)는 절대로 Notion에 접속하지 않음. 왜냐하면:
1. Notion API 키가 노출되면 보안 문제
2. 무료 Notion API는 요청 한도가 빡빡해서 매번 부르면 한도 초과
3. 그래서 **빌드할 때만** 한 번 Notion에서 가져와서 파일로 저장해두는 방식이 안전함

---

## 이미지는 어떻게?

**이미지/비디오는 Notion에 안 올립니다.** 파일명만 텍스트로 적어둠.

이유:
- 무료 Notion은 파일 저장 용량이 제한됨
- API로 이미지 가져오는 게 느림
- 지금처럼 `images/` 폴더에 두는 게 훨씬 빠르고 무료

Notion에는 `"spwz-01.jpg"` 같은 파일명만 적고, 실제 이미지는 지금처럼 GitHub 저장소의 `images/` 폴더에서 관리.

---

## Notion에 만들어야 할 데이터베이스 3개

> **Notion 데이터베이스란?** → 엑셀 시트와 비슷한 표 형태. 각 행(row)이 하나의 항목, 각 열(column)이 항목의 속성. Notion에서는 "Table"이라고 부름.

### 데이터베이스 1: `Projects` (프로젝트 목록)

각 프로젝트가 한 행. 예를 들면 wizard-of-oz-sphere가 한 행, vintage-telephone이 한 행.

| 컬럼 이름 | Notion 타입 | 무엇을 적나? |
|---|---|---|
| ID (slug) | Title | 고유 식별자 (예: `wizard-of-oz-sphere`) |
| Section | Select | `primary` 또는 `secondary` (메인 작업인지 회사 작업인지) |
| Order | Number | 같은 섹션 안에서의 순서 |
| Name EN / Name KO | Text | 프로젝트 이름 (영어/한글) |
| Tag EN / Tag KO | Text | 짧은 태그 (예: "Environment" / "환경") |
| WIP | Checkbox | 작업 중인지 (true면 "WIP" 표시) |
| Description EN / KO | Long text | 카드에 표시되는 짧은 설명 |
| Year | Text | 작업 연도 |
| Client | Text | 클라이언트 |
| External Partner | Text | 외부 파트너 |
| Status EN / KO | Text | 진행 상태 (예: "Released" / "출시됨") |
| Software | Text | 사용한 프로그램들 |
| Role EN / KO | Text | 본인의 역할 |
| Tags EN / KO | Multi-select | 여러 개의 태그 |
| Thumb | Text (파일명) | 홈에 보이는 썸네일 이미지 파일명 |
| Thumb Video | Text (파일명) | 썸네일 비디오 (선택) |
| Image Blocks | Relation → DB 2 | 이 프로젝트의 갤러리 블록들 연결 |

> **Relation이란?** → Notion에서 한 데이터베이스의 행을 다른 데이터베이스의 행과 연결하는 기능. 여기서는 "이 프로젝트는 이런 갤러리 블록들을 가지고 있다"고 연결.

### 데이터베이스 2: `ImageBlocks` (갤러리의 각 블록)

프로젝트 상세 페이지에 들어가는 이미지, 비디오, 텍스트 블록 하나하나를 각 행으로 저장. 예를 들어 wizard-of-oz-sphere에는 20개 정도의 블록이 있으니 → ImageBlocks DB에 20개의 행.

| 컬럼 이름 | Notion 타입 | 용도 |
|---|---|---|
| Title | Title | 식별용 이름 (예: `wizard-task`, `wizard-img-04`) |
| Project | Relation → DB 1 | 어떤 프로젝트에 속하는지 |
| Order | Number | **순서가 중요!** 10, 20, 30... 권장 (사이에 끼워넣기 좋음) |
| Kind | Select | `image` / `video` / `pair` / `text` / `link` 중 하나 |
| Is Summary | Checkbox | 큰 따옴표 강조 블록인지 |
| **Section Title KO** | Text | 라벨 블록의 한국어 제목 (예: "Task") |
| **Section Title EN** | Text | 영어 제목 (현재는 미사용) |
| **Items KO** | Long text | 라벨 블록의 한국어 항목들. **한 줄에 한 문장씩** 입력 |
| **Items EN** | Long text | 영어 항목들 |
| **Prose KO** | Long text | 라벨 없는 일반 문단 (한국어) |
| **Prose EN** | Long text | 라벨 없는 일반 문단 (영어) |
| **Bulleted** | Checkbox | 불릿(•) 표시 여부 (summary 블록만 사용) |
| Src | Text (파일명) | 이미지 파일명 |
| Video | Text (파일명) | 비디오 파일명 |
| Caption EN / KO | Text | 이미지/비디오 캡션 |
| Narrow | Checkbox | 비디오를 좁게 표시 |
| Aspect | Text | 가로세로 비율 (예: `16/9`) |
| Link URL | URL | 외부 링크 |
| Link Label EN / KO | Text | 링크 버튼에 표시될 글자 |
| Poster | Text (파일명) | 링크 카드의 포스터 이미지 |
| Pair Src A / B | Text | 2장 나란히 표시할 때 |
| Pair Caption A EN/KO, B EN/KO | Text | pair 항목 캡션 |

> 💡 **Order 컬럼이 왜 중요해?** → Notion API는 행을 가져올 때 순서를 보장하지 않음. 그래서 10, 20, 30 같은 숫자를 직접 매겨야 함. 10 단위로 매기는 이유는 나중에 사이에 끼워넣기 쉬워서 (예: 15번이 11에 들어감).

### 데이터베이스 3: `Variants` (variant별 순서)

각 variant (default, vfx, lbe, game)가 한 행. 어떤 프로젝트가 어떤 순서로 보일지 결정.

| 컬럼 이름 | Notion 타입 | 매핑 |
|---|---|---|
| Name | Title | `default` / `vfx` / `lbe` / `game` |
| Row 1 Order | Text | 위 줄에 보일 프로젝트 id들, 콤마로 구분 |
| Row 2 Order | Text | 아래 줄에 보일 프로젝트 id들, 콤마로 구분 |
| Label 1 EN / KO | Text | 위 줄 제목 |
| Label 2 EN / KO | Text | 아래 줄 제목 |

---

## ImageBlocks 입력 예시 (실제 어떻게 적나?)

### 예시 A — 일반 이미지

```
Title:     wizard-img-04
Order:     50
Kind:      image
Src:       spwz-04.webp
```

### 예시 B — 라벨 블록 (한국어), 영문은 일반 문단

한국어는 라벨 + 항목 리스트, 영문은 그냥 문단으로 표시하고 싶을 때:

```
Title:             wizard-task
Order:             80
Kind:              text
Is Summary:        ☐
Bulleted:          ☐
Section Title KO:  Task
Items KO:
  Sphere BIM 모델을 분석하고 실시간 협업이 가능한 디지털 공간 구축.
  영화의 두 핵심 비주얼 테마(캔자스·에메랄드 시티)를 공간 디자인으로 재해석.
  Sphere Entertainment 공연팀과 협업해 공연 소품 디자인 및 현장 실물 디자인 지원.
Prose EN:
  The Wizard of Oz at Sphere was realized through a joint effort between...
```

### 예시 C — Summary 라벨 블록 (큰 따옴표 + 불릿)

```
Title:             wizard-summary
Order:             10
Kind:              text
Is Summary:        ☑
Bulleted:          ☑
Section Title KO:  핵심 성과
Items KO:
  약 6GB 규모의 Sphere BIM 데이터를 바탕으로 오즈의 마법사 비주얼을 공간 디자인으로 구현.
  캔자스(세피아 톤)·에메랄드시티(에메랄드 톤) 테마의 공연 및 비주얼·특수효과 시뮬레이션.
  Sphere Entertainment 공연팀과 협업하며 오즈의 왕좌 등 현장 실물 디자인에 기여.
  스튜디오·현장·클라이언트 간 실시간 원격 협업 워크플로우 구축.
Prose EN:
  In a groundbreaking collaboration with Sphere Entertainment, Google, and Warner Bros....
```

### 예시 D — 비디오

```
Order:        70
Kind:         video
Video:        spwz-video-01.mp4
Src:          spwz-video-01-poster.jpg
Caption KO:   카메라 플라이스루
Caption EN:   Camera flythrough
```

### 예시 E — Pair (좌우 2장)

```
Order:        90
Kind:         pair
Pair Src A:   InglewoodStadiumDesktop.webp
Pair Src B:   sofi_fly_over.gif
```

### 예시 F — 외부 링크 카드

```
Order:           60
Kind:            link
Link URL:        https://fallout-s2.amazonstudios.com/#/caswennan
Poster:          falloutsizzleloading.jpg
Aspect:          16/9
Link Label KO:   The World of Fallout 속으로 들어가기
Link Label EN:   Step inside The World of Fallout
```

---

## 텍스트 변환 규칙 (자동화 스크립트가 따를 로직)

> 이 부분은 자동화 스크립트가 어떻게 동작해야 하는지에 대한 설명. 직접 코딩할 필요 없고, 빌드 스크립트를 만들 때 이 규칙을 따르면 됨.

ImageBlock의 `Kind`가 `text`인 행에 대해:

```
한국어 값을 결정:
  if "Items KO"가 비어있지 않다면:
    → { title, items, bulleted } 객체로 만들기 (라벨 블록)
  elif "Prose KO"가 비어있지 않다면:
    → 그냥 문자열 그대로 (일반 문단)
  else:
    → 빈 문자열

영어 값도 같은 규칙으로 결정

결과:
  { text: { en: 영어값, ko: 한국어값 }, summary: Is Summary 여부 }
```

**왜 이렇게 복잡해?** → 라벨 블록(예: "Task: 1, 2, 3")과 일반 문단(예: 그냥 줄글)을 같은 Notion 행으로 표현할 수 있어야 하기 때문. 영어/한국어가 서로 다른 형태여도 됨.

---

## 만들어야 할 파일들

### 새로 생기는 파일

```
dynkim.github.io/
├── package.json                     ← Node.js 프로젝트 정의 파일
├── .env.example                     ← 비밀번호 어떻게 적는지 예시
├── .gitignore                       ← git에 안 올릴 파일 목록 (.env 등)
├── scripts/
│   ├── build-data.mjs               ← Notion에서 읽어서 data.js 만드는 메인 스크립트
│   ├── seed-notion.mjs              ← 현재 data.js를 Notion으로 한 번에 옮기는 일회용 스크립트
│   └── data-template.mjs            ← data.js 상단의 고정된 부분 (detectVariant 함수 등)
└── .github/workflows/
    └── sync-notion.yml              ← GitHub Actions가 따를 자동화 절차
```

용어 풀이:
- **Node.js** → JavaScript를 브라우저 밖에서도 실행할 수 있게 해주는 도구. 빌드 스크립트를 실행할 때 사용.
- **`.mjs` 확장자** → 모듈 방식의 JavaScript 파일. `.js`와 동일하지만 `import`/`export` 문법을 쓸 때 사용.
- **`.env` 파일** → 비밀번호·API 키 같은 민감 정보를 보관하는 파일. 절대 git에 올리면 안 됨.
- **`.gitignore`** → "이 파일들은 git에 안 올릴 거야"라고 알려주는 목록 파일.

### 기존 파일은 안 바뀜

`rendering.js`, `index.html`, `i18n.js`, `index.css`, `main.js` 등 사이트 작동 코드는 **그대로**. `data.js`만 사람이 안 쓰고 자동으로 만들어지게 바뀜.

### `package.json` (간단한 설정 파일)

```json
{
  "name": "dynkim-portfolio-build",
  "type": "module",
  "scripts": {
    "build": "node scripts/build-data.mjs",
    "seed": "node scripts/seed-notion.mjs"
  },
  "dependencies": {
    "@notionhq/client": "^2.2.15"
  }
}
```

이 파일이 있으면 터미널에서 `npm run build` 같은 명령으로 스크립트를 실행할 수 있음.
- **dependencies** → 이 프로젝트가 사용하는 외부 라이브러리. `@notionhq/client`는 Notion 공식 라이브러리.

### `.env.example` (비밀번호 양식)

```
NOTION_TOKEN=secret_xxxxxxxx
NOTION_DB_PROJECTS=32자리해시
NOTION_DB_BLOCKS=32자리해시
NOTION_DB_VARIANTS=32자리해시
```

이 양식대로 `.env` 파일을 만들어서 실제 값을 채워 사용. `.env`는 절대 GitHub에 올리지 않음 (`.gitignore`에 등록).

### GitHub Actions 설정 (`.github/workflows/sync-notion.yml`)

```yaml
name: Sync Notion → data.js
on:
  workflow_dispatch:        # 수동 트리거 (GitHub에서 버튼 누르면 실행)
  schedule:
    - cron: '*/30 * * * *'  # 30분마다 자동 실행 (선택)

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run build
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_DB_PROJECTS: ${{ secrets.NOTION_DB_PROJECTS }}
          NOTION_DB_BLOCKS: ${{ secrets.NOTION_DB_BLOCKS }}
          NOTION_DB_VARIANTS: ${{ secrets.NOTION_DB_VARIANTS }}
      - name: Commit if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add data.js
          git diff --staged --quiet || git commit -m "sync: notion content"
          git push
```

용어 풀이:
- **workflow_dispatch** → GitHub 웹에서 "Run workflow" 버튼을 만들어 수동 실행하게 해줌
- **cron** → 정해진 시간에 자동 실행하는 스케줄. `*/30 * * * *`는 "매 30분마다"라는 뜻
- **secrets** → GitHub에 저장된 비밀 정보. 코드에 노출되지 않게 안전하게 보관됨

---

## 점진적으로 옮겨도 됨 (한 번에 안 해도 OK)

> **한 번에 모든 프로젝트를 라벨 블록 형식으로 옮길 필요 없음.**

다른 프로젝트들의 현재 데이터 (`"ko": "핵심 성과: 5인 팀을 공동 리드..."` 같은 문자열 형태)는 Notion의 **`Prose KO`** 컬럼에 그대로 붙여넣으면 똑같이 작동.

라벨 블록(노란 소제목 + 줄바꿈 항목)으로 바꾸고 싶은 프로젝트만 골라서 Notion에서 `Prose KO` 내용을 `Section Title KO` + `Items KO`로 옮기면 됨.

**즉, "옮기고 싶을 때 옮기면 되는 작업"으로 만들어 부담을 분산.**

---

## 실행 순서 (단계별로)

### 1단계 — Notion 워크스페이스 준비 (코드 0줄)

1. Notion에서 새 페이지 만들기 → 이름은 `Portfolio CMS`
2. 그 페이지 안에 데이터베이스 3개 생성 (Projects, ImageBlocks, Variants) — 위 스키마대로
3. https://notion.so/my-integrations 에 접속 → 새 integration 만들기 → **Internal Integration Token** (긴 비밀 문자열) 복사해두기
4. 각 데이터베이스 우상단의 `•••` → Connections → 만든 integration 추가 (이게 있어야 API로 접근 가능)
5. 각 데이터베이스 URL에서 **32자리 해시 ID** 복사하기
   - URL이 `https://notion.so/myws/abc123...?v=...` 라면 → `abc123...` 부분이 ID
6. **한 프로젝트만 직접 입력해서 테스트** → `vintage-telephone` 추천 (블록이 단순해서 시작하기 좋음)

### 2단계 — 빌드 스크립트 작성

1. `package.json`, `.env.example`, `.gitignore` 만들기
2. `scripts/data-template.mjs` 작성 — `detectVariant` 함수 같은 고정된 부분
3. `scripts/build-data.mjs` 작성 — 핵심 로직:
   - Notion API로 3개 DB 모두 가져오기 (페이지네이션 처리)
   - ImageBlocks를 Project별로 묶고 Order 순서로 정렬
   - 위 "텍스트 변환 규칙"에 따라 JS 객체로 만들기
   - 결과를 `data.js` 형태로 파일에 쓰기
4. `node scripts/build-data.mjs` 실행 → 만들어진 `data.js`를 현재 `data.js`와 비교
   - 정확히 일치할 때까지 디버깅

> **페이지네이션이란?** → Notion API는 한 번에 최대 100개 행만 줌. 그래서 100개 넘으면 "다음 페이지"를 반복해서 요청해야 함. 흔한 패턴이라 라이브러리에 기본 지원.

### 3단계 — 기존 데이터를 Notion으로 한꺼번에 옮기기 (일회성)

1. `scripts/seed-notion.mjs` 작성 → 현재 `data.js`를 읽어서 Notion에 자동으로 채워넣는 스크립트
2. **요청 속도 제한 주의**: 요청 사이에 350밀리초 대기 (`~3 req/sec` 무료 한도 안전선)
3. 한국어 텍스트 처리:
   - wizard-of-oz-sphere는 이미 라벨 블록 구조 → `Section Title KO` + `Items KO` + `Bulleted` 채움
   - 나머지 프로젝트는 일반 문자열 → `Prose KO` 한 컬럼에만 채움 (라벨화는 나중에)
4. 업로드 끝나면 Notion에서 눈으로 확인 (특히 wizard-of-oz-sphere가 제대로 들어갔는지)
5. 다시 `npm run build` 실행 → 새로 만들어진 `data.js`와 원본 비교 (거의 일치해야 함)

### 4단계 — GitHub Actions 연결

1. GitHub 저장소 → Settings → Secrets and variables → Actions → **4개 비밀값 등록**:
   - `NOTION_TOKEN`
   - `NOTION_DB_PROJECTS`
   - `NOTION_DB_BLOCKS`
   - `NOTION_DB_VARIANTS`
2. `.github/workflows/sync-notion.yml` 파일 만들어서 푸시
3. GitHub의 Actions 탭에서 `workflow_dispatch` (수동 실행) → `data.js`에 변경 없음 확인 (이미 동기화 상태이므로)
4. **테스트**: Notion에서 글자 한 글자 수정 → 다시 수동 실행 → `data.js`가 자동 커밋되는지 확인 → 사이트에 반영되는지 확인

### 5단계 — 정착 (안전장치 추가)

1. `data.js` 파일 맨 위에 경고 주석 추가:
   ```
   /* ⚠️ 이 파일은 자동 생성됩니다 — 직접 수정하지 마세요!
      편집은 Notion 워크스페이스 "Portfolio CMS"에서 하세요.
      다시 생성하려면: GitHub Actions → "Sync Notion → data.js" → Run workflow */
   ```
2. 코드 에디터에서 `data.js`를 readonly로 표시 (선택)
3. cron 자동 스케줄을 켤지 결정 → 안 켜고 수동만 써도 충분할 수 있음

### 6단계 — 점진적 라벨 블록 변환 (계속 진행)

- 한 프로젝트씩, Notion에서 `Prose KO` → `Section Title KO` + `Items KO`로 재구성
- 코드는 한 줄도 안 건드림. GitHub Actions만 다시 실행하면 사이트에 반영.

---

## 무료 Notion API 한도 주의사항

| 제한 사항 | 대응 |
|---|---|
| 초당 약 3개 요청까지만 | 빌드 시 자연스럽게 발생하는 페이지네이션은 한도 내. seed 스크립트만 350ms 간격으로 대기 |
| 한 번에 최대 100개 행 반환 | `start_cursor`로 다음 페이지 요청을 반복하는 루프 필수 (라이브러리가 도와줌) |
| 이미지/파일 업로드 비용 부담 | **이미지는 절대 Notion에 안 올림!** 파일명만 텍스트로 입력 |
| GitHub Actions 무료 분량 | Public 저장소는 무제한, Private는 월 2,000분. 빌드 1회 약 10초. 30분마다 = 월 14.4분. 문제 없음 |

---

## 가장 먼저 할 일

전부 한 번에 하지 말고, **딱 하나만** 먼저 — **1단계의 6번 (vintage-telephone 한 프로젝트 수동 입력)** 부터.

이 한 가지를 해보면:
- Notion 스키마가 실제로 모든 필드를 표현할 수 있는지 검증됨
- 안 되는 게 있으면 컬럼만 추가하면 됨
- 그 다음 2단계 빌드 스크립트 작성으로 자연스럽게 넘어갈 수 있음

---

## 자주 헷갈리는 부분

- **"Notion API 키가 뭐고 왜 비밀로 해야 해?"** → integration token. 이걸 가진 사람은 내 Notion 데이터를 마음대로 읽고 쓸 수 있음. 그래서 `.env` 파일에 넣고 절대 git에 올리지 않음. GitHub에서는 Secrets에 안전하게 저장.
- **"GitHub Actions가 돈 들어?"** → Public 저장소면 무료, 무제한 가까움. 이 저장소는 public이라 걱정 없음.
- **"실수로 Notion 글을 다 지웠어"** → Notion 자체에 휴지통/버전 히스토리 있음. 그리고 git에 커밋된 `data.js`도 백업 역할.
- **"data.js를 직접 고치면 안 돼?"** → 가능하지만, 다음번 sync 실행 시 Notion 내용으로 덮어쓰여짐. 그래서 수정은 항상 Notion에서.
