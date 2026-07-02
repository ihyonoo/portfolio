# 포트폴리오 사이트 디자인 스펙

## 목표

최현우의 취업 준비용 포트폴리오 사이트를 만든다. 메인 포지션은 `AI / Computer Vision Engineer`로 잡고, 이를 `Backend / Server`, `Full-stack / Product`, `Blockchain / Security` 경험이 받쳐주는 구조로 보여준다.

사이트는 채용 담당자가 빠르게 훑어도 핵심이 들어오고, 기술 면접관이 나중에 프로젝트 상세를 눌러 깊이를 확인할 수 있어야 한다. `DESIGN.md`의 Bugatti-inspired 디자인을 참고하되, 고급 자동차 랜딩 페이지처럼 과하게 감성적으로 만들지 않는다. 검은 캔버스, 정제된 타이포그래피, 얇은 라인, 넉넉한 여백, 절제된 인터랙션만 가져온다.

## 대상 사용자

주요 대상은 다음과 같다.

- 포트폴리오를 짧은 시간 안에 검토하는 채용 담당자
- 프로젝트의 기술적 깊이를 확인하려는 기술 면접관

첫 화면에서 몇 초 안에 아래 질문에 답할 수 있어야 한다.

- 이 사람은 누구인가?
- 어떤 직무를 목표로 하는가?
- 어떤 기술 분야를 다루는가?
- 어떤 프로젝트가 그 역량을 가장 잘 보여주는가?

## 포지셔닝

메인 포지션:

- `AI / Computer Vision Engineer`

보조 역량 순서:

1. `Backend / Server`
2. `Full-stack / Product`
3. `Blockchain / Security`

핵심 메시지:

- 실험 코드에서 멈추지 않고, 데이터, 모델, API, 운영 흐름을 실제로 동작하는 시스템으로 연결할 수 있는 개발자.

한국어 포지셔닝 문장 예시:

- `AI / Computer Vision을 중심으로 데이터 파이프라인, 모델 학습, Backend API, 운영 흐름까지 연결하는 개발자입니다.`

영어 포지셔닝 문장 예시:

- `AI / Computer Vision engineer who connects data pipelines, model training, backend APIs, and operational workflows into usable systems.`

## 정보 구조

홈페이지 섹션 순서는 아래로 고정한다.

1. `Hero`
2. `About / Positioning`
3. `Experience`
4. `Skills`
5. `Projects`
6. `Publications / Awards`
7. `Contact`

상단 네비게이션에는 아래 항목을 둔다.

- `About`
- `Experience`
- `Skills`
- `Projects`
- `Publications`
- `Contact`
- `Blog`
- `KO / EN`

`Blog`는 홈페이지 안의 별도 섹션으로 만들지 않는다. 상단 네비게이션에서 Velog 링크를 새 탭으로 연다.

기본 언어:

- 한국어

영어 모드:

- `KO / EN` 토글로 지원한다.

테마:

- 다크 모드만 제공한다.
- 라이트 모드는 만들지 않는다.

## 페이지 구성 방식

정적 멀티 페이지 구조로 구현한다.

- `index.html`
- `projects/mediledger-equptrace.html`
- `projects/hate-speech-detection.html`
- `projects/vending-machine.html`
- `projects/jobfit-ai.html`
- `assets/css/main.css`
- `assets/js/main.js`
- `assets/js/i18n.js` 또는 같은 역할을 하는 정적 콘텐츠 모듈

React, Vite 같은 프레임워크는 사용하지 않는다. GitHub Pages 같은 정적 배포 환경에 쉽게 올릴 수 있어야 한다.

## 홈페이지 섹션 상세

### Hero

목적:

- 채용 담당자가 빠르게 스캔할 수 있는 첫인상을 만든다.

포함할 내용:

- 이름: `최현우 / Hyunwoo Choi`
- 역할 문장: `AI / Computer Vision Engineer`
- 짧은 포지셔닝 문장
- 핵심 키워드:
  - `Computer Vision`
  - `Backend`
  - `AI Product`
  - `Blockchain Integrity`
- 주요 링크:
  - GitHub
  - Email
  - Blog
- 4개 대표 프로젝트를 순서대로 보여주는 compact project index

시각 방향:

- 검은 캔버스
- 크지만 과장되지 않은 타이포그래피
- 얇은 구분선
- 배경 장식, orb, gradient 장식 없음
- 첫 진입 시 은은한 reveal 정도만 사용

### About / Positioning

목적:

- 어떤 문제를 잘 푸는 개발자인지 짧고 명확하게 설명한다.

문체:

- 기본은 자연스러운 한국어
- `AI`, `Computer Vision`, `Backend`, `Pipeline`, `Inference`, `Integrity` 같은 용어는 억지로 번역하지 않는다.
- 영어가 더 자연스러운 기술명은 그대로 쓴다.

내용 방향:

- 단순 실험이 아니라 응용 시스템 구현 경험을 강조한다.
- CV/AI 경험을 중심에 두고, Backend와 Product 구현 역량이 이를 받쳐주는 구조로 설명한다.
- 데모 가능하거나 운영 흐름까지 고려한 결과물을 만들 수 있다는 점을 보여준다.

### Experience

순서는 아래로 고정한다.

1. `SCH`
2. `정보보호연구실`
3. `DEEP.I`

전체적으로 시간순 나열 느낌을 유지하되, 각 항목 안에서는 채용 관점에서 중요한 내용을 먼저 읽히게 정리한다.

`SCH`:

- 순천향대학교 활동, Wrtn 부트캠프, 로컬 창업동아리 아이디어 리그, 튜터링, 학술 동아리 Soft Brain을 포함한다.
- 아이디어 리그 활동에서 `papers/idea-league-slides.pdf`를 링크한다.

`정보보호연구실`:

- 기간: `2025.03.26 - 현재`
- 학부 연구생 활동으로 표기한다.
- 암호학 세미나, 블록체인/DID/포렌식/모의해킹 관련 기술 세미나, 논문 리뷰 세미나, KUCIS 활동, 대회 참가, 컨퍼런스 발표를 정리한다.

`DEEP.I`:

- DEEP.I의 세부 프로젝트를 프로젝트 카드로 만들지 않는다.
- 경력 섹션에서 `Computer Vision 실무 경험`으로 녹인다.
- RTSP 프레임 수집, 데이터 증강, 라벨 좌표 보정, YOLO 학습/추론/평가, Azure OpenAI API 활용, COCO-to-YOLO segmentation 전처리, MMDetection, YOLO Segmentation, ByteTrack, BotSORT, ResNet18 기반 분류, Gradio/Docker 경험을 압축해서 보여준다.

### Skills

공간을 많이 차지하지 않게 compact list 형태로 만든다. 큰 카드형 UI로 섹션을 부풀리지 않는다.

분야별로 나눈다.

- `AI / Computer Vision`
  - PyTorch, OpenCV, YOLO, MMDetection, ByteTrack, BotSORT, ResNet18
- `Backend / Database`
  - FastAPI, PostgreSQL, Redis, psycopg, SQLAlchemy
- `Blockchain / Security`
  - Hyperledger Besu, Solidity, QBFT, Integrity Verification
- `Frontend / Product`
  - React, Vite, Next.js, TypeScript, Tailwind CSS, Streamlit, Gradio
- `Infra / Tools`
  - Docker, Docker Compose, Linux, Git
- `Languages`
  - Python, C, JavaScript/TypeScript, Solidity

### Projects

메인 프로젝트 카드는 정확히 4개만 보여준다. 순서는 아래로 고정한다.

1. `Mediledger & EqupTrace`
2. `KoELECTRA 기반 한국어 혐오 표현 탐지 시스템`
3. `분산 자판기 관리 시스템`
4. `JobFit AI`

각 프로젝트 카드에는 아래 요소를 넣는다.

- 상태: `Completed` 또는 `In Progress`
- 짧은 요약
- 핵심 기술 스택
- `자세히 보기` 버튼
- `GitHub` 버튼

프로젝트 상태:

- `Mediledger & EqupTrace`: `In Progress`
- `KoELECTRA 기반 한국어 혐오 표현 탐지 시스템`: `Completed`
- `분산 자판기 관리 시스템`: `Completed`
- `JobFit AI`: `Completed`

프로젝트 상세 보기 방식:

- 각 프로젝트마다 별도 case study 페이지를 만든다.
- 홈에서는 요약 중심으로 빠르게 스캔 가능하게 유지한다.
- 상세 페이지는 나중에 gif, 이미지, 아키텍처, 기술 스택, 회고를 추가할 수 있게 확장 가능한 구조로 만든다.

### Publications / Awards

논문과 수상은 하나의 섹션에 함께 두되, 시각적으로 그룹은 구분한다.

포함할 항목:

- `2025년 한국데이터사이언스학회 동계종합학술대회 우수 논문상`
- `사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구`
- `2026 한국정보보호학회 하계학술대회(CISC-S'26): 블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계`
- `컴퓨터소프트웨어공학과 2025 BLEP 데이터 활용 경진 대회 최우수상`
- `2025년도 대학정보보호동아리(KUCIS) 우수동아리`

PDF 링크:

- 혐오 표현 논문은 `papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf`로 연결한다.
- 의료 장비 블록체인 논문은 `papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf`로 연결한다.

### Contact

포함할 항목:

- Email: `ihyonoo0520@gmail.com`
- GitHub: `https://github.com/ihyonoo`
- Blog: `https://velog.io/@hyun_woo/posts`
- Phone: `010-5083-1298`

Email은 `mailto:` 링크를 사용하고, GitHub와 Blog는 새 탭으로 연다.

## 프로젝트 상세 페이지

각 프로젝트 상세 페이지는 첫 구현부터 모두 만든다. 일부 내용은 지금 당장 완성하지 않아도 되며, 비어 있는 영역은 명확한 placeholder로 둔다.

공통 구조:

1. Intro / media placeholder
2. Problem
3. My Role
4. Architecture
5. Tech Stack
6. What I Learned / Review
7. GitHub link

placeholder 정책:

- 나중에 gif나 이미지를 넣을 수 있도록 고정 비율 media 영역을 둔다.
- 아직 작성하지 않은 아키텍처나 회고를 완성된 내용처럼 꾸미지 않는다.
- 사용자가 나중에 채울 예정인 부분은 짧고 명확한 placeholder 문구로 처리한다.

## 시각 스타일

참고 기준:

- `DESIGN.md`의 Bugatti-inspired 디자인

적용 방식:

- 거의 검은색에 가까운 배경을 사용한다.
- 흰색과 회색 텍스트를 중심으로 한다.
- 링크나 focus accent에만 차가운 연한 블루를 제한적으로 사용한다.
- orb, gradient 장식, bokeh, glassmorphism은 사용하지 않는다.
- 얇은 border와 divider를 사용한다.
- 카드와 media 영역은 직각으로 둔다.
- 버튼만 pill 형태를 허용한다.
- metadata는 uppercase monospace caption 스타일을 사용한다.
- Bugatti 레퍼런스처럼 여백을 충분히 쓰되, 취업용 포트폴리오라서 정보 밀도는 더 높게 유지한다.
- 한국어 본문에는 과한 letter-spacing을 주지 않는다.

폰트 방향:

- Display/headings: `Saira Condensed` 또는 절제된 sans fallback
- 한국어 본문: `Noto Sans KR` 또는 system sans
- Metadata/buttons: `JetBrains Mono`, `IBM Plex Mono`, `ui-monospace`

## 인터랙션

홈페이지:

- 상단 nav 클릭 시 부드럽게 해당 섹션으로 이동한다.
- 스크롤 reveal은 은은하게만 적용한다.
- 언어 전환은 `KO / EN`으로 제공한다.
- 프로젝트 카드 hover는 아주 약한 line/brightness 변화만 준다.
- 버튼과 링크는 키보드 focus가 가능해야 한다.

모바일:

- 상단 nav는 compact menu로 접는다.
- 터치 영역은 가능한 한 44px 이상으로 유지한다.
- nav, 프로젝트 카드, 버튼 안에서 텍스트가 겹치거나 넘치지 않게 한다.

프로젝트 상세 페이지:

- media placeholder는 안정적인 aspect-ratio를 가진다.
- 최종 이미지나 gif가 없어도 페이지가 어색하게 비어 보이지 않아야 한다.

## 콘텐츠 작성 규칙

한국어 모드:

- 기본 언어다.
- 자연스러운 한국어를 사용한다.
- 기술 용어는 필요한 경우 영어로 둔다.

영어 모드:

- 홈페이지와 상세 페이지의 모든 주요 텍스트를 지원한다.
- 한국어를 직역하기보다 간결하고 전문적인 영어 문장으로 작성한다.

테마:

- 다크 모드만 제공한다.
- 다크/라이트 전환 기능은 만들지 않는다.

## 구현 범위

사용자가 기존 사이트 파일은 이미 삭제했다. 구현 단계에서는 현재 상태를 기준으로 새 정적 사이트를 처음부터 만든다.

유지해야 하는 원천 자료:

- `docs/`
- `papers/`
- `DESIGN.md`

커밋하지 말아야 할 파일:

- `.superpowers/` 아래의 brainstorming companion 파일

## 구현 단계에서 보수적으로 결정해도 되는 것

아래 항목은 구현 중 확인되는 자료에 맞춰 보수적으로 결정한다.

- 각 프로젝트의 정확한 GitHub URL이 docs에 없으면, 해당 버튼은 임시 비활성화하거나 명확한 placeholder 처리로 둔다.
- 프로젝트 상세 페이지의 영어 문구는 직역하지 않고 자연스럽게 정리한다.
- 최종 프로젝트 이미지나 gif는 아직 없으므로 placeholder로 둔다.

이 스펙 기준으로 구현 계획을 작성하면 된다.
