let filteredRecords = [...vinylRecords];

// DOM elements
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const qualityFilter = document.getElementById('qualityFilter');
const priceFilter = document.getElementById('priceFilter');
const vinylGrid = document.getElementById('vinylGrid');
const noResults = document.getElementById('noResults');

// Populate genre filter
const genres = [...new Set(vinylRecords.map(record => record.genre))];
genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
});

function getQualityClass(quality) {
    if (quality.includes('M/M') || quality.includes('S/S')) return 'mint';
    if (quality.includes('NM')) return 'near-mint';
    if (quality.includes('VG+')) return 'vg-plus';
    if (quality.includes('VG')) return 'vg';
    return 'good';
}

function getQualityBadge(quality) {
    if (quality.includes('M/M') || quality.includes('S/S')) return 'quality-M';
    if (quality.includes('NM')) return 'quality-NM';
    if (quality.includes('VG+')) return 'quality-VG-plus';
    if (quality.includes('VG')) return 'quality-VG';
    return 'quality-G';
}

function formatPrice(price) {
    return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function renderVinylCard(record) {
    const qualityClass = getQualityClass(record.quality);
    const qualityBadgeClass = getQualityBadge(record.quality);
    
    return `
        <div class="vinyl-card ${qualityClass}">
            <div class="artist-name">${record.artist}</div>
            <div class="album-title">${record.album}</div>
            <div class="vinyl-details">
                <span class="detail-label">Kiadó:</span>
                <span class="detail-value">${record.recordCompany}</span>
                <span class="detail-label">Vonalkód:</span>
                <span class="detail-value">${record.barcode}</span>
                <span class="detail-label">Kiadás éve:</span>
                <span class="detail-value">${record.releaseYear}</span>
                <span class="detail-label">Ország:</span>
                <span class="detail-value">${record.country}</span>
                <span class="detail-label">Műfaj:</span>
                <span class="detail-value">${record.genre}</span>
            </div>
            ${record.notes ? `<div class="notes">${record.notes}</div>` : ''}
            <div class="price-section">
                <div class="price">${formatPrice(record.price)}</div>
                <div class="quality-badge ${qualityBadgeClass}">${record.quality}</div>
            </div>
        </div>
    `;
}

function renderVinyls() {
    if (filteredRecords.length === 0) {
        vinylGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        vinylGrid.style.display = 'grid';
        noResults.style.display = 'none';
        vinylGrid.innerHTML = filteredRecords.map(renderVinylCard).join('');
    }
    updateStats();
}

function updateStats() {
    const totalRecords = vinylRecords.length;
    const availableRecords = filteredRecords.length;
    const avgPrice = filteredRecords.reduce((sum, record) => sum + record.price, 0) / filteredRecords.length || 0;
    const uniqueArtists = new Set(filteredRecords.map(record => record.artist)).size;

    document.getElementById('totalRecords').textContent = totalRecords;
    document.getElementById('availableRecords').textContent = availableRecords;
    document.getElementById('avgPrice').textContent = Math.round(avgPrice).toLocaleString('hu-HU');
    document.getElementById('uniqueArtists').textContent = uniqueArtists;
}

function filterRecords() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const selectedQuality = qualityFilter.value;
    const selectedPriceRange = priceFilter.value;

    filteredRecords = vinylRecords.filter(record => {
        const matchesSearch = record.artist.toLowerCase().includes(searchTerm) || 
                            record.album.toLowerCase().includes(searchTerm);
        
        const matchesGenre = !selectedGenre || record.genre === selectedGenre;
        
        const matchesQuality = !selectedQuality || record.quality.includes(selectedQuality);
        
        let matchesPrice = true;
        if (selectedPriceRange) {
            if (selectedPriceRange === '25000+') {
                matchesPrice = record.price >= 25000;
            } else {
                const [min, max] = selectedPriceRange.split('-').map(Number);
                matchesPrice = record.price >= min && record.price <= max;
            }
        }

        return matchesSearch && matchesGenre && matchesQuality && matchesPrice;
    });

    renderVinyls();
}

// Event listeners
searchInput.addEventListener('input', filterRecords);
genreFilter.addEventListener('change', filterRecords);
qualityFilter.addEventListener('change', filterRecords);
priceFilter.addEventListener('change', filterRecords);

// Initial render
renderVinyls();
