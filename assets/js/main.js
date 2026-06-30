(function () {
  const content = window.PORTFOLIO_CONTENT;
  const langButtons = document.querySelectorAll(".lang-btn");
  const heroPoints = document.getElementById("hero-points");
  const aboutGrid = document.getElementById("about-grid");
  const projectGrid = document.getElementById("project-grid");
  const skillsList = document.getElementById("skills-list");
  const awardsList = document.getElementById("awards-list");
  const experienceList = document.getElementById("experience-list");
  const contactList = document.getElementById("contact-list");

  let currentLang = "en";

  function getPathValue(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
  }

  function renderSimpleList(container, items) {
    container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }

  function renderHeroPoints(items) {
    heroPoints.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }

  function renderProfileCards(items) {
    aboutGrid.innerHTML = items
      .map(
        (item) => `
          <article class="stack-item">
            <h3 class="stack-item-title">${item.title}</h3>
            <p class="stack-item-meta">${item.meta}</p>
            <p class="stack-item-body">${item.body}</p>
          </article>
        `
      )
      .join("");
  }

  function renderProjects(projects) {
    projectGrid.innerHTML = projects
      .map((project) => {
        const highlightsMarkup =
          project.highlights && project.highlights.length
            ? `
                <ul class="project-highlights">
                  ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              `
            : "";
        const linksMarkup =
          project.links && project.links.length
            ? `
                <div class="project-links">
                  ${project.links
                    .map((link) => {
                      const externalAttrs = /^https?:/i.test(link.url) ? ' target="_blank" rel="noreferrer"' : "";
                      return `<a class="project-link" href="${link.url}"${externalAttrs}>${link.label}</a>`;
                    })
                    .join("")}
                </div>
              `
            : "";

        return `
          <article class="project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-summary">${project.summary}</p>
            ${highlightsMarkup}
            <div class="tag-row">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            ${linksMarkup}
          </article>
        `;
      })
      .join("");
  }

  function renderStackList(container, items) {
    container.innerHTML = items
      .map(
        (item) => `
          <article class="stack-item">
            <h3 class="stack-item-title">${item.title}</h3>
            <p class="stack-item-meta">${item.meta}</p>
            <p class="stack-item-body">${item.body}</p>
          </article>
        `
      )
      .join("");
  }

  function renderContacts(items) {
    contactList.innerHTML = items
      .map((item) => {
        const externalAttrs = /^https?:/i.test(item.url) ? ' target="_blank" rel="noreferrer"' : "";
        return `<li><a href="${item.url}"${externalAttrs}>${item.label}: ${item.value}</a></li>`;
      })
      .join("");
  }

  function applyLanguage(lang) {
    const locale = content[lang];

    if (!locale) {
      return;
    }

    currentLang = lang;
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
    document.title = locale.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", locale.meta.description);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translatedText = getPathValue(locale, key);
      if (translatedText) {
        element.textContent = translatedText;
      }
    });

    renderHeroPoints(locale.heroPoints);
    renderProfileCards(locale.about.cards);
    renderSimpleList(skillsList, locale.skills);
    renderProjects(locale.projects);
    renderStackList(awardsList, locale.awards);
    renderStackList(experienceList, locale.experience);
    renderContacts(locale.contact.items);

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function setupLanguageToggle() {
    langButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetLang = button.dataset.lang;
        if (targetLang && targetLang !== currentLang) {
          applyLanguage(targetLang);
        }
      });
    });
  }

  function setupRevealAnimation() {
    const revealTargets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
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

    revealTargets.forEach((target, index) => {
      target.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
      observer.observe(target);
    });
  }

  setupLanguageToggle();
  setupRevealAnimation();
  applyLanguage("en");
})();
