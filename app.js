/* =========================================================
   秦 · 终章 — interaction
   Static, dependency-free. All illustrations are inline SVG.
   ========================================================= */

(() => {
  "use strict";

  const RULERS = [
    {
      id: "feizi",
      ordinal: "壹",
      name: "秦非子",
      roman: "QIN FEIZI",
      image: "assets/portrait-feizi.webp",
      era: "西周 · 周孝王时",
      years: "约前 890 年受封",
      epithet: "得封于秦",
      glyph: "封",
      merit: ["为周王养马", "得封于秦"],
      body: "汧渭之间，马群蕃息。周孝王赐我秦邑，秦人从此有了第一块自己的土地。",
      full: "我在汧渭之间为周孝王养马，马群蕃息。周孝王封我于秦，秦人从此有了第一块属于自己的土地。",
      meta: "秦国的第一块土地",
      accent: "#a3ae79",
      accentRgb: "163, 174, 121",
    },
    {
      id: "xiang",
      ordinal: "贰",
      name: "秦襄公",
      roman: "QIN XIANG GONG",
      image: "assets/portrait-xiang.webp",
      era: "春秋初 · 前 777—前 766",
      years: "护送平王东迁",
      epithet: "列为诸侯",
      glyph: "侯",
      merit: ["护送平王东迁", "秦国始列诸侯"],
      body: "犬戎之乱，我率兵救周。平王东迁，赐我岐西之地。秦国自此与中原诸侯并列。",
      full: "犬戎之乱，我率兵救周；又护送周平王东迁。平王赐我岐西之地，秦国自此与中原诸侯并列。",
      meta: "从附庸到诸侯",
      accent: "#c98556",
      accentRgb: "201, 133, 86",
    },
    {
      id: "mu",
      ordinal: "叁",
      name: "秦穆公",
      roman: "QIN MU GONG",
      image: "assets/portrait-mu.webp",
      era: "春秋 · 前 659—前 621",
      years: "灭国十二，开地千里",
      epithet: "称霸西戎",
      glyph: "霸",
      merit: ["纳百里奚、蹇叔", "灭国十二，称霸西戎"],
      body: "我纳贤才、修国政，东与强晋争衡，西霸戎狄。秦国第一次强得让中原侧目。",
      full: "我用百里奚、蹇叔，纳贤才、修国政；东与强晋争衡，西霸戎狄，灭国十二，开地千里。秦国第一次让中原侧目。",
      meta: "秦国的第一次霸业",
      accent: "#d6ad6c",
      accentRgb: "214, 173, 108",
    },
    {
      id: "kang",
      ordinal: "肆",
      name: "秦康公",
      roman: "QIN KANG GONG",
      image: "assets/portrait-kang.webp",
      era: "春秋 · 前 620—前 609",
      years: "令狐、河曲之战",
      epithet: "与晋争锋",
      glyph: "峙",
      merit: ["继穆公之业", "与晋争锋，不退西土"],
      body: "令狐、河曲，我与晋国反复交锋。胜负之外，秦国始终钉在西土，没有退出这盘棋。",
      full: "我继穆公之业，与晋国战于令狐、河曲。胜负之外，秦国始终钉在西土，没有退出这盘棋。",
      meta: "守住秦国的位置",
      accent: "#84a4b3",
      accentRgb: "132, 164, 179",
    },
    {
      id: "gong",
      ordinal: "伍",
      name: "秦共公",
      roman: "QIN GONG GONG",
      image: "assets/portrait-gong.webp",
      era: "春秋 · 前 608—前 604",
      years: "在位四年 · 守国待时",
      epithet: "守国待时",
      glyph: "守",
      merit: ["在位虽短", "社稷未失，交予后来者"],
      body: "我在位只有四年，史书没留下多少笔墨。但我守住了社稷，把秦国交到后来者手中。",
      full: "我在位只有四年，史书没留下多少笔墨。但我守住了社稷，把秦国交到后来者手中。",
      meta: "把火种交给下一个人",
      accent: "#b9929a",
      accentRgb: "185, 146, 154",
    }
  ];

  const rail = document.getElementById("rail");
  const liveRegion = document.getElementById("live-region");
  const ticks = [...document.querySelectorAll("#ticks span")];
  const progressLabel = document.getElementById("progress-label");
  const body = document.body;
  const main = document.getElementById("reveal");
  const enterButton = document.getElementById("enter-button");
  const prologue = document.getElementById("prologue");
  const coda = document.getElementById("coda");
  const hoverDetail = document.getElementById("hover-detail");
  const hoverName = document.getElementById("hover-detail-name");
  const hoverEra = document.getElementById("hover-detail-era");
  const hoverMerit = document.getElementById("hover-detail-merit");
  const hoverBody = document.getElementById("hover-detail-body");
  const hoverMeta = document.getElementById("hover-detail-meta");

  let activeIndex = -1;
  let typingTimer = null;
  let typingToken = 0;
  let revealTimer = null;
  let hideDetailTimer = null;
  let hasRevealed = false;
  const visited = new Set();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const params = new URLSearchParams(window.location.search);
  const manualStart =
    params.get("manual") === "1" ||
    params.get("autoplay") === "0" ||
    window.QIN_ENDING_MANUAL === true;

  /* -------------------------------------------------------
     Build the gallery
     ------------------------------------------------------- */

  function cardMarkup(r, index) {
    const label = `${r.name}，${r.era}。将光标停在立绘上查看人物档案。`;
    return `
      <button
        class="ruler"
        type="button"
        data-index="${index}"
        aria-label="${label}"
        style="--accent:${r.accent};--accent-rgb:${r.accentRgb};--i:${index}"
      >
        <span class="ruler-inner">
          <span class="ruler-aura" aria-hidden="true"></span>
          <span class="ghost-glyph" aria-hidden="true">${r.glyph}</span>
          <span class="figure" aria-hidden="true">
            <img src="${r.image}" alt="" width="832" height="1248" draggable="false" decoding="async" />
          </span>

          <span class="spine" aria-hidden="true">
            <span class="ordinal">${r.ordinal}</span>
            <span class="name">${r.name}</span>
            <span class="epithet">${r.epithet}</span>
          </span>
        </span>
      </button>`;
  }

  rail.innerHTML = RULERS.map(cardMarkup).join("");
  const cards = [...rail.querySelectorAll(".ruler")];

  /* -------------------------------------------------------
     Typewriter
     ------------------------------------------------------- */

  function typeInto(target, text) {
    if (!target) return;

    typingToken += 1;
    const token = typingToken;
    if (typingTimer) {
      window.clearTimeout(typingTimer);
      typingTimer = null;
    }
    document.querySelectorAll(".typed-caret").forEach((caret) => caret.remove());

    if (reducedMotion.matches || !text) {
      target.textContent = text;
      return;
    }

    target.textContent = "";
    const characters = Array.from(text);
    let index = 0;
    const caret = document.createElement("span");
    caret.className = "typed-caret";
    caret.setAttribute("aria-hidden", "true");
    target.after(caret);

    const step = () => {
      if (token !== typingToken) return;
      if (index >= characters.length) {
        window.setTimeout(() => {
          if (token === typingToken) caret.remove();
        }, 1500);
        return;
      }
      target.textContent += characters[index];
      index += 1;
      typingTimer = window.setTimeout(step, 27);
    };

    window.setTimeout(() => {
      if (token === typingToken) step();
    }, 430);
  }

  /* -------------------------------------------------------
     Card activation
     ------------------------------------------------------- */

  function updateProgress() {
    const count = visited.size;
    ticks.forEach((tick, index) => {
      tick.classList.toggle("is-read", index < count);
    });

    if (count >= RULERS.length) {
      const wasComplete = body.classList.contains("all-visited");
      progressLabel.textContent = "五段到齐 · 一脉相承";
      body.classList.add("all-visited");
      if (!wasComplete) {
        window.dispatchEvent(
          new CustomEvent("qin:ending:complete", {
            detail: { visited: [...visited] }
          })
        );
      }
    } else {
      progressLabel.textContent = `已看 ${count} / ${RULERS.length} 段自述`;
    }
  }

  function setHoverContent(ruler) {
    hoverDetail.style.setProperty("--accent", ruler.accent);
    hoverDetail.style.setProperty("--accent-rgb", ruler.accentRgb);
    hoverName.textContent = ruler.name;
    hoverEra.innerHTML = `${ruler.era}<br />${ruler.years}`;
    hoverMerit.innerHTML = ruler.merit.join("<br />");
    hoverMeta.textContent = ruler.meta;
    typeInto(hoverBody, ruler.body);
  }

  function showHoverDetail(index) {
    const next = Number(index);
    if (!Number.isInteger(next) || next < 0 || next >= cards.length) return;

    if (hideDetailTimer) {
      window.clearTimeout(hideDetailTimer);
      hideDetailTimer = null;
    }

    if (next === activeIndex && hoverDetail.classList.contains("is-visible")) return;

    const ruler = RULERS[next];
    activeIndex = next;
    setHoverContent(ruler);
    hoverDetail.classList.add("is-visible");
    hoverDetail.setAttribute("aria-hidden", "false");

    if (!visited.has(ruler.id)) {
      visited.add(ruler.id);
      updateProgress();
    }

    liveRegion.textContent = `${ruler.name}。${ruler.full}`;

    window.dispatchEvent(
      new CustomEvent("qin:ending:ruler", {
        detail: { index: next, id: ruler.id, name: ruler.name }
      })
    );
  }

  function hideHoverDetail() {
    if (activeIndex === -1 && !hoverDetail.classList.contains("is-visible")) return;

    activeIndex = -1;
    hoverDetail.classList.remove("is-visible");
    hoverDetail.setAttribute("aria-hidden", "true");

    typingToken += 1;
    if (typingTimer) {
      window.clearTimeout(typingTimer);
      typingTimer = null;
    }
    document.querySelectorAll(".typed-caret").forEach((caret) => caret.remove());
  }

  function scheduleHideDetail() {
    if (hideDetailTimer) window.clearTimeout(hideDetailTimer);
    hideDetailTimer = window.setTimeout(() => {
      hideDetailTimer = null;
      hideHoverDetail();
    }, 90);
  }

  cards.forEach((card, index) => {
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") showHoverDetail(index);
    });

    card.addEventListener("click", () => {
      showHoverDetail(index);
    });
  });

  rail.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "touch") scheduleHideDetail();
  });

  rail.addEventListener("focusin", (event) => {
    const card = event.target.closest?.(".ruler");
    if (card) showHoverDetail(Number(card.dataset.index));
  });

  rail.addEventListener("focusout", (event) => {
    if (!rail.contains(event.relatedTarget)) scheduleHideDetail();
  });

  document.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType !== "touch") return;
      if (!event.target.closest?.(".ruler")) hideHoverDetail();
    },
    { passive: true }
  );

  // Arrow keys move focus between cards; the focused card updates the dossier.
  rail.addEventListener("keydown", (event) => {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const current = cards.indexOf(document.activeElement);
    const base = current >= 0 ? current : 0;
    let target = base;
    if (event.key === "ArrowLeft") target = (base - 1 + cards.length) % cards.length;
    if (event.key === "ArrowRight") target = (base + 1) % cards.length;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = cards.length - 1;

    cards[target].focus({ preventScroll: true });
  });

  /* -------------------------------------------------------
     Reveal sequence
     ------------------------------------------------------- */

  function revealPage({ focus = false, instant = false } = {}) {
    if (hasRevealed) return;
    hasRevealed = true;

    if (revealTimer) {
      window.clearTimeout(revealTimer);
      revealTimer = null;
    }

    body.classList.add("is-revealed");
    main.setAttribute("aria-hidden", "false");
    prologue.setAttribute("aria-hidden", "true");
    prologue.inert = true;

    window.dispatchEvent(new CustomEvent("qin:ending:revealed"));

    if (focus) {
      const title = document.getElementById("thesis-title");
      window.setTimeout(() => title.focus({ preventScroll: true }), 500);
    }
  }

  function resetPage() {
    hasRevealed = false;
    activeIndex = -1;
    visited.clear();
    body.classList.remove("is-revealed", "all-visited");
    main.setAttribute("aria-hidden", "true");
    prologue.removeAttribute("aria-hidden");
    prologue.inert = false;
    hoverDetail.classList.remove("is-visible");
    hoverDetail.setAttribute("aria-hidden", "true");
    if (hideDetailTimer) window.clearTimeout(hideDetailTimer);
    ticks.forEach((tick) => tick.classList.remove("is-read"));
    progressLabel.textContent = "已看 0 / 5 段自述";
    typingToken += 1;
    if (typingTimer) window.clearTimeout(typingTimer);
    document.querySelectorAll(".typed-caret").forEach((caret) => caret.remove());
    window.scrollTo({ top: 0, behavior: "auto" });
    scheduleAutoReveal();
  }

  function scheduleAutoReveal() {
    if (revealTimer) window.clearTimeout(revealTimer);
    if (manualStart) return;
    const delay = reducedMotion.matches ? 1800 : 5400;
    revealTimer = window.setTimeout(() => revealPage(), delay);
  }

  enterButton.addEventListener("click", () => revealPage({ focus: true }));

  // Integration hooks: a course player can reveal this page after its own animation.
  window.QinEnding = {
    reveal: (options = {}) => revealPage(options),
    reset: resetPage,
    activate: (index) => showHoverDetail(index),
    open: (index) => showHoverDetail(index),
    close: () => hideHoverDetail(),
    get activeIndex() { return activeIndex; },
    get visited() { return [...visited]; },
    rulers: RULERS.map(({ id, name }) => ({ id, name }))
  };

  window.addEventListener("qin:ending:reveal", () => revealPage());

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (hoverDetail.classList.contains("is-visible")) {
      hideHoverDetail();
    } else if (!hasRevealed) {
      revealPage({ focus: true });
    }
  });

  /* -------------------------------------------------------
     Ambient details
     ------------------------------------------------------- */

  function makeDust() {
    if (reducedMotion.matches) return;
    const holder = document.getElementById("dust");
    if (!holder) return;
    const fragment = document.createDocumentFragment();
    const count = window.matchMedia("(max-width: 720px)").matches ? 8 : 14;
    for (let index = 0; index < count; index += 1) {
      const mote = document.createElement("span");
      mote.className = "dust-mote";
      mote.style.setProperty("--x", `${Math.random() * 100}%`);
      mote.style.setProperty("--y", `${10 + Math.random() * 82}%`);
      mote.style.setProperty("--size", `${0.8 + Math.random() * 1.7}px`);
      mote.style.setProperty("--duration", `${11 + Math.random() * 16}s`);
      mote.style.setProperty("--delay", `${-Math.random() * 22}s`);
      mote.style.setProperty("--drift-x", `${-18 + Math.random() * 36}px`);
      mote.style.setProperty("--opacity", `${0.15 + Math.random() * 0.35}`);
      fragment.appendChild(mote);
    }
    holder.appendChild(fragment);
  }

  const codaObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              codaObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      )
    : null;

  if (codaObserver) {
    codaObserver.observe(coda);
  } else {
    coda.classList.add("in-view");
  }

  makeDust();

  // Deep-link helpers for preview, QA and LMS embedding.
  const shouldSkipIntro =
    params.get("reveal") === "1" ||
    params.get("skipIntro") === "1" ||
    window.location.hash === "#gallery";

  if (shouldSkipIntro) {
    window.setTimeout(() => revealPage({ instant: true }), 120);
  } else {
    scheduleAutoReveal();
  }
})();
