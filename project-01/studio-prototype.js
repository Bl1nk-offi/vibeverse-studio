/* VIBEVERSE Studio — прототип главной страницы.
 * 1) язык RU/EN  2) интерфейс и сцены прокрутки  3) 3D-сцена на Three.js (с запасным 2D-вариантом)
 * Three.js грузится как ES-модуль: сначала ./vendor/, затем CDN. Если не удалось, включается запасной режим.
 */

/* ============ 1. Язык ============ */
const DICT = {
  en: {
    'meta.title': 'VIBEVERSE Studio — Creative Digital Lab',
    'meta.desc': 'VIBEVERSE Studio: websites, interfaces, 3D and bots, shaped with care.',
    skip: 'Skip to content', 'lang.aria': 'Switch language',
    'nav.work': 'Work', 'nav.caps': 'Capabilities', 'nav.manifesto': 'Manifesto',
    'hud.lab': 'Creative Digital Lab',
    'hero.title': 'Create beyond <em>limits.</em>',
    'hero.lead': 'We shape digital ideas into thoughtful experiences, where design, technology and imagination meet.',
    'hero.cta': 'Explore the work', 'hero.hint': 'Drag to turn the mark',
    'scene.orbit': 'Orbit', 'scene.work': 'Work', 'scene.caps': 'Capabilities', 'scene.manifesto': 'Manifesto',
    'work.title': 'Selected work', 'work.open': 'Open project',
    'p.tasks.cat': 'Productivity', 'p.finance.cat': 'Finance', 'p.habit.cat': 'Habits', 'p.portfolio.cat': 'Studio',
    'p.tasks.d': 'A focused task manager with priorities, categories, deadlines and progress tracking.',
    'p.finance.d': 'A personal income and expense tracker with categories, filters and visual analysis.',
    'p.habit.d': 'A habit tracker with daily check-ins, streaks and completion history.',
    'p.portfolio.d': 'The home of the VIBEVERSE creative digital lab and its evolving work.',
    'caps.title': 'Capabilities',
    's.web': 'Web development', 's.web.d': 'Responsive websites, landing pages and interactive web experiences.',
    's.ui': 'UI / UX design', 's.ui.d': 'Clear interfaces, user flows and visual systems.',
    's.motion': '3D & animation', 's.motion.d': 'Motion-led visuals, 3D scenes and expressive content.',
    's.perf': 'Optimization', 's.perf.d': 'Performance, usability and technical improvements.',
    's.bots': 'Telegram bots', 's.bots.d': 'Chat-based tools and lightweight workflow automation.',
    'man.title': 'Manifesto',
    'man.text': 'VIBEVERSE is an independent creative digital space for exploring ideas, building useful products and learning through real projects. We value clarity, curiosity and thoughtful execution.',
    'v.1': 'Curiosity', 'v.1d': 'Explore ideas beyond the obvious.',
    'v.2': 'Craft', 'v.2d': 'Care about details and the experience.',
    'v.3': 'Progress', 'v.3d': 'Improve through testing and iteration.',
    'v.4': 'Purpose', 'v.4d': 'Build things that solve real needs.',
    'foot.tag': 'Create · Develop · Inspire'
  },
  ru: {
    'meta.title': 'VIBEVERSE Studio — креативная цифровая лаборатория',
    'meta.desc': 'VIBEVERSE Studio: сайты, интерфейсы, 3D и боты, созданные с вниманием к деталям.',
    skip: 'Перейти к содержимому', 'lang.aria': 'Сменить язык',
    'nav.work': 'Работы', 'nav.caps': 'Направления', 'nav.manifesto': 'Манифест',
    'hud.lab': 'Креативная цифровая лаборатория',
    'hero.title': 'Создавай без <em>границ.</em>',
    'hero.lead': 'Превращаем цифровые идеи в продуманный опыт: там, где встречаются дизайн, технологии и воображение.',
    'hero.cta': 'Смотреть работы', 'hero.hint': 'Потяните, чтобы повернуть знак',
    'scene.orbit': 'Орбита', 'scene.work': 'Работы', 'scene.caps': 'Направления', 'scene.manifesto': 'Манифест',
    'work.title': 'Избранные работы', 'work.open': 'Открыть проект',
    'p.tasks.cat': 'Продуктивность', 'p.finance.cat': 'Финансы', 'p.habit.cat': 'Привычки', 'p.portfolio.cat': 'Студия',
    'p.tasks.d': 'Менеджер задач с приоритетами, категориями, дедлайнами и отслеживанием прогресса.',
    'p.finance.d': 'Трекер доходов и расходов с категориями, фильтрами и визуальной аналитикой.',
    'p.habit.d': 'Трекер привычек с ежедневными отметками, сериями и историей выполнения.',
    'p.portfolio.d': 'Главная страница креативной цифровой лаборатории VIBEVERSE и её проектов.',
    'caps.title': 'Направления',
    's.web': 'Веб-разработка', 's.web.d': 'Адаптивные сайты, лендинги и интерактивные веб-интерфейсы.',
    's.ui': 'UI / UX дизайн', 's.ui.d': 'Понятные интерфейсы, пользовательские сценарии и дизайн-системы.',
    's.motion': '3D и анимация', 's.motion.d': '3D-сцены, анимация и выразительный цифровой контент.',
    's.perf': 'Оптимизация', 's.perf.d': 'Производительность, удобство и технические улучшения.',
    's.bots': 'Telegram-боты', 's.bots.d': 'Чат-инструменты и автоматизация простых процессов.',
    'man.title': 'Манифест',
    'man.text': 'VIBEVERSE — независимое цифровое пространство для исследования идей, создания полезных продуктов и обучения на реальных проектах. Мы ценим ясность, любознательность и внимание к деталям.',
    'v.1': 'Любознательность', 'v.1d': 'Исследуем идеи за пределами очевидного.',
    'v.2': 'Мастерство', 'v.2d': 'Заботимся о деталях и пользовательском опыте.',
    'v.3': 'Развитие', 'v.3d': 'Улучшаем через тестирование и итерации.',
    'v.4': 'Польза', 'v.4d': 'Создаём решения для реальных задач.',
    'foot.tag': 'Создавай · Развивай · Вдохновляй'
  }
};
const STORAGE_KEY = 'vibeverse_language';
let lang = 'en';
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  lang = saved === 'ru' || saved === 'en' ? saved : ((navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en');
} catch (e) { /* хранилище недоступно */ }

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const t = (k) => (DICT[lang][k] !== undefined ? DICT[lang][k] : DICT.en[k] !== undefined ? DICT.en[k] : k);

function applyLang() {
  document.documentElement.lang = lang;
  for (const el of $$('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const el of $$('[data-i18n-html]')) el.innerHTML = t(el.dataset.i18nHtml); // строки словаря — доверенные
  for (const el of $$('[data-i18n-attr]')) {
    for (const pair of el.dataset.i18nAttr.split(';')) {
      const [attr, key] = pair.split(':');
      if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
    }
  }
  for (const s of $$('#lang [data-l]')) s.classList.toggle('on', s.dataset.l === lang);
  buildWords();
  updateCaption();
  updateRail(true);
}
$('#lang').addEventListener('click', () => {
  lang = lang === 'en' ? 'ru' : 'en';
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  applyLang();
});

/* ============ 2. Интерфейс ============ */
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarse = matchMedia('(pointer: coarse)').matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, k) => a + (b - a) * k;
const smooth = (x) => x * x * (3 - 2 * x);

// состояние, которым управляют сцена прокрутки и наведение; читает 3D-слой
const ui = { project: 0, ring: -1, pointerX: 0, pointerY: 0, spin: 0, spinVel: 0, sceneF: 0 };

// --- таймкод
const tcEl = $('#tc');
const t0 = performance.now();
function pad2(n) { return String(n).padStart(2, '0'); }
function tickTimecode(now) {
  const ms = now - t0, f = Math.floor((ms % 1000) / (1000 / 24));
  tcEl.textContent = `${pad2(Math.floor(ms / 3600000))}:${pad2(Math.floor(ms / 60000) % 60)}:${pad2(Math.floor(ms / 1000) % 60)}:${pad2(f)}`;
}

// --- проекты (сцена «Работы»)
const PROJECTS = [
  { key: 'tasks', url: 'projects/tasks.html', tint: 0xd7d9e4 },
  { key: 'finance', url: 'projects/finance.html', tint: 0xe6d6b8 },
  { key: 'habit', url: 'projects/habitflow.html', tint: 0xb9ead4 },
  { key: 'portfolio', url: 'projects/portfolio.html', tint: 0xbcaeff }
];
function updateCaption() {
  const p = PROJECTS[ui.project];
  $('#wDesc').textContent = t(`p.${p.key}.d`);
  $('#wLink').href = p.url;
}
function selectProject(i) {
  ui.project = i;
  for (const b of $$('#roll .row')) b.setAttribute('aria-pressed', String(Number(b.dataset.i) === i));
  updateCaption();
}
for (const b of $$('#roll .row')) {
  const i = Number(b.dataset.i);
  b.addEventListener('pointerenter', () => selectProject(i));
  b.addEventListener('focus', () => selectProject(i));
  b.addEventListener('click', () => selectProject(i));
}

// --- направления (сцена «Направления»): 5 направлений = 5 орбит
const capBtns = $$('#orbits .cap');
function selectRing(i) {
  ui.ring = i;
  for (const b of capBtns) b.setAttribute('aria-pressed', String(Number(b.dataset.i) === i));
}
for (const b of capBtns) {
  const i = Number(b.dataset.i);
  b.addEventListener('pointerenter', () => selectRing(i));
  b.addEventListener('focus', () => selectRing(i));
  b.addEventListener('click', () => selectRing(ui.ring === i && isCoarse ? -1 : i));
}
$('#orbits').addEventListener('pointerleave', () => { if (!isCoarse) selectRing(-1); });
$('#orbits').addEventListener('focusout', (e) => { if (!e.currentTarget.contains(e.relatedTarget)) selectRing(-1); });

// --- манифест: слова зажигаются по мере прокрутки
const big = $('#big');
let words = [];
function buildWords() {
  const text = t('man.text');
  big.textContent = '';
  words = text.split(/\s+/).map((w) => {
    const s = document.createElement('span');
    s.className = 'w'; s.textContent = w;
    big.append(s, ' ');
    return s;
  });
  updateWords();
}
function updateWords() {
  if (reduceMotion) { for (const w of words) w.classList.add('lit'); return; }
  const r = big.getBoundingClientRect();
  const p = clamp((innerHeight * 0.82 - r.top) / (r.height + innerHeight * 0.1));
  const n = Math.round(p * words.length);
  words.forEach((w, i) => w.classList.toggle('lit', i < n));
}

// --- рейка сцен
const sections = $$('[data-scene]');
const SCENE_KEYS = ['scene.orbit', 'scene.work', 'scene.caps', 'scene.manifesto'];
const rail = $('.rail');
let railIdx = -1;
function updateRail(force) {
  const idx = Math.round(ui.sceneF);
  if (idx !== railIdx || force) {
    railIdx = idx;
    $('#railNum').textContent = `${pad2(idx + 1)} / ${pad2(sections.length)}`;
    $('#railName').textContent = t(SCENE_KEYS[idx]);
    rail.classList.toggle('on-bone', idx === sections.length - 1 && ui.sceneF > sections.length - 1.6);
  }
  $('#railBar').style.transform = `scaleX(${clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))})`;
}

// положение прокрутки → непрерывный номер сцены (0..3)
function computeSceneF() {
  const mid = scrollY + innerHeight * 0.5;
  const centers = sections.map((s) => s.offsetTop + s.offsetHeight / 2);
  if (mid <= centers[0]) return 0;
  for (let i = 0; i < centers.length - 1; i++) {
    if (mid <= centers[i + 1]) return i + (mid - centers[i]) / (centers[i + 1] - centers[i]);
  }
  return centers.length - 1;
}
const manifestoEl = $('#manifesto');
function onScroll() {
  ui.sceneF = computeSceneF(); updateRail(); updateWords();
  document.body.classList.remove('over-bone');
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);

// --- указатель
addEventListener('pointermove', (e) => {
  ui.pointerX = (e.clientX / innerWidth) * 2 - 1;
  ui.pointerY = (e.clientY / innerHeight) * 2 - 1;
  // магнитная кнопка
  if (!isCoarse && !reduceMotion) {
    const cta = $('#cta'), r = cta.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy);
    cta.style.transform = d < 150 ? `translate(${(dx * 0.22).toFixed(1)}px, ${(dy * 0.22).toFixed(1)}px)` : '';
  }
});

// --- вращение знака перетаскиванием (с инерцией)
const stage = $('#stage');
let drag = null;
stage.addEventListener('pointerdown', (e) => {
  drag = { x: e.clientX, id: e.pointerId };
  stage.classList.add('drag');
  try { stage.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
});
stage.addEventListener('pointermove', (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x; drag.x = e.clientX;
  ui.spin += dx * 0.008; ui.spinVel = dx * 0.008;
});
const endDrag = () => { drag = null; stage.classList.remove('drag'); };
stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);

/* ============ 3. Сцена: ключевые кадры ============ */
// fx, fy — доли половины видимой ширины/высоты; scale; spread — раскрытие орбит; dust; opacity
const KF_WIDE = [
  { fx: 0.0, fy: 0.03, scale: 0.78, spread: 1.0, dust: 1.0, opacity: 1 },
  { fx: 0.64, fy: 0.0, scale: 0.7, spread: 0.8, dust: 0.8, opacity: 1 },
  { fx: -0.62, fy: 0.0, scale: 0.66, spread: 1.05, dust: 0.7, opacity: 1 },
  { fx: 0.0, fy: 0.0, scale: 0.5, spread: 1.4, dust: 0.3, opacity: 0 }
];
const KF_NARROW = [
  { fx: 0.0, fy: 0.1, scale: 0.55, spread: 0.7, dust: 0.8, opacity: 1 },
  { fx: 0.0, fy: 0.55, scale: 0.3, spread: 0.45, dust: 0.5, opacity: 0.95 },
  { fx: 0.0, fy: 0.55, scale: 0.3, spread: 0.55, dust: 0.5, opacity: 0.95 },
  { fx: 0.0, fy: 0.3, scale: 0.2, spread: 0.6, dust: 0.2, opacity: 0 }
];
function sampleKeyframes(f, narrow) {
  const kf = narrow ? KF_NARROW : KF_WIDE;
  const i = Math.min(kf.length - 2, Math.floor(f));
  const k = smooth(clamp(f - i));
  const a = kf[i], b = kf[i + 1], o = {};
  for (const key of Object.keys(a)) o[key] = lerp(a[key], b[key], k);
  return o;
}

/* ============ 4. Three.js ============ */
const SOURCES = [
  './vendor/three.module.min.js',
  'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js',
  'https://unpkg.com/three@0.160.0/build/three.module.min.js'
];
async function loadThree() {
  if (new URLSearchParams(location.search).has('nothree')) return null;
  for (const src of SOURCES) {
    try {
      return await Promise.race([import(src), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 9000))]);
    } catch (e) { /* пробуем следующий источник */ }
  }
  return null;
}

function buildScene(THREE, canvas) {
  const mobile = innerWidth < 760;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const maxDpr = mobile || isCoarse ? 1.5 : 2;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, maxDpr));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 120);
  camera.position.set(0, 0, 9);

  /* --- Окружение для металла: студийные «софтбоксы» из эмиссивных панелей --- */
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(new THREE.BoxGeometry(30, 30, 30), new THREE.MeshBasicMaterial({ color: 0x07070c, side: THREE.BackSide })));
  const panel = (w, h, color, k, x, y, z) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); envScene.add(m);
  };
  panel(2, 16, 0xffffff, 14, -9, 2, 4);      // левая полоса — основной блик
  panel(3, 14, 0xffffff, 9, 10, 3, 2);       // правая полоса
  panel(14, 2.5, 0xd8d4ff, 10, 0, 11, 0);    // верхний
  panel(16, 5, 0x6f4dff, 5, 0, -8, -6);      // ультрафиолет снизу
  panel(3, 10, 0xbcaeff, 12, 6, -2, -10);    // контровой
  const envRT = pmrem.fromScene(envScene, 0.035);
  scene.environment = envRT.texture;
  pmrem.dispose();

  /* --- Знак V: выдавленный контур с фаской --- */
  const pts = [[-1.6, 1.7], [-0.7, 1.7], [0, -0.45], [0.7, 1.7], [1.6, 1.7], [0.42, -1.7], [-0.42, -1.7]];
  const shape = new THREE.Shape();
  pts.forEach((p, i) => (i ? shape.lineTo(p[0], p[1]) : shape.moveTo(p[0], p[1])));
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.55, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.1, bevelOffset: 0, bevelSegments: 5, curveSegments: 1 });
  geo.center();
  const mat = new THREE.MeshPhysicalMaterial({ color: 0xd7d9e4, metalness: 1, roughness: 0.2, clearcoat: 0.6, clearcoatRoughness: 0.15, iridescence: 0.4, iridescenceIOR: 1.4, envMapIntensity: 1.5 });
  const vMesh = new THREE.Mesh(geo, mat);
  const blueprint = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), new THREE.LineBasicMaterial({ color: 0xbcaeff, transparent: true, opacity: 0.32 }));
  blueprint.scale.setScalar(1.07);
  const vGroup = new THREE.Group();
  vGroup.add(vMesh, blueprint);
  scene.add(vGroup);

  /* --- Свет --- */
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(4, 5, 6); scene.add(key);
  const rim = new THREE.PointLight(0x6f4dff, 70, 24, 2); rim.position.set(-5, -2, -3); scene.add(rim);
  const rim2 = new THREE.PointLight(0xbcaeff, 40, 24, 2); rim2.position.set(5, 3, -4); scene.add(rim2);

  /* --- Звёзды и пыль: круглые мягкие точки --- */
  const pointVS = `attribute float aSize; attribute float aSeed; uniform float uTime; uniform float uPixel; uniform float uScale; varying float vTw;
    void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv;
      vTw = 0.55 + 0.45 * sin(uTime * (0.5 + aSeed * 1.5) + aSeed * 40.0);
      gl_PointSize = max(1.0, aSize * uPixel * (uScale / -mv.z)); }`;
  const pointFS = `uniform vec3 uColor; uniform float uOpacity; varying float vTw;
    void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(uColor, a * a * vTw * uOpacity); }`;
  const dpr = renderer.getPixelRatio();
  function makePoints(count, rMin, rMax, size, scale, color, opacity, flatten) {
    const pos = new Float32Array(count * 3), sz = new Float32Array(count), seed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = rMin + Math.random() * (rMax - rMin), th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * (flatten || 1);
      pos[i * 3 + 2] = r * Math.cos(ph);
      sz[i] = size * (0.4 + Math.random() * 0.9); seed[i] = Math.random();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(sz, 1));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const m = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uPixel: { value: dpr }, uScale: { value: scale }, uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity } },
      vertexShader: pointVS, fragmentShader: pointFS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
    });
    return new THREE.Points(g, m);
  }
  const farStars = makePoints(mobile ? 900 : 2200, 30, 70, 2.2, 34, 0xffffff, 0.9, 1);
  const nearStars = makePoints(mobile ? 120 : 320, 12, 26, 2.4, 20, 0xbcaeff, 0.8, 1);
  const dust = makePoints(mobile ? 220 : 520, 2.8, 8.5, 2.6, 9, 0xd8d4ff, 0.85, 0.6);
  scene.add(farStars, nearStars);

  /* --- Орбиты: 5 колец = 5 направлений --- */
  const orbitRoot = new THREE.Group(); scene.add(orbitRoot);
  orbitRoot.add(dust);
  const RADII = [2.7, 3.4, 4.2, 5.1, 6.1];
  const TILTS = [[1.2, 0.2, 0.3], [0.5, 0.9, -0.4], [-0.9, 0.3, 0.8], [0.2, -0.7, 0.1], [1.0, 0.6, -0.9]];
  const rings = RADII.map((R, i) => {
    const pts3 = [];
    for (let k = 0; k <= 240; k++) { const a = (k / 240) * Math.PI * 2; pts3.push(new THREE.Vector3(Math.cos(a) * R, Math.sin(a) * R, 0)); }
    const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts3), new THREE.LineBasicMaterial({ color: 0xbcaeff, transparent: true, opacity: 0.2 }));
    const tilt = new THREE.Group(); tilt.rotation.set(TILTS[i][0], TILTS[i][1], TILTS[i][2]);
    const pivot = new THREE.Group();
    const sat = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 16), new THREE.MeshBasicMaterial({ color: 0xece8df }));
    sat.position.set(R, 0, 0); pivot.add(sat);
    tilt.add(line, pivot); orbitRoot.add(tilt);
    return { tilt, pivot, line, sat, R, speed: (0.16 - i * 0.022) * (i % 2 ? -1 : 1), phase: i * 1.3, focus: 0 };
  });

  /* --- Размер --- */
  let viewW = 1, viewH = 1;
  function resize() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    viewH = Math.tan((camera.fov * Math.PI) / 360) * camera.position.z; viewW = viewH * camera.aspect;
  }
  addEventListener('resize', resize); resize();

  /* --- Цикл --- */
  const cur = { fx: 0, fy: 0, scale: 0.78, spread: 1, dust: 1, opacity: 1 };
  const tint = new THREE.Color(0xd7d9e4), tintTarget = new THREE.Color(0xd7d9e4);
  let last = performance.now(), time = 0, intro = 0, shown = false, camX = 0, camY = 0;
  const easeOutExpo = (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));

  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    time += dt;
    tickTimecode(now);

    const narrow = innerWidth / innerHeight < 0.9;
    const target = sampleKeyframes(ui.sceneF, narrow);
    const k = 1 - Math.exp(-dt * 4);
    for (const key2 of Object.keys(target)) cur[key2] = lerp(cur[key2], target[key2], k);

    canvas.style.opacity = String(clamp(cur.opacity));
    if (cur.opacity < 0.01) { canvas.style.visibility = 'hidden'; return; }
    canvas.style.visibility = 'visible';

    intro = Math.min(1, intro + dt / 2.6);
    const ie = easeOutExpo(intro);

    // перетаскивание: инерция
    if (!drag) { ui.spin += ui.spinVel; ui.spinVel *= 0.93; }
    // спокойное «дыхание» знака + влияние указателя, сцены и выбранного проекта
    const sway = reduceMotion ? 0 : Math.sin(time * 0.35) * 0.45;
    const targetY = sway + ui.pointerX * 0.45 + ui.spin + ui.sceneF * 0.5 + ui.project * (ui.sceneF > 0.5 && ui.sceneF < 1.6 ? 0.35 : 0);
    vGroup.rotation.y = lerp(vGroup.rotation.y, targetY, 1 - Math.exp(-dt * 3)) + (1 - ie) * 0.12;
    vGroup.rotation.x = lerp(vGroup.rotation.x, ui.pointerY * 0.22, 1 - Math.exp(-dt * 3));
    vGroup.rotation.z = Math.sin(time * 0.2) * (reduceMotion ? 0 : 0.03);
    const s = cur.scale * (0.55 + 0.45 * ie) * (mobile ? 1 : 1);
    vGroup.scale.setScalar(s);
    vGroup.position.set(cur.fx * viewW, cur.fy * viewH, 0);
    orbitRoot.position.copy(vGroup.position);

    // оттенок металла по выбранному проекту
    tintTarget.setHex(PROJECTS[ui.project].tint);
    tint.lerp(tintTarget, 1 - Math.exp(-dt * 4));
    mat.color.copy(tint);

    // орбиты
    orbitRoot.scale.setScalar(cur.spread * (0.6 + 0.4 * ie) * (narrow ? 0.55 : 1));
    for (let i = 0; i < rings.length; i++) {
      const r = rings[i];
      r.pivot.rotation.z = r.phase + time * r.speed * (reduceMotion ? 0 : 1) * (1 + r.focus * 2.5);
      r.focus = lerp(r.focus, ui.ring === i ? 1 : 0, 1 - Math.exp(-dt * 6));
      const dim = ui.ring >= 0 && ui.ring !== i ? 0.5 : 1;
      r.line.material.opacity = (0.16 + r.focus * 0.7) * dim * ie;
      r.sat.scale.setScalar(1 + r.focus * 1.6);
    }
    dust.rotation.y = time * 0.03; dust.rotation.x = time * 0.012;
    dust.material.uniforms.uOpacity.value = 0.85 * cur.dust;
    farStars.rotation.y = time * 0.004 + ui.pointerX * 0.02;
    nearStars.rotation.y = time * 0.01 + ui.pointerX * 0.05; nearStars.rotation.x = ui.pointerY * 0.03;
    for (const p of [farStars, nearStars, dust]) p.material.uniforms.uTime.value = time;

    // камера слегка следует за указателем
    camX = lerp(camX, ui.pointerX * 0.35, 1 - Math.exp(-dt * 2));
    camY = lerp(camY, -ui.pointerY * 0.2, 1 - Math.exp(-dt * 2));
    camera.position.x = camX; camera.position.y = camY; camera.lookAt(0, 0, 0);
    rim.position.x = -5 + ui.pointerX * 2;

    renderer.render(scene, camera);
    if (!shown) { shown = true; finishLoading(); }
  }
  requestAnimationFrame(frame);
}

/* ============ 5. Запасной режим без WebGL ============ */
function buildFallback() {
  const el = $('#fallback'); el.hidden = false;
  $('#gl').style.display = 'none';
  let last = performance.now(), time = 0;
  const cur = { fx: 0, fy: 0, scale: 0.78, opacity: 1 };
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;
    tickTimecode(now);
    const narrow = innerWidth / innerHeight < 0.9;
    const tg = sampleKeyframes(ui.sceneF, narrow), k = 1 - Math.exp(-dt * 4);
    for (const key of ['fx', 'fy', 'scale', 'opacity']) cur[key] = lerp(cur[key], tg[key], k);
    if (!drag) { ui.spin += ui.spinVel; ui.spinVel *= 0.93; }
    const sway = reduceMotion ? 0 : Math.sin(time * 0.35) * 0.45;
    const rotY = (sway + ui.pointerX * 0.45 + ui.spin) * 40; // градусы условного поворота
    const sx = Math.cos((rotY * Math.PI) / 180);
    el.style.opacity = String(clamp(cur.opacity));
    el.style.transform = `translate(${cur.fx * innerWidth * 0.5}px, ${-cur.fy * innerHeight * 0.5}px) scale(${(cur.scale * 1.15).toFixed(3)}) scaleX(${Math.max(0.35, sx).toFixed(3)})`;
  }
  requestAnimationFrame(frame);
  finishLoading();
}

/* ============ 6. Запуск ============ */
let loadingDone = false;
function finishLoading() {
  if (loadingDone) return;
  loadingDone = true;
  const num = $('#loaderNum');
  clearInterval(counter); num.textContent = '100';
  setTimeout(() => document.body.classList.remove('is-loading'), 250);
}
let counterVal = 0;
const counter = setInterval(() => { counterVal = Math.min(92, counterVal + 1 + Math.random() * 4); $('#loaderNum').textContent = String(Math.floor(counterVal)).padStart(3, '0'); }, 60);

$('#year').textContent = new Date().getFullYear();
applyLang();
onScroll();

(async function start() {
  const THREE = await loadThree();
  let ok = false;
  if (THREE) {
    try { buildScene(THREE, $('#gl')); ok = true; }
    catch (e) { console.warn('VIBEVERSE: 3D-сцена не запустилась, включён запасной режим.', e); }
  }
  if (!ok) buildFallback();
  // страховка: интерфейс не должен оставаться под загрузчиком
  setTimeout(finishLoading, 6000);
})();
