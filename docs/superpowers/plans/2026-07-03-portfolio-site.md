# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 승인된 한국어 디자인 스펙을 기준으로 최현우의 취업 준비용 정적 멀티 페이지 포트폴리오 사이트를 새로 만든다.

**Architecture:** 프레임워크 없이 `index.html`, `projects/*.html`, `assets/css/main.css`, `assets/js/i18n.js`, `assets/js/main.js`로 구성한다. 모든 페이지는 같은 CSS와 JS를 공유하고, `data-i18n` 및 `data-render` 기반 렌더링으로 한국어 기본값과 영어 전환을 지원한다.

**Tech Stack:** HTML, CSS, Vanilla JavaScript, static assets, Python `http.server` for local verification.

---

## 구현 전제

- 승인된 스펙: `docs/superpowers/specs/2026-07-03-portfolio-site-design.md`
- 원천 자료: `docs/`, `papers/`, `DESIGN.md`
- 사용자가 기존 `index.html`, `assets/css/main.css`, `assets/js/*.js`를 삭제한 상태이므로 새로 생성한다.
- `.superpowers/` 아래 brainstorming 파일은 구현 커밋에 포함하지 않는다.
- `docs/`가 `.gitignore`에 걸려 있으면 계획/스펙 파일은 `git add -f`로만 스테이징한다.

## 파일 구조

- Create: `index.html`
  - 홈 페이지. Hero, About, Experience, Skills, Projects, Publications/Awards, Contact 섹션을 포함한다.
- Create: `projects/mediledger-equptrace.html`
  - `Mediledger & EqupTrace` 상세 페이지.
- Create: `projects/hate-speech-detection.html`
  - KoELECTRA 혐오 표현 탐지 상세 페이지.
- Create: `projects/vending-machine.html`
  - 분산 자판기 관리 시스템 상세 페이지.
- Create: `projects/jobfit-ai.html`
  - JobFit AI 상세 페이지.
- Create: `assets/css/main.css`
  - Bugatti-inspired dark visual system, responsive layout, section/card/button/detail page styles.
- Create: `assets/js/i18n.js`
  - 한국어/영어 콘텐츠 데이터. 홈과 프로젝트 상세 페이지 데이터를 모두 포함한다.
- Create: `assets/js/main.js`
  - 언어 전환, 렌더링, 모바일 nav, scroll reveal, 현재 연도/페이지 상태 처리.

---

### Task 1: 기본 디렉터리와 HTML 골격 생성

**Files:**
- Create: `index.html`
- Create: `projects/mediledger-equptrace.html`
- Create: `projects/hate-speech-detection.html`
- Create: `projects/vending-machine.html`
- Create: `projects/jobfit-ai.html`

- [ ] **Step 1: 현재 상태 확인**

Run:

```bash
git status --short
rg --files | sort
```

Expected:

```text
D index.html
D assets/css/main.css
D assets/js/i18n.js
D assets/js/main.js
...
papers/...
```

- [ ] **Step 2: 디렉터리 생성**

Run:

```bash
mkdir -p assets/css assets/js projects
```

Expected: command exits with code `0`.

- [ ] **Step 3: `index.html` 생성**

Create `index.html` with this structure:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="최현우 포트폴리오 - AI, Computer Vision, Backend, Full-stack, Blockchain 프로젝트와 경력"
    />
    <title>최현우 | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Noto+Sans+KR:wght@400;500&family=Saira+Condensed:wght@400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/css/main.css" />
  </head>
  <body data-page="home">
    <header class="site-header" data-site-header>
      <a class="skip-link" href="#main">본문으로 이동</a>
      <div class="nav-shell">
        <a class="wordmark" href="#hero" data-i18n="site.wordmark">최현우</a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav">
          MENU
        </button>
        <nav class="site-nav" id="site-nav" data-site-nav aria-label="Primary">
          <a href="#about" data-i18n="nav.about">About</a>
          <a href="#experience" data-i18n="nav.experience">Experience</a>
          <a href="#skills" data-i18n="nav.skills">Skills</a>
          <a href="#projects" data-i18n="nav.projects">Projects</a>
          <a href="#publications" data-i18n="nav.publications">Publications</a>
          <a href="#contact" data-i18n="nav.contact">Contact</a>
          <a href="https://velog.io/@hyun_woo/posts" target="_blank" rel="noreferrer">Blog</a>
        </nav>
        <div class="language-switch" aria-label="Language">
          <button class="lang-button is-active" type="button" data-lang="ko">KO</button>
          <button class="lang-button" type="button" data-lang="en">EN</button>
        </div>
      </div>
    </header>

    <main id="main">
      <section class="hero section-panel reveal" id="hero">
        <div class="section-inner hero-grid">
          <div>
            <p class="eyebrow" data-i18n="hero.eyebrow">PORTFOLIO</p>
            <h1 data-i18n="hero.title">최현우 / Hyunwoo Choi</h1>
            <p class="hero-role" data-i18n="hero.role">AI / Computer Vision · Backend · Full-stack</p>
            <p class="hero-copy" data-i18n="hero.copy">
              AI / Computer Vision, Backend, Full-stack 프로젝트를 통해 데이터와 모델, API, 사용자 흐름을 실제로 동작하는 형태로 연결해 왔습니다.
            </p>
            <ul class="keyword-row" data-render="heroKeywords"></ul>
          </div>
          <div class="project-index" data-render="heroProjects" aria-label="Featured projects"></div>
        </div>
      </section>

      <section class="section-panel reveal" id="about">
        <div class="section-inner two-column">
          <div>
            <p class="eyebrow" data-i18n="sections.aboutEyebrow">ABOUT</p>
            <h2 data-i18n="sections.aboutTitle">Positioning</h2>
          </div>
          <div class="prose" data-i18n-html="about.body"></div>
        </div>
      </section>

      <section class="section-panel reveal" id="experience">
        <div class="section-inner">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="sections.experienceEyebrow">EXPERIENCE</p>
            <h2 data-i18n="sections.experienceTitle">Experience</h2>
          </div>
          <div class="timeline" data-render="experience"></div>
        </div>
      </section>

      <section class="section-panel reveal" id="skills">
        <div class="section-inner">
          <div class="section-heading compact-heading">
            <p class="eyebrow" data-i18n="sections.skillsEyebrow">SKILLS</p>
            <h2 data-i18n="sections.skillsTitle">Skills</h2>
          </div>
          <div class="skills-compact" data-render="skills"></div>
        </div>
      </section>

      <section class="section-panel reveal" id="projects">
        <div class="section-inner">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="sections.projectsEyebrow">PROJECTS</p>
            <h2 data-i18n="sections.projectsTitle">Selected Projects</h2>
          </div>
          <div class="project-grid" data-render="projects"></div>
        </div>
      </section>

      <section class="section-panel reveal" id="publications">
        <div class="section-inner">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="sections.publicationsEyebrow">PUBLICATIONS / AWARDS</p>
            <h2 data-i18n="sections.publicationsTitle">Publications / Awards</h2>
          </div>
          <div class="split-lists">
            <div data-render="publications"></div>
            <div data-render="awards"></div>
          </div>
        </div>
      </section>

      <section class="section-panel reveal" id="contact">
        <div class="section-inner contact-layout">
          <div>
            <p class="eyebrow" data-i18n="sections.contactEyebrow">CONTACT</p>
            <h2 data-i18n="sections.contactTitle">Contact</h2>
          </div>
          <div class="contact-list" data-render="contact"></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p data-i18n="site.footer">© 2026 최현우. All rights reserved.</p>
    </footer>

    <script src="assets/js/i18n.js"></script>
    <script src="assets/js/main.js"></script>
  </body>
</html>
```

- [ ] **Step 4: 상세 페이지 공통 골격 생성**

Create each `projects/*.html` with the same shell and only different `data-project` value:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="최현우 프로젝트 상세 페이지" />
    <title>Project | 최현우</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Noto+Sans+KR:wght@400;500&family=Saira+Condensed:wght@400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../assets/css/main.css" />
  </head>
  <body data-page="project" data-project="PROJECT_ID">
    <header class="site-header" data-site-header>
      <a class="skip-link" href="#main">본문으로 이동</a>
      <div class="nav-shell">
        <a class="wordmark" href="../index.html" data-i18n="site.wordmark">최현우</a>
        <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav">
          MENU
        </button>
        <nav class="site-nav" id="site-nav" data-site-nav aria-label="Primary">
          <a href="../index.html#about" data-i18n="nav.about">About</a>
          <a href="../index.html#experience" data-i18n="nav.experience">Experience</a>
          <a href="../index.html#skills" data-i18n="nav.skills">Skills</a>
          <a href="../index.html#projects" data-i18n="nav.projects">Projects</a>
          <a href="../index.html#publications" data-i18n="nav.publications">Publications</a>
          <a href="../index.html#contact" data-i18n="nav.contact">Contact</a>
          <a href="https://velog.io/@hyun_woo/posts" target="_blank" rel="noreferrer">Blog</a>
        </nav>
        <div class="language-switch" aria-label="Language">
          <button class="lang-button is-active" type="button" data-lang="ko">KO</button>
          <button class="lang-button" type="button" data-lang="en">EN</button>
        </div>
      </div>
    </header>

    <main id="main" class="project-detail" data-render="projectDetail"></main>

    <footer class="site-footer">
      <p data-i18n="site.footer">© 2026 최현우. All rights reserved.</p>
    </footer>

    <script src="../assets/js/i18n.js"></script>
    <script src="../assets/js/main.js"></script>
  </body>
</html>
```

Use these replacements:

```text
projects/mediledger-equptrace.html -> data-project="mediledger"
projects/hate-speech-detection.html -> data-project="hateSpeech"
projects/vending-machine.html -> data-project="vendingMachine"
projects/jobfit-ai.html -> data-project="jobfit"
```

- [ ] **Step 5: HTML 구조 확인**

Run:

```bash
test -f index.html
test -f projects/mediledger-equptrace.html
test -f projects/hate-speech-detection.html
test -f projects/vending-machine.html
test -f projects/jobfit-ai.html
```

Expected: all commands exit with code `0`.

---

### Task 2: 디자인 시스템 CSS 작성

**Files:**
- Create: `assets/css/main.css`

- [ ] **Step 1: CSS 파일 생성**

Create `assets/css/main.css` with these sections in order:

```css
:root {
  --canvas: #000000;
  --surface: #0d0d0d;
  --surface-strong: #141414;
  --hairline: #262626;
  --hairline-strong: #3a3a3a;
  --text: #ffffff;
  --body: #cccccc;
  --body-strong: #e6e6e6;
  --muted: #999999;
  --muted-soft: #666666;
  --link: #c3d9f3;
  --success: #5fa657;
  --warning: #d4a017;
  --max: 1240px;
  --section: 112px;
  --gutter: 24px;
  --font-display: "Saira Condensed", "Noto Sans KR", sans-serif;
  --font-body: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--canvas);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.65;
}

a {
  color: inherit;
}

button {
  font: inherit;
}

.skip-link {
  position: fixed;
  left: 16px;
  top: 16px;
  z-index: 100;
  transform: translateY(-160%);
  background: var(--text);
  color: var(--canvas);
  padding: 10px 14px;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--hairline);
}

.nav-shell {
  width: min(calc(100% - 40px), var(--max));
  height: 64px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
}

.wordmark,
.site-nav a,
.lang-button,
.menu-toggle,
.eyebrow,
.status,
.button,
.project-number {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.wordmark {
  text-decoration: none;
  color: var(--text);
  font-size: 12px;
}

.site-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
}

.site-nav a {
  text-decoration: none;
  color: var(--muted);
  font-size: 11px;
}

.site-nav a:hover,
.site-nav a:focus-visible {
  color: var(--text);
}

.language-switch {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--hairline-strong);
  border-radius: 999px;
  padding: 3px;
}

.lang-button,
.menu-toggle {
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 11px;
}

.lang-button {
  border-radius: 999px;
  padding: 8px 10px;
}

.lang-button.is-active {
  color: var(--canvas);
  background: var(--text);
}

.menu-toggle {
  display: none;
}

.section-panel {
  border-bottom: 1px solid var(--hairline);
}

.section-inner {
  width: min(calc(100% - 40px), var(--max));
  margin: 0 auto;
  padding: var(--section) 0;
}

.hero .section-inner {
  min-height: calc(100vh - 64px);
  display: grid;
  align-items: center;
}

.hero-grid,
.two-column,
.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 64px;
}

.eyebrow {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 11px;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.06;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  max-width: 760px;
  font-size: clamp(52px, 9vw, 116px);
}

h2 {
  font-size: clamp(36px, 5vw, 68px);
}

h3 {
  font-size: 28px;
}

.hero-role,
.hero-copy,
.prose,
.card-copy,
.detail-copy {
  color: var(--body);
}

.hero-role {
  margin: 22px 0 0;
  font-size: clamp(18px, 2vw, 28px);
  color: var(--body-strong);
}

.hero-copy {
  max-width: 680px;
  margin: 20px 0 0;
  font-size: 18px;
}

.keyword-row,
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 28px 0 0;
  list-style: none;
}

.keyword-row li,
.tag {
  border: 1px solid var(--hairline-strong);
  border-radius: 999px;
  padding: 8px 12px;
  color: var(--body);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
}

.project-index,
.project-card,
.detail-card,
.list-panel {
  border: 1px solid var(--hairline);
  background: var(--surface);
}

.project-index-row {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 14px;
  padding: 18px;
  border-bottom: 1px solid var(--hairline);
  text-decoration: none;
}

.project-index-row:last-child {
  border-bottom: 0;
}

.project-index-row:hover,
.project-card:hover {
  border-color: var(--hairline-strong);
  background: var(--surface-strong);
}

.project-number,
.status {
  color: var(--muted);
  font-size: 10px;
}

.status.is-progress {
  color: var(--success);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 40px;
}

.compact-heading {
  margin-bottom: 22px;
}

.prose p {
  margin: 0 0 18px;
}

.timeline {
  display: grid;
  border-top: 1px solid var(--hairline);
}

.timeline-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 28px;
  padding: 30px 0;
  border-bottom: 1px solid var(--hairline);
}

.timeline-meta {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
}

.timeline ul,
.detail-list {
  margin: 14px 0 0;
  padding-left: 18px;
  color: var(--body);
}

.timeline a,
.text-link {
  color: var(--link);
  text-underline-offset: 4px;
}

.skills-compact {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  background: var(--hairline);
  border: 1px solid var(--hairline);
}

.skill-group {
  background: var(--canvas);
  padding: 18px;
}

.skill-group h3 {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
}

.skill-group p {
  margin: 10px 0 0;
  color: var(--body);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  display: flex;
  flex-direction: column;
  min-height: 360px;
  padding: 24px;
}

.project-card-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.project-card h3 {
  margin-top: 38px;
}

.card-copy {
  margin: 18px 0 0;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 28px;
}

.button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--text);
  border-radius: 999px;
  padding: 0 18px;
  color: var(--text);
  text-decoration: none;
  background: transparent;
  font-size: 11px;
}

.button.secondary {
  border-color: var(--hairline-strong);
  color: var(--body);
}

.button.is-disabled {
  pointer-events: none;
  opacity: 0.45;
}

.split-lists {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.list-panel {
  padding: 24px;
}

.list-panel + .list-panel {
  margin-top: 14px;
}

.contact-list {
  display: grid;
  gap: 12px;
}

.contact-link {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid var(--hairline);
  padding: 14px 0;
  color: var(--body);
  text-decoration: none;
}

.site-footer {
  width: min(calc(100% - 40px), var(--max));
  margin: 0 auto;
  padding: 36px 0;
  color: var(--muted-soft);
  font-size: 14px;
}

.project-detail .section-inner {
  padding-top: 88px;
}

.detail-hero {
  border-bottom: 1px solid var(--hairline);
}

.detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.media-panel {
  aspect-ratio: 16 / 9;
  border: 1px solid var(--hairline);
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent),
    var(--surface);
  display: flex;
  align-items: end;
  padding: 20px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.detail-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 36px;
  border-bottom: 1px solid var(--hairline);
  padding: 46px 0;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 520ms ease, transform 520ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

@media (max-width: 920px) {
  .nav-shell {
    grid-template-columns: auto auto auto;
  }

  .menu-toggle {
    display: inline-flex;
    justify-self: end;
    min-height: 44px;
    align-items: center;
  }

  .site-nav {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 64px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--surface);
    border: 1px solid var(--hairline);
  }

  .site-nav.is-open {
    display: flex;
  }

  .site-nav a {
    padding: 16px;
    border-bottom: 1px solid var(--hairline);
  }

  .hero-grid,
  .two-column,
  .contact-layout,
  .timeline-item,
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .project-grid,
  .split-lists,
  .skills-compact {
    grid-template-columns: 1fr;
  }

  .section-inner {
    padding: 76px 0;
  }
}

@media (max-width: 560px) {
  .nav-shell,
  .section-inner,
  .site-footer {
    width: min(calc(100% - 28px), var(--max));
  }

  h1 {
    font-size: 48px;
  }

  .project-index-row {
    grid-template-columns: 1fr;
  }

  .section-heading {
    display: block;
  }
}
```

- [ ] **Step 2: CSS 정책 확인**

Run:

```bash
rg -n "orb|gradient\\(|box-shadow|border-radius: (4|8|12|16)px" assets/css/main.css || true
```

Expected:

```text
```

Only `linear-gradient` inside `.media-panel` is acceptable. If the command reports `linear-gradient`, confirm it appears only in `.media-panel`.

- [ ] **Step 3: CSS 파일 존재 확인**

Run:

```bash
test -f assets/css/main.css && wc -l assets/css/main.css
```

Expected: file exists and line count is greater than `300`.

---

### Task 3: 한국어/영어 콘텐츠 데이터 작성

**Files:**
- Create: `assets/js/i18n.js`

- [ ] **Step 1: 콘텐츠 모듈 생성**

Create `assets/js/i18n.js` with this top-level shape. Use `const ko` and `const en` first, then assign `window.PORTFOLIO_DATA` at the end:

```javascript
const ko = {
      site: {
        wordmark: "최현우",
        footer: "© 2026 최현우. All rights reserved."
      },
      nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        publications: "Publications",
        contact: "Contact"
      },
      hero: {
        eyebrow: "PORTFOLIO",
        title: "최현우 / Hyunwoo Choi",
        role: "AI / Computer Vision · Backend · Full-stack",
        copy:
          "AI / Computer Vision, Backend, Full-stack 프로젝트를 통해 데이터와 모델, API, 사용자 흐름을 실제로 동작하는 형태로 연결해 왔습니다."
      },
      heroKeywords: ["Computer Vision", "Backend", "AI Product", "Blockchain Integrity"],
      sections: {
        aboutEyebrow: "ABOUT",
        aboutTitle: "Positioning",
        experienceEyebrow: "EXPERIENCE",
        experienceTitle: "Experience",
        skillsEyebrow: "SKILLS",
        skillsTitle: "Skills",
        projectsEyebrow: "PROJECTS",
        projectsTitle: "Selected Projects",
        publicationsEyebrow: "PUBLICATIONS / AWARDS",
        publicationsTitle: "Publications / Awards",
        contactEyebrow: "CONTACT",
        contactTitle: "Contact"
      },
      about: {
        body:
          "<p>실험 코드에서 멈추지 않고, 데이터와 모델, Backend API, 사용자 흐름을 실제로 동작하는 결과물로 연결하는 데 관심이 있습니다.</p><p>AI / Computer Vision에 가장 큰 흥미를 두고 있지만, 포트폴리오에서는 특정 분야 하나를 과하게 내세우기보다 여러 프로젝트를 통해 응용 시스템을 설계하고 구현한 경험을 보여주는 방향으로 정리했습니다.</p>"
      },
      experience: [
        {
          org: "순천향대학교",
          role: "Computer Software Engineering",
          period: "재학 중",
          bullets: [
            "컴퓨터소프트웨어공학과 4학년 재학 중",
            "2026 Wrtn 순천향대학교 부트캠프 참가",
            "2026 로컬 창업동아리 아이디어 리그 경진대회 참가",
            "다수 튜터링 프로그램 튜터 활동",
            "학술 동아리 Soft Brain 활동"
          ],
          links: [{ label: "Idea League Slides", url: "papers/idea-league-slides.pdf" }]
        },
        {
          org: "순천향대학교 정보보호연구실",
          role: "학부 연구생",
          period: "2025.03.26 - 현재",
          bullets: [
            "보안세미나와 기술세미나에서 암호학, 포렌식, 모의해킹, 블록체인, DID 관련 주제 학습 및 발표",
            "논문 리뷰 세미나 참여와 보안기사 작성 및 전시",
            "KUCIS, 대학 암호동아리, 사이버보안동아리 활동 및 대회 참가",
            "2025 졸업생 컨퍼런스 발표"
          ],
          links: []
        },
        {
          org: "DEEP.I",
          role: "근로장학생 / Computer Vision 프로젝트 참여",
          period: "2024.12.31 - 현재",
          bullets: [
            "RTSP 프레임 수집, 데이터 증강, 라벨 좌표 보정 등 CV 데이터 파이프라인 작업 수행",
            "YOLO 학습, 추론, 성능 평가, 결과 시각화 및 Gradio 기반 시연 도구 구현",
            "COCO-to-YOLO segmentation 전처리, MMDetection, YOLO Segmentation, ByteTrack, BotSORT 실험 수행",
            "Azure OpenAI API 활용 업무 도구와 ResNet18 기반 분류 파이프라인 구현 경험"
          ],
          links: []
        }
      ],
      skills: [
        { group: "AI / Computer Vision", items: ["PyTorch", "OpenCV", "YOLO", "MMDetection", "ByteTrack", "BotSORT", "ResNet18"] },
        { group: "Backend / Database", items: ["FastAPI", "PostgreSQL", "Redis", "psycopg", "SQLAlchemy"] },
        { group: "Blockchain / Security", items: ["Hyperledger Besu", "Solidity", "QBFT", "Integrity Verification"] },
        { group: "Frontend / Product", items: ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "Gradio"] },
        { group: "Infra / Tools", items: ["Docker", "Docker Compose", "Linux", "Git"] },
        { group: "Languages", items: ["Python", "C", "JavaScript/TypeScript", "Solidity"] }
      ],
      projects: [
        {
          id: "mediledger",
          title: "Mediledger & EqupTrace",
          status: "In Progress",
          summary: "RTLS 기반 위치 추적, NFC 사용 이력, Hyperledger Besu 무결성 검증을 연결한 의료 장비 관리 시스템.",
          stack: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu"],
          detailUrl: "projects/mediledger-equptrace.html",
          githubUrl: ""
        },
        {
          id: "hateSpeech",
          title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
          status: "Completed",
          summary: "K-MHaS 데이터 기반 한국어 혐오 표현 8개 유형 멀티라벨 분류와 Streamlit 데모.",
          stack: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit"],
          detailUrl: "projects/hate-speech-detection.html",
          githubUrl: ""
        },
        {
          id: "vendingMachine",
          title: "분산 자판기 관리 시스템",
          status: "Completed",
          summary: "TCP/IP 소켓 프로토콜, ACK 이벤트 처리, 서버 복제와 장애 대응을 포함한 Python 기반 운영 시스템.",
          stack: ["Python", "socket", "PostgreSQL", "Flask", "tkinter"],
          detailUrl: "projects/vending-machine.html",
          githubUrl: ""
        },
        {
          id: "jobfit",
          title: "JobFit AI",
          status: "Completed",
          summary: "포트폴리오 분석, 채용공고 추천, 이력서 생성, 면접 시뮬레이션을 연결한 AI 채용 매칭 플랫폼.",
          stack: ["Next.js", "FastAPI", "PostgreSQL", "LLM API", "Docker"],
          detailUrl: "projects/jobfit-ai.html",
          githubUrl: ""
        }
      ],
      publications: [
        {
          title: "사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구",
          meta: "한국데이터사이언스학회 동계종합학술대회 · 우수 논문상 · 2025",
          url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
        },
        {
          title: "블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계",
          meta: "한국정보보호학회 하계학술대회 CISC-S'26 · 2026",
          url: "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
        }
      ],
      awards: [
        { title: "컴퓨터소프트웨어공학과 2025 BLEP 데이터 활용 경진 대회 최우수상", meta: "순천향대학교 · 2025" },
        { title: "한국데이터사이언스학회 동계종합학술대회 우수 논문상", meta: "2025" },
        { title: "KUCIS 우수동아리 3위 / 장려상", meta: "한국정보보호산업협회 · 2025" }
      ],
      contact: [
        { label: "Email", value: "ihyonoo0520@gmail.com", url: "mailto:ihyonoo0520@gmail.com" },
        { label: "GitHub", value: "github.com/ihyonoo", url: "https://github.com/ihyonoo" },
        { label: "Blog", value: "velog.io/@hyun_woo/posts", url: "https://velog.io/@hyun_woo/posts" },
        { label: "Phone", value: "010-5083-1298", url: "tel:+821050831298" }
      ],
      projectDetails: {}
};
```

- [ ] **Step 2: 프로젝트 상세 데이터 추가**

In the same file, replace `projectDetails: {}` with this Korean detail object:

```javascript
projectDetails: {
  mediledger: {
    title: "Mediledger & EqupTrace",
    status: "In Progress",
    summary: "의료 장비의 위치, 사용 이력, 반납 완료 기록의 무결성을 하나의 흐름으로 연결한 시스템입니다.",
    mediaLabel: "Future GIF / architecture image area",
    tags: ["RTLS", "NFC", "FastAPI", "PostgreSQL", "Redis", "Hyperledger Besu"],
    sections: [
      { title: "Problem", body: "의료 장비는 위치와 사용 이력이 분리되면 운영자가 현재 상태를 파악하기 어렵고, 반납 완료 기록의 신뢰성을 나중에 검증하기도 어렵습니다." },
      { title: "My Role", body: "FastAPI 백엔드, PostgreSQL 스키마, RTLS 수집 흐름, NFC 사용 시작/반납 플로우, Hyperledger Besu 기반 온체인 기록 및 검증 흐름을 설계하고 구현했습니다." },
      { title: "Architecture", body: "RTLS 리더가 iBeacon 신호를 수집하고, 서버는 위치를 판정해 DB와 Redis에 반영합니다. NFC 이벤트는 사용 이력과 연결되고, 반납 완료 이력은 프라이빗 블록체인에 앵커링됩니다." },
      { title: "Tech Stack", body: "React, Vite, TypeScript, FastAPI, PostgreSQL, Redis, Hyperledger Besu, Solidity, ethers.js, Docker Compose." },
      { title: "What I Learned / Review", body: "상태 정합성, 실시간 신호 노이즈 처리, DB와 온체인 데이터의 검증 흐름을 함께 설계하는 경험을 쌓았습니다. 자세한 회고는 추후 보강할 예정입니다." }
    ],
    githubUrl: ""
  },
  hateSpeech: {
    title: "KoELECTRA 기반 한국어 혐오 표현 탐지 시스템",
    status: "Completed",
    summary: "한국어 혐오 표현을 8개 유형으로 분류하는 멀티라벨 NLP 모델과 Streamlit 데모를 구현했습니다.",
    mediaLabel: "Future demo GIF / screenshot area",
    tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit"],
    sections: [
      { title: "Problem", body: "온라인 문장은 여러 혐오 속성을 동시에 포함할 수 있어 단일 클래스 분류보다 멀티라벨 분류 접근이 필요했습니다." },
      { title: "My Role", body: "K-MHaS 데이터 로딩, 전처리, KoELECTRA 학습 파이프라인, 멀티라벨 검증 지표, CLI 추론, Streamlit 데모 UI를 직접 구현했습니다." },
      { title: "Architecture", body: "TSV 데이터를 멀티핫 벡터로 변환하고, KoELECTRA 기반 분류 모델을 학습한 뒤 CLI와 Streamlit UI에서 추론 결과를 확인하는 구조입니다." },
      { title: "Tech Stack", body: "Python, PyTorch, Hugging Face Transformers, scikit-learn, Streamlit, NumPy, tqdm." },
      { title: "What I Learned / Review", body: "멀티라벨 문제 정의, F1/AUC/Hamming Loss 기반 평가, 모델 결과를 사용자 경험으로 연결하는 과정을 경험했습니다. 자세한 회고는 추후 보강할 예정입니다." }
    ],
    githubUrl: ""
  },
  vendingMachine: {
    title: "분산 자판기 관리 시스템",
    status: "Completed",
    summary: "자판기 클라이언트와 관제 서버, 서버 간 복제와 장애 대응까지 직접 구현한 Python 기반 시스템입니다.",
    mediaLabel: "Future system flow image area",
    tags: ["Python", "socket", "PostgreSQL", "Flask", "tkinter"],
    sections: [
      { title: "Problem", body: "단순 자판기 UI를 넘어서, 이벤트 유실 없이 서버로 상태를 전달하고 장애 시에도 복구 가능한 운영 구조를 만들어보고자 했습니다." },
      { title: "My Role", body: "자판기 도메인 로직, TCP/IP JSON 메시지 프로토콜, ACK 기반 이벤트 큐, PostgreSQL 저장 구조, 서버 간 복제 프로토콜, Flask 관리자 화면을 구현했습니다." },
      { title: "Architecture", body: "클라이언트는 로컬 JSON 상태와 pending event queue를 유지하고, 서버는 이벤트 저장과 명령 큐를 담당합니다. 서버 간에는 raw socket 기반 복제와 health check를 수행합니다." },
      { title: "Tech Stack", body: "Python, tkinter, Flask, PostgreSQL, psycopg, socket, JSON." },
      { title: "What I Learned / Review", body: "네트워크 장애, ACK 처리, failover, 초기 동기화처럼 운영 가능한 시스템에 필요한 신뢰성 흐름을 직접 다뤘습니다. 자세한 회고는 추후 보강할 예정입니다." }
    ],
    githubUrl: ""
  },
  jobfit: {
    title: "JobFit AI",
    status: "Completed",
    summary: "포트폴리오 분석부터 채용 추천, 맞춤형 이력서 생성, 면접 시뮬레이션까지 연결한 AI 채용 매칭 플랫폼입니다.",
    mediaLabel: "Future product screenshot area",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LLM API", "Docker"],
    sections: [
      { title: "Problem", body: "구직자가 가진 비정형 포트폴리오 정보를 채용공고 추천, 이력서 생성, 면접 준비까지 이어지는 흐름으로 활용하고자 했습니다." },
      { title: "My Role", body: "서비스 구조 설계, 프론트엔드/백엔드 구현, DB 모델링, LLM 기반 포트폴리오 구조화, 임베딩 기반 추천, 이력서 생성, 면접 시뮬레이션을 구현했습니다." },
      { title: "Architecture", body: "Next.js 프론트엔드와 FastAPI 백엔드를 분리하고, PostgreSQL에 사용자/포트폴리오/공고/이력서/면접 데이터를 저장합니다. LLM과 Embedding API를 기능별로 연결합니다." },
      { title: "Tech Stack", body: "Next.js 14, TypeScript, Tailwind CSS, FastAPI, SQLAlchemy, PostgreSQL, Docker, Vercel, Render." },
      { title: "What I Learned / Review", body: "LLM 출력을 사용자 흐름 안에 통합하고, 추천/생성/시뮬레이션 기능을 하나의 제품 흐름으로 묶는 경험을 했습니다. 자세한 회고는 추후 보강할 예정입니다." }
    ],
    githubUrl: ""
  }
}
```

- [ ] **Step 3: 영어 locale 추가**

Add `en` with the same keys as `ko`. Use concise professional English. Minimum required content:

```javascript
en: {
  site: { wordmark: "Hyunwoo Choi", footer: "© 2026 Hyunwoo Choi. All rights reserved." },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    publications: "Publications",
    contact: "Contact"
  },
  hero: {
    eyebrow: "PORTFOLIO",
    title: "Hyunwoo Choi",
    role: "AI / Computer Vision · Backend · Full-stack",
    copy: "Developer interested in AI / Computer Vision, backend systems, and product workflows that connect data, models, APIs, and users."
  },
  heroKeywords: ["Computer Vision", "Backend", "AI Product", "Blockchain Integrity"],
  sections: {
    aboutEyebrow: "ABOUT",
    aboutTitle: "Positioning",
    experienceEyebrow: "EXPERIENCE",
    experienceTitle: "Experience",
    skillsEyebrow: "SKILLS",
    skillsTitle: "Skills",
    projectsEyebrow: "PROJECTS",
    projectsTitle: "Selected Projects",
    publicationsEyebrow: "PUBLICATIONS / AWARDS",
    publicationsTitle: "Publications / Awards",
    contactEyebrow: "CONTACT",
    contactTitle: "Contact"
  },
  about: {
    body: "<p>I am interested in connecting data, models, backend APIs, and user-facing flows into working systems.</p><p>AI / Computer Vision is my strongest area of interest, but this portfolio presents balanced project experience across applied systems, backend workflows, product implementation, and blockchain integrity work.</p>"
  },
  experience: [
    {
      org: "Soonchunhyang University",
      role: "Computer Software Engineering",
      period: "B.S. Candidate",
      bullets: ["Senior student in Computer Software Engineering", "Participated in bootcamp, idea league, tutoring programs, and Soft Brain academic club"],
      links: [{ label: "Idea League Slides", url: "papers/idea-league-slides.pdf" }]
    },
    {
      org: "Information Security Lab",
      role: "Undergraduate Researcher",
      period: "2025.03.26 - Present",
      bullets: ["Participated in cryptography, blockchain, DID, forensics, penetration testing, and paper review seminars", "Contributed to KUCIS activities, competitions, technical writing, and conference presentation"],
      links: []
    },
    {
      org: "DEEP.I",
      role: "Work-Study Contributor",
      period: "2024.12.31 - Present",
      bullets: ["Worked on CV data collection, augmentation, label correction, YOLO training, inference, evaluation, and visualization", "Worked with Azure OpenAI, COCO-to-YOLO segmentation preprocessing, MMDetection, YOLO Segmentation, ByteTrack, BotSORT, ResNet18, Gradio, and Docker"],
      links: []
    }
  ],
  skills: ko.skills,
  projects: [
    {
      id: "mediledger",
      title: "Mediledger & EqupTrace",
      status: "In Progress",
      summary: "Medical equipment management system connecting RTLS location tracking, NFC usage flow, and Hyperledger Besu integrity verification.",
      stack: ["FastAPI", "PostgreSQL", "Redis", "React", "Hyperledger Besu"],
      detailUrl: "projects/mediledger-equptrace.html",
      githubUrl: ""
    },
    {
      id: "hateSpeech",
      title: "Korean Hate Speech Detection with KoELECTRA",
      status: "Completed",
      summary: "Multi-label Korean hate speech classifier for eight categories, connected to CLI inference and a Streamlit demo.",
      stack: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit"],
      detailUrl: "projects/hate-speech-detection.html",
      githubUrl: ""
    },
    {
      id: "vendingMachine",
      title: "Distributed Vending Machine Management System",
      status: "Completed",
      summary: "Python-based operation system with TCP/IP socket protocol, ACK event handling, replication, and failure recovery.",
      stack: ["Python", "socket", "PostgreSQL", "Flask", "tkinter"],
      detailUrl: "projects/vending-machine.html",
      githubUrl: ""
    },
    {
      id: "jobfit",
      title: "JobFit AI",
      status: "Completed",
      summary: "AI hiring platform connecting portfolio analysis, job matching, tailored resume generation, and interview simulation.",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "LLM API", "Docker"],
      detailUrl: "projects/jobfit-ai.html",
      githubUrl: ""
    }
  ],
  publications: [
    {
      title: "A Study on an Automatic Hate Speech Filtering System Based on a Pretrained Language Model",
      meta: "Korean Data Science Society Winter Conference · Excellent Paper Award · 2025",
      url: "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
    },
    {
      title: "Design of a Medical Equipment Usage History Management System Using Blockchain",
      meta: "CISC-S'26 · 2026",
      url: "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
    }
  ],
  awards: [
    { title: "BLEP Data Utilization Competition Grand Prize", meta: "Soonchunhyang University · 2025" },
    { title: "Excellent Paper Award", meta: "Korean Data Science Society · 2025" },
    { title: "KUCIS Outstanding Club Award", meta: "Korea Information Security Industry Association · 2025" }
  ],
  contact: ko.contact,
  projectDetails: {
    mediledger: {
      title: "Mediledger & EqupTrace",
      status: "In Progress",
      summary: "A system that connects medical equipment location, usage history, and return-record integrity into one workflow.",
      mediaLabel: "Future GIF / architecture image area",
      tags: ["RTLS", "NFC", "FastAPI", "PostgreSQL", "Redis", "Hyperledger Besu"],
      sections: [
        { title: "Problem", body: "When equipment location and usage records are separated, operators struggle to understand current state and verify return history later." },
        { title: "My Role", body: "Designed and implemented the FastAPI backend, PostgreSQL schema, RTLS ingestion flow, NFC checkout/return flow, and Hyperledger Besu anchoring and verification workflow." },
        { title: "Architecture", body: "RTLS readers collect iBeacon signals, the server resolves location into DB and Redis, NFC events connect to usage history, and completed returns are anchored to a private blockchain." },
        { title: "Tech Stack", body: "React, Vite, TypeScript, FastAPI, PostgreSQL, Redis, Hyperledger Besu, Solidity, ethers.js, Docker Compose." },
        { title: "What I Learned / Review", body: "This project helped me work through state consistency, noisy realtime signals, and DB-to-chain verification design. A deeper review will be added later." }
      ],
      githubUrl: ""
    },
    hateSpeech: {
      title: "Korean Hate Speech Detection with KoELECTRA",
      status: "Completed",
      summary: "A multi-label NLP model and Streamlit demo for detecting eight categories of Korean hate speech.",
      mediaLabel: "Future demo GIF / screenshot area",
      tags: ["Python", "PyTorch", "Transformers", "KoELECTRA", "Streamlit"],
      sections: [
        { title: "Problem", body: "Online Korean text can contain multiple hate attributes at once, making multi-label classification more suitable than single-class classification." },
        { title: "My Role", body: "Built K-MHaS data loading, preprocessing, KoELECTRA training, multi-label metrics, CLI inference, and Streamlit demo UI." },
        { title: "Architecture", body: "TSV data is converted into multi-hot vectors, a KoELECTRA classifier is trained, and inference is exposed through CLI and Streamlit." },
        { title: "Tech Stack", body: "Python, PyTorch, Hugging Face Transformers, scikit-learn, Streamlit, NumPy, tqdm." },
        { title: "What I Learned / Review", body: "I practiced multi-label problem framing, F1/AUC/Hamming Loss evaluation, and connecting model output to user experience. A deeper review will be added later." }
      ],
      githubUrl: ""
    },
    vendingMachine: {
      title: "Distributed Vending Machine Management System",
      status: "Completed",
      summary: "A Python system covering vending-machine clients, control servers, replication, and failure recovery.",
      mediaLabel: "Future system flow image area",
      tags: ["Python", "socket", "PostgreSQL", "Flask", "tkinter"],
      sections: [
        { title: "Problem", body: "The goal was to go beyond a vending-machine UI and build an operation flow where events are delivered reliably and recover after server failure." },
        { title: "My Role", body: "Implemented domain logic, TCP/IP JSON protocol, ACK-based event queue, PostgreSQL storage, server-to-server replication protocol, and Flask admin UI." },
        { title: "Architecture", body: "The client keeps local JSON state and a pending event queue, while the server stores events and commands. Peer servers use raw socket replication and health checks." },
        { title: "Tech Stack", body: "Python, tkinter, Flask, PostgreSQL, psycopg, socket, JSON." },
        { title: "What I Learned / Review", body: "I handled reliability concerns such as network failure, ACK processing, failover, and initial synchronization. A deeper review will be added later." }
      ],
      githubUrl: ""
    },
    jobfit: {
      title: "JobFit AI",
      status: "Completed",
      summary: "An AI hiring platform connecting portfolio analysis, job recommendations, resume generation, and interview simulation.",
      mediaLabel: "Future product screenshot area",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "LLM API", "Docker"],
      sections: [
        { title: "Problem", body: "The project explores how unstructured portfolio data can support job recommendations, resume generation, and interview preparation in one flow." },
        { title: "My Role", body: "Designed the service flow and implemented frontend, backend, DB modeling, LLM-based portfolio structuring, embedding recommendations, resume generation, and interview simulation." },
        { title: "Architecture", body: "A Next.js frontend and FastAPI backend store user, portfolio, job, resume, and interview data in PostgreSQL, with LLM and Embedding APIs connected per feature." },
        { title: "Tech Stack", body: "Next.js 14, TypeScript, Tailwind CSS, FastAPI, SQLAlchemy, PostgreSQL, Docker, Vercel, Render." },
        { title: "What I Learned / Review", body: "I learned how to integrate LLM outputs into an end-to-end product flow across recommendation, generation, and simulation. A deeper review will be added later." }
      ],
      githubUrl: ""
    }
  }
};

window.PORTFOLIO_DATA = {
  defaultLang: "ko",
  locales: { ko, en }
};
```

- [ ] **Step 4: JS syntax 확인**

Run:

```bash
node --check assets/js/i18n.js
```

Expected:

```text
```

No syntax errors.

---

### Task 4: 렌더링과 인터랙션 JS 작성

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: `main.js` 생성**

Create `assets/js/main.js` with this implementation:

```javascript
(function () {
  const data = window.PORTFOLIO_DATA;
  const storageKey = "portfolio-language";
  const page = document.body.dataset.page || "home";
  const projectId = document.body.dataset.project || "";
  let currentLang = localStorage.getItem(storageKey) || data.defaultLang || "ko";

  function locale() {
    return data.locales[currentLang] || data.locales.ko;
  }

  function getPath(source, path) {
    return path.split(".").reduce((value, key) => (value ? value[key] : ""), source);
  }

  function setHtmlLang() {
    document.documentElement.lang = currentLang === "ko" ? "ko" : "en";
  }

  function setTextBindings() {
    const current = locale();
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getPath(current, element.dataset.i18n);
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = getPath(current, element.dataset.i18nHtml);
      if (value) element.innerHTML = value;
    });
  }

  function safeExternal(url) {
    return /^https?:/i.test(url) ? ' target="_blank" rel="noreferrer"' : "";
  }

  function renderHeroKeywords() {
    const target = document.querySelector('[data-render="heroKeywords"]');
    if (!target) return;
    target.innerHTML = locale().heroKeywords.map((item) => `<li>${item}</li>`).join("");
  }

  function renderHeroProjects() {
    const target = document.querySelector('[data-render="heroProjects"]');
    if (!target) return;
    target.innerHTML = locale().projects
      .map((project, index) => {
        const statusClass = project.status === "In Progress" ? " is-progress" : "";
        return `
          <a class="project-index-row" href="${project.detailUrl}">
            <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
            <span>${project.title}</span>
            <span class="status${statusClass}">${project.status}</span>
          </a>
        `;
      })
      .join("");
  }

  function renderExperience() {
    const target = document.querySelector('[data-render="experience"]');
    if (!target) return;
    target.innerHTML = locale().experience
      .map((item) => {
        const links = item.links
          .map((link) => `<a class="text-link" href="${link.url}"${safeExternal(link.url)}>${link.label}</a>`)
          .join(" · ");
        return `
          <article class="timeline-item">
            <div class="timeline-meta">${item.period}</div>
            <div>
              <h3>${item.org}</h3>
              <p class="card-copy">${item.role}</p>
              <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
              ${links ? `<p>${links}</p>` : ""}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderSkills() {
    const target = document.querySelector('[data-render="skills"]');
    if (!target) return;
    target.innerHTML = locale().skills
      .map(
        (group) => `
          <article class="skill-group">
            <h3>${group.group}</h3>
            <p>${group.items.join(" · ")}</p>
          </article>
        `
      )
      .join("");
  }

  function renderProjects() {
    const target = document.querySelector('[data-render="projects"]');
    if (!target) return;
    target.innerHTML = locale().projects
      .map((project, index) => {
        const statusClass = project.status === "In Progress" ? " is-progress" : "";
        const github = project.githubUrl
          ? `<a class="button secondary" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>`
          : `<span class="button secondary is-disabled" aria-disabled="true">GitHub</span>`;
        return `
          <article class="project-card">
            <div class="project-card-header">
              <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="status${statusClass}">${project.status}</span>
            </div>
            <h3>${project.title}</h3>
            <p class="card-copy">${project.summary}</p>
            <div class="tag-row">${project.stack.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            <div class="card-actions">
              <a class="button" href="${project.detailUrl}">자세히 보기</a>
              ${github}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderListPanel(renderName, title) {
    const target = document.querySelector(`[data-render="${renderName}"]`);
    if (!target) return;
    target.innerHTML = `<div class="list-panel"><p class="eyebrow">${title}</p>${locale()[renderName]
      .map((item) => {
        const link = item.url ? `<p><a class="text-link" href="${item.url}"${safeExternal(item.url)}>PDF 보기</a></p>` : "";
        return `<article class="list-panel"><h3>${item.title}</h3><p class="card-copy">${item.meta}</p>${link}</article>`;
      })
      .join("")}</div>`;
  }

  function renderContact() {
    const target = document.querySelector('[data-render="contact"]');
    if (!target) return;
    target.innerHTML = locale().contact
      .map(
        (item) => `
          <a class="contact-link" href="${item.url}"${safeExternal(item.url)}>
            <span>${item.label}</span>
            <span>${item.value}</span>
          </a>
        `
      )
      .join("");
  }

  function renderProjectDetail() {
    const target = document.querySelector('[data-render="projectDetail"]');
    if (!target) return;
    const detail = locale().projectDetails[projectId];
    if (!detail) {
      target.innerHTML = '<section class="section-inner"><h1>Project not found</h1></section>';
      return;
    }
    document.title = `${detail.title} | 최현우`;
    const github = detail.githubUrl
      ? `<a class="button" href="${detail.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>`
      : `<span class="button is-disabled" aria-disabled="true">GitHub</span>`;
    target.innerHTML = `
      <section class="detail-hero">
        <div class="section-inner">
          <p class="eyebrow">${detail.status}</p>
          <h1>${detail.title}</h1>
          <p class="hero-copy">${detail.summary}</p>
          <div class="detail-meta">${detail.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="media-panel">${detail.mediaLabel}</div>
        </div>
      </section>
      <section class="section-inner">
        ${detail.sections
          .map(
            (section) => `
              <article class="detail-grid reveal">
                <div><p class="eyebrow">${section.title}</p></div>
                <div class="detail-copy">${section.body}</div>
              </article>
            `
          )
          .join("")}
        <div class="card-actions">
          <a class="button secondary" href="../index.html#projects">Back to Projects</a>
          ${github}
        </div>
      </section>
    `;
  }

  function setupLanguageButtons() {
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === currentLang);
      button.addEventListener("click", () => {
        currentLang = button.dataset.lang;
        localStorage.setItem(storageKey, currentLang);
        renderAll();
      });
    });
  }

  function setupMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  function setupReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((target) => observer.observe(target));
  }

  function renderAll() {
    setHtmlLang();
    setTextBindings();
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === currentLang);
    });
    if (page === "home") {
      renderHeroKeywords();
      renderHeroProjects();
      renderExperience();
      renderSkills();
      renderProjects();
      renderListPanel("publications", "PUBLICATIONS");
      renderListPanel("awards", "AWARDS");
      renderContact();
    }
    if (page === "project") {
      renderProjectDetail();
    }
    setupReveal();
  }

  setupLanguageButtons();
  setupMenu();
  renderAll();
})();
```

- [ ] **Step 2: JS syntax 확인**

Run:

```bash
node --check assets/js/main.js
```

Expected:

```text
```

- [ ] **Step 3: 렌더링 selector 확인**

Run:

```bash
rg -n "data-render|data-i18n|data-lang|data-menu-toggle" index.html projects assets/js
```

Expected: matching lines exist in HTML and JS files.

---

### Task 5: 콘텐츠 데이터 정합성 보강

**Files:**
- Modify: `assets/js/i18n.js`
- Modify: `assets/js/main.js`

- [ ] **Step 1: `i18n.js` 객체 초기화 구조 확인**

Confirm `assets/js/i18n.js` starts with `const ko =` and ends with `window.PORTFOLIO_DATA = ...`:

```bash
sed -n '1,12p' assets/js/i18n.js
tail -n 12 assets/js/i18n.js
```

Expected:

```text
const ko = {
...
window.PORTFOLIO_DATA = {
  defaultLang: "ko",
  locales: { ko, en }
};
```

- [ ] **Step 2: 프로젝트 상세 페이지 경로 보정**

In `main.js`, project card detail links are relative to the current page. Home uses `projects/...`, detail pages do not render project cards. Keep `detailUrl` unchanged.

Confirm:

```bash
rg -n "detailUrl|Back to Projects|../index.html#projects" assets/js/main.js assets/js/i18n.js
```

Expected:

```text
assets/js/main.js:... href="${project.detailUrl}"
assets/js/main.js:... href="../index.html#projects"
assets/js/i18n.js:... detailUrl: "projects/...
```

- [ ] **Step 3: PDF 링크 확인**

Run:

```bash
test -f "papers/idea-league-slides.pdf"
test -f "papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf"
test -f "papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf"
```

Expected: all commands exit with code `0`.

- [ ] **Step 4: GitHub 버튼 임시 상태 확인**

Run:

```bash
rg -n "githubUrl: \"\"" assets/js/i18n.js
```

Expected: four empty `githubUrl` entries until exact repo URLs are supplied.

---

### Task 6: 로컬 브라우저 검증

**Files:**
- Verify: all site files

- [ ] **Step 1: 정적 서버 실행**

Run:

```bash
python3 -m http.server 4173
```

Expected:

```text
Serving HTTP on :: port 4173 ...
```

Keep the server session running until verification is complete.

- [ ] **Step 2: 홈 페이지 수동 확인**

Open:

```text
http://localhost:4173/
```

Expected:

- 기본 언어가 한국어다.
- Hero에 주요 링크가 없다.
- 상단 nav에는 `Blog`가 있다.
- 섹션 순서가 `Hero -> About -> Experience -> Skills -> Projects -> Publications / Awards -> Contact`다.
- Experience 순서가 `SCH -> 정보보호연구실 -> DEEP.I`다.
- Skills가 compact하게 보인다.
- Project 순서가 `Mediledger & EqupTrace -> KoELECTRA -> 분산 자판기 -> JobFit AI`다.

- [ ] **Step 3: 언어 전환 확인**

Click `EN`.

Expected:

- `html lang` becomes `en`.
- Hero copy changes to English.
- Nav remains readable.
- Projects still render in the same order.

Click `KO`.

Expected:

- `html lang` becomes `ko`.
- Korean content returns.

- [ ] **Step 4: 상세 페이지 확인**

Open:

```text
http://localhost:4173/projects/mediledger-equptrace.html
http://localhost:4173/projects/hate-speech-detection.html
http://localhost:4173/projects/vending-machine.html
http://localhost:4173/projects/jobfit-ai.html
```

Expected for each page:

- Header renders.
- Project title matches the page.
- Media-ready panel is visible.
- Sections are visible: `Problem`, `My Role`, `Architecture`, `Tech Stack`, `What I Learned / Review`.
- `Back to Projects` returns to `../index.html#projects`.

- [ ] **Step 5: 모바일 폭 확인**

Use browser devtools or resize below `920px`.

Expected:

- `MENU` button appears.
- Nav opens and closes.
- Text does not overlap inside nav, buttons, project cards, or contact links.

- [ ] **Step 6: 서버 종료**

Stop the server with `Ctrl-C`.

Expected: terminal returns to shell prompt.

---

### Task 7: 최종 정적 검증과 커밋

**Files:**
- Verify: `index.html`
- Verify: `projects/*.html`
- Verify: `assets/css/main.css`
- Verify: `assets/js/i18n.js`
- Verify: `assets/js/main.js`

- [ ] **Step 1: JS syntax 검증**

Run:

```bash
node --check assets/js/i18n.js
node --check assets/js/main.js
```

Expected: both commands print nothing and exit with code `0`.

- [ ] **Step 2: 금지된 장식 패턴 확인**

Run:

```bash
rg -n "bg-orb|orb-|bokeh|glassmorphism|box-shadow|radial-gradient" index.html assets projects || true
```

Expected:

```text
```

- [ ] **Step 3: 요구 섹션과 파일 확인**

Run:

```bash
test -f index.html
test -f assets/css/main.css
test -f assets/js/i18n.js
test -f assets/js/main.js
test -f projects/mediledger-equptrace.html
test -f projects/hate-speech-detection.html
test -f projects/vending-machine.html
test -f projects/jobfit-ai.html
rg -n "Mediledger & EqupTrace|KoELECTRA|분산 자판기|JobFit AI" assets/js/i18n.js
```

Expected: all files exist and all four project names appear.

- [ ] **Step 4: Git 상태 확인**

Run:

```bash
git status --short
```

Expected:

- New/modified site files appear.
- `.superpowers/` remains untracked and should not be added.
- Existing user changes such as `.gitignore`, deleted old files, and `papers/` may still appear; do not revert them.

- [ ] **Step 5: 구현 파일만 스테이징**

Run:

```bash
git add index.html projects assets
git status --short
```

Expected:

- `index.html`, `projects/*.html`, `assets/css/main.css`, `assets/js/i18n.js`, `assets/js/main.js` are staged.
- `.superpowers/` is not staged.

- [ ] **Step 6: 커밋**

Run:

```bash
git commit -m "feat: build static portfolio site"
```

Expected:

```text
[main ...] feat: build static portfolio site
```

If unrelated user changes are staged accidentally, unstage only those paths with:

```bash
git restore --staged .gitignore papers .superpowers docs
```

Then repeat Step 5 with only implementation paths.

---

## Self-Review

Spec coverage:
- 한국어 기본 모드: Task 3 and Task 4.
- 영어 모드: Task 3 and Task 4.
- 다크 전용 디자인: Task 2.
- 상단 nav + Blog 외부 링크: Task 1.
- Hero 주요 링크 제거: Task 1.
- Experience 순서 `SCH -> 연구실 -> DEEP.I`: Task 3.
- Compact Skills: Task 2 and Task 3.
- 4개 프로젝트 순서와 상태: Task 3.
- 별도 프로젝트 상세 페이지: Task 1 and Task 4.
- PDF 링크: Task 3 and Task 5.
- 모바일 nav: Task 2 and Task 4.

Placeholder scan:
- 계획 안의 media-ready panel은 실제 UI 요구사항이며 비어 있는 작업 지시가 아니다.
- 미정 상태로 남겨 둔 구현 지시는 없다.

Type consistency:
- Project ids: `mediledger`, `hateSpeech`, `vendingMachine`, `jobfit`.
- Detail page `data-project` values must match `projectDetails` keys.
- Language keys must exist in both `ko` and `en`.
