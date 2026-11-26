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
      audio: "assets/audio/feizi.mp3",
      era: "西周 · 周孝王时",
      years: "约前 890 年受封",
      epithet: "受封于秦",
      glyph: "封",
      role: "周王室的养马人 · 秦国起点",
      merit: ["为周王养马", "受封于秦"],
      body: "我在汧水、渭水之间为周王养马，马群越来越兴旺。周孝王把秦邑封给我，秦人终于有了第一块自己的土地。",
      intro: "秦人最早只是西周西部的一支小部族。非子很会养马，周孝王让他负责养马，后来把秦邑封给他。秦人从此有了自己的第一块地盘。",
      facts: [
        { label: "养马", text: "在汧水、渭水一带替周孝王养马，马群繁殖得很快。" },
        { label: "受封", text: "周孝王封他做附庸，把秦邑赐给他，让他延续嬴姓的祭祀。" },
        { label: "建邑", text: "秦邑大约在今甘肃清水、张家川一带，秦人第一次有了正式封地。" },
        { label: "身份", text: "这时秦国还只是周王室的附庸，不是诸侯；但“秦”作为封邑从此出现。" }
      ],
      takeaway: "秦国不是一开始就强大，它从一块养马换来的封地起步。",
      full: "我在汧水、渭水之间为周王养马，马群越来越兴旺。周孝王封我于秦，秦人从此有了第一块属于自己的土地。",
      story: [
        "我在汧水、渭水之间为周王养马，马群越来越兴旺。周孝王把秦邑封给我，秦人终于有了第一块自己的土地。",
        "我原本只是周王室西边一支小部族的首领，因为会养马，被周孝王看中。他让我负责王室的马政，马群繁殖得很快，我也因此得到了封地。",
        "周孝王封我做附庸，把秦邑赐给我，让我延续嬴姓的祭祀。秦邑大约在今甘肃清水、张家川一带。那时我还不是诸侯，但“秦”这个封邑，从此成了我们一族的名字。"
      ],
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
      audio: "assets/audio/xiang.mp3",
      era: "春秋初 · 前 777—前 766",
      years: "护送平王东迁",
      epithet: "列为诸侯",
      glyph: "侯",
      role: "秦国第一位诸侯",
      merit: ["护送平王东迁", "秦国始列诸侯"],
      body: "犬戎作乱，我带兵救周，又护送平王东迁。平王把岐山以西的土地封给我，秦国从此与中原诸侯平起平坐。",
      intro: "周幽王被犬戎杀死后，襄公带兵救周，又护送周平王迁都洛邑。平王封他为诸侯，把岐山以西的土地赐给秦国。秦国从此正式立国。",
      facts: [
        { label: "救周", text: "犬戎攻破镐京、杀死周幽王，襄公带兵救周，作战有功。" },
        { label: "护驾", text: "周平王把都城迁到洛邑，襄公领兵一路护送。" },
        { label: "封侯", text: "平王封襄公为诸侯，赐岐山以西的土地，秦国正式立国。" },
        { label: "伐戎", text: "前766年，襄公继续讨伐戎人，推进到岐山，同年去世。" }
      ],
      takeaway: "秦国的诸侯身份，是襄公靠救周、护驾换来的。",
      full: "犬戎作乱，我带兵救周；又护送周平王东迁。平王把岐山以西的土地封给我，秦国从此与中原诸侯并列。",
      story: [
        "犬戎作乱，我带兵救周，又护送平王东迁。平王把岐山以西的土地封给我，秦国从此与中原诸侯平起平坐。",
        "周幽王被犬戎杀死后，镐京陷落。我带着秦军赶来救援周王室，又领兵护送周平王把都城迁到洛邑。",
        "平王封我为诸侯，把岐山以西的土地赐给秦国。秦国从此正式立国，可以和中原诸侯通使往来。后来我继续讨伐戎人，推进到岐山，在前766年去世。"
      ],
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
      audio: "assets/audio/mu.mp3",
      era: "春秋 · 前 659—前 621",
      years: "吞并十二部族 · 拓地千里",
      epithet: "称霸西戎",
      glyph: "霸",
      role: "春秋五霸之一 · 让秦国变强",
      merit: ["重用百里奚、蹇叔", "吞并十二部族，称霸西戎"],
      body: "我重用百里奚、蹇叔等人才，东边与晋国较量，西边征服戎狄。秦国第一次强到让中原诸侯不敢轻视。",
      intro: "穆公重用百里奚、蹇叔、由余等外来人才，一边与晋国较量，一边向西扩张。秦国第一次成为中原不敢小看的强国。",
      facts: [
        { label: "纳贤", text: "重用百里奚、蹇叔，又采纳由余的建议，整顿内政、训练军队。" },
        { label: "败晋", text: "前645年，秦军在韩原击败晋军，俘获晋惠公，后来又释放他。" },
        { label: "扶晋", text: "晋公子重耳流亡时得到秦国帮助，回国成为晋文公；秦晋一度结盟联姻。" },
        { label: "霸西戎", text: "前623年，秦军大败西戎，吞并十二个部族，拓地千里，周天子派人祝贺。" }
      ],
      takeaway: "秦穆公靠“用对人”和“向西发展”，把秦国带进了强国行列。",
      full: "我重用百里奚、蹇叔等人才，东边与晋国较量，西边征服戎狄。秦国第一次强到让中原诸侯不敢轻视。",
      story: [
        "我重用百里奚、蹇叔等人才，东边与晋国较量，西边征服戎狄。秦国第一次强到让中原诸侯不敢轻视。",
        "我请来百里奚、蹇叔，又采纳由余的建议，整顿内政、训练军队。前645年，秦军在韩原打败晋军，俘获晋惠公；后来我把他放回去，秦晋关系缓和下来。",
        "晋公子重耳流亡时，我帮助他回国即位，就是后来的晋文公。前623年，秦军大败西戎，吞并十二个部族，拓地千里，周天子也派人来祝贺。秦国从此成了西方最强的国家之一。"
      ],
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
      audio: "assets/audio/kang.mp3",
      era: "春秋 · 前 620—前 609",
      years: "令狐、河曲之战",
      epithet: "与晋争锋",
      glyph: "峙",
      role: "穆公之子 · 守住秦国",
      merit: ["继穆公之业", "与晋争锋，守住西土"],
      body: "令狐、河曲，我和晋国反复交手。有输有赢，但秦国始终守在西边，没有退出这场较量。",
      intro: "康公接班时，秦国已经是西方强国，但向东的路被晋国挡住。他多次和晋国交战，没能大举东进，却守住了父亲留下的家底。",
      facts: [
        { label: "令狐", text: "前620年，秦国送晋国公子雍回国争位，在令狐遭晋军拦截，秦军战败。" },
        { label: "河曲", text: "前615年，秦军攻晋，夺取羁马，又在河曲大败晋军。" },
        { label: "拉锯", text: "康公时期秦晋多次交战，秦国没能东进，但晋国也无法彻底压服秦国。" },
        { label: "守成", text: "他维持了穆公留下的军政基础，秦国继续稳在西土。" }
      ],
      takeaway: "康公没有开疆拓土，但他在秦晋拉锯中守住了秦国，没有掉队。",
      full: "我继穆公之业，与晋国战于令狐、河曲。有输有赢，但秦国始终守在西边，没有退出这场较量。",
      story: [
        "令狐、河曲，我和晋国反复交手。有输有赢，但秦国始终守在西边，没有退出这场较量。",
        "前620年，我送晋国公子雍回国争位，在令狐遭到晋军拦截，秦军战败。前615年，我再次出兵攻晋，夺取羁马，又在河曲大败晋军。",
        "那些年秦国和晋国既联姻又打仗，我没能像父亲那样大举东进，但也没有让秦国在拉锯中垮掉。我守住穆公留下的家底，把秦国稳稳留在西边。"
      ],
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
      audio: "assets/audio/gong.mp3",
      era: "春秋 · 前 608—前 604",
      years: "在位很短 · 年数有异说",
      epithet: "守住秦国",
      glyph: "守",
      role: "康公之子 · 在位很短的守成君主",
      merit: ["在位虽短", "国家未失，交予后来者"],
      body: "我在位很短，史书也没留下多少记载。但我守住了秦国，把它交到下一个君主手里。",
      intro: "共公在位时间很短，史书对他的记载不多。他即位后，晋国发生内乱，秦国没有大举东进，而是继续守住西边的根基。",
      facts: [
        { label: "即位", text: "共公是康公之子，约前608年即位，在位时间很短。" },
        { label: "晋乱", text: "他在位时，晋国权臣赵穿杀死了国君晋灵公，中原局势动荡。" },
        { label: "守土", text: "秦国没有趁机大举东进，但守住了西边的核心地盘。" },
        { label: "传位", text: "共公去世后，儿子秦桓公即位，秦国继续往下走。" }
      ],
      takeaway: "秦共公没有留下显赫功业，但他的作用是把国家的接力棒交下去。",
      full: "我在位很短，史书也没留下多少记载。但我守住了秦国，把它交到下一个君主手里。",
      story: [
        "我在位很短，史书也没留下多少记载。但我守住了秦国，把它交到下一个君主手里。",
        "我是康公的儿子，大约在前608年即位。那时晋国权臣赵穿杀了国君晋灵公，中原很乱；秦国没有趁机大举东进，而是守住了西边的核心地盘。",
        "我在位只有几年，史书对具体年数也有不同说法。但我把国家完整地交给儿子秦桓公，秦国的接力没有断。"
      ],
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
  const spotlightStory = document.getElementById("spotlight-story");
  const spotlightDescription = document.getElementById("spotlight-description");
  const spotlightMeta = document.getElementById("spotlight-meta");
  const spotlightClose = document.getElementById("spotlight-close");
  const spotlightScrim = document.getElementById("spotlight-scrim");
  const spotlightAudio = document.getElementById("spotlight-audio");
  const spotlightAudioBtn = document.getElementById("spotlight-audio-btn");
  const spotlightAudioReplay = document.getElementById("spotlight-audio-replay");
  const spotlightAudioIcon = document.getElementById("spotlight-audio-icon");
  const spotlightAudioLabel = document.getElementById("spotlight-audio-label");
  const spotlightAudioBar = document.getElementById("spotlight-audio-bar");
  const bgm = document.getElementById("bgm");
  const soundToggle = document.getElementById("sound-toggle");
  const soundToggleLabel = soundToggle.querySelector(".sound-toggle-label");

  let activeIndex = -1;
  let bgmEnabled = true;
  let narrationPlaying = false;
  let narrationStartTimer = null;
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
    const label = `${r.name}，${r.era}。点击或按回车查看完整人物档案。`;
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

          <span class="view-cue" aria-hidden="true">
            <span class="view-cue-plus">+</span>
            <span class="view-cue-desktop">点击查看</span>
            <span class="view-cue-touch">轻触查看</span>
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

  function updateAudioProgress() {
    const duration = Number.isFinite(spotlightAudio.duration) ? spotlightAudio.duration : 0;
    const progress = duration > 0 ? Math.min(spotlightAudio.currentTime / duration, 1) : 0;
    spotlightAudioBar.style.transform = `scaleX(${progress})`;
  }

  function updateBgmVolume() {
    if (!bgmEnabled) return;
    bgm.volume = narrationPlaying ? 0.035 : 0.12;
  }

  function updateSoundToggle() {
    const enabled = bgmEnabled;
    soundToggle.classList.toggle("is-off", !enabled);
    soundToggle.setAttribute("aria-pressed", String(enabled));
    soundToggle.setAttribute("aria-label", enabled ? "关闭背景音乐" : "开启背景音乐");
    soundToggleLabel.textContent = enabled ? "背景乐" : "静音";
    soundToggle.classList.toggle("is-playing", enabled && !bgm.paused);
  }

  function tryPlayBgm() {
    if (!bgmEnabled || !hasRevealed) return;
    updateBgmVolume();
    const attempt = bgm.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        updateSoundToggle();
      });
    }
  }

  function setNarrationState(playing) {
    narrationPlaying = playing;
    spotlightAudioBtn.classList.toggle("is-playing", playing);
    spotlightAudioBtn.setAttribute("aria-pressed", String(playing));
    spotlightAudioIcon.textContent = playing ? "❚❚" : "▶";

    if (playing) {
      spotlightAudioLabel.textContent = "暂停";
      spotlightAudioBtn.setAttribute("aria-label", "暂停朗读");
    } else if (spotlightAudio.ended) {
      spotlightAudioLabel.textContent = "播放";
      spotlightAudioBtn.setAttribute("aria-label", "重新播放人物旁白");
    } else if (spotlightAudio.currentTime > 0) {
      spotlightAudioLabel.textContent = "继续";
      spotlightAudioBtn.setAttribute("aria-label", "继续朗读");
    } else {
      spotlightAudioLabel.textContent = "播放";
      spotlightAudioBtn.setAttribute("aria-label", "播放人物旁白");
    }

    updateBgmVolume();
  }

  function clearNarrationStart() {
    if (narrationStartTimer) {
      window.clearTimeout(narrationStartTimer);
      narrationStartTimer = null;
    }
  }

  function scheduleNarration(delay = 1000) {
    clearNarrationStart();
    spotlightAudioBtn.setAttribute("aria-pressed", "false");
    spotlightAudioBtn.setAttribute("aria-label", "正在准备朗读");
    spotlightAudioIcon.textContent = "…";
    spotlightAudioLabel.textContent = "准备中";
    narrationStartTimer = window.setTimeout(() => {
      narrationStartTimer = null;
      if (spotlight.classList.contains("is-open")) startNarration();
    }, delay);
  }

  function startNarration({ restart = false } = {}) {
    clearNarrationStart();
    if (restart || spotlightAudio.ended) spotlightAudio.currentTime = 0;
    tryPlayBgm();
    const attempt = spotlightAudio.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {
        setNarrationState(false);
      });
    }
  }

  function stopNarration() {
    clearNarrationStart();
    spotlightAudio.pause();
    spotlightAudio.currentTime = 0;
    narrationPlaying = false;
    spotlightAudioBar.style.transform = "scaleX(0)";
    setNarrationState(false);
  }

  function setSpotlightContent(ruler) {
    stopNarration();
    spotlight.style.setProperty("--accent", ruler.accent);
    spotlight.style.setProperty("--accent-rgb", ruler.accentRgb);
    spotlightName.textContent = ruler.name;
    spotlightRole.textContent = ruler.role;
    spotlightEra.textContent = `${ruler.era} · ${ruler.years}`;
    spotlightStory.innerHTML = ruler.story.map((paragraph) => `<p>${paragraph}</p>`).join("");
    spotlightMeta.textContent = ruler.meta;
    spotlightDescription.textContent = [ruler.role, ...ruler.story].join(" ");
    spotlightImage.src = ruler.image;
    spotlightAudioBtn.disabled = false;
    spotlightAudioReplay.disabled = false;
    spotlightAudio.src = ruler.audio;
    spotlightAudio.load();
    updateAudioProgress();
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
    tryPlayBgm();

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

    scheduleNarration(1000);
  }

  function closeSpotlight() {
    if (!spotlight.classList.contains("is-open")) return;

    stopNarration();
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

  spotlightAudioBtn.addEventListener("click", () => {
    if (spotlightAudio.paused) {
      startNarration();
    } else {
      spotlightAudio.pause();
    }
  });

  spotlightAudioReplay.addEventListener("click", () => {
    startNarration({ restart: true });
  });

  spotlightAudio.addEventListener("play", () => setNarrationState(true));
  spotlightAudio.addEventListener("pause", () => setNarrationState(false));
  spotlightAudio.addEventListener("timeupdate", updateAudioProgress);
  spotlightAudio.addEventListener("ended", () => {
    setNarrationState(false);
    spotlightAudioBar.style.transform = "scaleX(1)";
  });
  spotlightAudio.addEventListener("error", () => {
    if (!spotlightAudio.getAttribute("src")) return;
    clearNarrationStart();
    spotlightAudioBtn.disabled = true;
    spotlightAudioReplay.disabled = true;
    setNarrationState(false);
    spotlightAudioLabel.textContent = "音频不可用";
    spotlightAudioBtn.setAttribute("aria-label", "音频不可用");
  });

  bgm.volume = 0.12;
  spotlightAudio.volume = 0.1;
  bgm.addEventListener("play", updateSoundToggle);
  bgm.addEventListener("pause", updateSoundToggle);

  soundToggle.addEventListener("click", () => {
    if (bgmEnabled && !bgm.paused) {
      bgmEnabled = false;
      bgm.pause();
    } else {
      bgmEnabled = true;
      tryPlayBgm();
    }
    updateSoundToggle();
  });

  document.addEventListener(
    "pointerdown",
    (event) => {
      if (event.target.closest?.("#sound-toggle")) return;
      if (hasRevealed) tryPlayBgm();
    },
    { passive: true }
  );

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
    if (!rail.contains(event.relatedTarget) && !hoverDetail.contains(event.relatedTarget)) {
      scheduleHideDetail();
    }
  });

  hoverDetail.addEventListener("focusout", (event) => {
    if (!hoverDetail.contains(event.relatedTarget) && !rail.contains(event.relatedTarget)) {
      scheduleHideDetail();
    }
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
    tryPlayBgm();

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
    stopNarration();
    bgm.pause();
    bgm.currentTime = 0;
    updateSoundToggle();
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
