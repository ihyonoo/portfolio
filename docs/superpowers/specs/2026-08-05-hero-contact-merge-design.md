# Contact 섹션을 첫페이지(hero)로 병합 + nav 재구성

## 배경

`index.html`에는 이메일·전화번호만 담은 별도 `#contact` 섹션이 있고, GitHub·Blog는 상단 nav에 외부 링크로 따로 존재한다. 연락 관련 정보가 두 군데(nav, 별도 섹션)로 흩어져 있어, 이를 첫페이지(hero) 한 곳으로 모으고 nav 구성도 단순화한다.

## nav 재구성

- 변경 전: `Experience / Skills / Projects / Awards / Publications / Contact / GitHub / Blog`
- 변경 후: `About Me / Experience / Skills / Projects / Awards / Publications`
- "About Me"는 기존 hero 섹션(`#hero`)으로 스크롤한다. hero 콘텐츠 자체(직전 커밋에서 삭제된 소개 문단 포함)는 복원하지 않고, 현재 있는 hero 내용에 새 nav 라벨만 부여한다.
- Contact, GitHub, Blog 항목은 nav에서 제거한다.
- nav 마크업은 `blog/index.html`과 프로젝트 상세 페이지 4개(`blog/projects/hate-speech-detection.html`, `blog/projects/mediledger-equptrace.html`, `blog/projects/smartglass-simulation.html`, `blog/projects/visionops.html`)에 동일하게 복제되어 있으므로 5개 파일 모두 함께 수정한다.

## Contact 섹션 → hero 병합

- `blog/index.html`의 `<section id="contact">` 전체를 삭제한다.
- hero 안, keyword 태그 목록(`AI / Computer Vision / Backend`) 아래에 라벨+값 리스트를 추가한다. 마크업/스타일은 기존 `.contact-list` / `.contact-link`를 그대로 재사용한다.
- 노출 항목(4개, 순서 고정): Email → Phone → GitHub → Blog.
  - Email: `hyunu.choe@gmail.com` / `mailto:hyunu.choe@gmail.com` (기존 값 유지)
  - Phone: `010-5083-1298` / `tel:+821050831298` (기존 값 유지)
  - GitHub: `github.com/ihyonoo` / `https://github.com/ihyonoo` (신규, nav에서 이동)
  - Blog: `velog.io/@hyun_woo` / `https://velog.io/@hyun_woo/posts` (신규, nav에서 이동)

## 데이터/코드 변경

### `blog/assets/js/i18n.js` (ko, en 양쪽 모두)
- `nav.about` 키 추가 — ko: `"소개"`, en: `"About Me"`.
- `nav.contact`, `sections.contactEyebrow`, `sections.contactTitle`는 더 이상 참조되지 않으므로 제거.
- `contact` 배열에 GitHub, Phone 순서 뒤로 GitHub·Blog 항목 추가 (위 순서: Email, Phone, GitHub, Blog).

### `blog/assets/js/main.js`
- `renderContact()` 함수는 로직 변경 없이 그대로 재사용한다. 대상 엘리먼트(`[data-render="contact"]`)만 별도 섹션에서 hero 내부로 위치가 바뀐다.
- `renderAll()`의 홈페이지 분기(`renderContact()` 호출)는 그대로 유지.
- `#contact` 관련 하드코딩된 참조가 없는지 확인한다(현재 없음).

### `blog/assets/css/main.css`
- hero(`hero-home`, 중앙 정렬)에 들어간 `.contact-list`가 컨테이너 폭 전체로 늘어나지 않도록 폭 제약을 추가한다 — 예: `max-width: 420px; margin: 32px auto 0;`를 hero 컨텍스트 selector로 한정해서 추가.
- 기존 `.contact-list` / `.contact-link` 규칙 자체는 수정하지 않는다(다른 곳에서 재사용되는 공용 스타일).

## 범위 밖

- hero의 기존 카피(제목, 역할, 설명 문구, 키워드 태그)는 변경하지 않는다.
- 삭제된 About 섹션 콘텐츠는 복원하지 않는다.
- 프로젝트 상세 페이지의 hero(`.detail-hero`) 레이아웃/스타일은 건드리지 않는다 — nav 항목만 index.html과 동일하게 맞춘다.
