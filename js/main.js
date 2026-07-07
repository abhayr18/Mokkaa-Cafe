/* ===== SCROLL ANIMATIONS ===== */

/* Scroll reveal */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== NAVBAR SCROLL ===== */
const navbar = document.querySelector('.navbar');

const handleScroll = () => {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* ===== ACTIVE NAV LINK ===== */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ===== MOBILE MENU ===== */
const navToggle = document.querySelector('.navbar-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-menu-close');

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});

mobileClose?.addEventListener('click', () => {
  navToggle?.classList.remove('open');
  mobileMenu?.classList.remove('open');
  document.body.style.overflow = '';
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== COUNTER ANIMATION ===== */
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target || el.textContent.replace(/\D/g, ''));
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    current = Math.min(Math.round(increment * step), target);
    // Format number: add K suffix for thousands if data-suffix includes K
    let displayNum = current;
    if (suffix.includes('K')) {
      displayNum = current;
    }
    el.textContent = displayNum + suffix;
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

/* ===== PARALLAX EFFECT ===== */
const parallaxEls = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
  parallaxEls.forEach(el => {
    const speed = parseFloat(el.dataset.parallax || 0.3);
    const rect = el.getBoundingClientRect();
    const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
}, { passive: true });
