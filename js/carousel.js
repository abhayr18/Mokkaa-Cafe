/* ===== TESTIMONIAL SLIDER ===== */
const testimonials = [
  {
    text: "Mokkaa Coffee is hands down the best café in Miraj! The ambiance is so cozy and warm — perfect for catching up with friends or just unwinding after college. The coffee is amazing and the staff is super friendly.",
    name: "Pratik Desai",
    role: "Engineering Student, Miraj",
    stars: 5,
    image: "https://i.pravatar.cc/52?img=11"
  },
  {
    text: "Such a beautiful place inside the Bhokare campus! I love coming here between lectures. The cold brew is my go-to. The vibe is chill, the lighting is perfect, and the music is on point.",
    name: "Sneha Kulkarni",
    role: "College Student, Sangli",
    stars: 5,
    image: "https://i.pravatar.cc/52?img=32"
  },
  {
    text: "Really impressed by the quality of coffee here. Mokkaa Coffee offers a premium experience that you wouldn't expect in Miraj — elegant interiors, great drinks, and genuinely warm hospitality.",
    name: "Rahul Jadhav",
    role: "Local Professional",
    stars: 5,
    image: "https://i.pravatar.cc/52?img=15"
  },
  {
    text: "The perfect spot in Miraj to relax and recharge. I visited on a weekend evening and the whole experience — from the décor to the coffee — was outstanding. Easily a 5-star place.",
    name: "Aishwarya Patil",
    role: "Frequent Visitor",
    stars: 5,
    image: "https://i.pravatar.cc/52?img=44"
  }
];

let currentTestimonial = 0;

const renderTestimonial = (index, direction = 'next') => {
  const card = document.querySelector('.testimonial-card');
  if (!card) return;

  card.style.opacity = '0';
  card.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';

  setTimeout(() => {
    const t = testimonials[index];
    const stars = Array(t.stars).fill(`
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>`).join('');

    card.innerHTML = `
      <div>
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-text">${t.text}</p>
      </div>
      <div>
        <div class="testimonial-divider"></div>
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
          <div class="testimonial-author">
            <div class="testimonial-avatar">
              <img src="${t.image}" alt="${t.name}" loading="lazy" onerror="this.src='assets/images/testimonial_coffee.png'">
            </div>
            <div class="testimonial-author-info">
              <h4>${t.name}</h4>
              <p>${t.role}</p>
            </div>
          </div>
          <div class="testimonial-arrows">
            <button class="arrow-btn" id="prevTestimonial" aria-label="Previous review">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button class="arrow-btn" id="nextTestimonial" aria-label="Next review">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>`;

    card.style.opacity = '1';
    card.style.transform = 'translateX(0)';

    card.querySelector('#prevTestimonial')?.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(currentTestimonial, 'prev');
    });

    card.querySelector('#nextTestimonial')?.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonial(currentTestimonial, 'next');
    });
  }, 220);
};

// Card transition styles
const testimonialCard = document.querySelector('.testimonial-card');
if (testimonialCard) {
  testimonialCard.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
  renderTestimonial(0);

  // Auto-advance every 6s
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial, 'next');
  }, 6000);
}
