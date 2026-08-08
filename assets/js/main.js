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
});
