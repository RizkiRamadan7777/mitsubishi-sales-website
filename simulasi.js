const form = document.getElementById('simulasiForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const harga = parseFloat(document.getElementById('harga').value)*1e6;
  const dpPct = parseFloat(document.getElementById('uangmuka').value)/100;
  const tenor = parseInt(document.getElementById('tenor').value,10);
  const pokok = harga*(1-dpPct);
  const bungaTahunan = 0.05;
  const i = bungaTahunan/12;
  const cicilan = (pokok*i * Math.pow(1+i,tenor)) / (Math.pow(1+i,tenor)-1);
  document.getElementById('result').innerHTML = 
    `<p>Cicilan per bulan: Rp ${Math.round(cicilan).toLocaleString()}</p>`;
});