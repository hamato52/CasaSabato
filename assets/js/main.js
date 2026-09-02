/* ============================================================
   Casa Sabato — interactions + AR/EN switch
   ============================================================ */
(function () {
  'use strict';

  /* ── English dictionary (Arabic lives in the HTML) ───── */
  var EN = {
    'skip': 'Skip to content',

    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.deliverables': 'Deliverables',
    'nav.about': 'About',
    'nav.cta': 'Start a project',

    'hero.eyebrow': 'Brand consultancy & visual identity · Fashion brands',
    'hero.lead': 'We turn a clothing brand from an idea into a clear, complete visual system — from positioning and naming to identity and brand book — so the brand can be applied to every product and every platform without guesswork.',
    'hero.cta1': 'Book a consultation',
    'hero.cta2': 'See services',
    'hero.s1': 'A clear vision',
    'hero.s2': 'A coherent identity',
    'hero.s3': 'A system you can apply',

    'services.eyebrow': 'Services',
    'services.title': 'What we build with you',
    'services.sub': 'Six core services, offered on their own or as one path from vision to launch.',

    'svc1.t': 'Brand consulting',
    'svc1.d': 'We audit where the brand stands today, define audience and positioning, and map a clear route to the next step.',
    'svc1.a': 'Audit & positioning', 'svc1.b': 'Competitor analysis', 'svc1.c': 'Roadmap',

    'svc2.t': 'Brand strategy',
    'svc2.d': 'The core, the story, the tone and the attitude — the written foundation behind every visual decision that follows.',
    'svc2.a': 'Story & message', 'svc2.b': 'Tone of voice', 'svc2.c': 'Naming',

    'svc3.t': 'Visual identity',
    'svc3.d': 'Logo, colour system, typography and graphic elements — designed specifically for apparel and retail.',
    'svc3.a': 'Logo & system', 'svc3.b': 'Colour & type', 'svc3.c': 'Graphic elements',

    'svc4.t': 'Art direction',
    'svc4.d': 'Photography direction, styling and collection mood, plus shoot supervision to keep one consistent image.',
    'svc4.a': 'Mood board', 'svc4.b': 'Photo direction', 'svc4.c': 'Lookbook',

    'svc5.t': 'Product applications',
    'svc5.d': 'Labels, hang tags, packaging, bags and thank-you cards — everything the customer holds speaks the same language.',
    'svc5.a': 'Tags & labels', 'svc5.b': 'Packaging', 'svc5.c': 'Unboxing',

    'svc6.t': 'Brand book',
    'svc6.d': 'A full usage guide handed to your team or any designer, so the brand stays coherent long after the project ends.',
    'svc6.a': 'Brand book', 'svc6.b': 'Usage rules', 'svc6.c': 'Ready files',

    'process.eyebrow': 'Process',
    'process.title': 'Four phases. From vision to system.',
    'process.sub': 'A clear path with defined deliverables at the end of every phase — no surprises.',
    'p1.t': 'Discover — Vision',
    'p1.d': 'A working session to understand the idea, the audience, the market and the ambition, and to gather everything that exists today.',
    'p2.t': 'Define — Strategy',
    'p2.d': 'We set positioning, story, tone and visual direction in an approved strategy document before any design begins.',
    'p3.t': 'Design — Identity',
    'p3.d': 'We design the logo, colour system, typography and elements, then test them on real apparel applications.',
    'p4.t': 'Deliver — System',
    'p4.d': 'We hand over the brand book and every production file, with a handover session for your team to ensure correct use.',

    'deliv.eyebrow': 'Deliverables',
    'deliv.title': 'What you receive',
    'deliv.sub': 'Organised, print- and publish-ready files, with a guide explaining how and when each is used.',
    'deliv.cta': 'Request a quote',
    'd1': 'Strategy & positioning document',
    'd2': 'Logo in all formats and sizes',
    'd3': 'Colour and typography system',
    'd4': 'Graphic elements and patterns',
    'd5': 'Hang tag, label and packaging design',
    'd6': 'Social media templates',
    'd7': 'Photography direction & lookbook',
    'd8': 'Complete brand book (PDF)',

    'about.eyebrow': 'About',
    'about.title': 'A studio built only for clothing brands',
    'about.p1': 'Casa Sabato is a consultancy and visual identity studio working with emerging and established clothing brands. We believe a brand is not a pretty logo — it is a full system of decisions: who buys from you, why, and how that looks on the shirt, the tag, the feed and the store.',
    'about.p2': 'We take a limited number of projects at a time and work directly with the brand owner, so the project ends in something you can actually execute — not just a good-looking deck.',
    'about.b1': 'Specialised in fashion & retail',
    'about.b2': 'Clear phases and deliverables',
    'about.b3': 'Ready to apply on handover',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Have a brand in mind? Start here.',
    'contact.sub': 'Send a short brief about the brand and we will reply with a clear first step.',
    'f.name': 'Name',
    'f.email': 'Email',
    'f.brand': 'Brand name',
    'f.service': 'Service needed',
    'f.o1': 'Consultation',
    'f.o2': 'Full visual identity',
    'f.o3': 'Rebrand',
    'f.o4': 'Art direction / collection',
    'f.o5': 'Other',
    'f.msg': 'About the project',
    'f.send': 'Send request',
    'f.note': 'This opens your email app with the message ready to send.',

    'footer.tag': 'From Vision to System'
  };

  var DOC = document.documentElement;
  var STORE = 'cs-lang';

  /* Snapshot the Arabic copy that ships in the HTML. */
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var AR = {};
  nodes.forEach(function (el) { AR[el.getAttribute('data-i18n')] = el.textContent.trim(); });

  var titles = {
    ar: 'Casa Sabato — من الرؤية إلى النظام',
    en: 'Casa Sabato — From Vision to System'
  };

  function setLang(lang) {
    var dict = lang === 'en' ? EN : AR;
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    DOC.lang = lang;
    DOC.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.title = titles[lang];
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'ع' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
    }
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  var saved = 'ar';
  try { saved = localStorage.getItem(STORE) || 'ar'; } catch (e) {}
  if (saved === 'en') setLang('en'); else setLang('ar');

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLang(DOC.lang === 'en' ? 'ar' : 'en');
    });
  }

  /* ── Sticky nav border ───────────────────────────────── */
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('is-stuck', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu ─────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  function closeMenu() { menu.hidden = true; burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    if (open) { closeMenu(); } else { menu.hidden = false; burger.setAttribute('aria-expanded', 'true'); }
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 760) closeMenu(); });

  /* ── Reveal on scroll ────────────────────────────────── */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    Array.prototype.forEach.call(items, function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  }

  /* ── Contact form → mailto ───────────────────────────── */
  var MAILTO = 'hello@casasabato.com';
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var required = ['name', 'email', 'msg'];
    var bad = false;
    required.forEach(function (id) {
      var f = document.getElementById(id);
      var ok = f.value.trim() !== '' && (id !== 'email' || /^\S+@\S+\.\S+$/.test(f.value.trim()));
      f.classList.toggle('is-invalid', !ok);
      if (!ok) bad = true;
    });

    var en = DOC.lang === 'en';
    if (bad) {
      note.textContent = en ? 'Please fill in the required fields.' : 'الرجاء تعبئة الحقول المطلوبة.';
      return;
    }

    var v = function (id) { return document.getElementById(id).value.trim(); };
    var subject = 'Casa Sabato — ' + v('service') + (v('brand') ? ' — ' + v('brand') : '');
    var body = [
      (en ? 'Name: ' : 'الاسم: ') + v('name'),
      (en ? 'Email: ' : 'البريد: ') + v('email'),
      (en ? 'Brand: ' : 'البراند: ') + (v('brand') || '—'),
      (en ? 'Service: ' : 'الخدمة: ') + v('service'),
      '',
      (en ? 'Brief:' : 'نبذة عن المشروع:'),
      v('msg')
    ].join('\n');

    window.location.href = 'mailto:' + MAILTO +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    note.textContent = en
      ? 'Opening your email app…'
      : 'يتم الآن فتح برنامج البريد لديك…';
  });

  /* ── Year ────────────────────────────────────────────── */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
