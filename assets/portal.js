(function () {
  "use strict";

  const lessons = Array.isArray(window.AULAS) ? window.AULAS : [];
  const grid = document.getElementById("lessonGrid");
  const featured = document.getElementById("featuredLesson");
  const search = document.getElementById("lessonSearch");
  const filters = [...document.querySelectorAll(".filter")];
  const empty = document.getElementById("emptyState");
  const summary = document.getElementById("resultSummary");
  let activeFilter = "todas";

  const normalize = (value) =>
    String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const available = lessons.filter((lesson) => lesson.status === "disponivel");
  const current = available.find((lesson) => lesson.destaque) || available[available.length - 1];

  document.getElementById("publishedCount").textContent = String(available.length);
  document.getElementById("slideCount").textContent = String(
    available.reduce((total, lesson) => total + (lesson.slides || 0), 0)
  );

  function lessonUrl(lesson) {
    return lesson.arquivo || "#biblioteca";
  }

  function setLatestLinks() {
    if (!current) return;
    [document.getElementById("headerLatest"), document.getElementById("heroLatest")].forEach((link) => {
      link.href = lessonUrl(current);
      link.target = "_blank";
      link.rel = "noopener";
    });
  }

  function renderFeatured() {
    if (!current) {
      featured.innerHTML = "<p>Nenhuma aula foi publicada ainda.</p>";
      return;
    }
    featured.className = `featured-card lesson-${current.estilo}`;
    featured.innerHTML = `
      <div class="featured-visual" aria-hidden="true">
        <span class="lesson-number">${String(current.numero).padStart(2, "0")}</span>
        <span class="featured-icon">${current.icone}</span>
        <span class="visual-line line-a"></span><span class="visual-line line-b"></span>
      </div>
      <div class="featured-content">
        <div class="card-topline"><span class="status available"><i></i> Aula publicada</span><span>${current.data}</span></div>
        <h3>${current.titulo}</h3>
        <p>${current.resumo}</p>
        <div class="topic-list">${current.topicos.map((topic) => `<span>${topic}</span>`).join("")}</div>
        <div class="featured-footer">
          <div><strong>${current.slides}</strong><span>slides</span></div>
          <div><strong>HTML</strong><span>interativo</span></div>
          <a class="button primary" href="${lessonUrl(current)}" target="_blank" rel="noopener">Abrir apresentação <span aria-hidden="true">↗</span></a>
        </div>
      </div>`;
  }

  function cardTemplate(lesson) {
    const isAvailable = lesson.status === "disponivel";
    const statusLabel = isAvailable ? "Disponível" : "Em breve";
    const button = isAvailable
      ? `<a class="card-action" href="${lessonUrl(lesson)}" target="_blank" rel="noopener">Abrir aula <span aria-hidden="true">↗</span></a>`
      : `<span class="card-action disabled" aria-disabled="true">Em preparação <span aria-hidden="true">◷</span></span>`;

    return `
      <article class="lesson-card lesson-${lesson.estilo}">
        <div class="lesson-cover">
          <span class="cover-number">Aula ${String(lesson.numero).padStart(2, "0")}</span>
          <span class="cover-icon" aria-hidden="true">${lesson.icone}</span>
          <span class="cover-grid" aria-hidden="true"></span>
        </div>
        <div class="lesson-body">
          <div class="card-topline"><span class="status ${isAvailable ? "available" : "soon"}"><i></i> ${statusLabel}</span><span>${lesson.data}</span></div>
          <h3>${lesson.titulo}</h3>
          <p>${lesson.resumo}</p>
          <div class="topic-list">${lesson.topicos.map((topic) => `<span>${topic}</span>`).join("")}</div>
          <div class="lesson-footer"><span>${isAvailable ? `${lesson.slides} slides` : lesson.duracao}</span>${button}</div>
        </div>
      </article>`;
  }

  function renderLessons() {
    const term = normalize(search.value);
    const result = lessons.filter((lesson) => {
      const matchesFilter = activeFilter === "todas" || lesson.status === activeFilter;
      const haystack = normalize([lesson.titulo, lesson.resumo, lesson.data, ...lesson.topicos].join(" "));
      return matchesFilter && (!term || haystack.includes(term));
    });

    grid.innerHTML = result.map(cardTemplate).join("");
    empty.hidden = result.length > 0;
    grid.hidden = result.length === 0;
    summary.textContent = `${result.length} ${result.length === 1 ? "aula encontrada" : "aulas encontradas"}`;
  }

  search.addEventListener("input", renderLessons);
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderLessons();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== search) {
      event.preventDefault();
      search.focus();
    }
    if (event.key === "Escape" && document.activeElement === search) {
      search.value = "";
      search.blur();
      renderLessons();
    }
  });

  setLatestLinks();
  renderFeatured();
  renderLessons();
})();
