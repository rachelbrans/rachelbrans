const content = window.PORTFOLIO_CONTENT;

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const iconForType = {
  image: "IMG",
  video: "VID",
  article: "TXT",
  link: "URL",
};

let activeFilter = "All";
let lastFocusedProject = null;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderNavigation() {
  const nav = qs("#site-nav");
  nav.innerHTML = content.navigation
    .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
    .join("");
}

function renderHero() {
  qs("#hero-title").innerHTML = content.hero.title
    .map((line, index) => `<span class="title-line title-line-${index + 1}">${escapeHtml(line)}</span>`)
    .join("");
  qs("#hero-copy").textContent = content.hero.copy;

  const heroImage = qs("#hero-image");
  heroImage.src = content.hero.image.src;
  heroImage.alt = content.hero.image.alt;
  qs("#hero-media-title").textContent = content.hero.image.label;

  qs("#hero-actions").innerHTML = content.hero.actions
    .map(
      (action) =>
        `<a class="button ${action.variant}" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`,
    )
    .join("");
}

function renderFilters() {
  const filters = qs("#project-filters");
  filters.innerHTML = content.filters
    .map(
      (filter) =>
        `<button class="filter-button" type="button" data-filter="${escapeHtml(filter)}" aria-pressed="${filter === activeFilter}">
          ${escapeHtml(filter)}
        </button>`,
    )
    .join("");

  qsa(".filter-button", filters).forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderProjects();
      renderFilters();
    });
  });
}

function projectMatches(project) {
  return activeFilter === "All" || project.category === activeFilter;
}

function renderProjects() {
  const projects = content.projects.filter(projectMatches);
  qs("#work-intro").textContent = content.workIntro;
  qs("#result-count").textContent = `${projects.length} project${projects.length === 1 ? "" : "s"} shown`;
  qs("#project-grid").innerHTML = projects.map(renderProjectCard).join("");

  qsa(".project-card").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.projectId, button));
  });
}

function renderProjectCard(project) {
  return `
    <button class="project-card" type="button" data-project-id="${escapeHtml(project.id)}">
      <span class="project-image">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" loading="lazy" />
        <span class="project-type">${escapeHtml(iconForType[project.type] || project.type)}</span>
      </span>
      <span class="project-meta">
        <span>${escapeHtml(project.category)}</span>
        <span>${escapeHtml(project.year)}</span>
      </span>
      <span class="project-title">${escapeHtml(project.title)}</span>
      <span class="project-summary">${escapeHtml(project.summary)}</span>
    </button>
  `;
}

function renderCv() {
  qs("#cv-summary").textContent = content.cv.summary;
  const download = content.cv.downloadHref
    ? `<a class="button secondary" href="${escapeHtml(content.cv.downloadHref)}" download>${escapeHtml(content.cv.downloadLabel)}</a>`
    : "";
  const education = content.cv.education || [];

  qs("#competencies").innerHTML = `
    <div class="cv-profile">
      <p class="project-meta-line">Profile</p>
      <p>${escapeHtml(content.cv.profile)}</p>
      ${download}
    </div>
    <div class="education-list">
      <p class="project-meta-line">Education</p>
      ${education
        .map(
          (item) => `
            <article class="education-item">
              <h3>${escapeHtml(item.qualification)}</h3>
              <p>${escapeHtml(item.department)}</p>
              <p>${escapeHtml(item.institution)}</p>
              <span>${escapeHtml(item.status)}</span>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="focus-panel">
      <div class="competency-header">
        <h3>Focus</h3>
      </div>
      <ul>
        ${content.cv.competencies.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;

  qs("#cv-timeline").innerHTML = content.cv.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <p>${escapeHtml(item.range)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <span>${escapeHtml(item.detail)}</span>
        </article>
      `,
    )
    .join("");
}

function renderContact() {
  qs("#contact-intro").textContent = content.contact.intro;
  qs("#contact-grid").innerHTML = content.contact.links
    .map(
      (item) => `
        <a class="contact-link" href="${escapeHtml(item.href)}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </a>
      `,
    )
    .join("");
  qs("#footer-credit").textContent = `${content.identity.name} / ${content.identity.role} / ${new Date().getFullYear()}`;
}

function openProject(projectId, trigger) {
  const project = content.projects.find((item) => item.id === projectId);
  if (!project) return;

  lastFocusedProject = trigger;
  const media = project.type === "video" && project.embedUrl
    ? `<iframe src="${escapeHtml(project.embedUrl)}" title="${escapeHtml(project.title)} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    : `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt)}" />`;

  qs("#dialog-content").innerHTML = `
    <div class="dialog-media">${media}</div>
    <div class="dialog-copy">
      <p class="project-meta-line">${escapeHtml(project.category)} / ${escapeHtml(project.year)} / ${escapeHtml(project.type)}</p>
      <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.summary)}</p>
      <p>${escapeHtml(project.details)}</p>
      <div class="dialog-links">
        ${project.links
          .map((link) => `<a class="button secondary" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
          .join("")}
      </div>
    </div>
  `;

  const dialog = qs("#project-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeProject() {
  const dialog = qs("#project-dialog");
  if (dialog.open && typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
  qs("#dialog-content").innerHTML = "";
  lastFocusedProject?.focus();
}

function setupDialog() {
  const dialog = qs("#project-dialog");
  qs("#dialog-close").addEventListener("click", closeProject);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog.open) closeProject();
  });
}

function setupTheme() {
  const toggle = qs("#theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (preferredDark ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  qs("#theme-toggle").setAttribute("aria-pressed", String(isDark));
  qs(".theme-label").textContent = isDark ? "Light" : "Dark";
  qs('meta[name="theme-color"]').setAttribute("content", isDark ? "#111111" : "#f6f2e8");
}

function setupPointer() {
  const hero = qs(".hero");
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    hero.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    hero.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  });
}

function setupReducedMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reduced-motion");
  }
}

function setupButtonFeedback() {
  document.addEventListener("click", (event) => {
    const control = event.target.closest(".button, .filter-button, .theme-toggle, .contact-link");
    if (!control) return;

    control.classList.add("is-selected");
    window.setTimeout(() => {
      control.classList.remove("is-selected");
    }, 850);
  });
}

function boot() {
  if (!content) return;
  renderNavigation();
  renderHero();
  renderFilters();
  renderProjects();
  renderCv();
  renderContact();
  setupTheme();
  setupPointer();
  setupDialog();
  setupReducedMotion();
  setupButtonFeedback();
}

document.addEventListener("DOMContentLoaded", boot);
