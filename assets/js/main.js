document.addEventListener('DOMContentLoaded', () => {
    // Select elements for mobile menu
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    // Open mobile menu
    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden'); // Prevent background scrolling
        });
    }

    // Close mobile menu helper
    const closeMobileMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');
        }
    };

    // Close on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    // Close on link click (in case of anchor links)
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Typewriter (Animasi Tulisan Ngetik) Engine
    const typingTextEl = document.querySelector('.typing-text');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typingTextEl && !prefersReducedMotion) {
        const rawPhrases = typingTextEl.getAttribute('data-phrases');
        let phrases = [];
        try {
            phrases = JSON.parse(rawPhrases);
        } catch (err) {
            phrases = ["generasi pemimpin sosial & politik", "aparatur publik berintegritas", "pemimpin masa depan daerah"];
        }

        if (phrases.length > 0) {
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typeSpeed = 75;

            function type() {
                const currentPhrase = phrases[phraseIndex];
                
                if (isDeleting) {
                    charIndex--;
                    typeSpeed = 40;
                } else {
                    charIndex++;
                    typeSpeed = 75;
                }

                typingTextEl.textContent = currentPhrase.substring(0, charIndex);

                if (!isDeleting && charIndex === currentPhrase.length) {
                    typeSpeed = 2600; // Pause at end of phrase
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typeSpeed = 400; // Brief pause before typing next phrase
                }

                setTimeout(type, typeSpeed);
            }

            setTimeout(type, 600);
        }
    }
});
