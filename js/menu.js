/* ===== MENU PAGE - CATEGORY TABS ===== */

const categoryBtns = document.querySelectorAll('.menu-category-btn');
const categorySections = document.querySelectorAll('.menu-category-section');

// Highlight active category on click
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.category;

    // Update active state
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Scroll to section
    const targetSection = document.querySelector(`#category-${target}`);
    if (targetSection) {
      const offset = 110;
      const top = targetSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Highlight category in sidebar based on scroll position
const updateActiveCategory = () => {
  let current = '';

  categorySections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 150) {
      current = section.id.replace('category-', '');
    }
  });

  categoryBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === current);
  });
};

window.addEventListener('scroll', updateActiveCategory, { passive: true });
updateActiveCategory();
