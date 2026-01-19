const whatsappNumber = "6281995223741";
let selectedMenus = []; // Menyimpan daftar menu yang dipilih

// 1. ISI DROPDOWN MENU SAAT PAGE LOAD
function populateMenuOptions() {
    const dropdown = document.getElementById('menuDropdown');
    if(!dropdown) return;
    dropdown.innerHTML = '<option value="">-- Klik untuk Menambah Menu --</option>';
    allMenu.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.name;
        opt.textContent = item.name;
        dropdown.appendChild(opt);
    });
}

// 2. FUNGSI MENAMBAH TAG MENU
window.addMenuTag = function(val) {
    if (!val || selectedMenus.includes(val)) return;
    
    selectedMenus.push(val);
    renderMenuTags();
    document.getElementById('menuDropdown').value = ""; // Reset dropdown
}

// 3. FUNGSI HAPUS TAG MENU
window.removeMenuTag = function(val) {
    selectedMenus = selectedMenus.filter(m => m !== val);
    renderMenuTags();
}

// 4. RENDER TAMPILAN TAGS
function renderMenuTags() {
    const area = document.getElementById('selectedMenuArea');
    if (selectedMenus.length === 0) {
        area.innerHTML = '<span class="placeholder-text">Belum ada menu yang dipilih...</span>';
        return;
    }
    
    area.innerHTML = selectedMenus.map(m => `
        <div class="menu-tag">
            ${m}
            <i class="fas fa-times-circle" onclick="removeMenuTag('${m}')"></i>
        </div>
    `).join('');
}

// 5. BUKA MODAL
window.openOrderModal = function(autoItem = "") {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    selectedMenus = []; // Reset pilihan lama
    if (autoItem && autoItem !== 'General') {
        selectedMenus.push(autoItem);
    }
    renderMenuTags();
    populateMenuOptions();
}

window.closeModal = function(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 6. SUBMIT KE WHATSAPP
document.getElementById('onlineOrderForm').onsubmit = function(e) {
    e.preventDefault();

    if (selectedMenus.length === 0) {
        alert("Mohon pilih minimal satu menu makanan!");
        return;
    }

    const name = document.getElementById('cust-name').value;
    const serviceType = document.getElementById('cust-service-type').value;
    const date = document.getElementById('cust-date').value;
    const pax = document.getElementById('cust-pax').value;
    const note = document.getElementById('cust-note').value || "-";

    const menuListText = selectedMenus.map(m => `- ${m}`).join('%0A');

    const message = `*HALO HARDLYTASTEWORKS - ORDER BARU*%0A` +
                    `--------------------------------------%0A` +
                    `*Nama:* ${name}%0A` +
                    `*Jenis Layanan:* ${serviceType}%0A` +
                    `*Tanggal Acara:* ${date}%0A` +
                    `*Jumlah:* ${pax} Pax%0A` +
                    `%0A*DAFTAR MENU YANG DIPESAN:*%0A${menuListText}%0A` +
                    `%0A*Catatan Tambahan:*%0A${note}%0A` +
                    `--------------------------------------%0A` +
                    `Mohon diproses Admin. Terima kasih!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    closeModal('orderModal');
    this.reset();
};

// --- DATA MENU (Lengkap 16 Item) ---
const allMenu = [
    // Main Course
    { 
        name: "Ayam Bakar", 
        category: "Main Course", 
        price: "Rp 75.000", 
        rating: "4.9", 
        pop: true, 
        img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=600" 
    },
    { 
        name: "Ikan Bakar Madu", 
        category: "Main Course", 
        price: "Rp 250.000", 
        rating: "4.8", 
        pop: true, 
        img: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=600" 
    },
    { 
        name: "Sate Kambing Madura", 
        category: "Main Course", 
        price: "Rp 85.000", 
        rating: "4.7", 
        pop: false, 
        // Link Sate diperbarui
        img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600" 
    },
    { 
        name: "Salmon Teriyaki", 
        category: "Main Course", 
        price: "Rp 180.000", 
        rating: "4.9", 
        pop: true, 
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600" 
    },

    // Appetizer
    { 
        name: "Spring Roll Platter", 
        category: "Appetizer", 
        price: "Rp 45.000", 
        rating: "4.6", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600" 
    },
    { 
        name: "Caesar Salad", 
        category: "Appetizer", 
        price: "Rp 55.000", 
        rating: "4.5", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600" 
    },
    { 
        name: "Chicken Wings BBQ", 
        category: "Appetizer", 
        price: "Rp 50.000", 
        rating: "4.7", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=600" 
    },
    { 
        name: "Potato Wedges", 
        category: "Appetizer", 
        price: "Rp 35.000", 
        rating: "4.6", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600" 
    },

    // Dessert
    { 
        name: "Chocolate Lava Cake", 
        category: "Dessert", 
        price: "Rp 45.000", 
        rating: "4.8", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600" 
    },
    { 
        name: "Tiramisu Classic", 
        category: "Dessert", 
        price: "Rp 50.000", 
        rating: "4.7", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600" 
    },
    { 
        name: "Tropical Smoothie Bowl", 
        category: "Dessert", 
        price: "Rp 65.000", 
        rating: "4.8", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=600" 
    },
    { 
        name: "Lemon Tea", 
        category: "Beverage", 
        price: "Rp 40.000", 
        rating: "4.9", 
        pop: true, 
        // Link Mango Sticky Rice diperbarui
        img: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=600" 
    },

    // Beverage
    { 
        name: "Iced Lychee Tea", 
        category: "Beverage", 
        price: "Rp 30.000", 
        rating: "4.6", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600" 
    },
    { 
        name: "Fresh Orange Juice", 
        category: "Beverage", 
        price: "Rp 25.000", 
        rating: "4.7", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600" 
    },
    { 
        name: "Matcha Latte", 
        category: "Beverage", 
        price: "Rp 35.000", 
        rating: "4.8", 
        pop: false, 
        img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500" 
    },
    { 
        name: "Premium Hot Coffee", 
        category: "Beverage", 
        price: "Rp 28.000", 
        rating: "4.9", 
        pop: true, 
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600" 
    }
];
// --- LOGIC FUNCTIONS ---
function renderMenu(data) {
    const grid = document.getElementById('menuGrid');
    if(!grid) return;
    grid.innerHTML = data.map(item => `
        <div class="m-card">
            <div class="m-img" style="background-image: url('${item.img}');">
                ${item.pop ? '<span class="badge-pop">⭐ Popular</span>' : ''}
                <span class="badge-rate">⭐ ${item.rating}</span>
            </div>
            <div class="m-info">
                <h3>${item.name}</h3>
                <p>Sajian premium pilihan HardlyTasteworks.</p>
                <div class="m-price">${item.price}</div>
                <div class="m-btns">
                    <button onclick="orderWA('${item.name}')" class="btn btn-wa-sm">WhatsApp</button>
                    <button onclick="openOrderModal('${item.name}')" class="btn btn-orange-sm">Order</button>
                </div>
            </div>
        </div>`).join('');
    document.getElementById('menuCount').innerText = `Menampilkan ${data.length} menu`;
}

function filterByCategory(cat, btn) {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const filtered = cat === 'Semua Menu' ? allMenu : allMenu.filter(m => m.category === cat);
    renderMenu(filtered);
}

function filterBySearch() {
    const query = document.getElementById('menuSearch').value.toLowerCase();
    const filtered = allMenu.filter(m => m.name.toLowerCase().includes(query));
    renderMenu(filtered);
}

function toggleModal(id, status) {
    document.getElementById(id).style.display = status ? 'flex' : 'none';
}

function openOrderModal(item = "Umum") {
    const select = document.getElementById('o-svc');
    select.innerHTML = allMenu.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    select.value = item === "General" ? allMenu[0].name : item;
    toggleModal('orderModal', true);
}

function closeModal(id) { toggleModal(id, false); }

function orderWA(item) {
    const msg = (item === 'Konsultasi Menu Kustom') 
        ? "Halo HardlyTasteworks, saya ingin konsultasi menu kustom." 
        : `Halo HardlyTasteworks, saya ingin memesan menu: *${item}*.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = () => renderMenu(allMenu);