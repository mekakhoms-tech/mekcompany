// ===== ABSOLUTE SAFETY: ensure page-loaded fires no matter what =====
// (Guarantees the body fade-in even if any later script throws.)
(function () {
  function reveal() { document.body.classList.add('page-loaded'); }
  document.body.classList.add('page-fade');
  if (document.readyState === 'complete') {
    reveal();
  } else {
    window.addEventListener('load', reveal);
    // Hard fallback: never leave the body invisible
    setTimeout(reveal, 1500);
  }
  // If anything in main code throws, still reveal
  window.addEventListener('error', reveal);
})();

// Helper: only run a function if its required elements exist
function $$(sel) { return document.querySelectorAll(sel); }
function $(sel) { return document.querySelector(sel); }

// ===== Year =====
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// ===== Sticky-nav scroll state =====
(function () {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  if (!nav) return;
  if (navToggle) navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
})();

// ===== Reveal on scroll (.reveal class) =====
(function () {
  const els = $$('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
})();

// ===== Brand ticker (homepage only) =====
(function () {
  const ticker = document.getElementById('ticker');
  if (!ticker || typeof BRANDS === 'undefined') return;
  const brandList = Object.keys(BRANDS);
  const items = [...brandList, ...brandList].map(b => `<span class="ticker-item">${b}<span class="dot"></span></span>`).join('');
  ticker.innerHTML = items;
})();

// ===== Donut share (homepage performance dashboard) =====
(function () {
  const donutShare = document.getElementById('donutShare');
  if (!donutShare) return;
  setTimeout(() => {
    const c = 2 * Math.PI * 52;
    const pct = 0.22;
    donutShare.style.strokeDasharray = `${c * pct} ${c}`;
  }, 250);
})();

// ===== Portfolio bars (homepage performance dashboard) =====
(function () {
  const portfolioCards = document.querySelectorAll('.perf-card.span-2');
  if (portfolioCards.length < 2) return;
  const target = portfolioCards[1].querySelector('.bars-wrap');
  if (!target) return;
  const portfolioData = [
    { label: 'Beauty & Skincare', count: 241, cls: '' },
    { label: 'Stationery', count: 95, cls: '' },
    { label: 'Hair & Body', count: 25, cls: '' },
    { label: 'Baby Care', count: 25, cls: '' },
    { label: 'Oral Care', count: 17, cls: '' },
    { label: 'Flour & Cooking', count: 13, cls: 'warm' },
    { label: 'Food & Cooking', count: 8, cls: 'warm' },
    { label: 'Spirits', count: 8, cls: 'warm' },
    { label: 'Beverages', count: 2, cls: 'warm' },
    { label: 'Household', count: 2, cls: 'warm' },
  ];
  const maxCount = Math.max(...portfolioData.map(p => p.count));
  target.innerHTML = portfolioData.map(p => `
    <div class="bar-row">
      <span>${p.label}</span>
      <div class="bar-track"><div class="bar-fill ${p.cls}" data-target="${(p.count / maxCount * 100).toFixed(1)}" style="width: 0;"></div></div>
      <span class="num">${p.count}</span>
    </div>
  `).join('');
  setTimeout(() => {
    target.querySelectorAll('.bar-fill').forEach(el => { el.style.width = el.dataset.target + '%'; });
  }, 350);
})();

// ===== Brand cards (homepage) =====
(function () {
  const brandGrid = document.getElementById('brandGrid');
  if (!brandGrid || typeof PRODUCTS === 'undefined' || typeof BRANDS === 'undefined') return;
  function shadeColor(hex, percent) {
    const f = parseInt(hex.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = Math.abs(percent) / 100,
      R = f >> 16, G = (f >> 8) & 0x00FF, B = f & 0x0000FF;
    return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }
  const productCounts = {};
  PRODUCTS.forEach(p => { productCounts[p.brand] = (productCounts[p.brand] || 0) + 1; });
  brandGrid.innerHTML = Object.entries(BRANDS).map(([name, b]) => {
    const initials = name.replace(/\(.*?\)/g, '').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('');
    const skuCount = productCounts[name] || 0;
    const mark = b.logo
      ? `<div class="brand-mark brand-mark-img"><img src="${b.logo}" alt="${name} logo" loading="lazy"/></div>`
      : `<div class="brand-mark" style="background: linear-gradient(145deg, ${b.tint}, ${shadeColor(b.tint, -20)});">${initials}</div>`;
    return `
      <article class="brand-card">
        <div style="display: flex; align-items: center; gap: 16px;">
          ${mark}
          <div style="flex: 1; min-width: 0;">
            <div class="brand-name">${name}</div>
            <div class="brand-tagline">${b.tagline}</div>
          </div>
        </div>
        <p class="brand-desc">${b.description}</p>
        <div class="brand-meta">
          <span class="brand-tag country">${b.country}</span>
          <span class="brand-tag">${b.category}</span>
          <span class="brand-tag count">${skuCount} ${skuCount === 1 ? 'SKU' : 'SKUs'}</span>
        </div>
      </article>
    `;
  }).join('');
})();

// ===== Products grid + filters (products.html only) =====
(function () {
  const grid = document.getElementById('productGrid');
  const meta = document.getElementById('productMeta');
  const moreBtn = document.getElementById('showMoreBtn');
  const search = document.getElementById('searchInput');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  let activeCat = 'all';
  let searchQ = '';
  let displayLimit = 24;

  function escHtml(s) { return String(s || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }

  function getFiltered() {
    const q = searchQ.trim().toLowerCase();
    return PRODUCTS.filter(p => {
      if (activeCat !== 'all' && p.cat !== activeCat) return false;
      if (q) {
        const hay = (p.name + ' ' + p.brand + ' ' + p.cat_label).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function render() {
    const filtered = getFiltered();
    const shown = filtered.slice(0, displayLimit);
    if (meta) {
      meta.textContent = filtered.length === 0
        ? `No products match your filter.`
        : `Showing ${shown.length} of ${filtered.length} products` + (activeCat !== 'all' ? ` in ${(CATEGORIES[activeCat] || {}).label || activeCat}` : '');
    }
    if (shown.length === 0) {
      grid.innerHTML = '<div class="empty-state">No matches. Try a different category or search term.</div>';
      if (moreBtn) moreBtn.style.display = 'none';
      return;
    }
    grid.innerHTML = shown.map(p => {
      const brandData = (typeof BRANDS !== 'undefined' && BRANDS[p.brand]) || {};
      const logoBadge = brandData.logo
        ? `<div class="product-logo-badge"><img src="${brandData.logo}" alt="${escHtml(p.brand)}" loading="lazy"/></div>`
        : '';
      return `
      <article class="product-card">
        <div class="product-visual" style="--tint: ${p.tint || '#3d8c47'};">
          ${logoBadge}
          <div class="product-visual-content">
            <div class="product-visual-cat">${escHtml(p.cat_label)}</div>
            <div class="product-visual-brand">${escHtml(p.brand)}</div>
          </div>
        </div>
        <div class="product-body">
          <div class="product-name">${escHtml(p.name)}</div>
          <div class="product-sizes">${(p.sizes || []).slice(0, 6).map(s => `<span class="product-size">${escHtml(s)}</span>`).join('') || '<span class="product-size" style="opacity:.6">Multiple sizes</span>'}</div>
        </div>
      </article>
    `;}).join('');
    if (moreBtn) moreBtn.style.display = filtered.length > displayLimit ? 'inline-flex' : 'none';
  }

  document.querySelectorAll('.filter-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      activeCat = b.dataset.cat;
      displayLimit = 24;
      render();
    });
  });
  if (search) search.addEventListener('input', e => { searchQ = e.target.value; displayLimit = 24; render(); });
  if (moreBtn) moreBtn.addEventListener('click', () => { displayLimit += 24; render(); });
  render();
})();

// ===== Contact form (homepage only) =====
window.handleContact = function (e) {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const get = (id) => (document.getElementById(id) || { value: '' }).value.trim();
  const name = get('cf-name'), email = get('cf-email'), phone = get('cf-phone'),
        company = get('cf-company'), interest = get('cf-interest'), msg = get('cf-msg');
  const subject = encodeURIComponent('Website enquiry: ' + interest + ' — ' + name);
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Company: ' + company + '\n' +
    'Email: ' + email + '\n' +
    'Phone: ' + phone + '\n' +
    'Interest: ' + interest + '\n\n' +
    'Message:\n' + msg
  );
  // Send to both info@ and the founder's email; also CC sales@
  window.location.href = `mailto:info@meklaos.com,mekakhom.s@meklaos.com?cc=sales@meklaos.com&subject=${subject}&body=${body}`;
  if (status) { status.textContent = 'Opening your email app... if nothing happens, please email info@meklaos.com and mekakhom.s@meklaos.com directly.'; status.classList.add('show', 'ok'); }
  return false;
};

// ===== Active nav highlight on scroll =====
(function () {
  const sections = document.querySelectorAll('section[id], header[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !links.length) return;
  window.addEventListener('scroll', () => {
    let curr = '';
    sections.forEach(s => {
      const top = s.offsetTop - 140;
      if (window.scrollY >= top) curr = s.id;
    });
    links.forEach(a => {
      const isMatch = a.getAttribute('href') === '#' + curr;
      a.classList.toggle('active', isMatch);
    });
  }, { passive: true });
})();

// ===== Page transitions (smooth fade between pages) =====
document.addEventListener('click', e => {
  const a = e.target.closest('a[data-transition]');
  if (!a) return;
  if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;
  e.preventDefault();
  document.body.classList.remove('page-loaded');
  document.body.classList.add('page-leaving');
  setTimeout(() => { window.location.href = href; }, 320);
});

// ===== Scroll-reveal text masks =====
(function () {
  const masks = $$('.reveal-mask');
  if (!masks.length) return;
  // Wrap inner content if not already wrapped
  masks.forEach(el => {
    if (!el.querySelector(':scope > .mask-inner')) {
      el.innerHTML = `<span class="mask-inner">${el.innerHTML}</span>`;
    }
  });
  // Reveal on scroll
  const maskIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); maskIO.unobserve(e.target); } });
  }, { threshold: 0.25, rootMargin: '0px 0px -5% 0px' });
  masks.forEach(el => maskIO.observe(el));
  // Reveal anything already in viewport on load (no scroll needed)
  requestAnimationFrame(() => {
    masks.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
    });
  });
})();

// ===== Parallax + scroll-y CSS variable =====
(function () {
  let ticking = false;
  function updateScroll() {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });
  updateScroll();
})();

// (Custom cursor removed — using native browser cursor)
