document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // 2. Smooth scroll for internal links
  document.querySelectorAll('a.nav__link[href^="#"], a[href^="#top"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // close mobile menu after click
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
        }
      }
    });
  });

  // 3. Inventory filter logic (for products.html)
  const cards = Array.from(document.querySelectorAll('.card'));
  const searchInput = document.getElementById('search');
  const categorySelect = document.getElementById('categoryFilter');
  const priceSelect = document.getElementById('priceFilter');

  function filterInventory() {
    const txt = searchInput ? searchInput.value.toLowerCase() : '';
    const cat = categorySelect ? categorySelect.value : 'all';
    const pr = priceSelect ? priceSelect.value : 'all';

    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const price = parseFloat(card.dataset.price);
      const category = card.dataset.category || 'all';
      let show = true;

      if (txt && !name.includes(txt)) show = false;
      if (cat !== 'all' && category !== cat) show = false;
      if (pr === 'under300' && price >= 300) show = false;
      if (pr === '300to500' && (price < 300 || price > 500)) show = false;
      if (pr === 'above500' && price <= 500) show = false;

      card.style.display = show ? 'block' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterInventory);
  }
  if (categorySelect) {
    categorySelect.addEventListener('change', filterInventory);
  }
  if (priceSelect) {
    priceSelect.addEventListener('change', filterInventory);
  }

  // 4. Fade-in on scroll using IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature, .testimonial__item, .about__img, .form').forEach(el => {
    observer.observe(el);
  });
});
