document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));

  // Smooth scroll
  document.querySelectorAll('a.nav-link[href^="#"], a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      if (nav.classList.contains('open')) nav.classList.remove('open');
    });
  });

  // Fade-in
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.feature, .testimonial-item, .about-img, .card, .form').forEach(el => {
    io.observe(el);
  });

  // Inventory filter (if on products.html)
  const cards = Array.from(document.querySelectorAll('.card'));
  const search = document.getElementById('search');
  const cat  = document.getElementById('categoryFilter');
  const price= document.getElementById('priceFilter');
  function filterInv(){
    const txt = search ? search.value.toLowerCase() : '';
    const c   = cat    ? cat.value : 'all';
    const p   = price  ? price.value : 'all';
    cards.forEach(card => {
      let v=true;
      const n = card.dataset.name.toLowerCase();
      const pr= parseFloat(card.dataset.price);
      const ct= card.dataset.category;
      if(txt && !n.includes(txt)) v=false;
      if(c!=='all' && ct!==c)    v=false;
      if(p==='under300' && pr>=300) v=false;
      if(p==='300to500' && (pr<300||pr>500)) v=false;
      if(p==='above500' && pr<=500) v=false;
      card.style.display = v?'block':'none';
    });
  }
  [search,cat,price].forEach(el=>{
    if(el) el.addEventListener('input',filterInv);
    if(el) el.addEventListener('change',filterInv);
  });
});
