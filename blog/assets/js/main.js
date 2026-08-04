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

      const bullets = document.createElement("ul");
      entry.bullets.forEach(function (bullet) {
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

        bullets.appendChild(item);
      });

      content.append(title, role, bullets);

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

  function renderSkills() {
    const target = document.querySelector('[data-render="skills"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    locale().skills.forEach(function (group) {
      const article = document.createElement("article");
      article.className = "skill-group";

      const title = document.createElement("h3");
      title.textContent = group.title;

      const items = document.createElement("p");
      items.textContent = group.items.join(" · ");

      article.append(title, items);
      target.appendChild(article);
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
      type.textContent = project.type;

      const status = document.createElement("span");
      setStatusClass(status, project.status);
      status.textContent = project.status;

      badges.append(type, status);

      const title = document.createElement("h3");
      title.textContent = project.title;

      const summary = document.createElement("p");
      summary.className = "card-copy";
      summary.textContent = project.summary;

      const actions = document.createElement("div");
      actions.className = "card-actions";
      actions.append(
        createButton(currentLang === "ko" ? "자세히 보기" : "View Details", project.detailUrl, "button"),
        createButton("GitHub", project.githubUrl, "button")
      );

      header.append(number, badges);
      article.append(header, title, summary);
      appendTags(article, project.stack.split("/"));
      article.appendChild(actions);
      target.appendChild(article);
    });
  }

  function renderListPanel(renderName, title) {
    const target = document.querySelector('[data-render="' + renderName + '"]');

    if (!target) {
      return;
    }

    target.replaceChildren();

    const panel = document.createElement("section");
    panel.className = "list-panel";

    const heading = document.createElement("h3");
    heading.textContent = title;
    panel.appendChild(heading);

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
    type.textContent = detail.type;

    const status = document.createElement("span");
    setStatusClass(status, detail.status);
    status.textContent = detail.status;

    badges.append(type, status);

    const title = document.createElement("h1");
    title.textContent = detail.title;

    const summary = document.createElement("p");
    summary.className = "detail-copy";
    summary.textContent = detail.summary;

    const actions = document.createElement("div");
    actions.className = "card-actions detail-actions";
    actions.append(
      createButton(currentLang === "ko" ? "프로젝트로 돌아가기" : "Back to Projects", "../index.html#projects", "button"),
      createButton("GitHub", detail.githubUrl, "button")
    );

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
      renderListPanel("awards", locale().sections.awardsTitle);
      renderListPanel("publications", locale().sections.publicationsTitle);
      renderContact();
    }

    setupReveal();
  }

  setupLanguageButtons();
  setupMenu();
  renderAll();
})();
