// Simulasi Cicilan
document.getElementById('simulasi-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const P = parseFloat(document.getElementById('price').value);
  const dpPct = parseFloat(document.getElementById('downpayment').value) / 100;
  const n = parseInt(document.getElementById('tenor').value, 10);
  const rAnn = parseFloat(document.getElementById('interest').value) / 100;
  const loan = P * (1 - dpPct);
  const r = rAnn / 12;
  const monthly = (loan * r) / (1 - Math.pow(1 + r, -n));
  document.getElementById('result').innerHTML =
    `<h3>Hasil Simulasi</h3>
     <p>Pokok Pinjaman: Rp ${loan.toLocaleString()}</p>
     <p>Cicilan/bulan: Rp ${monthly.toLocaleString(undefined, {maximumFractionDigits:2})}</p>`;
});
