# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude Code(claude.ai/code)에게 가이드를 제공한다.

## 저장소 개요

이 저장소는 개인 포트폴리오 사이트를 담고 있다. 실제 배포되는 사이트는 `blog/` 하위에 전부 들어 있으며, 빌드 도구·패키지 매니저·프레임워크가 전혀 없다. 직접 작성한 정적 HTML/CSS/JS가 그대로 서빙된다.

- `blog/index.html` — 홈 페이지(hero, experience, skills, projects, awards, publications, contact).
- `blog/projects/*.html` — 프로젝트 상세 페이지마다 하나씩 있는 얇은 HTML 셸.
- `blog/assets/css/main.css` — 사이트 전체가 공유하는 단일 스타일시트.
- `blog/assets/js/i18n.js` — **사이트의 모든 콘텐츠**(한국어/영어 카피, 경력 항목, 기술 스택, 프로젝트 카드, 프로젝트 상세 본문, 수상, 논문, 연락처 링크)를 `ko`, `en` 두 개의 순수 JS 객체로 담아 `window.PORTFOLIO_DATA`에 할당한다.
- `blog/assets/js/main.js` — `window.PORTFOLIO_DATA`를 읽어 DOM에 렌더링한다. 언어 전환과 스크롤 리빌 애니메이션도 여기서 처리한다.
- `blog/DESIGN.md` — 로컬 전용 디자인 시스템 참고 문서(gitignore 대상, 배포되지 않음). CSS가 따라야 할 시각적 언어를 정의한다.
- `blog/papers/` — 경력 항목/논문 항목에서 참조하는 PDF 파일들.
- `resume/` — 개인 이력서 PDF, gitignore 대상, 배포되지 않음.

개발 서버, 번들러, 테스트 러너, 린터가 전혀 설정되어 있지 않다. 로컬에서 미리 보려면 `blog/index.html`을 브라우저로 직접 열거나, `blog/` 디렉터리를 아무 정적 파일 서버로 서빙하면 된다.

## 콘텐츠 모델 (i18n.js가 단일 진실 공급원)

화면에 보이는 텍스트는 전부 데이터 기반이며 HTML에 하드코딩되어 있지 않다. `blog/assets/js/i18n.js`는 동일한 구조를 가진 두 객체(`ko`, `en`)를 정의하고 `window.PORTFOLIO_DATA = { defaultLang: "ko", locales: { ko, en } }` 형태로 노출한다.

`blog/assets/js/main.js`는 이 데이터를 두 가지 방식으로 DOM에 바인딩한다.

- **단순 텍스트**: `data-i18n="path.to.value"`(HTML 콘텐츠는 `data-i18n-html`)를 가진 엘리먼트는 현재 로케일 객체를 dot-path로 조회한 값을 text/innerHTML로 설정한다.
- **생성되는 목록**: `data-render="name"`(예: `heroKeywords`, `experience`, `skills`, `projects`, `awards`, `publications`, `contact`, `projectDetail`)을 가진 엘리먼트는 `main.js`의 대응하는 `render*()` 함수가 `locale().<name>`을 읽어 DOM 노드를 만들어 채운다.

현재 언어는 `localStorage`(`portfolio-language`)에서 읽고, 없으면 `defaultLang`으로 폴백한다. 언어 전환(`data-lang` 버튼)은 페이지 새로고침이나 서버사이드 i18n 없이 클라이언트에서 전체를 다시 렌더링하는 방식이다.

**콘텐츠 수정 시**(경력, 기술 스택, 프로젝트 카피, 수상, 논문, 연락처 정보): `blog/assets/js/i18n.js`를 수정하되, `ko`와 `en` 객체 **양쪽 모두**를 함께 업데이트해 동기화를 유지한다. 카피를 HTML 파일에 직접 하드코딩하지 않는다.

## 새 프로젝트 추가하기

프로젝트는 `i18n.js`의 두 로케일 각각에 두 군데에 나타난다.

1. `projects` 배열의 항목 하나(홈 페이지에 노출되는 카드: title, summary, stack, status, type, `detailUrl`, `githubUrl`).
2. `projectDetails[<id>]`의 대응 항목(상세 페이지 전체 콘텐츠: title, summary, tags, sections 등), `detailUrl`에 쓴 것과 같은 id를 키로 사용.

그 다음 기존 프로젝트 페이지(예: `visionops.html`)를 복사해 `blog/projects/<id>.html`을 만든다 — `<body data-page="project" data-project="<id>">`와 `<main data-render="projectDetail">`만 있는 최소한의 셸이며, 나머지는 `main.js`가 `projectDetails[<id>]`로부터 채운다.

## 비주얼 디자인

`blog/DESIGN.md`는 CSS가 구현하는 디자인 시스템을 문서화한다: 거의 검정에 가까운 모노크롬 캔버스, 대문자에 자간을 넓힌 디스플레이 타입, 투명한 필(pill) 형태 버튼, 버튼/필을 제외하면 둥근 모서리를 쓰지 않는 규칙 — 절제된 럭셔리 자동차 브랜드의 미감을 본떴다. 이 문서는 gitignore 대상으로 로컬 참고용일 뿐 배포되는 사이트의 일부가 아니다. 비주얼/CSS를 변경하기 전에는 이 문서를 참고해서, 여기 정의되어 있고 `blog/assets/css/main.css`의 `:root`에 CSS 커스텀 프로퍼티로 그대로 반영된 기존 토큰(색상, 간격, 타이포그래피)과 새 UI가 일관되게 맞춰지도록 한다.

## 배포

`.github/workflows/deploy.yml`은 `main`에 푸시될 때마다 실행된다: Tailscale 네트워크에 접속하고, 배포 전용 SSH 키를 로드한 뒤, 홈서버로 SSH 접속한다. 실제 배포 단계는 이 저장소에 있지 않다 — 서버의 `authorized_keys`가 forced-command(`deploy.sh`)를 고정해 두어서 SSH로 전달되는 인자는 무시되고 항상 같은 스크립트가 실행되며, exit code만 Action으로 되돌아온다.
