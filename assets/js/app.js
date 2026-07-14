const app = document.querySelector('#app');
let catalog = null;
let renderToken = 0;

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const inlineMarkdown = (value) => escapeHtml(value)
  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1 ↗</a>')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<em>$1</em>');

function renderMarkdown(markdown) {
  const lines = markdown.replace(/^---[\s\S]*?---\s*/, '').replace(/\r\n/g, '\n').split('\n');
  const output = []; let paragraph = []; let list = []; let code = null;
  const flushParagraph = () => { if (paragraph.length) { output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`); paragraph = []; } };
  const flushList = () => { if (list.length) { output.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`); list = []; } };
  lines.forEach((line) => {
    if (line.startsWith('```')) { flushParagraph(); flushList(); if (code === null) code = []; else { output.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`); code = null; } return; }
    if (code !== null) { code.push(line); return; }
    if (!line.trim()) { flushParagraph(); flushList(); return; }
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) { flushParagraph(); flushList(); output.push(`<h${heading[1].length}>${inlineMarkdown(heading[2])}</h${heading[1].length}>`); return; }
    if (/^[-*]\s+/.test(line)) { flushParagraph(); list.push(line.replace(/^[-*]\s+/, '')); return; }
    if (line.startsWith('>')) { flushParagraph(); flushList(); output.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ''))}</blockquote>`); return; }
    if (/^---+$/.test(line.trim())) { flushParagraph(); flushList(); output.push('<hr>'); return; }
    paragraph.push(line.trim());
  });
  flushParagraph(); flushList(); return output.join('');
}

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '') || 'home';
  if (hash.startsWith('entry/')) return { name: 'entry', slug: decodeURIComponent(hash.slice(6)) };
  if (hash === 'archive') return { name: 'archive' };
  if (['projects', 'concepts', 'about', 'contact'].includes(hash)) return { name: 'home', anchor: hash };
  return { name: 'home' };
}

function updateNavigation(active = '') {
  document.querySelectorAll('[data-nav]').forEach((link) => link.classList.toggle('is-active', link.dataset.nav === active));
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('.site-nav');
  toggle?.setAttribute('aria-expanded', 'false'); nav?.classList.remove('is-open');
}

const tags = (items = []) => items.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
const entryUrl = (entry) => `#entry/${encodeURIComponent(entry.slug)}`;

function projectCard(entry, index) {
  return `<a class="project-card project-card-${index + 1}" href="${entryUrl(entry)}">
    <div class="project-visual"><img src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}项目画面" loading="lazy"><span class="project-open">View project <b>↗</b></span></div>
    <div class="project-info"><span>${String(index + 1).padStart(2, '0')} / ${escapeHtml(entry.type)} · ${escapeHtml(entry.date)}</span><h3>${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.summary)}</p></div>
  </a>`;
}

function conceptCard(entry) {
  return `<article class="concept-card"><div class="concept-copy"><p class="eyebrow">02 / CONCEPT LAB</p><h2>${escapeHtml(entry.title)}</h2><p class="concept-lead">${escapeHtml(entry.summary)}</p><div class="tag-list">${tags(entry.tags)}</div><a class="button-link" href="${entryUrl(entry)}">Enter the narrative <span>↗</span></a></div><a class="concept-cover" href="${entryUrl(entry)}" aria-label="体验 ${escapeHtml(entry.title)}"><img src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}封面"><span>Interactive<br>narrative</span></a></article>`;
}

function homeView() {
  const projects = (catalog.entries || []).filter((entry) => entry.section === 'work');
  const concepts = (catalog.entries || []).filter((entry) => entry.section === 'concept');
  const github = catalog.contact?.github || 'https://github.com/ventsdenye2';
  return `<div class="home-page">
    <section class="depth-hero" id="home" data-depth-hero>
      <canvas class="depth-field" aria-hidden="true"></canvas>
      <div class="hero-grid" aria-hidden="true"></div><div class="light-orb light-orb-cool" aria-hidden="true"></div><div class="light-orb light-orb-warm" aria-hidden="true"></div>
      <div class="glass-plane plane-one" aria-hidden="true"></div><div class="glass-plane plane-two" aria-hidden="true"></div><div class="glass-plane plane-three" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow hero-kicker">ZE / CREATIVE TECHNOLOGIST</p>
        <h1 class="hero-statement" aria-label="I observe what is. I question why. I imagine what could be. I create what comes next.">
          <span>I observe what is.</span><span>I question why.</span><span>I imagine what could be.</span><span>I create what comes next.</span>
        </h1>
        <div class="hero-bottom"><p>${escapeHtml(catalog.description)}</p><a class="hero-cta" href="#projects">Selected projects <i>↓</i></a></div>
      </div>
      <div class="hero-side-note" aria-hidden="true"><span>01—04</span><span>LOOK / ASK / IMAGINE / MAKE</span></div>
    </section>

    <section class="projects-section section-wrap" id="projects">
      <div class="section-heading"><div><p class="eyebrow">01 / SELECTED PROJECTS</p><h2>Made to be<br><em>experienced.</em></h2></div><p class="section-note">Three games, each built around a different way to let a player feel, think, or coordinate.</p></div>
      <div class="projects-grid">${projects.map(projectCard).join('')}</div>
    </section>

    ${concepts.length ? `<section class="concept-section section-wrap" id="concepts"><div class="concept-list">${concepts.map(conceptCard).join('')}</div><p class="concept-caption">Concept Lab 收录仍在生长的叙事与交互实验；它们与正式项目分开展示，但同样可以被体验。</p></section>` : ''}

    <section class="about-section section-wrap" id="about"><div><p class="eyebrow">03 / ABOUT</p><h2>Technology is a material.<br><em>Experience is the point.</em></h2></div><div class="about-copy"><p>我是泽，一名计算机专业学生与创作者。我关注游戏、图形、交互叙事与人如何在系统中作出选择。</p><p>${escapeHtml(catalog.fields)}</p></div></section>

    <section class="contact-section section-wrap" id="contact"><p class="eyebrow">04 / CONTACT</p><h2>Have something<br>worth making?</h2><div class="contact-row"><p>想聊项目、叙事或有趣的技术实验，欢迎从 GitHub 找到我。</p><a class="contact-link" href="${escapeHtml(github)}" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></section>
  </div>`;
}

function archiveCard(entry) { return `<a class="archive-card" href="${entryUrl(entry)}"><img src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}封面" loading="lazy"><p>${escapeHtml(entry.type)} · ${escapeHtml(entry.date)}</p><h2>${escapeHtml(entry.title)}</h2><span>${escapeHtml(entry.summary)}</span></a>`; }
function archiveView() { return `<section class="archive-page section-wrap"><p class="eyebrow">ARCHIVE / ALL ENTRIES</p><h1>Projects & concepts.</h1><div class="archive-grid">${(catalog.entries || []).map(archiveCard).join('')}</div></section>`; }

async function entryView(entry) {
  let markdown = entry.body || '';
  try { const response = await fetch(entry.content); if (!response.ok) throw new Error('Content not found'); markdown = await response.text(); } catch { /* 详情页仍可使用目录中的正文回退内容。 */ }
  const body = markdown ? renderMarkdown(markdown) : '<p>这条内容正在整理中。</p>';
  const media = (entry.media || []).map((item) => item.type === 'video' ? `<section class="entry-media"><p class="eyebrow">${escapeHtml(item.title || 'MEDIA')}</p><video controls preload="metadata" src="${escapeHtml(item.src)}"></video></section>` : '').join('');
  const links = (entry.links || []).map((link) => `<a class="button-link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} <span>↗</span></a>`).join('');
  return `<article class="entry-page section-wrap"><a class="back-link" href="#projects">← Back to portfolio</a><header class="entry-header"><p class="eyebrow">${escapeHtml(entry.type)} / ${escapeHtml(entry.date)}</p><h1>${escapeHtml(entry.title)}</h1><p class="entry-summary">${escapeHtml(entry.summary)}</p><div class="tag-list">${tags(entry.tags)}</div></header><img class="entry-cover" src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}封面">${entry.interactive ? `<section class="interactive-area"><div><p class="eyebrow">INTERACTIVE EXPERIENCE</p><h2>Enter the work.</h2></div><iframe title="${escapeHtml(entry.title)}互动体验" src="${escapeHtml(entry.interactive)}" loading="lazy"></iframe></section>` : ''}${media}<div class="entry-body">${body}</div>${links ? `<div class="entry-links">${links}</div>` : ''}</article>`;
}

function initMenu() {
  const button = document.querySelector('[data-menu-toggle]'); const nav = document.querySelector('.site-nav');
  button?.addEventListener('click', () => { const isOpen = nav.classList.toggle('is-open'); button.setAttribute('aria-expanded', String(isOpen)); });
  nav?.addEventListener('click', () => { nav.classList.remove('is-open'); button?.setAttribute('aria-expanded', 'false'); });
}

function initDepthHero() {
  window.__heroCleanup?.();
  const hero = document.querySelector('[data-depth-hero]'); const canvas = hero?.querySelector('canvas'); if (!hero || !canvas) return;
  const ctx = canvas.getContext('2d'); const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dots = Array.from({ length: 58 }, (_, index) => ({ x: ((index * 97) % 1000) / 1000, y: ((index * 151) % 700) / 700, size: index % 9 === 0 ? 2.4 : 1.15, hue: index % 4 === 0 ? 'warm' : 'cool' }));
  let frame = 0; let raf = 0;
  const resize = () => { const rect = hero.getBoundingClientRect(); const ratio = Math.min(window.devicePixelRatio || 1, 2); canvas.width = Math.max(1, Math.floor(rect.width * ratio)); canvas.height = Math.max(1, Math.floor(rect.height * ratio)); canvas.style.width = `${rect.width}px`; canvas.style.height = `${rect.height}px`; ctx.setTransform(ratio, 0, 0, ratio, 0, 0); };
  const draw = () => { const w = canvas.clientWidth; const h = canvas.clientHeight; ctx.clearRect(0, 0, w, h); dots.forEach((dot, index) => { const wobble = reduceMotion ? 0 : Math.sin(frame * .018 + index) * 8; const x = dot.x * w; const y = dot.y * h + wobble; ctx.fillStyle = dot.hue === 'warm' ? 'rgba(255,181,91,.64)' : 'rgba(126,154,255,.55)'; ctx.beginPath(); ctx.arc(x, y, dot.size, 0, Math.PI * 2); ctx.fill(); }); if (!reduceMotion) { frame += 1; raf = requestAnimationFrame(draw); } };
  const move = (event) => { const rect = hero.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5; hero.style.setProperty('--mx', x.toFixed(3)); hero.style.setProperty('--my', y.toFixed(3)); };
  const leave = () => { hero.style.setProperty('--mx', '0'); hero.style.setProperty('--my', '0'); };
  resize(); draw(); window.addEventListener('resize', resize); hero.addEventListener('pointermove', move); hero.addEventListener('pointerleave', leave);
  window.__heroCleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); hero.removeEventListener('pointermove', move); hero.removeEventListener('pointerleave', leave); };
}

function scrollToAnchor(anchor) { if (!anchor) return; requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ block: 'start' })); }
async function render() {
  const token = ++renderToken; const route = currentRoute(); window.__heroCleanup?.();
  if (route.name === 'entry') { const entry = catalog.entries.find((item) => item.slug === route.slug); app.innerHTML = entry ? await entryView(entry) : '<section class="missing-page"><h1>Entry not found.</h1><a href="#home">Return home</a></section>'; }
  else if (route.name === 'archive') app.innerHTML = archiveView();
  else app.innerHTML = homeView();
  if (token !== renderToken) return;
  updateNavigation(route.anchor || ''); initMenu(); if (route.name === 'home') { initDepthHero(); scrollToAnchor(route.anchor); }
  window.scrollTo({ top: route.name === 'home' && route.anchor ? window.scrollY : 0, behavior: 'auto' });
}

async function loadCatalog() {
  try { const response = await fetch('content/index.json', { cache: 'no-store' }); if (!response.ok) throw new Error('Catalog unavailable'); return await response.json(); }
  catch { const fallback = document.querySelector('#catalog-fallback')?.textContent; if (!fallback) throw new Error('Catalog unavailable'); return JSON.parse(fallback); }
}

window.addEventListener('hashchange', render);
loadCatalog().then((data) => { catalog = data; render(); }).catch(() => { app.innerHTML = '<section class="missing-page"><h1>Unable to load portfolio.</h1><p>请确认站点文件完整，或通过静态服务器打开。</p></section>'; });
