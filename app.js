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
      role: "周附庸 · 秦邑之主",
      merit: ["为周王养马", "得封于秦"],
      body: "汧渭之间，马群蕃息。周孝王赐我秦邑，秦人从此有了第一块自己的土地。",
      intro: "秦人早期只是周王室西陲的一支附庸。非子因善养马被周孝王召去主马，秦邑之封让这个族群第一次有了正式的名字与土地。",
      facts: [
        { label: "受封", text: "周孝王召非子主马于汧、渭之间，马大蕃息，封为附庸，邑之秦。" },
        { label: "地理", text: "秦邑约在今甘肃清水、张家川一带，是秦人第一块正式封地。" },
        { label: "身份", text: "非子还不是诸侯，秦此时只是周王室的附庸。" }
      ],
      quote: { text: "邑之秦，使复续嬴氏祀，号曰秦嬴。", source: "《史记·秦本纪》" },
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
      role: "秦国始封诸侯",
      merit: ["护送平王东迁", "秦国始列诸侯"],
      body: "犬戎之乱，我率兵救周。平王东迁，赐我岐西之地。秦国自此与中原诸侯并列。",
      intro: "犬戎攻破镐京、周幽王被杀后，襄公率兵救周，又护送周平王东迁。平王赐岐以西之地，秦由此从附庸变成诸侯。",
      facts: [
        { label: "救周", text: "犬戎之乱，襄公将兵救周，战甚力，有功。" },
        { label: "东迁", text: "周平王东徙洛邑，襄公以兵护送。" },
        { label: "始国", text: "平王封襄公为诸侯，赐岐以西之地；秦始与诸侯通使聘享。" }
      ],
      quote: { text: "襄公于是始国，与诸侯通使聘享之礼。", source: "《史记·秦本纪》" },
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
      role: "西戎霸主 · 春秋五霸之一",
      merit: ["纳百里奚、蹇叔", "灭国十二，称霸西戎"],
      body: "我纳贤才、修国政，东与强晋争衡，西霸戎狄。秦国第一次强得让中原侧目。",
      intro: "穆公任用百里奚、蹇叔、由余，东与晋争衡，西向戎狄开地，秦国第一次成为让中原侧目的强国。",
      facts: [
        { label: "纳贤", text: "以百里奚为五羖大夫，迎蹇叔，任用由余。" },
        { label: "韩原", text: "前645年，秦、晋战于韩原，秦俘晋惠公，后又归之。" },
        { label: "霸西戎", text: "前623年，用由余谋伐戎王，益国十二，开地千里。" }
      ],
      quote: { text: "益国十二，开地千里，遂霸西戎。", source: "《史记·秦本纪》" },
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
      role: "穆公之子 · 守成之君",
      merit: ["继穆公之业", "与晋争锋，不退西土"],
      body: "令狐、河曲，我与晋国反复交锋。胜负之外，秦国始终钉在西土，没有退出这盘棋。",
      intro: "康公即位时，秦已是西土强国，但东出之路被晋国挡住。他在令狐、河曲与晋反复交锋，未能东进，却守住了穆公留下的基业。",
      facts: [
        { label: "令狐", text: "前620年，秦送公子雍入晋，赵盾拒之，秦师败于令狐。" },
        { label: "河曲", text: "前615年，秦伐晋，取羁马，战于河曲，大败晋军。" },
        { label: "用人", text: "晋大夫随会奔秦，康公留用；后晋人设计迎回随会。" }
      ],
      quote: { text: "六年，秦伐晋，取羁马，战于河曲，大败晋军。", source: "《史记·秦本纪》" },
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
      years: "守国待时 · 年数有异说",
      epithet: "守国待时",
      glyph: "守",
      role: "康公之子 · 守成之君",
      merit: ["在位虽短", "社稷未失，交予后来者"],
      body: "我在位很短，史书留下的笔墨不多。但我守住了社稷，把秦国交到后来者手中。",
      intro: "共公在位很短，史料留下的笔墨不多。他即位的第二年，晋国发生赵穿弑晋灵公之乱；秦国没有大举东出，而是守住了西土社稷。",
      facts: [
        { label: "晋乱", text: "共公二年，晋赵穿弑其君灵公。" },
        { label: "年数", text: "《史记·秦本纪》记共公立五年；《左传》系年可推四年。" },
        { label: "传承", text: "共公卒，子桓公立；秦国的接力继续。" }
      ],
      quote: { text: "共公立五年卒，子桓公立。", source: "《史记·秦本纪》" },
      full: "我在位很短，史书留下的笔墨不多。但我守住了社稷，把秦国交到后来者手中。",
      meta: "把火种交给下一个人",
      accent: "#b9929a",
      accentRgb: "185, 146, 154",
    }
  ];

  const rail = document.getElementById("rail");
  const liveRegion = document.getElementById("live-region");

  const body = document.body;
  const main = document.getElementById("reveal");
  const enterButton = document.getElementById("enter-button");
  const prologue = document.getElementById("prologue");

  const hoverDetail = document.getElementById("hover-detail");
  const hoverName = document.getElementById("hover-detail-name");
  const hoverEra = document.getElementById("hover-detail-era");
  const hoverMerit = document.getElementById("hover-detail-merit");
  const hoverBody = document.getElementById("hover-detail-body");
  const hoverMeta = document.getElementById("hover-detail-meta");

  const spotlight = document.getElementById("spotlight");
  const spotlightImage = document.getElementById("spotlight-image");
  const spotlightName = document.getElementById("spotlight-name");
  const spotlightRole = document.getElementById("spotlight-role");
  const spotlightEra = document.getElementById("spotlight-era");
  const spotlightIntro = document.getElementById("spotlight-intro");
  const spotlightMerit = document.getElementById("spotlight-merit");
  const spotlightFacts = document.getElementById("spotlight-facts");
  const spotlightQuote = document.getElementById("spotlight-quote");
  const spotlightCite = document.getElementById("spotlight-cite");
  const spotlightBody = document.getElementById("spotlight-body");
  const spotlightDescription = document.getElementById("spotlight-description");
  const spotlightMeta = document.getElementById("spotlight-meta");
  const spotlightClose = document.getElementById("spotlight-close");
  const spotlightScrim = document.getElementById("spotlight-scrim");

  let activeIndex = -1;
  let modalIndex = -1;
  let typingTimer = null;
  let typingToken = 0;
  let revealTimer = null;
  let hideDetailTimer = null;
  let hoverStopTimer = null;
  let hoverPoint = { x: 0, y: 0 };
  let modalHideTimer = null;
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
        aria-haspopup="dialog"
        aria-controls="spotlight"
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
    if (visited.size < RULERS.length) return;

    const wasComplete = body.classList.contains("all-visited");
    body.classList.add("all-visited");
    if (!wasComplete) {
      window.dispatchEvent(
        new CustomEvent("qin:ending:complete", {
          detail: { visited: [...visited] }
        })
      );
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

  function clearHoverStop() {
    if (hoverStopTimer) {
      window.clearTimeout(hoverStopTimer);
      hoverStopTimer = null;
    }
  }

  function showHoverDetail(index) {
    const next = Number(index);
    if (!Number.isInteger(next) || next < 0 || next >= cards.length) return;

    clearHoverStop();
    if (hideDetailTimer) {
      window.clearTimeout(hideDetailTimer);
      hideDetailTimer = null;
    }

    if (next === activeIndex && hoverDetail.classList.contains("is-visible")) return;

    const ruler = RULERS[next];
    activeIndex = next;
    cards.forEach((card, cardIndex) => {
      card.classList.toggle("is-current", cardIndex === next);
    });
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
    clearHoverStop();
    if (activeIndex === -1 && !hoverDetail.classList.contains("is-visible")) return;

    activeIndex = -1;
    cards.forEach((card) => card.classList.remove("is-current"));
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
    clearHoverStop();
    if (hideDetailTimer) window.clearTimeout(hideDetailTimer);
    hideDetailTimer = window.setTimeout(() => {
      hideDetailTimer = null;
      hideHoverDetail();
    }, 90);
  }

  rail.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;

    hoverPoint = { x: event.clientX, y: event.clientY };
    const card = event.target.closest?.(".ruler");

    if (!card) {
      clearHoverStop();
      return;
    }

    const index = Number(card.dataset.index);
    if (index === activeIndex) {
      clearHoverStop();
      return;
    }

    clearHoverStop();
    hoverStopTimer = window.setTimeout(() => {
      hoverStopTimer = null;
      const current = document
        .elementFromPoint(hoverPoint.x, hoverPoint.y)
        ?.closest(".ruler");

      if (current && Number(current.dataset.index) === index) {
        showHoverDetail(index);
      }
    }, 150);
  });

  function setSpotlightContent(ruler) {
    spotlight.style.setProperty("--accent", ruler.accent);
    spotlight.style.setProperty("--accent-rgb", ruler.accentRgb);
    spotlightName.textContent = ruler.name;
    spotlightRole.textContent = ruler.role;
    spotlightEra.textContent = `${ruler.era} · ${ruler.years}`;
    spotlightIntro.textContent = ruler.intro;
    spotlightMerit.innerHTML = ruler.merit.join("<br />");
    spotlightFacts.innerHTML = ruler.facts
      .map((fact) => `<p><span>${fact.label}</span>${fact.text}</p>`)
      .join("");
    spotlightQuote.textContent = `“${ruler.quote.text}”`;
    spotlightCite.textContent = `—— ${ruler.quote.source}`;
    spotlightMeta.textContent = ruler.meta;
    spotlightDescription.textContent = [
      ruler.role,
      ruler.intro,
      ...ruler.facts.map((fact) => `${fact.label}：${fact.text}`),
      `史料：${ruler.quote.text}（${ruler.quote.source}）`
    ].join(" ");
    spotlightImage.src = ruler.image;
    typeInto(spotlightBody, ruler.body);
  }

  function openSpotlight(index) {
    const next = Number(index);
    if (!Number.isInteger(next) || next < 0 || next >= cards.length) return;

    hideHoverDetail();
    if (modalHideTimer) {
      window.clearTimeout(modalHideTimer);
      modalHideTimer = null;
    }

    const ruler = RULERS[next];
    modalIndex = next;
    setSpotlightContent(ruler);

    body.classList.add("spotlight-open");
    main.inert = true;
    spotlight.inert = false;
    spotlight.removeAttribute("inert");
    spotlight.setAttribute("aria-hidden", "false");

    void spotlight.offsetWidth;
    window.requestAnimationFrame(() => {
      spotlight.classList.add("is-open");
      window.setTimeout(() => {
        spotlightClose.focus({ preventScroll: true });
      }, 70);
    });

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

  function closeSpotlight() {
    if (!spotlight.classList.contains("is-open")) return;

    const closingIndex = modalIndex;
    spotlight.classList.remove("is-open");
    spotlight.setAttribute("aria-hidden", "true");
    body.classList.remove("spotlight-open");
    main.inert = false;
    modalIndex = -1;

    typingToken += 1;
    if (typingTimer) {
      window.clearTimeout(typingTimer);
      typingTimer = null;
    }
    document.querySelectorAll(".typed-caret").forEach((caret) => caret.remove());

    if (closingIndex >= 0) {
      cards[closingIndex].focus({ preventScroll: true });
    }

    modalHideTimer = window.setTimeout(() => {
      if (!spotlight.classList.contains("is-open")) {
        spotlight.inert = true;
        spotlight.setAttribute("inert", "");
      }
    }, reducedMotion.matches ? 0 : 360);
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      openSpotlight(index);
    });
  });

  spotlightClose.addEventListener("click", closeSpotlight);
  spotlightScrim.addEventListener("click", closeSpotlight);

  spotlight.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    event.preventDefault();
    spotlightClose.focus();
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

  hoverDetail.addEventListener("pointerenter", () => {
    if (hideDetailTimer) {
      window.clearTimeout(hideDetailTimer);
      hideDetailTimer = null;
    }
  });

  hoverDetail.addEventListener("pointerleave", scheduleHideDetail);

  document.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType !== "touch") return;
      if (!event.target.closest?.(".ruler") && !event.target.closest?.(".hover-detail")) {
        hideHoverDetail();
      }
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
    spotlight.classList.remove("is-open");
    spotlight.setAttribute("aria-hidden", "true");
    spotlight.inert = true;
    spotlight.setAttribute("inert", "");
    main.inert = false;
    modalIndex = -1;
    if (modalHideTimer) window.clearTimeout(modalHideTimer);
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
    if (spotlight.classList.contains("is-open")) {
      closeSpotlight();
    } else if (hoverDetail.classList.contains("is-visible")) {
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
