// File: js/script.js

// Toggle mobile nav
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggleBtn?.addEventListener('click', ()=> nav.classList.toggle('active'));

// Simulasi Cicilan
const form = document.getElementById('form-simulasi');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const harga = parseFloat(document.getElementById('harga').value);
  const dpPct = parseFloat(document.getElementById('dp').value) / 100;
  const bunga = parseFloat(document.getElementById('bunga').value) / 100;
  const tenor = parseInt(document.getElementById('tenor').value);
  const dpAmt = harga * dpPct;
  const pokok = harga - dpAmt;
  // bunga sederhana
  const totalBayar = pokok * (1 + bunga * tenor);
  const cicilan = totalBayar / (tenor * 12);
  document.getElementById('hasil').innerText =
    `Estimasi cicilan: Rp ${cicilan.toLocaleString('id-ID')} / bulan`;
});
