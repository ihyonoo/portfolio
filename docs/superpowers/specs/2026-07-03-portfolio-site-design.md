# Portfolio Site Design

## Goal

Build a job-search portfolio site for Choi Hyunwoo that positions him primarily as an `AI / Computer Vision Engineer`, supported by `Backend / Server`, `Full-stack / Product`, and `Blockchain / Security` experience.

The site should feel professional, fast to scan, and restrained. It should use the Bugatti-inspired `DESIGN.md` as a reference for dark canvas, precise typography, hairline dividers, generous spacing, and minimal decoration, without making the portfolio feel like a luxury landing page.

## Audience

Primary audience:
- Recruiters and hiring managers reviewing the portfolio quickly.
- Technical interviewers who want to inspect project depth later.

The first screen should answer, within a few seconds:
- Who is this person?
- What role is he targeting?
- What technical areas does he cover?
- Which projects best prove those skills?

## Positioning

Primary position:
- `AI / Computer Vision Engineer`

Supporting axes, in order:
- `Backend / Server`
- `Full-stack / Product`
- `Blockchain / Security`

Core message:
- Hyunwoo can connect data, models, APIs, and operational workflows into working systems, not only isolated experiments.

Suggested Korean positioning copy:
- `AI / Computer Vision을 중심으로 데이터 파이프라인, 모델 학습, Backend API, 운영 흐름까지 연결하는 개발자입니다.`

Suggested English positioning copy:
- `AI / Computer Vision engineer who connects data pipelines, model training, backend APIs, and operational workflows into usable systems.`

## Information Architecture

The homepage order is fixed:

1. `Hero`
2. `About / Positioning`
3. `Experience`
4. `Skills`
5. `Projects`
6. `Publications / Awards`
7. `Contact`

Top navigation:
- `About`
- `Experience`
- `Skills`
- `Projects`
- `Publications`
- `Contact`
- `Blog`
- `KO / EN`

`Blog` is not a homepage section. It should open the Velog URL in a new tab.

Default language:
- Korean.

English mode:
- Supported through a `KO / EN` language switch.

Theme:
- Dark only. No light mode.

## Page Model

Use a static multi-page structure:

- `index.html`
- `projects/mediledger-equptrace.html`
- `projects/hate-speech-detection.html`
- `projects/vending-machine.html`
- `projects/jobfit-ai.html`
- `assets/css/main.css`
- `assets/js/main.js`
- `assets/js/i18n.js` or equivalent static content module

No frontend framework is required. The site should be easy to deploy as static files.

## Homepage Sections

### Hero

Purpose:
- Create a fast recruiter-scan first impression.

Content:
- Name: `최현우 / Hyunwoo Choi`
- Role line centered on `AI / Computer Vision Engineer`
- Short positioning sentence
- Compact keyword row:
  - `Computer Vision`
  - `Backend`
  - `AI Product`
  - `Blockchain Integrity`
- Primary links:
  - GitHub
  - Email
  - Blog
- Featured project list or compact project index showing the four main projects in order.

Visual behavior:
- Dark black canvas.
- Large but not theatrical typography.
- Thin dividers.
- No decorative background orbs.
- Subtle reveal on load.

### About / Positioning

Purpose:
- Explain what kind of problems Hyunwoo is strong at.

Tone:
- Natural Korean with English technical terms where appropriate.
- Avoid awkward translations of terms such as `AI`, `Computer Vision`, `Backend`, `Pipeline`, `Inference`, and `Integrity`.

Content focus:
- Applied systems, not just experiments.
- CV/AI experience supported by backend and product implementation.
- Ability to make demo-ready or operation-ready workflows.

### Experience

Order is fixed:

1. `SCH`
2. `정보보호연구실`
3. `DEEP.I`

Experience should be chronological in feel, but each item may lead with the most relevant achievement.

SCH:
- Include university activities, bootcamp, idea league, tutoring, academic club, and attached PDF where relevant.
- Link `papers/idea-league-slides.pdf` from the activity that references it.

Information Security Lab:
- Undergraduate researcher from `2025.03.26 - Present`.
- Mention cryptography seminar, blockchain/DID/security seminars, paper review seminars, KUCIS and related club activities, competitions, and conference presentation.

DEEP.I:
- Do not include DEEP.I sub-projects as project cards.
- Summarize it as practical Computer Vision and AI workflow experience.
- Mention RTSP frame collection, augmentation, label correction, YOLO training/inference/evaluation, Azure OpenAI API use, COCO-to-YOLO segmentation preprocessing, MMDetection, YOLO segmentation, ByteTrack, BotSORT, ResNet18 classification, and Gradio/Docker where appropriate.

### Skills

Keep this section compact. Do not use large cards that consume too much vertical space.

Group skills by domain:

- `AI / Computer Vision`
  - PyTorch, OpenCV, YOLO, MMDetection, ByteTrack, BotSORT, ResNet18
- `Backend / Database`
  - FastAPI, PostgreSQL, Redis, psycopg, SQLAlchemy where applicable
- `Blockchain / Security`
  - Hyperledger Besu, Solidity, QBFT, integrity verification
- `Frontend / Product`
  - React, Vite, Next.js, TypeScript, Tailwind CSS, Streamlit, Gradio
- `Infra / Tools`
  - Docker, Docker Compose, Linux, Git
- `Languages`
  - Python, C, JavaScript/TypeScript, Solidity

### Projects

Show exactly four main project cards, in this order:

1. `Mediledger & EqupTrace`
2. `KoELECTRA 기반 한국어 혐오 표현 탐지 시스템`
3. `분산 자판기 관리 시스템`
4. `JobFit AI`

Each project card includes:
- Status: `Completed` or `In Progress`
- Short summary
- Key stack
- `자세히 보기` button
- `GitHub` button

Project status:
- `Mediledger & EqupTrace`: `In Progress`
- `KoELECTRA 기반 한국어 혐오 표현 탐지 시스템`: `Completed`
- `분산 자판기 관리 시스템`: `Completed`
- `JobFit AI`: `Completed`

Project detail behavior:
- Use dedicated case study pages.
- The homepage remains scan-friendly.
- Detail pages can grow over time with media, architecture, stack, and review sections.

### Publications / Awards

Combine publications and awards into one section, but keep the visual grouping clear.

Include:
- `2025년 한국데이터사이언스학회 동계종합학술대회 우수 논문상`
- `사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구`
- `2026 한국정보보호학회 하계학술대회(CISC-S'26): 블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계`
- `컴퓨터소프트웨어공학과 2025 BLEP 데이터 활용 경진 대회 최우수상`
- `2025년도 대학정보보호동아리(KUCIS) 우수동아리`

PDF links:
- Link the hate speech paper PDF from `papers/사전학습 언어모델 기반 혐오 표현 자동 필터링 시스템 제안 연구.pdf`.
- Link the blockchain medical equipment paper PDF from `papers/블록체인을 활용한 의료 장비 사용 이력 관리 시스템 설계.pdf`.

### Contact

Include:
- Email: `ihyonoo0520@gmail.com`
- GitHub: `https://github.com/ihyonoo`
- Blog: `https://velog.io/@hyun_woo/posts`
- Phone: `010-5083-1298`

Use `mailto:` and external links where appropriate.

## Project Detail Pages

Each project detail page should be present from the first implementation, even if some content is placeholder.

Shared detail structure:

1. Intro / media placeholder
2. Problem
3. My Role
4. Architecture
5. Tech Stack
6. What I Learned / Review
7. GitHub link

Placeholder policy:
- Use clear placeholder panels for future gif/image media.
- Do not pretend missing architecture or review content is final.
- Short placeholder text is acceptable for now, because the user plans to fill these later.

## Visual Style

Reference:
- `DESIGN.md`, Bugatti-inspired design.

Adaptation rules:
- Use near-black canvas.
- Use white and gray text as the primary palette.
- Use a rare cold light-blue only for links or focus accents.
- Use no decorative orbs, gradients, bokeh, or glassmorphism.
- Use hairline borders and dividers.
- Use rectangular cards and media areas with `0px` radius.
- Use pill buttons only for actions.
- Use uppercase monospace captions for metadata.
- Use generous spacing, but keep the site denser than the Bugatti reference because this is a recruiter-facing portfolio.
- Keep Korean body text readable; do not apply heavy letter-spacing to Korean paragraphs.

Suggested font substitutes:
- Display/headings: `Saira Condensed` or a restrained sans fallback.
- Body Korean: `Noto Sans KR` or system sans.
- Metadata/buttons: `JetBrains Mono`, `IBM Plex Mono`, or `ui-monospace`.

## Interaction

Homepage:
- Smooth nav scroll to sections.
- Subtle scroll reveal.
- Language switch: `KO / EN`.
- Project card hover: slight line or brightness change only.
- Buttons and links should be keyboard-focusable.

Mobile:
- Compact navigation menu.
- Keep touch targets at least 44px where practical.
- Prevent text overlap in nav, project cards, and buttons.

Project detail pages:
- Use stable aspect-ratio media placeholders.
- Keep the page readable before final images/gifs are added.

## Content Rules

Korean mode:
- Default.
- Use Korean naturally.
- Keep technical English terms where they read better than forced Korean.

English mode:
- Support for all visible homepage and detail-page copy.
- English copy can be concise and professional rather than literal translation.

No dark/light toggle:
- Dark mode only.

## Implementation Boundaries

The user already removed the previous site files. Implementation should create the new static site from scratch.

Preserve source/reference materials:
- `docs/`
- `papers/`
- `DESIGN.md`

Do not commit brainstorming companion files under `.superpowers/`.

## Open Decisions For Implementation

These can be decided conservatively during implementation:
- Exact GitHub URLs for each project if not present in docs. Use placeholder `GitHub` buttons only if links are unknown, or disable/hide them with clear temporary handling.
- Exact English wording for each project detail page.
- Final project images or gifs. Use placeholders now.

No further design decision is needed before writing an implementation plan.
