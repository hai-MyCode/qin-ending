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

  let activeIndex = -1;
  let typingTimer = null;
  let typingToken = 0;
  let revealTimer = null;
  let autoActivateTimer = null;
  let hasRevealed = false;
  let hoverIntentTimer = null;
  let hoverIntentIndex = -1;
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
    const label = `${r.name}，${r.era}，${r.years}。${r.full}`;
    return `
      <button
        class="ruler"
        type="button"
        data-index="${index}"
        aria-label="${label}"
        aria-pressed="false"
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

          <span class="panel" aria-hidden="true">
            <span class="panel-head">
              <span class="panel-name">${r.name}</span>
              <span class="panel-era">${r.era}<br />${r.years}</span>
              <span class="panel-rule"></span>
            </span>
            <span class="quote">
              <span class="quote-lead">我做的是——</span>
              <span class="quote-lines">${r.merit.join("<br />")}</span>
              <span class="quote-body"><span class="quote-text"></span></span>
              <span class="quote-meta"><i></i><span>${r.meta}</span></span>
            </span>
          </span>
        </span>
      </button>`;
  }

  rail.innerHTML = RULERS.map(cardMarkup).join("");
  const cards = [...rail.querySelectorAll(".ruler")];

  /* -------------------------------------------------------
     Typewriter
     ------------------------------------------------------- */

  function typeBody(card, text) {
    const target = card.querySelector(".quote-text");
    if (!target) return;

    typingToken += 1;
    const token = typingToken;
    if (typingTimer) {
      window.clearTimeout(typingTimer);
      typingTimer = null;
    }
    rail.querySelectorAll(".typed-caret").forEach((caret) => caret.remove());

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
      progressLabel.textContent = `已听 ${count} / ${RULERS.length} 段自述`;
    }
  }

  function activateRuler(index, { announce = true, scroll = true } = {}) {
    const next = Number(index);
    if (!Number.isInteger(next) || next < 0 || next >= cards.length) return;
    if (next === activeIndex) return;

    if (hoverIntentTimer) {
      window.clearTimeout(hoverIntentTimer);
      hoverIntentTimer = null;
    }
    activeIndex = next;
    const card = cards[next];
    const ruler = RULERS[next];

    cards.forEach((item, itemIndex) => {
      const isActive = itemIndex === next;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    rail.classList.add("has-active");
    typeBody(card, ruler.body);

    if (!visited.has(ruler.id)) {
      visited.add(ruler.id);
      updateProgress();
    }

    if (announce) {
      liveRegion.textContent = `${ruler.name}。${ruler.full}`;
    }

    window.dispatchEvent(
      new CustomEvent("qin:ending:ruler", {
        detail: { index: next, id: ruler.id, name: ruler.name }
      })
    );

    if (
      scroll &&
      rail.scrollWidth > rail.clientWidth + 8 &&
      window.matchMedia("(max-width: 980px)").matches
    ) {
      const left = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
      rail.scrollTo({ left: Math.max(0, left), behavior: reducedMotion.matches ? "auto" : "smooth" });
    }
  }

  function clearHoverIntent() {
    if (hoverIntentTimer) {
      window.clearTimeout(hoverIntentTimer);
      hoverIntentTimer = null;
    }
    hoverIntentIndex = -1;
  }

  // Use a short hover intent + hit-test check instead of raw pointerenter.
  // This prevents a card shifting underneath the cursor from immediately
  // triggering a second card and producing a back-and-forth wobble.
  rail.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;

    const card = event.target.closest?.(".ruler");

    if (!card) {
      clearHoverIntent();
      return;
    }

    const index = Number(card.dataset.index);
    if (index === activeIndex) {
      clearHoverIntent();
      return;
    }

    if (reducedMotion.matches) {
      activateRuler(index, { scroll: false });
      return;
    }

    // Keep one intent window per target. Flex animation changes card bounds;
    // re-hit-testing the stationary pointer would otherwise chase those bounds.
    if (hoverIntentTimer && hoverIntentIndex === index) return;
    clearHoverIntent();
    hoverIntentIndex = index;

    hoverIntentTimer = window.setTimeout(() => {
      hoverIntentTimer = null;
      hoverIntentIndex = -1;
      activateRuler(index, { scroll: false });
    }, 70);
  });

  rail.addEventListener("pointerleave", clearHoverIntent);

  cards.forEach((card, index) => {
    card.addEventListener("focus", () => {
      activateRuler(index, { scroll: false });
    });

    card.addEventListener("click", () => {
      activateRuler(index);
    });
  });

  // Arrow-key navigation between the five portraits.
  rail.addEventListener("keydown", (event) => {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    let target = activeIndex;
    if (event.key === "ArrowLeft") target = (activeIndex - 1 + cards.length) % cards.length;
    if (event.key === "ArrowRight") target = (activeIndex + 1) % cards.length;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = cards.length - 1;

    activateRuler(target, { scroll: true });
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

    const delay = instant || reducedMotion.matches ? 320 : 1250;
    autoActivateTimer = window.setTimeout(() => {
      if (activeIndex === -1) activateRuler(0, { announce: false });
    }, delay);
  }

  function resetPage() {
    hasRevealed = false;
    activeIndex = -1;
    visited.clear();
    body.classList.remove("is-revealed", "all-visited");
    main.setAttribute("aria-hidden", "true");
    prologue.removeAttribute("aria-hidden");
    prologue.inert = false;
    cards.forEach((card) => {
      card.classList.remove("is-active");
      card.setAttribute("aria-pressed", "false");
      const target = card.querySelector(".quote-text");
      if (target) target.textContent = "";
      card.querySelectorAll(".typed-caret").forEach((caret) => caret.remove());
    });
    rail.classList.remove("has-active");
    ticks.forEach((tick) => tick.classList.remove("is-read"));
    progressLabel.textContent = "已听 0 / 5 段自述";
    typingToken += 1;
    if (typingTimer) window.clearTimeout(typingTimer);
    if (autoActivateTimer) window.clearTimeout(autoActivateTimer);
    clearHoverIntent();
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
    activate: (index) => activateRuler(index),
    get activeIndex() { return activeIndex; },
    get visited() { return [...visited]; },
    rulers: RULERS.map(({ id, name }) => ({ id, name }))
  };

  window.addEventListener("qin:ending:reveal", () => revealPage());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !hasRevealed) {
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
