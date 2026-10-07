(function () {
  'use strict';
  var doc = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- product art (inline SVG) ---------- */
  function tin(name, sub, tone) {
    return '<svg viewBox="0 0 240 210" role="img" aria-label="' + name + ' tin">' +
      '<ellipse cx="120" cy="188" rx="92" ry="14" fill="#1d2418" opacity=".18"/>' +
      '<path d="M30 56v110c0 10 41 18 90 18s90-8 90-18V56z" fill="url(#gTin)"/>' +
      '<rect x="30" y="86" width="180" height="72" fill="' + tone + '"/>' +
      '<rect x="30" y="86" width="180" height="2" fill="#fff" opacity=".25"/>' +
      '<path d="M30 158c0 10 41 18 90 18s90-8 90-18" fill="' + tone + '"/>' +
      '<ellipse cx="120" cy="56" rx="90" ry="16" fill="#e9ece1"/>' +
      '<ellipse cx="120" cy="56" rx="78" ry="12" fill="#c8cdbd"/>' +
      '<ellipse cx="120" cy="52" rx="70" ry="9" fill="#dfe3d4"/>' +
      '<rect x="104" y="24" width="32" height="14" rx="7" fill="none" stroke="#9aa08f" stroke-width="3"/>' +
      '<path d="M30 56v110c0 10 41 18 90 18" fill="none"/>' +
      '<g transform="translate(120 117)" text-anchor="middle">' +
      '<use href="#olive" x="-9" y="-26" width="18" height="23"/>' +
      '<text y="10" font-family="Fraunces,serif" font-size="15" fill="#F6F1E7" font-weight="500">' + name + '</text>' +
      '<text y="25" font-family="Plus Jakarta Sans,sans-serif" font-size="7.5" letter-spacing="2" fill="#F6F1E7" opacity=".75">' + sub + '</text></g>' +
      '<rect x="30" y="56" width="180" height="130" fill="url(#gGlass)" opacity=".35" style="mix-blend-mode:soft-light"/>' +
      '</svg>';
  }
  function jar(name, sub, fill, lid) {
    var bits = '';
    var pts = [[62,150],[92,170],[122,155],[146,176],[76,196],[110,206],[138,212],[60,222],[96,228],[126,232]];
    pts.forEach(function (p, i) {
      bits += '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="' + (i % 3 ? 9 : 11) + '" ry="' + (i % 3 ? 12 : 14) + '" fill="' + fill + '" opacity="' + (0.7 + (i % 4) * .08) + '" transform="rotate(' + (i * 23 % 60 - 30) + ' ' + p[0] + ' ' + p[1] + ')"/>';
    });
    return '<svg viewBox="0 0 200 270" role="img" aria-label="' + name + ' jar">' +
      '<ellipse cx="100" cy="258" rx="66" ry="9" fill="#1d2418" opacity=".18"/>' +
      '<rect x="46" y="14" width="108" height="34" rx="8" fill="' + lid + '"/>' +
      '<rect x="46" y="14" width="108" height="6" rx="3" fill="#fff" opacity=".2"/>' +
      '<path d="M50 48h100v14c0 6 20 10 20 30v140c0 14-12 24-28 24H58c-16 0-28-10-28-24V92c0-20 20-24 20-30z" fill="#efeadb" opacity=".6"/>' +
      '<path d="M32 118h136v114c0 14-12 24-28 24H60c-16 0-28-10-28-24z" fill="' + fill + '" opacity=".28"/>' + bits +
      '<rect x="44" y="128" width="112" height="96" rx="8" fill="#F6F1E7"/>' +
      '<rect x="44" y="128" width="112" height="6" fill="' + lid + '"/>' +
      '<use href="#olive" x="88" y="140" width="24" height="31"/>' +
      '<text x="100" y="192" text-anchor="middle" font-family="Fraunces,serif" font-size="13" fill="#1D2418" font-weight="500">' + name + '</text>' +
      '<text x="100" y="208" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="6.5" letter-spacing="1.6" fill="#4A5240">' + sub + '</text>' +
      '<path d="M40 70v170c0 8 4 14 8 16" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="5" stroke-linecap="round"/>' +
      '</svg>';
  }

  var products = [
    { cat: 'Olives',  name: 'Gordal Picante', desc: 'The big green olive that started it all, with a gentle chilli warmth.', size: '600g and 2kg tins', url: 'https://perellofoods.com/products/', art: tin('Gordal','PICANTE','#4C5A26'), bg: '#DDE3BE' },
    { cat: 'Olives',  name: 'Manzanilla Picante Tin', desc: 'A celebration of the Mediterranean in one iconic olive.', size: 'Tin', url: 'https://perellofoods.com/product/manzanilla-picante-tin/', art: tin('Manzanilla','PICANTE','#B5321F'), bg: '#EDD8CC' },
    { cat: 'Olives',  name: 'Cocktail Picante Tin', desc: 'Small, spicy and made for the aperitivo hour.', size: 'Tin', url: 'https://perellofoods.com/product/cocktail-picante-tin/', art: tin('Cocktail','PICANTE','#7A2A18'), bg: '#E9D5C2' },
    { cat: 'Pickles', name: 'Cocktail Picante Jar', desc: 'Spicy pickled olives for entertaining and the charcuterie board.', size: 'Jar', url: 'https://perellofoods.com/product/cocktail-picante-jar/', art: jar('Cocktail','PICANTE','#6B7A3A','#B5321F'), bg: '#E3E3C6' },
    { cat: 'Pickles', name: 'Pickled Garlic', desc: 'Charcuterie board essentials. Mellow, crunchy, endlessly moreish.', size: 'Jar', url: 'https://perellofoods.com/product/garlic/', art: jar('Garlic','PICKLED CLOVES','#E9E2C4','#B5321F'), bg: '#EEE6D0' },
    { cat: 'Pulses',  name: 'Lechoso Chickpeas', desc: 'Pearly, tender chickpeas for stews, salads and warm bowls.', size: 'Jar', url: 'https://perellofoods.com/product/lechoso-chickpeas/', art: jar('Chickpeas','LECHOSO','#D9B76A','#3F4A2A'), bg: '#EFE0BC' },
    { cat: 'Pulses',  name: 'Alargada Beans', desc: 'Rich, creamy butter beans, traditional and ready when you are.', size: 'Jar', url: 'https://perellofoods.com/product/alargada/', art: jar('Beans','ALARGADA','#EFE7CF','#3F4A2A'), bg: '#EDE6D2' }
  ];

  var track = $('#railTrack');
  function renderCards() {
    track.innerHTML = products.map(function (p, i) {
      return '<article class="card rv" data-cat="' + p.cat + '" style="--d:' + (i * .07) + 's">' +
        '<div class="card-core"><div class="card-stage" style="--bg:' + p.bg + '"><span class="card-cat">' + p.cat + '</span>' + p.art + '</div>' +
        '<div class="card-info"><h3>' + p.name + '</h3><p>' + p.desc + '</p>' +
        '<div class="card-foot"><span>' + p.size + '</span><a href="' + p.url + '" target="_blank" rel="noopener" aria-label="View ' + p.name + '"><svg viewBox="0 0 24 24"><use href="#arrow"/></svg></a></div></div></div></article>';
    }).join('');
    observe($$('.card', track));
  }
  // skeleton first, then real cards
  track.innerHTML = [1,2,3,4].map(function () { return '<article class="card skel"><div class="card-core"></div></article>'; }).join('');


  /* ---------- reveal on scroll ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
  function observe(list) {
    list.forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }
  observe($$('.rv'));

  /* ---------- load curtain ---------- */
  var done = false;
  function ready() {
    if (done) return; done = true;
    doc.classList.add('loaded'); document.body.classList.add('loaded');
    setTimeout(renderCards, 650);
  }
  // never block the intro on the video: fonts (or a hard cap) are enough
  var fontsOk = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsOk, new Promise(function (r) { setTimeout(r, 1500); })]).then(function () { setTimeout(ready, 500); });
  setTimeout(ready, 2600);

  /* ---------- nav / menu ---------- */
  var burger = $('.burger'), menu = $('#menu');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('lock', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', !open);
  }
  burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // hide the island on scroll down, show on scroll up (rAF, passive)
  var nav = $('.nav'), lastY = 0, tick = false;
  window.addEventListener('scroll', function () {
    if (tick) return; tick = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      if (!document.body.classList.contains('menu-open')) {
        nav.style.transform = (y > lastY && y > 400) ? 'translateY(-140%)' : 'translateY(0)';
      }
      lastY = y; tick = false;
    });
  }, { passive: true });

  /* ---------- hero film ---------- */
  var film = $('.film-frame'), vid = $('#heroVideo');
  if (vid) {
    var visible = true, veiled = false;
    var show = function () { film.classList.add('on'); };
    if (vid.readyState >= 3) show(); else vid.addEventListener('canplay', show, { once: true });
    vid.addEventListener('playing', show);
    var start = function () { var p = vid.play(); if (p && p.catch) p.catch(function () {}); };
    if (reduce) { vid.removeAttribute('loop'); vid.pause(); show(); }
    else {
      start();
      // dissolve through cream at the loop seam so the restart is invisible
      var watch = function () {
        if (vid.duration) {
          var want = (vid.duration - vid.currentTime) < .7 || vid.currentTime < .25;
          if (want !== veiled) { veiled = want; film.classList.toggle('veil', want); }
        }
        if (visible && !document.hidden) requestAnimationFrame(watch);
      };
      requestAnimationFrame(watch);
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible) { start(); requestAnimationFrame(watch); } else vid.pause();
      }, { threshold: .05 }).observe(film);
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) vid.pause(); else if (visible) { start(); requestAnimationFrame(watch); }
      });
    }
  }

  /* ---------- magnetic buttons ---------- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    $$('.btn').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.translate = ((e.clientX - r.left - r.width / 2) * .15) + 'px ' + ((e.clientY - r.top - r.height / 2) * .25) + 'px';
      });
      b.addEventListener('pointerleave', function () { b.style.translate = ''; });
    });
  }

  /* ---------- varieties accordion ---------- */
  var items = $$('.acc-item');
  function openItem(it) { items.forEach(function (x) { x.classList.toggle('is-open', x === it); }); }
  items.forEach(function (it) {
    it.addEventListener('mouseenter', function () { if (window.matchMedia('(hover:hover)').matches && innerWidth > 768) openItem(it); });
    it.addEventListener('click', function () { openItem(it); });
    it.addEventListener('focus', function () { openItem(it); });
  });

  /* ---------- range rail: arrows, drag, filters ---------- */
  var rail = $('#rail');
  function step() { var c = $('.card:not(.out):not(.skel)', rail); return c ? c.offsetWidth + 22 : 320; }
  $('#next').addEventListener('click', function () { rail.scrollBy({ left: step(), behavior: 'smooth' }); });
  $('#prev').addEventListener('click', function () { rail.scrollBy({ left: -step(), behavior: 'smooth' }); });
  rail.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') rail.scrollBy({ left: step(), behavior: 'smooth' });
    if (e.key === 'ArrowLeft') rail.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  var down = false, sx = 0, sl = 0, moved = 0;
  rail.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse') return;
    down = true; moved = 0; sx = e.clientX; sl = rail.scrollLeft;
  });
  window.addEventListener('pointermove', function (e) {
    if (!down) return;
    var dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx));
    if (moved > 5) rail.classList.add('drag');
    rail.scrollLeft = sl - dx;
  });
  window.addEventListener('pointerup', function () { down = false; rail.classList.remove('drag'); });
  rail.addEventListener('click', function (e) { if (moved > 5) { e.preventDefault(); e.stopPropagation(); } }, true);

  $$('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      $$('.chip').forEach(function (c) { c.classList.toggle('is-on', c === chip); });
      var f = chip.dataset.f, n = 0;
      $$('.card', track).forEach(function (c) {
        var show = f === 'all' || c.dataset.cat === f;
        c.classList.toggle('out', !show); if (show) n++;
      });
      $('#railEmpty').hidden = n > 0;
      rail.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });

  /* ---------- trade form ---------- */
  var form = $('#tradeForm');
  var rules = {
    name: function (v) { return v.trim().length < 2 ? 'Please tell us your name.' : ''; },
    biz: function (v) { return v.trim().length < 2 ? 'Which business are you with?' : ''; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'That email does not look right.'; }
  };
  function check(id) {
    var input = form.elements[id], msg = rules[id](input.value);
    var field = input.closest('.field');
    field.classList.toggle('bad', !!msg);
    $('.err[data-for="' + id + '"]', form).textContent = msg;
    input.setAttribute('aria-invalid', !!msg);
    return !msg;
  }
  Object.keys(rules).forEach(function (id) {
    form.elements[id].addEventListener('blur', function () { check(id); });
    form.elements[id].addEventListener('input', function () { if (form.elements[id].closest('.field').classList.contains('bad')) check(id); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = Object.keys(rules).map(check).every(Boolean);
    if (!ok) { var bad = $('.field.bad input', form); if (bad) bad.focus(); return; }
    $('#formOk').hidden = false;
    form.reset();
  });
})();
