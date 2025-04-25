document.getElementById('simulasiForm').addEventListener('submit', e => {
  e.preventDefault();
  const harga   = parseFloat(document.getElementById('harga').value) * 1e6;
  const dpPct   = parseFloat(document.getElementById('uangmuka').value) / 100;
  const tenor   = parseInt(document.getElementById('tenor').value, 10);
  const pokok   = harga * (1 - dpPct);
  const bungaTh = 0.05;
  const iMonth  = bungaTh / 12;
  const cicilan = (pokok * iMonth * Math.pow(1 + iMonth, tenor)) /
                   (Math.pow(1 + iMonth, tenor) - 1);
  document.getElementById('result').innerHTML =
    `<p>Cicilan per bulan: Rp ${Math.round(cicilan).toLocaleString()}</p>`;
});
