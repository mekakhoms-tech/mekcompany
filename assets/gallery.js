// ===== Lightbox for Gallery =====
(function () {
  const items = Array.from(document.querySelectorAll('.g-item'));
  if (!items.length) return;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lbImage');
  const counter = document.getElementById('lbCounter');
  const btnClose = document.querySelector('.lb-close');
  const btnPrev = document.querySelector('.lb-prev');
  const btnNext = document.querySelector('.lb-next');
  if (!lb) return;

  let idx = 0;

  function show(i) {
    idx = (i + items.length) % items.length;
    const el = items[idx];
    img.src = el.dataset.full || el.href;
    img.alt = el.dataset.alt || '';
    counter.textContent = `${idx + 1} / ${items.length}`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach((el, i) => {
    el.addEventListener('click', e => { e.preventDefault(); show(i); });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', () => show(idx - 1));
  btnNext.addEventListener('click', () => show(idx + 1));

  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
})();
