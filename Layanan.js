const whatsappNumber = "6281995223741";

// MODAL CONTROLLER
function toggleModal(id, status) {
    const modal = document.getElementById(id);
    modal.style.display = status ? 'flex' : 'none';
    document.body.style.overflow = status ? 'hidden' : 'auto';
}
function closeModal(id) { toggleModal(id, false); }

// OPEN ORDER MODAL
function openOrderModal(serviceName = "Layanan Umum") {
    const select = document.getElementById('o-svc');
    if (serviceName) select.value = serviceName;
    toggleModal('orderModal', true);
}

// LOGIKA INPUT DINAMIS KONSULTASI
function toggleVenueInput() {
    const venueType = document.getElementById('c-venue').value;
    document.getElementById('c-venue-detail').style.display = (venueType === 'Sudah Ada') ? 'block' : 'none';
}

function toggleModeInput() {
    const mode = document.getElementById('c-mode').value;
    const area = document.getElementById('mode-detail-area');
    area.innerHTML = (mode === 'Online') 
        ? `<div class="f-group"><label>Pilih Platform Online</label><select id="c-platform"><option>Zoom Meetings</option><option>Google Meet</option></select></div>`
        : `<div class="f-group"><label>Lokasi Pertemuan Tatap Muka</label><select id="c-offline-loc"><option>Cabang HardlyTasteworks</option><option>Lokasi Kantor/Rumah Anda</option></select></div>`;
}

// WHATSAPP ORDER DINAMIS
function orderWA(layanan) {
    const msg = `Halo HardlyTasteworks, saya ingin memesan paket catering: ${layanan}. Mohon rincian paket dan harganya.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

// SUBMIT FORM ORDER
document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('o-name').value;
    const svc = document.getElementById('o-svc').value;
    const pax = document.getElementById('o-pax').value;

    const msg = `*PESANAN LAYANAN CATERING*%0A-----------------%0ANama: ${name}%0ALayanan: ${svc}%0AJumlah: ${pax} Pax`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    closeModal('orderModal');
};

// SUBMIT FORM KONSULTASI
document.getElementById('consultForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const type = document.getElementById('c-type').value;
    const pax = document.getElementById('c-pax').value;
    const venue = document.getElementById('c-venue').value;
    const mode = document.getElementById('c-mode').value;
    const consultDate = document.getElementById('c-date-consult').value;

    const msg = `*PERMINTAAN KONSULTASI EKSKLUSIF*%0A` +
                `-------------------------------------------%0A` + 
                `*Nama:* ${name}%0A*Acara:* ${type}%0A*Pax:* ${pax}%0A` +
                `*Venue:* ${venue}%0A*Metode:* ${mode}%0A*Jadwal:* ${consultDate}%0A` +
                `-------------------------------------------%0A` +
                `Halo Admin, mohon bantuannya untuk jadwal konsultasi ini.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    closeModal('consultModal');
};