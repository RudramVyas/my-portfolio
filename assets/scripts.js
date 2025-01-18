/*********************************
  scripts.js
  - Interactive / Animations
**********************************/

// 1. HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('menu-list');

hamburger.addEventListener('click', () => {
  menuList.classList.toggle('show-menu');
  hamburger.classList.toggle('toggle');

  // Accessibility: Toggle aria-expanded
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!isExpanded));
});

// 2. SCROLL REVEAL (Intersection Observer)
const fadeEls = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, options);

fadeEls.forEach(el => observer.observe(el));

// 3. YEAR IN FOOTER
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
