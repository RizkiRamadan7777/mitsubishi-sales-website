// Promo Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Product Filter
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        document.querySelectorAll('.product-item').forEach(item => {
            if(category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Simulasi Kredit
function hitungCicilan() {
    const harga = parseFloat(document.getElementById('harga').value);
    const dp = parseFloat(document.getElementById('dp').value);
    const tenor = parseInt(document.getElementById('tenor').value);
    const bungaPerTahun = 0.08; // 8% per tahun
    
    const pokok = harga - dp;
    const bungaTotal = pokok * bungaPerTahun * (tenor / 12);
    const cicilanPerBulan = (pokok + bungaTotal) / tenor;
    const totalPembayaran = dp + (cicilanPerBulan * tenor);
    
    document.getElementById('cicilan').textContent = 
        `Rp ${cicilanPerBulan.toLocaleString('id-ID')}`;
    document.getElementById('total').textContent = 
        `Rp ${totalPembayaran.toLocaleString('id-ID')}`;
}

// WhatsApp Tracking
document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.dataset.product;
        const message = `Halo Lisa, saya tertarik dengan mobil ${productName}. Bisa info lebih detail?`;
        const whatsappUrl = `https://wa.me/6282173541831?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
