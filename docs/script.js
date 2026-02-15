// Data produk per kategori (sama seperti di list.js)
const PRODUCTS = {
    'sayuran_daun': [
        'Bayam hijau', 'Bayam merah', 'Bayam jepang', 'Kangkung', 'Pucuk labu', 
        'Daun singkong', 'Kacang panjang', 'Kaylan', 'Pakcoy', 'Selada romaine',
        'Selada keriting', 'Lolorosa', 'Kenikir', 'Sawi pahit', 'Pohpohan',
        'Shiomak', 'Daun katuk', 'Endive', 'Daun gingseng', 'Pagoda',
        'Kale black', 'Kale curly', 'Caisim', 'Parsley', 'Daun ketumbar',
        'Selada air', 'Daun seledri', 'Seledri stick', 'Sereh', 'Daun bawang'
    ],
    'sayur_keras': [
        'Sawi putih', 'Kol putih', 'Kembang kol', 'Kol merah', 'Terong ungu',
        'Oyong', 'Pare', 'Timun', 'Timun jepang', 'Zukini',
        'Jagung manis', 'Jagung acar', 'Jagung pipil', 'Labu acar', 'Labu siam',
        'Brokoli', 'Jeruk nipis', 'Paprika hijau', 'Paprika kuning', 'Paprika merah',
        'Etira mushroom', 'Shimeji', 'Enoki', 'Cabe merah besar', 'Cabe hijau besar',
        'Cabe merah keriting', 'Cabe hijau keriting', 'Cabe rawit merah', 'Cabe rawit hijau', 'Tauge',
        'Buncis', 'Buncis bby', 'Kuciwis', 'Tomat', 'Tomat cherry',
        'Bit', 'Lemon', 'Jamur kuping', 'Jamur tiram', 'Daun Basil',
        'Daun mint', 'Rosemary', 'Asparagus', 'Lettuce head', 'Wortel',
        'Jahe', 'Jahe merah', 'Kunyit', 'Kencur', 'Lengkuas',
        'Lobak', 'Edamame', 'Kacang merah kupas'
    ],
    'buah_ubi': [
        'Strawberi', 'Pepaya', 'Nanas', 'Ubi cilembu', 'Ubi ungu',
        'Ubi murasaki', 'Kentang', 'Ubi orange', 'Labu parang', 'Kabucha kuning',
        'Kabucha hijau', 'Butternut', 'Singkong', 'Bengkuang'
    ],
    'bawang': [
        'Bawang merah', 'Bawang putih', 'Bawang bombay'
    ]
};

const CATEGORY_NAMES = {
    'sayuran_daun': '🌿 Sayuran Daun',
    'sayur_keras': '🥦 Sayur Keras',
    'buah_ubi': '🍓 Buah & Ubi',
    'bawang': '🧅 Bawang-bawangan'
};

// Storage untuk stok data
let stockData = {};

// Load data dari localStorage saat halaman dimuat
function loadData() {
    const saved = localStorage.getItem('stockData');
    if (saved) {
        stockData = JSON.parse(saved);
        updateTotalProducts();
    }
}

// Save data ke localStorage
function saveData() {
    localStorage.setItem('stockData', JSON.stringify(stockData));
    updateTotalProducts();
}

// Update total produk yang sudah diinput
function updateTotalProducts() {
    const total = Object.keys(stockData).length;
    document.getElementById('totalProducts').textContent = total;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.background = type === 'success' ? '#28a745' : '#dc3545';
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Category button click handler
function handleCategoryClick(category) {
    const categoryTitle = document.getElementById('categoryTitle');
    const productList = document.getElementById('productList');
    const productInput = document.getElementById('productInput');
    
    categoryTitle.textContent = CATEGORY_NAMES[category];
    productList.innerHTML = '';
    
    const products = PRODUCTS[category];
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        // Check if this product has stock data
        if (stockData[product]) {
            productItem.classList.add('has-stock');
        }
        
        const currentStock = stockData[product] || { fresh: 0, diskon: 0 };
        
        productItem.innerHTML = `
            <div class="product-name">${product}</div>
            <div class="stock-inputs">
                <div class="input-group">
                    <label>Fresh</label>
                    <input type="number" 
                           class="fresh-input" 
                           data-product="${product}" 
                           value="${currentStock.fresh}" 
                           min="0">
                </div>
                <div class="input-group">
                    <label>Discount</label>
                    <input type="number" 
                           class="diskon-input" 
                           data-product="${product}" 
                           value="${currentStock.diskon}" 
                           min="0">
                </div>
            </div>
        `;
        
        productList.appendChild(productItem);
    });
    
    // Add event listeners to inputs
    productList.querySelectorAll('.fresh-input, .diskon-input').forEach(input => {
        input.addEventListener('change', handleStockInput);
    });
    
    // Show product input section
    productInput.classList.remove('hidden');
    
    // Scroll to product input
    productInput.scrollIntoView({ behavior: 'smooth' });
}

// Handle stock input
function handleStockInput(e) {
    const product = e.target.dataset.product;
    const isFresh = e.target.classList.contains('fresh-input');
    const value = parseInt(e.target.value) || 0;
    
    // Initialize product if not exists
    if (!stockData[product]) {
        stockData[product] = { fresh: 0, diskon: 0 };
    }
    
    // Update stock
    if (isFresh) {
        stockData[product].fresh = value;
    } else {
        stockData[product].diskon = value;
    }
    
    // Add has-stock class to parent
    const productItem = e.target.closest('.product-item');
    if (stockData[product].fresh > 0 || stockData[product].diskon > 0) {
        productItem.classList.add('has-stock');
    } else {
        productItem.classList.remove('has-stock');
        // Remove from stockData if both are 0
        delete stockData[product];
    }
    
    saveData();
}

// Back button handler
function handleBackButton() {
    document.getElementById('productInput').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Generate stock message (sama seperti di list.js)
function generateStockMessage(type) {
    const categoryMapping = {
        'sayuran_daun': 'sayuran daun',
        'sayur_keras': 'sayur keras',
        'buah_ubi': 'buah & ubi',
        'bawang': 'bawang-bawangan'
    };

    let message = '';

    // Loop through categories in order
    for (const [categoryKey, categoryName] of Object.entries(categoryMapping)) {
        const products = PRODUCTS[categoryKey];
        
        if (!products) continue;

        message += `*${categoryName}*\n`;

        // Loop through all products in this category
        for (const product of products) {
            const stock = stockData[product] || { fresh: 0, diskon: 0 };
            const value = stock[type] || 0;
            
            // Format: "Nama produk nilai"
            message += `${product} ${value}\n`;
        }

        message += '\n';
    }

    return message.trim();
}

// Generate button handler
function handleGenerate() {
    if (Object.keys(stockData).length === 0) {
        showNotification('❌ Belum ada data stok yang diinput!', 'error');
        return;
    }
    
    const freshMessage = generateStockMessage('fresh');
    const diskonMessage = generateStockMessage('diskon');
    
    document.getElementById('freshOutput').textContent = freshMessage;
    document.getElementById('diskonOutput').textContent = diskonMessage;
    document.getElementById('resultOutput').classList.remove('hidden');
    
    // Scroll to result
    document.getElementById('resultOutput').scrollIntoView({ behavior: 'smooth' });
    
    showNotification('✅ List berhasil di-generate!');
}

// Copy to clipboard handler
function handleCopy(targetId) {
    const text = document.getElementById(targetId).textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('✅ Berhasil di-copy ke clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('❌ Gagal copy ke clipboard!', 'error');
    });
}

// Reset handler
function handleReset() {
    if (!confirm('Apakah Anda yakin ingin mereset semua data?')) {
        return;
    }
    
    stockData = {};
    localStorage.removeItem('stockData');
    updateTotalProducts();
    
    document.getElementById('resultOutput').classList.add('hidden');
    document.getElementById('productInput').classList.add('hidden');
    
    showNotification('✅ Semua data berhasil direset!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load saved data
    loadData();
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            handleCategoryClick(category);
        });
    });
    
    // Back button
    document.getElementById('backBtn').addEventListener('click', handleBackButton);
    
    // Generate button
    document.getElementById('generateBtn').addEventListener('click', handleGenerate);
    
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            handleCopy(target);
        });
    });
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', handleReset);
});
