const whatsappNumber = "6281995223741";

// Fungsi membuka modal pemesanan
function toggleModal(status) {
    const modal = document.getElementById('orderModal');
    if (status) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Menangani klik di luar modal untuk menutupnya
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) toggleModal(false);
}

// Logika Form ke WhatsApp
document.getElementById('cateringForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const service = document.getElementById('c-service').value;
    const date = document.getElementById('c-date').value;
    const pax = document.getElementById('c-pax').value;
    const note = document.getElementById('c-note').value || "-";

    const text = `*ORDER ONLINE - HARDLYTASTEWORKS*%0A` +
                 `--------------------------------------%0A` +
                 `*Nama:* ${name}%0A` +
                 `*Layanan:* ${service}%0A` +
                 `*Tanggal:* ${date}%0A` +
                 `*Jumlah:* ${pax} Pax%0A` +
                 `*Catatan:* ${note}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    toggleModal(false);
});

// FORM HANDLING (Submit to WhatsApp)
document.getElementById('cateringForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Data Extraction
    const name = document.getElementById('c-name').value;
    const service = document.getElementById('c-service').value;
    const date = document.getElementById('c-date').value;
    const pax = document.getElementById('c-pax').value;
    const note = document.getElementById('c-note').value || "-";

    // Format Message
    const text = `*HALO HARDLYTASTEWORKS - PESANAN ONLINE*%0A` +
                 `--------------------------------------%0A` +
                 `*Nama Customer:* ${name}%0A` +
                 `*Jenis Layanan:* ${service}%0A` +
                 `*Tanggal Acara:* ${date}%0A` +
                 `*Jumlah Pax:* ${pax} Pax%0A` +
                 `*Catatan Khusus:* ${note}%0A` +
                 `--------------------------------------%0A` +
                 `Mohon segera diproses. Terima kasih!`;

    const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Redirect
    window.open(waLink, '_blank');
    
    // Reset and Close
    this.reset();
    toggleModal(false);
});