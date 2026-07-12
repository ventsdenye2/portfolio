const app = document.querySelector('#app');
let catalog = null;
let renderToken = 0;

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const inlineMarkdown = (value) => {
  let html = escapeHtml(value);
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  return html;
};

function renderMarkdown(markdown) {
  const source = markdown.replace(/^---[\s\S]*?---\s*/, '').replace(/\r\n/g, '\n');
  const lines = source.split('\n');
  const output = [];
  let paragraph = [];
  let list = [];
  let code = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      output.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
      list = [];
    }
  };

  lines.forEach((line) => {
    if (line.startsWith('```')) {
      flushParagraph();
      flushList();
      if (code === null) code = [];
      else {
        output.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
        code = null;
      }
      return;
    }
    if (code !== null) { code.push(line); return; }
    if (!line.trim()) { flushParagraph(); flushList(); return; }
    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      return;
    }
    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      list.push(line.replace(/^[-*]\s+/, ''));
      return;
    }
    if (line.startsWith('>')) {
      flushParagraph();
      flushList();
      output.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ''))}</blockquote>`);
      return;
    }
    if (/^---+$/.test(line.trim())) {
      flushParagraph();
      flushList();
      output.push('<hr>');
      return;
    }
    paragraph.push(line.trim());
  });
  flushParagraph();
  flushList();
  return output.join('');
}

const route = () => {
  const hash = window.location.hash.replace(/^#/, '') || 'home';
  if (hash.startsWith('entry/')) return { name: 'entry', slug: decodeURIComponent(hash.slice(6)) };
  if (['archive', 'about'].includes(hash)) return { name: hash };
  if (['work', 'notes', 'photography', 'contact'].includes(hash)) return { name: 'home', anchor: hash };
  return { name: 'home' };
};

function updateNavigation(active) {
  document.querySelectorAll('[data-nav]').forEach((link) => link.classList.toggle('is-active', link.dataset.nav === active));
}

const tags = (items = []) => items.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join(' ');

function entryRow(entry) {
  return `<a class="entry-row" href="#entry/${encodeURIComponent(entry.slug)}">
    <div class="row-meta"><span>${escapeHtml(entry.date)}</span><span class="status">${escapeHtml(entry.status)}</span></div>
    <img class="row-thumb" src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}封面" loading="lazy">
    <div class="row-copy"><h3>${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.summary)}</p><div class="row-tags">${tags(entry.tags)}</div></div>
    <span class="row-arrow" aria-hidden="true">→</span>
  </a>`;
}

function archiveCard(entry) {
  return `<a class="archive-card" href="#entry/${encodeURIComponent(entry.slug)}">
    <img class="card-media" src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}封面" loading="lazy">
    <div class="card-meta"><span>${escapeHtml(entry.type)} · ${escapeHtml(entry.date)}</span><span>${escapeHtml(entry.status)}</span></div>
    <h2>${escapeHtml(entry.title)}</h2><p>${escapeHtml(entry.summary)}</p><div class="card-tags">${tags(entry.tags)}</div>
  </a>`;
}

function homeView() {
  const entries = catalog.entries || [];
  const featured = entries[0];
  const secondary = entries.slice(1);
  const noteRows = (catalog.notes || []).map((note) => `<a class="note-row" href="#archive"><span class="note-date">${escapeHtml(note.date)}</span><span class="note-title">${escapeHtml(note.title)}</span><span class="note-description">${escapeHtml(note.description)}</span><span class="note-time">${escapeHtml(note.readingTime)} ↗</span></a>`).join('');
  const visualRows = (catalog.visuals || []).map((visual) => `<figure class="visual-frame"><img src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt)}" loading="lazy"><figcaption>${escapeHtml(visual.label)}</figcaption></figure>`).join('');
  const email = catalog.contact?.email || '';
  const emailTarget = email ? `href="mailto:${escapeHtml(email)}"` : 'href="#about"';
  const emailLabel = email || 'ADD EMAIL IN CONTENT/INDEX.JSON';
  return `<div class="home-page">
    <section class="process-hero" id="home" data-process data-step="0">
      <canvas class="process-field" aria-hidden="true"></canvas>
      <div class="process-sticky">
        <div class="process-topline"><span>ZE / CREATIVE TECHNOLOGIST</span><span>SCROLL TO TRACE THE PROCESS ↓</span></div>
        <div class="process-counter"><span data-process-counter>01</span><i>/</i> 04</div>
        <div class="process-thought"><span class="process-word" data-process-word>OBSERVE.</span><span class="process-sub" data-process-sub>what is</span></div>
        <div class="process-resolution">I observe what is.<br>I question why.<br>I imagine what could be.<br><strong>I create what comes next.</strong></div>
        <div class="process-footerline"><span>GAME / IMAGE / SYSTEM / IDEA</span><span>© 2026</span></div>
      </div>
    </section>

    <section class="home-intro home-section" id="intro">
      <div class="section-index">00 / INTRODUCTION</div>
      <div class="intro-copy"><p class="intro-statement">${escapeHtml(catalog.description)}</p><p class="intro-fields">${escapeHtml(catalog.fields || 'Game Development / Computer Graphics / VR / Photography / Creative Experiments')}</p></div>
    </section>

    <section class="work-section home-section" id="work">
      <div class="section-heading editorial-heading"><div><span class="section-index">01 / SELECTED WORK</span><h2>Things made<br>to be experienced.</h2></div><a class="text-link" href="#archive">All work →</a></div>
      <a class="featured-work" href="#entry/${encodeURIComponent(featured.slug)}"><div class="featured-number">01</div><div class="featured-media"><img src="${escapeHtml(featured.cover)}" alt="${escapeHtml(featured.title)}项目画面" loading="lazy"><span>VIEW PROJECT ↗</span></div><div class="featured-copy"><div class="work-meta">${escapeHtml(featured.date)} / ${escapeHtml(featured.type)} / ${escapeHtml(featured.status)}</div><h3>${escapeHtml(featured.title)}</h3><p>${escapeHtml(featured.summary)}</p><div class="work-role">ROLE / ART DIRECTION · PROGRAMMING · CONCEPT DEVELOPMENT</div></div></a>
      <div class="secondary-work-list">${secondary.map((entry, index) => `<a class="secondary-work" href="#entry/${encodeURIComponent(entry.slug)}"><span class="work-number">0${index + 2}</span><span class="secondary-title">${escapeHtml(entry.title)}</span><span class="secondary-description">${escapeHtml(entry.summary)}</span><span class="work-meta">${escapeHtml(entry.date)} / ${escapeHtml(entry.type)}</span><span class="work-arrow">↗</span></a>`).join('')}</div>
    </section>

    <section class="notes-section home-section" id="notes"><div class="section-heading editorial-heading"><div><span class="section-index">02 / NOTES</span><h2>Thinking in public.</h2></div><span class="section-aside">ESSAYS · DEVELOPMENT LOGS<br>OBSERVATIONS · QUESTIONS</span></div><div class="notes-list">${noteRows}</div></section>

    <section class="photography-section home-section" id="photography"><div class="photo-intro"><span class="section-index">03 / PHOTOGRAPHY</span><h2>Before I create,<br><em>I learn to notice.</em></h2><p>影像对我来说不是一条独立的支线，而是同一个创作过程的另一种记录方式：先停下来，看见一个瞬间，再决定它能不能被带走。</p></div><div class="visual-sequence">${visualRows}</div></section>

    <section class="about-section home-section" id="about"><div class="section-index">04 / ABOUT</div><div class="about-content"><h2>I am a computer science student,<br>game developer, photographer,<br>and observer.</h2><p>I am interested in the space between technology and human experience: how systems shape behavior, how images preserve moments, and how imagined worlds allow us to question the real one.</p><p>I do not create from answers.<br>I create from things I cannot stop thinking about.</p></div></section>

    <section class="contact-section home-section" id="contact"><div class="contact-label"><span class="section-index">05 / CONTACT</span><span>LET'S KEEP IN TOUCH</span></div><a class="contact-title" ${emailTarget}>Say hello <span>↗</span></a><div class="contact-meta"><span>EMAIL / ${escapeHtml(emailLabel)}</span><span>GITHUB / TO BE CONNECTED</span><span>UTC+08:00</span><span>© 2026 ZE</span></div><p class="keep-observing">Keep observing.</p></section>
  </div>`;
}

function initProcess() {
  window.__processCleanup?.();
  const process = document.querySelector('[data-process]');
  if (!process) return;
  const word = process.querySelector('[data-process-word]');
  const sub = process.querySelector('[data-process-sub]');
  const counter = process.querySelector('[data-process-counter]');
  const stages = [['OBSERVE.', 'what is'], ['QUESTION.', 'why'], ['IMAGINE.', 'what could be'], ['CREATE.', 'what comes next']];
  const canvas = process.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const points = Array.from({ length: 42 }, (_, index) => ({ x: (index * 83) % 1200, y: (index * 47) % 760, r: index % 5 === 0 ? 2 : 1 }));
  const cursor = { x: -1000, y: -1000 };
  let raf;
  const resize = () => { const rect = process.getBoundingClientRect(); canvas.width = Math.max(1, Math.floor(rect.width * devicePixelRatio)); canvas.height = Math.max(1, Math.floor(window.innerHeight * devicePixelRatio)); canvas.style.width = `${rect.width}px`; canvas.style.height = `${window.innerHeight}px`; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); };
  const draw = () => { const width = canvas.clientWidth; const height = canvas.clientHeight; ctx.clearRect(0, 0, width, height); points.forEach((point, index) => { const dx = point.x - cursor.x; const dy = point.y - cursor.y; const distance = Math.hypot(dx, dy); const pull = distance < 180 ? (180 - distance) / 180 : 0; const x = point.x + dx * pull * .15; const y = point.y + dy * pull * .15; const isWarm = index % 7 === 0; ctx.fillStyle = isWarm ? `rgba(255, 194, 111, ${.2 + pull * .72})` : `rgba(109, 131, 255, ${.16 + pull * .7})`; ctx.fillRect(x, y, point.r, point.r); if (pull > .1) { ctx.strokeStyle = isWarm ? `rgba(255, 194, 111, ${pull * .22})` : `rgba(109, 131, 255, ${pull * .25})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(cursor.x, cursor.y); ctx.stroke(); } }); raf = requestAnimationFrame(draw); };
  const update = () => { const rect = process.getBoundingClientRect(); const progress = Math.min(0.999, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight))); const index = Math.min(3, Math.floor(progress * 4)); process.dataset.step = index; word.textContent = stages[index][0]; sub.textContent = stages[index][1]; counter.textContent = String(index + 1).padStart(2, '0'); };
  const onMove = (event) => { cursor.x = event.clientX; cursor.y = event.clientY; };
  resize(); update(); draw(); window.addEventListener('resize', resize); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('pointermove', onMove, { passive: true });
  window.__processCleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('scroll', update); window.removeEventListener('pointermove', onMove); };
}

function archiveView() {
  const types = ['全部', ...new Set(catalog.entries.map((entry) => entry.type))];
  return `<section class="archive-intro"><div><p class="eyebrow">ARCHIVE / ALL ENTRIES</p><h1>把想法留下来，<br>让它们开始生长。</h1></div><p>这里既放完成的作品，也放还在形成中的概念。每条记录都尽量变成一个短小、完整、可以被别人体验的切片。</p></section>
    <div class="filter-bar" role="group" aria-label="筛选条目">${types.map((type, index) => `<button class="filter-button${index === 0 ? ' is-active' : ''}" type="button" data-filter="${escapeHtml(type)}">${escapeHtml(type)}</button>`).join('')}</div>
    <div class="archive-grid" id="archive-grid">${catalog.entries.map(archiveCard).join('')}</div>`;
}

function aboutView() {
  return `<section class="about-page"><p class="eyebrow">ABOUT / Z</p><h1>我想做的不是一个简历页面，而是一座会继续扩建的互动想法博物馆。</h1>
    <div class="about-grid"><div><p>我是泽，北京航空航天大学计算机专业学生，正在学习虚拟现实、游戏开发、AI 与图形学。</p><p>我经常同时想到故事、世界观、游戏机制和未来产品。这个站点的作用，是把这些还没有长成完整作品的想法也留下来，并尽量把其中最有趣的一小部分做成可以直接体验的东西。</p><h2>这个档案馆的工作方式</h2><p>新想法先被收集，再被压缩成一个核心概念：一个场景、一个机制、一次关键选择，或者一段可以走完的短叙事。它不需要一开始就变成完整游戏。</p></div>
      <ol class="principles"><li>先让别人体验，再解释复杂背景。</li><li>每个条目控制在 3—8 分钟内完成。</li><li>优先静态网页，保持可以分享和托管。</li><li>第一版达到可以发布，就算完成。</li></ol></div>
    <div class="about-note">// CONTENT IS CODE · MARKDOWN IS THE SOURCE · INTERACTION IS OPTIONAL</div>
  </section>`;
}

async function entryView(slug, token) {
  const entry = catalog.entries.find((item) => item.slug === slug);
  if (!entry) return `<div class="error-state">找不到这个条目。<br><a class="text-link" href="#archive">返回档案馆</a></div>`;
  let markdown = '暂时还没有内容。';
  try { markdown = await fetch(entry.content).then((response) => response.ok ? response.text() : Promise.reject(new Error('content not found'))); } catch { markdown = '这个条目的 Markdown 暂时无法读取，请检查 content/index.json 中的路径。'; }
  if (token !== renderToken) return '';
  const media = entry.media?.map((item) => item.type === 'video' ? `<div class="media-block"><h2>${escapeHtml(item.title || '演示视频')}</h2><video controls preload="metadata"><source src="${escapeHtml(item.src)}" type="video/mp4">您的浏览器不支持视频播放。</video></div>` : '').join('') || '';
  const interactive = entry.interactive ? `<div class="media-block"><h2>可玩版本</h2><iframe class="interactive-frame" src="${escapeHtml(entry.interactive)}" title="${escapeHtml(entry.title)}互动版本" loading="lazy"></iframe></div>` : '';
  const links = entry.links?.map((link) => `<a class="entry-action" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ↗</a>`).join('') || '';
  return `<article class="entry-page"><a class="back-link" href="#archive">← 返回档案馆</a><header class="entry-head"><div><div class="entry-type">${escapeHtml(entry.type)} / ${escapeHtml(entry.status)}</div><h1>${escapeHtml(entry.title)}</h1><p class="entry-summary">${escapeHtml(entry.summary)}</p></div><div class="entry-facts"><div class="entry-fact"><span class="entry-fact-label">YEAR</span>${escapeHtml(entry.date)}</div><div class="entry-fact"><span class="entry-fact-label">FORMAT</span>${escapeHtml(entry.format || '互动网页')}</div></div></header><img class="entry-hero" src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)}封面"><div class="entry-layout"><div><div class="markdown">${renderMarkdown(markdown)}</div>${media}${interactive}</div><aside class="entry-aside"><h2>关键词</h2><div class="tag-list">${tags(entry.tags)}</div><div class="entry-actions">${links}</div></aside></div></article>`;
}

async function render() {
  const current = route();
  const token = ++renderToken;
  updateNavigation(current.name === 'entry' ? 'work' : (current.anchor || current.name));
  if (!catalog) return;
  if (current.name === 'entry') {
    app.innerHTML = '<div class="loading-state">正在读取条目<span class="loading-dots">...</span></div>';
    app.innerHTML = await entryView(current.slug, token);
  } else if (current.name === 'archive') app.innerHTML = archiveView();
  else if (current.name === 'about') app.innerHTML = aboutView();
  else app.innerHTML = homeView();
  if (current.name === 'home') { initProcess(); if (current.anchor) window.requestAnimationFrame(() => document.getElementById(current.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })); }
  app.focus({ preventScroll: true });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button || !catalog) return;
  document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
  const filter = button.dataset.filter;
  const items = filter === '全部' ? catalog.entries : catalog.entries.filter((entry) => entry.type === filter);
  document.querySelector('#archive-grid').innerHTML = items.length ? items.map(archiveCard).join('') : '<div class="empty-state">还没有这个分类的条目。</div>';
});

window.addEventListener('hashchange', render);

const fallbackCatalog = () => {
  const node = document.querySelector('#catalog-fallback');
  if (!node) return null;
  try { return JSON.parse(node.textContent); } catch { return null; }
};

fetch('content/index.json')
  .then((response) => response.ok ? response.json() : Promise.reject(new Error('catalog not found')))
  .then((data) => { catalog = data; render(); })
  .catch(() => {
    catalog = fallbackCatalog();
    if (catalog) render();
    else app.innerHTML = '<div class="error-state">档案索引读取失败。请通过本地静态服务器打开页面（例如 <code>python -m http.server</code>），或检查 content/index.json 是否存在。</div>';
  });
