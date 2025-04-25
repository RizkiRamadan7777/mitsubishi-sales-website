// Smooth scroll nav links
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
if (localStorage.theme === 'dark') document.body.classList.add('dark');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
});

// Inventory filter (name, category, price)
const cards = Array.from(document.querySelectorAll('.card'));
function filterInventory() {
  const txt = (document.getElementById('search')||{}).value?.toLowerCase() || '';
  const cat = (document.getElementById('categoryFilter')||{}).value || 'all';
  const pr = (document.getElementById('priceFilter')||{}).value || 'all';
  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const price = parseFloat(card.dataset.price);
    const category = card.dataset.category || 'all';
    let show = true;
    if (txt && !name.includes(txt)) show = false;
    if (cat!=='all' && category!==cat) show = false;
    if (pr==='under300' && price>=300) show = false;
    if (pr==='300to500' && (price<300||price>500)) show = false;
    if (pr==='above500' && price<=500) show = false;
    card.style.display = show ? 'block' : 'none';
  });
}
['input','change'].forEach(ev => {
  document.querySelectorAll('#search,#categoryFilter,#priceFilter')
    .forEach(el => el.addEventListener(ev, filterInventory));
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('fade-in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .1 });
document.querySelectorAll('.card, .about__image, .form')
  .forEach(el => observer.observe(el));
