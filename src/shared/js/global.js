document.addEventListener('DOMContentLoaded', () => {
    console.log('Gestiona Asesoría App Loaded');

    // Form Submission Handler (Generic)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    } else {
        // Retry if lucide not yet loaded
        setTimeout(() => {
            if (window.lucide) window.lucide.createIcons();
        }, 100);
    }

    // Navbar scroll glassmorphism effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if it's strictly an anchor on the current page
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Handler
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // Open mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    }

    // Close mobile menu
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });
    }

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });
    });

    // Close menu when clicking overlay background
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            }
        });
    }
});
