document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('open');
            mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden');
        });
    }

    const closeMobileMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }

    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    const heroBackgrounds = Array.from(document.querySelectorAll('.hero-bg'));
    let heroIndex = 0;

    if (heroBackgrounds.length > 1) {
        setInterval(() => {
            const current = heroBackgrounds[heroIndex];
            if (current) { current.classList.remove('is-active'); }

            heroIndex = (heroIndex + 1) % heroBackgrounds.length;
            const next = heroBackgrounds[heroIndex];
            if (next) { next.classList.add('is-active'); }
        }, 4500);
    }

    const typingTextEl = document.querySelector('.hero-typing');
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
                    typeSpeed = 2600;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typeSpeed = 400;
                }

                setTimeout(type, typeSpeed);
            }

            setTimeout(type, 600);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.16 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
