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

// Blokkeer rechtermuisknop
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Blokkeer sneltoetsen voor inspecteren (F12, Ctrl+Shift+I, etc.)
  document.onkeydown = function(e) {
    if(e.keyCode == 123) { return false; }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { return false; }
    if(e.ctrlKey && e.uKey && e.keyCode == 'U'.charCodeAt(0)) { return false; }
  };
    // --- 2. Mobiele Navigatie ---
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
    
    // --- 5. Splash Screen (Intro Animatie) ---
    const splashScreen = document.getElementById('splash-screen');
    
    // Check of het splash screen bestaat op deze pagina
    if (splashScreen) {
        // Controleer of de animatie al is afgespeeld in deze sessie
        if (sessionStorage.getItem('splashPlayed') === 'true') {
            // JA: Verberg het direct zonder animatie (bij terugklikken naar Home)
            splashScreen.classList.add('hidden-instant');
        } else {
            // NEE: Het is de eerste keer! Laat hem staan en schuif hem weg na 2.5 seconden.
            setTimeout(() => {
                splashScreen.classList.add('hide');
                // Sla op in de sessie dat de animatie klaar is
                sessionStorage.setItem('splashPlayed', 'true');
            }, 2500); // 2500 milliseconden = 2,5 seconden
        }
    }


});
