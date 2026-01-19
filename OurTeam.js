    const whatsappNumber = "6281995223741";

    // --- DATA POSISI KERJA ---
    const jobs = [
        { title: "Junior Chef", type: "Full-time" },
        { title: "Marketing Specialist", type: "Full-time" },
        { title: "Service Staff", type: "Part-time" }
    ];

    // --- MODAL CONTROLLER ---
    function toggleModal(id, status) {
        const modal = document.getElementById(id);
        modal.style.display = status ? 'flex' : 'none';
        document.body.style.overflow = status ? 'hidden' : 'auto';
    }

    function closeModal(id) { toggleModal(id, false); }

    // Order Online (Navbar)
    function openOrderModal() { toggleModal('orderModal', true); }

    // --- CAREER SYSTEM ---
    function handleCareerCheck() {
        const list = document.getElementById('careerList');
        toggleModal('careerModal', true);

        if (jobs.length === 0) {
            // NOTE KHUSUS JIKA TIDAK ADA LOWONGAN
            list.innerHTML = `
                <div style="text-align:center; padding: 30px 0;">
                    <i class="fas fa-info-circle" style="font-size: 40px; color: #ccc;"></i>
                    <p style="margin-top:15px; color:#666;">Maaf, untuk saat ini belum ada posisi staff yang tersedia. Silakan cek berkala halaman ini!</p>
                </div>`;
        } else {
            // TAMPILKAN LIST POSISI
            let html = "";
            jobs.forEach(j => {
                html += `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:15px; border:1px solid #eee; border-radius:12px; margin-bottom:10px;">
                        <div><strong style="font-weight:600 !important;">${j.title}</strong><br><small style="color:#888;">${j.type}</small></div>
                        <button class="btn btn-nav-orange" style="padding:6px 15px; font-size:12px;" onclick="openApplyForm('${j.title}')">Lamar</button>
                    </div>`;
            });
            list.innerHTML = html;
        }
    }

    function openApplyForm(title) {
        closeModal('careerModal');
        document.getElementById('app-pos').value = title;
        toggleModal('applyModal', true);
    }

    // --- SUBMIT HANDLERS (WHATSAPP) ---

    // Lamaran Staff
    document.getElementById('careerForm').onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('app-name').value;
        const pos = document.getElementById('app-pos').value;
        const link = document.getElementById('app-cv').value;

        const msg = `*LAMARAN KERJA STAFF - HARDLYTASTEWORKS*%0A` +
                    `----------------------------------------%0A` +
                    `*Nama:* ${name}%0A` +
                    `*Posisi:* ${pos}%0A` +
                    `*Link CV:* ${link}%0A` +
                    `----------------------------------------%0A` + 
                    `Halo Admin, saya ingin melamar pekerjaan. Mohon ditinjau data saya.`;

        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
        closeModal('applyModal');
        this.reset();
    };

    // Order Online
    document.getElementById('orderForm').onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('o-name').value;
        const svc = document.getElementById('o-service').value;
        const pax = document.getElementById('o-pax').value;

        const msg = `*PESANAN CATERING - ONLINE*%0A` +
                    `-----------------------------%0A` +
                    `*Nama:* ${name}%0A` +
                    `*Layanan:* ${svc}%0A` +
                    `*Jumlah:* ${pax} Pax`;

        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
        closeModal('orderModal');
        this.reset();
    };

    // Tutup modal jika klik di luar box
    window.onclick = function(event) {
        if (event.target.className === 'modal-overlay') {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }