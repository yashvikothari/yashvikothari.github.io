/**
 * AWS SAA-C03 Flashcard Application
 * Main JavaScript Controller
 */

// ============================================
// State Management
// ============================================
const state = {
    allCards: [],
    filteredCards: [],
    currentIndex: 0,
    currentCategory: 'all',
    currentFilter: 'all',
    isFlipped: false,
    progress: {}
};

// Category definitions with icons
const categories = {
    'all': { icon: '📚', name: 'All Services' },
    'analytics': { icon: '📊', name: 'Analytics' },
    'application-integration': { icon: '🔗', name: 'Application Integration' },
    'cost-management': { icon: '💰', name: 'Cost Management' },
    'compute': { icon: '💻', name: 'Compute' },
    'containers': { icon: '📦', name: 'Containers' },
    'database': { icon: '🗄️', name: 'Database' },
    'developer-tools': { icon: '🛠️', name: 'Developer Tools' },
    'frontend-mobile': { icon: '📱', name: 'Front-End & Mobile' },
    'machine-learning': { icon: '🤖', name: 'Machine Learning' },
    'management-governance': { icon: '⚙️', name: 'Management & Governance' },
    'media-services': { icon: '🎬', name: 'Media Services' },
    'migration-transfer': { icon: '🚚', name: 'Migration & Transfer' },
    'networking': { icon: '🌐', name: 'Networking & CDN' },
    'security': { icon: '🔒', name: 'Security & Identity' },
    'serverless': { icon: '⚡', name: 'Serverless' },
    'storage': { icon: '💾', name: 'Storage' }
};

// ============================================
// DOM Elements
// ============================================
const elements = {
    sidebar: document.getElementById('sidebar'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    categoryList: document.getElementById('categoryList'),
    flashcard: document.getElementById('flashcard'),
    serviceTag: document.getElementById('serviceTag'),
    serviceTagBack: document.getElementById('serviceTagBack'),
    scenarioText: document.getElementById('scenarioText'),
    answerTitle: document.getElementById('answerTitle'),
    answerDetails: document.getElementById('answerDetails'),
    currentCardNum: document.getElementById('currentCardNum'),
    totalCards: document.getElementById('totalCards'),
    currentCategoryIcon: document.getElementById('currentCategoryIcon'),
    currentCategoryName: document.getElementById('currentCategoryName'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    shuffleBtn: document.getElementById('shuffleBtn'),
    filterBtn: document.getElementById('filterBtn'),
    filterDropdown: document.getElementById('filterDropdown'),
    markReviewBtn: document.getElementById('markReviewBtn'),
    markMasteredBtn: document.getElementById('markMasteredBtn'),
    resetProgress: document.getElementById('resetProgress'),
    progressRing: document.getElementById('progressRing'),
    progressPercent: document.getElementById('progressPercent'),
    masteredCount: document.getElementById('masteredCount'),
    reviewCount: document.getElementById('reviewCount'),
    newCount: document.getElementById('newCount'),
    allCount: document.getElementById('allCount')
};

// ============================================
// Initialization
// ============================================
function init() {
    loadProgress();
    loadAllCards();
    buildCategoryNav();
    applyFilters();
    renderCard();
    updateProgress();
    bindEvents();
}

function loadAllCards() {
    // Collect cards from all data files (loaded via script tags)
    state.allCards = [
        ...(window.analyticsCards || []),
        ...(window.applicationIntegrationCards || []),
        ...(window.costManagementCards || []),
        ...(window.computeCards || []),
        ...(window.containersCards || []),
        ...(window.databaseCards || []),
        ...(window.developerToolsCards || []),
        ...(window.frontendMobileCards || []),
        ...(window.machineLearningCards || []),
        ...(window.managementGovernanceCards || []),
        ...(window.mediaServicesCards || []),
        ...(window.migrationTransferCards || []),
        ...(window.networkingCards || []),
        ...(window.securityCards || []),
        ...(window.serverlessCards || []),
        ...(window.storageCards || [])
    ];

    elements.allCount.textContent = state.allCards.length;
}

function loadProgress() {
    const saved = localStorage.getItem('aws-flashcards-progress');
    if (saved) {
        state.progress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('aws-flashcards-progress', JSON.stringify(state.progress));
}

// ============================================
// Category Navigation
// ============================================
function buildCategoryNav() {
    const categoryKeys = Object.keys(categories).filter(k => k !== 'all');

    categoryKeys.forEach(key => {
        const cat = categories[key];
        const count = state.allCards.filter(c => c.category === key).length;

        if (count > 0) {
            const li = document.createElement('li');
            li.className = 'category-item';
            li.dataset.category = key;
            li.innerHTML = `
                <span class="category-icon">${cat.icon}</span>
                <span class="category-name">${cat.name}</span>
                <span class="category-count">${count}</span>
            `;
            elements.categoryList.appendChild(li);
        }
    });
}

function setCategory(category) {
    state.currentCategory = category;
    state.currentIndex = 0;
    state.isFlipped = false;

    // Update active class
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });

    // Update header
    const cat = categories[category];
    elements.currentCategoryIcon.textContent = cat.icon;
    elements.currentCategoryName.textContent = cat.name;

    // Close mobile sidebar
    elements.sidebar.classList.remove('open');
    document.querySelector('.sidebar-overlay')?.classList.remove('show');

    applyFilters();
    renderCard();
}

// ============================================
// Filtering
// ============================================
function applyFilters() {
    let cards = state.allCards;

    // Filter by category
    if (state.currentCategory !== 'all') {
        cards = cards.filter(c => c.category === state.currentCategory);
    }

    // Filter by status
    if (state.currentFilter !== 'all') {
        cards = cards.filter(c => {
            const status = state.progress[c.id] || 'new';
            return status === state.currentFilter;
        });
    }

    state.filteredCards = cards;
    elements.totalCards.textContent = cards.length;

    if (state.currentIndex >= cards.length) {
        state.currentIndex = Math.max(0, cards.length - 1);
    }
}

function setFilter(filter) {
    state.currentFilter = filter;
    state.currentIndex = 0;
    state.isFlipped = false;

    // Update active class
    document.querySelectorAll('.filter-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    elements.filterDropdown.classList.remove('show');

    applyFilters();
    renderCard();
}

// ============================================
// Card Rendering
// ============================================
function renderCard() {
    const card = state.filteredCards[state.currentIndex];

    if (!card) {
        elements.serviceTag.textContent = 'No cards';
        elements.serviceTagBack.textContent = '';
        elements.scenarioText.textContent = 'No flashcards match your current filters. Try selecting a different category or filter.';
        elements.answerTitle.textContent = '';
        elements.answerDetails.innerHTML = '';
        elements.currentCardNum.textContent = '0';
        elements.flashcard.removeAttribute('data-status');
        return;
    }

    // Update card content
    elements.serviceTag.textContent = card.service;
    elements.serviceTagBack.textContent = card.service;
    elements.scenarioText.textContent = card.question;
    elements.answerTitle.textContent = card.answer;
    elements.answerDetails.innerHTML = formatAnswerDetails(card.details);

    // Update counter
    elements.currentCardNum.textContent = state.currentIndex + 1;

    // Update status indicator
    const status = state.progress[card.id] || 'new';
    elements.flashcard.setAttribute('data-status', status);

    // Reset flip state
    if (state.isFlipped) {
        elements.flashcard.classList.add('flipped');
    } else {
        elements.flashcard.classList.remove('flipped');
    }
}

function formatAnswerDetails(details) {
    if (Array.isArray(details)) {
        return `<ul>${details.map(d => `<li>${d}</li>`).join('')}</ul>`;
    }
    return `<p>${details}</p>`;
}

// ============================================
// Card Navigation
// ============================================
function flipCard() {
    state.isFlipped = !state.isFlipped;
    elements.flashcard.classList.toggle('flipped');
}

function nextCard() {
    if (state.filteredCards.length === 0) return;

    state.currentIndex = (state.currentIndex + 1) % state.filteredCards.length;
    state.isFlipped = false;
    renderCard();
}

function prevCard() {
    if (state.filteredCards.length === 0) return;

    state.currentIndex = (state.currentIndex - 1 + state.filteredCards.length) % state.filteredCards.length;
    state.isFlipped = false;
    renderCard();
}

function shuffleCards() {
    if (state.filteredCards.length <= 1) return;

    // Fisher-Yates shuffle
    for (let i = state.filteredCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.filteredCards[i], state.filteredCards[j]] = [state.filteredCards[j], state.filteredCards[i]];
    }

    state.currentIndex = 0;
    state.isFlipped = false;
    renderCard();

    // Visual feedback
    elements.shuffleBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        elements.shuffleBtn.style.transform = '';
    }, 300);
}

// ============================================
// Progress Tracking
// ============================================
function markAsReview() {
    const card = state.filteredCards[state.currentIndex];
    if (!card) return;

    state.progress[card.id] = 'review';
    saveProgress();
    updateProgress();
    renderCard();

    // Auto-advance after a short delay
    setTimeout(nextCard, 300);
}

function markAsMastered() {
    const card = state.filteredCards[state.currentIndex];
    if (!card) return;

    state.progress[card.id] = 'mastered';
    saveProgress();
    updateProgress();
    renderCard();

    // Auto-advance after a short delay
    setTimeout(nextCard, 300);
}

function updateProgress() {
    let mastered = 0, review = 0, newCards = 0;

    state.allCards.forEach(card => {
        const status = state.progress[card.id] || 'new';
        if (status === 'mastered') mastered++;
        else if (status === 'review') review++;
        else newCards++;
    });

    const total = state.allCards.length;
    const percent = total > 0 ? Math.round((mastered / total) * 100) : 0;

    // Update stats
    elements.masteredCount.textContent = mastered;
    elements.reviewCount.textContent = review;
    elements.newCount.textContent = newCards;
    elements.progressPercent.textContent = `${percent}%`;

    // Update progress ring
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percent / 100) * circumference;
    elements.progressRing.style.strokeDashoffset = offset;
}

function resetAllProgress() {
    if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
        state.progress = {};
        saveProgress();
        updateProgress();
        applyFilters();
        renderCard();
    }
}

// ============================================
// Event Handlers
// ============================================
function bindEvents() {
    // Card interactions
    elements.flashcard.addEventListener('click', flipCard);
    elements.prevBtn.addEventListener('click', prevCard);
    elements.nextBtn.addEventListener('click', nextCard);
    elements.shuffleBtn.addEventListener('click', shuffleCards);

    // Progress buttons
    elements.markReviewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        markAsReview();
    });

    elements.markMasteredBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        markAsMastered();
    });

    // Filter dropdown
    elements.filterBtn.addEventListener('click', () => {
        elements.filterDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.filter-option').forEach(btn => {
        btn.addEventListener('click', () => setFilter(btn.dataset.filter));
    });

    // Category navigation
    elements.categoryList.addEventListener('click', (e) => {
        const item = e.target.closest('.category-item');
        if (item) {
            setCategory(item.dataset.category);
        }
    });

    // Mobile menu
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.sidebar.classList.toggle('open');
        toggleOverlay(true);
    });

    // Reset progress
    elements.resetProgress.addEventListener('click', resetAllProgress);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.view-controls')) {
            elements.filterDropdown.classList.remove('show');
        }
    });

    // Touch swipe support
    setupTouchSwipe();
}

function handleKeyboard(e) {
    // Ignore if typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            flipCard();
            break;
        case 'ArrowRight':
        case 'l':
            nextCard();
            break;
        case 'ArrowLeft':
        case 'h':
            prevCard();
            break;
        case 's':
        case 'S':
            shuffleCards();
            break;
        case 'm':
        case 'M':
            markAsMastered();
            break;
        case 'r':
        case 'R':
            markAsReview();
            break;
    }
}

function setupTouchSwipe() {
    let touchStartX = 0;
    let touchEndX = 0;

    elements.flashcard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    elements.flashcard.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextCard();
            } else {
                prevCard();
            }
        }
    }
}

function toggleOverlay(show) {
    let overlay = document.querySelector('.sidebar-overlay');

    if (!overlay && show) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            elements.sidebar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }

    if (overlay) {
        overlay.classList.toggle('show', show && elements.sidebar.classList.contains('open'));
    }
}

// ============================================
// SVG Gradient for Progress Ring
// ============================================
function addProgressGradient() {
    const svg = document.querySelector('.progress-ring');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ff9900"/>
            <stop offset="100%" style="stop-color:#ff6600"/>
        </linearGradient>
    `;
    svg.insertBefore(defs, svg.firstChild);
}

// ============================================
// Start the App
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    addProgressGradient();
    init();
});
