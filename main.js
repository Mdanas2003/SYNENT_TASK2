// ─── Luminary — main.js ───────────────────────────

// ── Mobile nav toggle ──
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.innerHTML = isOpen ? '&#215;' : '&#9776;';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      hamburger.innerHTML = '&#9776;';
    });
  });
}

// ── Scroll-triggered fade-in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature-card, .hiw__step, .week-chart, .journal-card')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

// ── Nav shadow on scroll ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 20);
}, { passive: true });
