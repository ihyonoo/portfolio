(function () {
  const data = window.PORTFOLIO_DATA;
  const storageKey = "portfolio-language";
  const page = document.body.dataset.page || "home";
  const projectId = document.body.dataset.project || "";
  const storedLang = readStoredLanguage();
  let currentLang = normalizeLanguage(storedLang !== null ? storedLang : data.defaultLang || "ko");
  let revealObserver = null;

  if (storedLang !== null && storedLang !== currentLang) {
    writeStoredLanguage(currentLang);
  }

  function normalizeLanguage(lang) {
    if (data.locales[lang]) {
      return lang;
    }

    if (data.locales[data.defaultLang]) {
      return data.defaultLang;
    }

    return "ko";
  }

  function readStoredLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function writeStoredLanguage(lang) {
    try {
      window.localStorage.setItem(storageKey, lang);
    } catch (error) {
      return false;
    }

    return true;
  }

  function locale() {
    return data.locales[currentLang] || data.locales[data.defaultLang] || data.locales.ko;
  }

  function titleWithSiteName(title) {
    const text = locale();
    const siteName = text.site && text.site.wordmark ? text.site.wordmark : "최현우";

    return title + " | " + siteName;
  }

  function getPath(source, path) {
    return path.split(".").reduce(function (value, key) {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) {
        return value[key];
      }

      return undefined;
    }, source);
  }

  function setHtmlLang() {
    document.documentElement.lang = currentLang;
  }

  function setTextBindings() {
    const text = locale();

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const value = getPath(text, element.dataset.i18n);

      if (value !== undefined) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      const value = getPath(text, element.dataset.i18nHtml);

      if (value !== undefined) {
        element.innerHTML = value;
      }
    });

    if (text.site && text.site.title && page === "home") {
      document.title = text.site.title;
    }

    if (text.site && text.site.description) {
      const description = document.querySelector('meta[name="description"]');

      if (description) {
        description.setAttribute("content", text.site.description);
      }
    }
  }

  function safeExternal(url) {
    if (/^https?:\/\//i.test(url || "")) {
      return { target: "_blank", rel: "noreferrer" };
    }

    return {};
  }

  function applySafeExternal(anchor, url) {
    const attrs = safeExternal(url);

    Object.keys(attrs).forEach(function (name) {
      anchor.setAttribute(name, attrs[name]);
    });
  }

  function setStatusClass(element, status) {
    element.className = "status";

    if (status === "In Progress") {
      element.classList.add("is-progress");
    }

    if (status === "Completed") {
      element.classList.add("is-completed");
    }
  }

  function typeLabel(type) {
    if (currentLang === "ko") {
      return type === "Team" ? "팀 프로젝트" : "개인 프로젝트";
    }

    return type;
  }

  function setTypeClass(element, type) {
    element.className = "badge-type";

    if (type === "Team") {
      element.classList.add("is-team");
    }

    if (type === "Individual") {
      element.classList.add("is-individual");
    }
  }

  function appendTags(parent, tags) {
    const tagRow = document.createElement("ul");
    tagRow.className = "tag-row";

    tags.forEach(function (tag) {
      const item = document.createElement("li");
      item.className = "tag";
      item.textContent = tag;
      tagRow.appendChild(item);
    });

    parent.appendChild(tagRow);
  }

  function createButton(label, url, className) {
    if (!url) {
      const disabled = document.createElement("span");
      disabled.className = className + " is-disabled";
      disabled.setAttribute("aria-disabled", "true");
      disabled.textContent = label;
      return disabled;
    }

    const anchor = document.createElement("a");
    anchor.className = className;
    anchor.href = url;
    anchor.textContent = label;
    applySafeExternal(anchor, url);
    return anchor;
  }

  function createLiveDemoButton(url, className) {
    const anchor = document.createElement("a");
    anchor.className = className + " button-live";
    anchor.href = url;

    const dot = document.createElement("span");
    dot.className = "live-dot";
    anchor.appendChild(dot);
    anchor.appendChild(document.createTextNode("Live Demo"));

    applySafeExternal(anchor, url);
    return anchor;
  }

  function renderHeroProjects() {
    const target = document.querySelector('[data-render="heroProjects"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    locale().projects.forEach(function (project, index) {
      const anchor = document.createElement("a");
      anchor.className = "project-index-row";
      anchor.href = project.detailUrl;

      const number = document.createElement("span");
      number.className = "project-number";
      number.textContent = String(index + 1).padStart(2, "0");

      const title = document.createElement("span");
      title.textContent = project.title;

      const status = document.createElement("span");
      setStatusClass(status, project.status);
      status.textContent = project.status;

      anchor.append(number, title, status);
      target.appendChild(anchor);
    });
  }

  function renderBulletList(bullets) {
    const list = document.createElement("ul");

    bullets.forEach(function (bullet) {
      const item = document.createElement("li");

      if (typeof bullet === "string") {
        item.textContent = bullet;
      } else {
        const anchor = document.createElement("a");
        anchor.className = "text-link";
        anchor.href = bullet.url;
        anchor.textContent = bullet.text;
        applySafeExternal(anchor, bullet.url);
        item.appendChild(anchor);
      }

      list.appendChild(item);
    });

    return list;
  }

  function appendProjectTitle(el, titleText) {
    const [main, ...rest] = titleText.split("\n");

    const mainSpan = document.createElement("span");
    mainSpan.className = "project-title-main";
    mainSpan.textContent = main;
    el.appendChild(mainSpan);

    if (rest.length) {
      el.appendChild(document.createElement("br"));
      el.appendChild(document.createTextNode(rest.join("\n")));
    }
  }

  function renderSummary(className, value) {
    if (Array.isArray(value)) {
      const list = renderBulletList(value);
      list.className = className;
      return list;
    }

    const paragraph = document.createElement("p");
    paragraph.className = className;
    paragraph.textContent = value;
    return paragraph;
  }

  function renderExperience() {
    const target = document.querySelector('[data-render="experience"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    locale().experience.forEach(function (entry) {
      const article = document.createElement("article");
      article.className = "timeline-item";

      const meta = document.createElement("div");
      meta.className = "timeline-meta";
      meta.textContent = entry.period;

      const content = document.createElement("div");

      const title = document.createElement("h3");
      title.textContent = entry.organization;

      const role = document.createElement("p");
      role.className = "card-copy";
      role.textContent = entry.role;

      content.append(title, role);

      if (entry.groups) {
        entry.groups.forEach(function (group) {
          const groupBlock = document.createElement("div");
          groupBlock.className = "experience-group";

          const groupTitle = document.createElement("h4");
          groupTitle.textContent = group.title;

          groupBlock.append(groupTitle, renderBulletList(group.bullets));
          content.appendChild(groupBlock);
        });
      } else {
        content.appendChild(renderBulletList(entry.bullets));
      }

      if (entry.links && entry.links.length) {
        entry.links.forEach(function (link) {
          const anchor = document.createElement("a");
          anchor.className = "text-link";
          anchor.href = link.url;
          anchor.textContent = link.label;
          applySafeExternal(anchor, link.url);
          content.appendChild(anchor);
        });
      }

      article.append(meta, content);
      target.appendChild(article);
    });
  }

  // 기술명 → 로고 파일명: "Docker Compose" → "docker-compose"
  function iconSlug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  // svg 우선, 없으면 png. 둘 다 없으면 로고 자리만 비우고 이름은 그대로 표시
  function iconSources(name) {
    const base = "assets/icons/" + iconSlug(name);
    return [base + ".svg", base + ".png"];
  }

  function buildSkillCell(item) {
    const cell = document.createElement("li");
    cell.className = "skill-item";

    // svg를 먼저 찾고, 없으면 png로 넘어간다
    const sources = iconSources(item);
    let attempt = 0;

    const logo = document.createElement("img");
    logo.className = "skill-item-logo";
    logo.alt = "";
    logo.loading = "lazy";
    logo.addEventListener("error", function () {
      attempt += 1;

      if (attempt < sources.length) {
        logo.src = sources[attempt];
        return;
      }

      logo.style.visibility = "hidden";
    });
    logo.src = sources[0];

    const badge = document.createElement("span");
    badge.className = "skill-item-badge";
    badge.appendChild(logo);

    const name = document.createElement("span");
    name.className = "skill-item-name";
    name.textContent = item;

    cell.append(badge, name);
    return cell;
  }

  function buildSkillGroupCard(group) {
    const article = document.createElement("article");
    article.className = "skill-group";

    const title = document.createElement("h3");
    title.textContent = group.title;

    const items = document.createElement("ul");
    items.className = "skill-items";
    group.items.forEach(function (item) {
      items.appendChild(buildSkillCell(item));
    });

    article.append(title, items);
    return article;
  }

  function renderSkills() {
    const target = document.querySelector('[data-render="skills"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    locale().skills.forEach(function (group) {
      target.appendChild(buildSkillGroupCard(group));
    });
  }

  function renderProjects() {
    const target = document.querySelector('[data-render="projects"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    locale().projects.forEach(function (project, index) {
      const article = document.createElement("article");
      article.className = "project-card";

      const header = document.createElement("div");
      header.className = "project-card-header";

      const number = document.createElement("span");
      number.className = "project-number";
      number.textContent = String(index + 1).padStart(2, "0");

      const badges = document.createElement("div");
      badges.className = "badge-group";

      const type = document.createElement("span");
      setTypeClass(type, project.type);
      type.textContent = typeLabel(project.type);

      const status = document.createElement("span");
      setStatusClass(status, project.status);
      status.textContent = project.status;

      badges.append(type, status);

      const title = document.createElement("h3");
      appendProjectTitle(title, project.title);

      const summary = renderSummary("card-copy", project.summary);

      const actions = document.createElement("div");
      actions.className = "card-actions";
      const actionButtons = [
        createButton(currentLang === "ko" ? "자세히 보기" : "View Details", project.detailUrl, "button"),
        createButton("GitHub", project.githubUrl, "button")
      ];
      if (project.liveUrl) {
        actionButtons.push(createLiveDemoButton(project.liveUrl, "button"));
      }
      actions.append(...actionButtons);

      header.append(number, badges);
      article.append(header, title, summary);
      appendTags(article, project.stack.split("/"));
      article.appendChild(actions);
      target.appendChild(article);
    });
  }

  function equalizeElementHeights(selector) {
    const items = document.querySelectorAll(selector);

    if (!items.length) {
      return;
    }

    items.forEach(function (item) {
      item.style.minHeight = "";
    });

    const maxHeight = Math.max.apply(
      null,
      Array.prototype.map.call(items, function (item) {
        return item.offsetHeight;
      })
    );

    items.forEach(function (item) {
      item.style.minHeight = maxHeight + "px";
    });
  }

  function equalizeProjectCardBlocks() {
    equalizeElementHeights(".project-card h3");
    equalizeElementHeights(".project-card .card-copy");
  }

  function renderListPanel(renderName) {
    const target = document.querySelector('[data-render="' + renderName + '"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    const panel = document.createElement("section");
    panel.className = "list-panel";

    locale()[renderName].forEach(function (item) {
      const article = document.createElement("article");

      const itemTitle = document.createElement(item.url ? "a" : "p");
      itemTitle.className = item.url ? "publication-link" : "card-copy";
      itemTitle.textContent = item.title;

      if (item.url) {
        itemTitle.href = item.url;
        applySafeExternal(itemTitle, item.url);
      }

      const meta = document.createElement("p");
      meta.className = "timeline-meta";
      meta.textContent = item.meta;

      article.append(itemTitle, meta);

      panel.appendChild(article);
    });

    target.appendChild(panel);
  }

  function renderAwards() {
    const target = document.querySelector('[data-render="awards"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    const panel = document.createElement("section");
    panel.className = "list-panel";

    locale().awards.forEach(function (award) {
      const article = document.createElement("article");
      article.className = "award-item";

      const contest = document.createElement("p");
      contest.className = "card-copy award-contest";
      contest.textContent = award.contest + " — " + award.award;

      const meta = document.createElement("p");
      meta.className = "timeline-meta";
      meta.textContent = [award.date, award.organizer].join(" · ");

      article.append(contest, meta);
      panel.appendChild(article);
    });

    target.appendChild(panel);
  }

  function renderContact() {
    const target = document.querySelector('[data-render="contact"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    locale().contact.forEach(function (contact) {
      const anchor = document.createElement("a");
      anchor.className = "contact-link";
      anchor.href = contact.url;
      applySafeExternal(anchor, contact.url);

      const label = document.createElement("span");
      label.textContent = contact.label;

      const value = document.createElement("span");
      value.textContent = contact.value;

      anchor.append(label, value);
      target.appendChild(anchor);
    });
  }

  function renderProjectDetail() {
    const target = document.querySelector('[data-render="projectDetail"]');

    if (!target) {
      return;
    }

    const detail = locale().projectDetails[projectId];
    target.replaceChildren();

    if (!detail) {
      const section = document.createElement("section");
      section.className = "section-panel reveal";

      const inner = document.createElement("div");
      inner.className = "section-inner";

      const title = document.createElement("h1");
      title.textContent = "Project not found";

      inner.appendChild(title);
      section.appendChild(inner);
      target.appendChild(section);
      document.title = titleWithSiteName("Project not found");
      return;
    }

    document.title = titleWithSiteName(detail.title.replace(/\s+/g, " "));

    const hero = document.createElement("section");
    hero.className = "detail-hero reveal";

    const heroInner = document.createElement("div");
    heroInner.className = "section-inner hero-grid";

    const copy = document.createElement("div");

    const badges = document.createElement("div");
    badges.className = "badge-group";

    const type = document.createElement("span");
    setTypeClass(type, detail.type);
    type.textContent = typeLabel(detail.type);

    const status = document.createElement("span");
    setStatusClass(status, detail.status);
    status.textContent = detail.status;

    badges.append(type, status);

    const title = document.createElement("h1");
    appendProjectTitle(title, detail.title);

    const summary = renderSummary("detail-copy", detail.summary);

    const actions = document.createElement("div");
    actions.className = "card-actions detail-actions";
    const actionButtons = [
      createButton(currentLang === "ko" ? "프로젝트로 돌아가기" : "Back to Projects", "../index.html#projects", "button"),
      createButton("GitHub", detail.githubUrl, "button")
    ];
    if (detail.liveUrl) {
      actionButtons.push(createLiveDemoButton(detail.liveUrl, "button"));
    }
    actions.append(...actionButtons);

    copy.append(actions, badges, title, summary);
    appendTags(copy, detail.tags);

    const media = document.createElement("div");
    media.className = "media-panel";
    media.textContent = detail.mediaLabel;

    heroInner.append(copy, media);
    hero.appendChild(heroInner);
    target.appendChild(hero);

    detail.sections.forEach(function (section) {
      const article = document.createElement("article");
      article.className = "section-inner detail-grid reveal";

      const heading = document.createElement("h2");
      heading.textContent = section.title;

      const body = document.createElement("p");
      body.className = "detail-copy";
      body.textContent = section.body;

      article.append(heading, body);
      target.appendChild(article);
    });
  }

  function setupLanguageButtons() {
    const buttons = document.querySelectorAll("[data-lang]");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const nextLang = button.dataset.lang;

        if (!data.locales[nextLang] || nextLang === currentLang) {
          updateLanguageButtons();
          return;
        }

        currentLang = nextLang;
        writeStoredLanguage(currentLang);
        renderAll();
      });
    });
  }

  function updateLanguageButtons() {
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      const isActive = button.dataset.lang === currentLang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setupMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-site-nav]");

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");

    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealObserver = observer;

    elements.forEach(function (element) {
      element.classList.remove("is-visible");
      observer.observe(element);
    });
  }

  function renderAll() {
    setHtmlLang();
    setTextBindings();
    updateLanguageButtons();
    if (page === "project") {
      renderProjectDetail();
    } else {
      renderHeroProjects();
      renderExperience();
      renderSkills();
      renderProjects();
      equalizeProjectCardBlocks();
      renderAwards();
      renderListPanel("publications");
      renderContact();
    }

    setupReveal();
  }

  function setupProjectSummaryResize() {
    let resizeTimer = null;

    window.addEventListener("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(equalizeProjectCardBlocks, 150);
    });
  }

  // 페이지 전체에서 3D 튜브 커서 효과를 활성화한다.
  // 터치 기기와 모션 감소 설정에서는 정적인 기존 히어로를 그대로 유지한다.
  function setupTubesCursor() {
    const canvas = document.querySelector("[data-tubes-cursor]");

    if (
      !canvas ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    // 라이브러리는 canvas의 부모 크기를 기준으로 렌더러를 만든다.
    // body는 스크롤 전체 높이이므로, 화면 크기의 전용 레이어를 부모로 사용한다.
    const layer = document.createElement("div");
    layer.className = "tubes-cursor-layer";
    canvas.replaceWith(layer);
    layer.appendChild(canvas);

    let cursorApp = null;
    let disposed = false;
    const tubeColors = ["#5e72e4", "#8965e0", "#f5365c"];
    const lightColors = ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"];

    function randomColors(count) {
      return Array.from({ length: count }, function () {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      });
    }

    // canvas의 레이아웃이 확정된 다음 초기화해 WebGL의 NaN 크기 오류를 방지한다.
    window.setTimeout(function () {
      import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js")
        .then(function (module) {
          if (disposed) {
            return;
          }

          cursorApp = module.default(canvas, {
            bloom: { threshold: 0, strength: 1.7, radius: 0.1 },
            tubes: {
              count: 14,
              colors: tubeColors,
              lights: { intensity: 320, colors: lightColors }
            }
          });
        })
        .catch(function (error) {
          // 외부 CDN을 불러올 수 없더라도 포트폴리오의 기본 콘텐츠는 정상적으로 표시한다.
          console.warn("Tubes cursor effect could not be loaded.", error);
        });
    }, 100);

    document.addEventListener("click", function (event) {
      if (!cursorApp || event.target.closest("a, button")) {
        return;
      }

      cursorApp.tubes.setColors(randomColors(3));
      cursorApp.tubes.setLightsColors(randomColors(4));
    });

    window.addEventListener("pagehide", function () {
      disposed = true;

      if (cursorApp && typeof cursorApp.dispose === "function") {
        cursorApp.dispose();
      }
    },
    { once: true });
  }

  setupLanguageButtons();
  setupMenu();
  setupProjectSummaryResize();
  setupTubesCursor();
  renderAll();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(equalizeProjectCardBlocks);
  }
})();
