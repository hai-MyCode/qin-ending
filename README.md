# 秦 · 终章 —— “你不是一个人”

课程结尾互动页：接在“我”内心 OS「所以这一次，我到底是谁呢？」之后，用五位秦国君主依次排开的立绘，把前文那个单数的“我”，反转为一条由多个人接力的国运。

无需安装、无需构建，直接打开 `index.html` 即可。

## 人物名单（已确认）

按课程设定，最终采用以下五位，顺序与页面一致：

| 顺序 | 姓名 | 页面中的定位 | 人物图 |
| --- | --- | --- | --- |
| 一 | 秦非子 | 周孝王时因养马受封于秦，秦国起点 | `portrait-feizi.webp` |
| 二 | 秦襄公 | 护送平王东迁，秦国列为诸侯 | `portrait-xiang.webp` |
| 三 | 秦穆公 | 纳贤争衡，称霸西戎 | `portrait-mu.webp` |
| 四 | 秦康公 | 继穆公之业，与晋争锋 | `portrait-kang.webp` |
| 五 | 秦共公 | 在位四年，守国待时 | `portrait-gong.webp` |

第五位统一写作 **秦共公**，不写作“秦共工”。五人并非连续父子相继，页面以“五个关键节点 / 三百年五次接力”表述，页脚保留史实注。

人物图按 `half-body-historical-portrait-1~5.jpg` 的顺序对应上表；如需调整人物与图片的对应关系，只需修改 `app.js` 中对应条目的 `image` 字段。

---

## 一、先看效果

- 正常打开：先播放内心独白，约 5.4 秒后自动揭晓。
- 直接看终章：`index.html?reveal=1`
- 手动控制揭晓：`index.html?manual=1`（不会自动跳转，适合接在课程原有动画之后）
- 键盘：`Tab` 聚焦，`←` `→` 切换，`Home` / `End` 跳转。
- 触屏：轻触立绘展开，左右滑动查看五位。
- 看完全部五段自述后，底部进度变成“五段到齐”，印章落下。

预览图：

- `preview/desktop.png`：桌面端悬浮秦穆公
- `preview/mobile.png`：移动端轻触展开
- `preview/coda.png`：五段看完后的收束页

---

## 二、需求拆解与对应实现

| 需求 | 实现 |
| --- | --- |
| 接在“我到底是谁呢”之后 | 独立页内置同一句内心 OS 作为序幕；支持由课程播放器调用 `QinEnding.reveal()` 精确接管时机 |
| 揭示“不是一个人” | 标题直接写“你不是一个人”；下方文案明确“不是同一个人的一生，是五位秦君” |
| 五位君主立绘依次排开 | 秦非子 → 秦襄公 → 秦穆公 → 秦康公 → 秦共公，横向五栏，桌面等宽、移动横滑 |
| 悬浮谁，谁放大 | 当前卡由 1 份宽度展开到约 2.9 份，并上浮、亮起、压暗其余四张 |
| 播放自己的功绩文字 | 每张卡展开后显示“我做的是——”，正文用逐字打字机播放；切到别的卡再回来会重新播放 |
| 文字内容可省略 | 每条只保留两行功绩短语 + 一句约 40 字自述，不堆史料 |
| 课程结尾的收束感 | 五段看完后进度条走满、印章落下，收束句“你是他们合起来，才叫得出口的那个字——秦” |

---

## 三、需求里的关键判断题

### 1. “秦共工”是笔误，应为“秦共公”

页面采用 **秦共公**（约前 608—前 604 年在位），并在页脚“史实注”中说明这一点。若课程原有文案写的是“秦共工”，建议同步改为“秦共公”；“共工”在中文语境里首先指向神话人物，容易让学生出戏。

### 2. 五人并不是连续父子相继

- 秦非子：周孝王时因养马受封于秦，是“秦”作为封邑的起点。
- 秦襄公：护送平王东迁，受封诸侯，秦正式立国。
- 秦穆公：称霸西戎，是秦国第一次强盛。
- 秦康公：穆公之子，与晋争锋，守住西土。
- 秦共公：康公之子，在位仅四年，史料很少。

非子到襄公、襄公到穆公之间都隔了较长时间。因此页面表述用 **“五个关键节点”“三百年，五次接力”**，没有写成“五位连续君主”。如果课程文案坚持“前后五位君主”，建议加一句“不是父子相继，而是五个关键节点”，否则会被学生抓住史实问题。

### 3. “我不是一个人”不能写成“我是五个人”

前文的“我”是课程叙事的第二人称代入，结尾反转不能变成“其实你是五个人的合体”这种玄幻设定。页面的落点是：

> 你不是他们中的任何一个。你是他们合起来，才叫得出口的那个字——秦。

这样既保留了“我”的代入感，也把“秦”从一个角色提升为一个延续三百年的共同体。

### 4. 只有 hover 会导致手机和键盘用户看不到内容

需求写的是“鼠标悬浮”，但课程页很可能在平板、手机、触控一体机上播放，也有键盘用户。因此：

- 桌面：`pointerenter` 悬浮展开；
- 触屏：`click` 轻触展开；
- 键盘：`focus` 展开，方向键在五张卡之间移动；
- 每张卡是原生 `<button>`，带 `aria-pressed` 与完整 `aria-label`；
- 打字机内容通过 `aria-live` 播报；
- `prefers-reduced-motion` 下取消逐字和位移，直接显示结果。

### 5. 自动播和课程播放器的冲突

默认自动揭晓适合独立页。若课程播放器要先播完自己的动画，使用 `?manual=1`，然后在动画结束回调里调用：

```js
document.querySelector('iframe').contentWindow.QinEnding.reveal();
```

同页集成则直接调用 `window.QinEnding.reveal()`。

### 6. 立绘资产与版权

五张人物图由课程方提供（原始文件为带棋盘格背景的 JPG），页面使用前已做去底、裁切、轻微调色，并转为透明 WebP。相比原来的内联 SVG，人物写实度和课本感更强，同时仍然是本地素材，不依赖 CDN 或外部字体服务。

原始 JPG 保留在 `assets/half-body-historical-portrait-1~5.jpg`，成品为 `assets/portrait-*.webp`。如需换图，替换对应 WebP 并更新 `app.js` 中 `image` 字段即可，卡片结构和交互不用动。人物图的版权与使用范围按课程方提供的授权为准。

### 7. “播放”是否等于配音

本次把“播放功绩文字”实现为 **打字机逐字呈现**，没有自动播放语音，避免浏览器自动播放限制和课堂环境突然出声。若需要配音，可在 `activateRuler()` 中接入音频，并在第一次用户点击后再播放。

---

## 四、交互与无障碍清单

- 五张卡横向排列，顺序固定为时间顺序。
- 悬浮 / 聚焦 / 轻触：当前卡展开、其余卡降饱和并压暗。
- 展开后，姓名、时代、在位信息、“我做的是——”、功绩短语、自述逐字出现。
- 移开鼠标后保留最后一张展开的卡，方便阅读，不会瞬间塌回去。
- 进度显示“已听 X / 5 段自述”；每张卡首次展开才计数。
- 五段全部展开后，出现“五段到齐 · 一脉相承”，印章落章动效。
- 支持 `Tab`、`Shift+Tab`、方向键、`Home`、`End`、`Enter`、`Space`。
- 支持 `Esc` 从 OS 幕直接进入终章。
- `prefers-reduced-motion: reduce` 下禁用位移、逐字、漂浮尘埃和印章弹跳。
- 页面无横向溢出；移动端横向滚动只发生在立绘轨道内部。
- 移动端底部详情面板占卡片下半部，保证姓名、功绩和自述都能读到。
- 桌面端立绘轨道接近全宽、高度为 58vh；上方标题区压缩，人物在首屏中的占比更大。

### 性能处理

首版动画在部分机器上有卡顿，现已做以下收口：

- 移除全屏 SVG `feTurbulence` 噪点滤镜，改为静态 PNG 纹理，避免每帧重新生成噪声。
- 移除立绘的 `drop-shadow`、卡片的 `filter: saturate/brightness` 和悬停大阴影，避免展开时反复栅格化整张卡。
- 悬停展开只保留 `flex-grow`、`transform`、`opacity` 三类变化，并缩短展开时长。
- 详情栏改为固定宽度，展开时不再逐帧重排文字；卡片内部使用 `contain: layout paint` 隔离布局。
- 人像横向位移改用 `transform`，不再过渡 `left`，减少每帧的布局计算。
- 悬停切换改为 70ms 停留意图 + `elementFromPoint` 复核，鼠标扫过中间卡片时只切换到最后停留的那一张，避免多张卡连续抢焦点。
- 展开曲线改为先慢后快的 `--ease-layout`，避免光标刚进入时卡片在脚下猛跳。
- 去掉按钮 `backdrop-filter`，去掉小圆点的 `box-shadow` 循环动画，改成纯 `transform/opacity` 脉冲。
- 尘埃粒子从 22 个减到 14 个，移动端隐藏。
- 人物图已转为本地透明 WebP，页面无外部图片请求。

---

## 五、接入方式

### 方式 A：直接作为独立结尾页

```
index.html
```

默认 5.4 秒后自动从 OS 幕进入终章。

### 方式 B：由课程播放器控制揭晓时机

1. 用 `?manual=1` 打开页面；
2. 课程动画播到“我到底是谁呢”结束时，调用 reveal。

```html
<iframe
  src="./index.html?manual=1"
  title="秦 · 终章"
  style="width:100%;height:100vh;border:0"
></iframe>
```

```js
const ending = document.querySelector('iframe').contentWindow;
ending.QinEnding.reveal();
```

### 方式 C：同页集成

把 `index.html` 中的 `main.reveal`、样式与脚本并入课程页，在动画结束时调用：

```js
window.QinEnding.reveal();
```

也可以直接派发事件：

```js
window.dispatchEvent(new Event('qin:ending:reveal'));
```

### 公开 API

```js
window.QinEnding.reveal(options?)   // 进入终章；options.focus 可聚焦标题
window.QinEnding.reset()            // 回到 OS 幕并清空浏览进度
window.QinEnding.activate(index)    // 展开第 index 位（0—4）
window.QinEnding.activeIndex        // 当前展开的索引，未展开为 -1
window.QinEnding.visited            // 已看过的君主 id 数组
window.QinEnding.rulers             // [{ id, name }]
```

### 可监听事件

```js
window.addEventListener('qin:ending:revealed', (event) => {
  // 终章已进入，可上报进度
});

window.addEventListener('qin:ending:ruler', (event) => {
  // event.detail: { index, id, name }
});

window.addEventListener('qin:ending:complete', (event) => {
  // 五段自述全部看过
  // event.detail: { visited: ['feizi', 'xiang', 'mu', 'kang', 'gong'] }
});
```

### URL 参数

| 参数 | 作用 |
| --- | --- |
| `?reveal=1` | 跳过 OS 序幕，直接显示终章（预览 / 验收用） |
| `?manual=1` | 不自动揭晓，等待 `QinEnding.reveal()` |
| `?autoplay=0` | 与 `manual=1` 等价 |
| `#gallery` | 直接进入终章 |

---

## 六、文件结构

```
.
├─ index.html          页面结构、文案、OS 序幕、收束页
├─ styles.css          视觉、动效、响应式、降级动效
├─ app.js              五君数据、交互、API
├─ README.md           本文件
├─ assets/
│  ├─ grain.png        静态胶片颗粒纹理
│  ├─ portrait-*.webp  五位君主成品人物图（透明底）
│  └─ half-body-historical-portrait-*.jpg  课程提供的原始图
└─ preview/
   ├─ desktop.png      桌面端悬浮状态
   ├─ mobile.png       移动端展开状态
   └─ coda.png         五段看完后的收束页
```

无第三方依赖、无构建步骤、无网络请求。

---

## 七、验收记录

已在 Windows + Chrome 1440×1000、390×844 两种视口验证：

- [x] 五个按钮全部渲染，顺序正确，无 JavaScript 报错。
- [x] 桌面悬浮秦穆公：卡片展开、其余压暗、逐字文案完整。
- [x] 键盘聚焦后 `ArrowRight` 可从第 1 位切到第 3 位。
- [x] 移动端轻触第 3 位：卡片展开并横向滚动到视口中央，无横向页面溢出。
- [x] 五段全部展开：进度为“五段到齐 · 一脉相承”，`all-visited` 状态生效。
- [x] `prefers-reduced-motion` 下卡片、标题、自述均直接可见。
- [x] `?manual=1` 等待 6.2 秒后仍停在 OS 幕，按钮可用。
- [x] 性能优化后，悬停展开不再触发滤镜、阴影或全屏噪声重绘；移动端隐藏尘埃粒子。
- [x] 仅请求本地 `styles.css`、`app.js`、`assets/grain.png` 与五张 `portrait-*.webp`，断网可运行。

---

## 八、后续可加项

1. 若课程有统一立绘，直接替换 `assets/portrait-*.webp` 并保留 `.figure` 容器即可。
2. 若需要旁白，给每位君主加 2—3 秒音频，首次用户交互后再解锁播放。
3. 若需要埋点，监听 `qin:ending:ruler` 与 `qin:ending:complete` 即可。
4. 若课程结尾还有“继续下一课”按钮，可放在收束页印章下方；当前页面刻意不放假 CTA。
