/* ===========================================================================
   STISIP Bina Generasi Polewali — main.js
   Vanilla JS only (per PRD): nav toggle, dropdown menu, hero carousel,
   scroll-reveal, tab switcher (kurikulum), active nav highlighting.
   =========================================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     1. Mobile menu toggle
  --------------------------------------------------------------------- */
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ---------------------------------------------------------------------
     2. Dropdown menus (Program Studi / Layanan) — click to toggle on touch,
        hover on pointer devices, closes on outside click / Escape.
  --------------------------------------------------------------------- */
  var dropdownParents = document.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(function (parent) {
    var toggle = parent.querySelector('.nav-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = parent.classList.contains('is-open');
      dropdownParents.forEach(function (p) { p.classList.remove('is-open'); });
      parent.classList.toggle('is-open', !isOpen);
      toggle.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });

    parent.addEventListener('mouseenter', function () {
      if (window.innerWidth > 760) parent.classList.add('is-open');
    });
    parent.addEventListener('mouseleave', function () {
      if (window.innerWidth > 760) parent.classList.remove('is-open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdownParents.forEach(function (p) { p.classList.remove('is-open'); });
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdownParents.forEach(function (p) { p.classList.remove('is-open'); });
      if (nav) { nav.classList.remove('is-open'); }
      if (menuToggle) { menuToggle.classList.remove('is-open'); document.body.style.overflow = ''; }
    }
  });

  /* ---------------------------------------------------------------------
     3. Active nav-link highlighting based on current file name
  --------------------------------------------------------------------- */
  var currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav a[href]').forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    if (href === currentPage) a.classList.add('is-active');
  });

  /* ---------------------------------------------------------------------
     4. Hero banner slider (auto-rotate + manual dots), Beranda only
  --------------------------------------------------------------------- */
  var slider = document.querySelector('[data-slider]');
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.slide'));
    var dotsWrap = slider.querySelector('[data-slider-dots]');
    var current = 0;
    var timer;

    slides.forEach(function (s, i) {
      if (dotsWrap) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Tampilkan slide ' + (i + 1));
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', function () { goTo(i); resetTimer(); });
        dotsWrap.appendChild(dot);
      }
    });
    var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.children) : [];

    function goTo(i) {
      slides[current].classList.remove('is-active');
      if (dots[current]) dots[current].classList.remove('is-active');
      current = i;
      slides[current].classList.add('is-active');
      if (dots[current]) dots[current].classList.add('is-active');
    }
    function next() { goTo((current + 1) % slides.length); }
    function resetTimer() {
      if (prefersReducedMotion) return;
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }
    if (slides.length > 1) resetTimer();
  }

  /* ---------------------------------------------------------------------
     5. Scroll reveal (IntersectionObserver)
  --------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------------------------
     6. Tab switcher (kurikulum semester tabs on Program Studi pages)
  --------------------------------------------------------------------- */
  var tabGroups = document.querySelectorAll('[data-tabs]');
  tabGroups.forEach(function (group) {
    var buttons = group.querySelectorAll('.tab-btn');
    var panelsWrap = document.querySelector(group.getAttribute('data-tabs-target'));
    if (!panelsWrap) return;
    var panels = panelsWrap.querySelectorAll('.tab-panel');
    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        panels.forEach(function (p) { p.classList.remove('is-active'); });
        btn.classList.add('is-active');
        if (panels[i]) panels[i].classList.add('is-active');
      });
    });
  });

  /* ---------------------------------------------------------------------
     7. Close mobile nav automatically when a link is clicked
  --------------------------------------------------------------------- */
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        if (menuToggle) menuToggle.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------------------------------------------------------------------
     8. Footer year auto-fill
  --------------------------------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();
