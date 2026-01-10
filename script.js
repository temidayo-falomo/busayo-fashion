// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const userBtn = document.getElementById('userBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.querySelector('.main-nav');

// Modals
const loginModal = document.getElementById('loginModal');
const searchModal = document.getElementById('searchModal');
const sizeChartModal = document.getElementById('sizeChartModal');

// Close buttons
const closeLogin = document.getElementById('closeLogin');
const closeSearch = document.getElementById('closeSearch');
const closeSizeChart = document.getElementById('closeSizeChart');

// Cookie banner
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeModals();
    initializeNewsletter();
    initializeCookieBanner();
    initializeProductCards();
});

// Modal Functions
function initializeModals() {
    // Open modals
    searchBtn.addEventListener('click', () => openModal(searchModal));
    userBtn.addEventListener('click', () => openModal(loginModal));

    // Close modals
    closeLogin.addEventListener('click', () => closeModal(loginModal));
    closeSearch.addEventListener('click', () => closeModal(searchModal));
    closeSizeChart.addEventListener('click', () => closeModal(sizeChartModal));

    // Close on outside click
    [loginModal, searchModal, sizeChartModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(loginModal);
            closeModal(searchModal);
            closeModal(sizeChartModal);
        }
    });
}

function openModal(modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});


// Newsletter Functions
function initializeNewsletter() {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simulate newsletter subscription
        newsletterMessage.textContent = 'You have successfully subscribed!';
        newsletterMessage.style.color = '#4caf50';
        newsletterForm.reset();
        
        setTimeout(() => {
            newsletterMessage.textContent = '';
        }, 3000);
    });
}

// Cookie Banner
function initializeCookieBanner() {
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookieAccepted) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }
    
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });
}

// Product Cards
function initializeProductCards() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // In a real implementation, this would open a product detail modal
            alert(`Quick View: ${productName} - ${productPrice}`);
        });
    });
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulate login (in real app, this would make an API call)
        alert('Login functionality would be implemented here');
        closeModal(loginModal);
    });
}


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality (basic)
if (searchModal) {
    const searchInput = searchModal.querySelector('input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = searchInput.value;
                if (query.trim()) {
                    alert(`Searching for: ${query}`);
                    // In a real implementation, this would perform a search
                }
            }
        });
    }
}
