document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Scroll Animaties ---
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));


// --- Mobiele Navigatie ---
const burgerBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
        // Opent het menu
        navLinks.classList.toggle('active');
        
        // Verandert de hamburger in een 'X' (en vice versa)
        burgerBtn.classList.toggle('active'); 
    });
}


    // --- 3. Leeftijd Berekening ---
    const ageElement = document.getElementById('ceo-age');
    if (ageElement) {
        const birthDate = new Date(2000, 1, 18); 
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageElement.innerText = age;
    }


    // --- 4. GDPR Cookie Banner ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    if (cookieBanner && !localStorage.getItem('cookieChoice')) {
        setTimeout(() => cookieBanner.classList.add('show'), 2000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'accepted');
            cookieBanner.classList.remove('show');
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'rejected');
            cookieBanner.classList.remove('show');
        });
    }
    

});