// Simulasi Cicilan
const form = document.getElementById('loan-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const price = parseFloat(document.getElementById('price').value);
    const dpPct = parseFloat(document.getElementById('dp').value);
    const ratePct = parseFloat(document.getElementById('rate').value);
    const term = parseInt(document.getElementById('term').value);

    const dpAmount = price * (dpPct / 100);
    const principal = price - dpAmount;
    const monthlyRate = ratePct / 100 / 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

    document.getElementById('result').innerText =
      `Cicilan per bulan: Rp ${payment.toLocaleString('id-ID', { maximumFractionDigits: 0 })}`;
  });
}

// Filter Produk
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    productItems.forEach(item => {
      if (cat === 'all' || item.classList.contains(cat)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
