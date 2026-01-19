const whatsappNumber = "6281995223741";

// MODAL CONTROLLER
function toggleModal(id, status) {
    const modal = document.getElementById(id);
    modal.style.display = status ? 'flex' : 'none';
    document.body.style.overflow = status ? 'hidden' : 'auto';
}
function closeModal(id) { toggleModal(id, false); }

// OPEN ORDER MODAL
function openOrderModal() {
    toggleModal('orderModal', true);
}

// SUBMIT FORM ORDER TO WHATSAPP (Sesuai rincian lengkap)
document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('o-name').value;
    const svc = document.getElementById('o-svc').value;
    const pax = document.getElementById('o-pax').value;
    const date = document.getElementById('o-date').value;
    const note = document.getElementById('o-note').value || "-";

    const msg = `*HALO HARDLYTASTEWORKS - ORDER BARU*%0A` +
                `--------------------------------------%0A` +
                `*Nama:* ${name}%0A` +
                `*Layanan:* ${svc}%0A` +
                `*Tanggal Acara:* ${date}%0A` +
                `*Jumlah:* ${pax} Orang%0A` +
                `*Catatan:* ${note}%0A` +
                `--------------------------------------%0A` +
                `Mohon segera diproses Admin. Terima kasih!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    closeModal('orderModal');
    this.reset();
};

// Tutup modal jika klik di luar box putih
window.onclick = function(event) {
    if (event.target.className === 'modal-overlay') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}