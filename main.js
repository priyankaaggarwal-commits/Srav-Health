// ═══════════════════════════════
// SRAV HEALTH — main.js
// ═══════════════════════════════

// Mobile nav toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Nav scroll behavior — throttled to avoid forced reflow on every frame
let lastScroll = 0;
let scrollTicking = false;
window.addEventListener('scroll', () => {
  lastScroll = window.scrollY;
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      const nav = document.querySelector('.nav');
      if (nav) {
        nav.style.boxShadow = lastScroll > 20 ? '0 4px 32px rgba(0,0,0,0.2)' : 'none';
      }
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

// Add in-view CSS once — before observer runs
const style = document.createElement('style');
style.textContent = `.in-view { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Scroll-triggered fade-in — batch style writes to avoid forced reflow
const fadeEls = document.querySelectorAll('.problem-card, .step, .who-col, .proof-stat, .inc-card, .q-card, .pillar, .pt-item');

fadeEls.forEach(el => {
  el.style.cssText += 'opacity:0;transform:translateY(16px);transition:opacity 0.5s ease,transform 0.5s ease;';
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeEls.forEach(el => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
  fadeEls.forEach(el => observer.observe(el));

  // Dropdown — click-based toggle (replaces fragile CSS hover)
  const trigger = document.querySelector('.nav-dropdown-trigger');
  const menu = document.querySelector('.nav-dropdown-menu');

  if (trigger && menu) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
    });

    // Close when clicking anywhere else on the page
    document.addEventListener('click', () => {
      menu.style.display = 'none';
    });

    // Prevent menu clicks from closing it
    menu.addEventListener('click', (e) => e.stopPropagation());
  }
});

// FAQ toggle (how-we-work page)
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/*
  FAQ ACCORDION TOGGLE
  Add this to main.js
*/

document.querySelectorAll('.faq-q').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';

    // Close all others
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });

    // Toggle current
    button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  });
});
