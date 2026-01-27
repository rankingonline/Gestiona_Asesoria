import '../../shared/js/global.js';

document.addEventListener('DOMContentLoaded', () => {
    // Carousel Auto-play
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');

            // Calculate next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Add active class to next
            slides[currentSlide].classList.add('active');
        }, 4000); // Change every 4 seconds
    }

    // Video Mute Toggle Logic
    const solutionsVideo = document.getElementById('solutionsVideo');
    const muteToggle = document.getElementById('muteToggle');

    if (solutionsVideo && muteToggle) {
        muteToggle.addEventListener('click', () => {
            solutionsVideo.muted = !solutionsVideo.muted;

            // Update icon based on state
            const iconName = solutionsVideo.muted ? 'volume-x' : 'volume-2';

            // Re-render icon (Lucide needs to re-scan or we manually replace SVG content)
            muteToggle.innerHTML = `<i data-lucide="${iconName}"></i>`;
            if (window.lucide) window.lucide.createIcons();
        });
    }

    // GSAP Impact Hero Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Hero Entrance
        tl.from(".hero-bg-shapes .shape", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2
        })
            .from(".hero-title-impact .block-reveal", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                skewY: 5
            }, "-=1")
            .from(".hero-text-impact", {
                y: 30,
                opacity: 0,
                duration: 1
            }, "-=0.8")
            .from(".hero-cta-group a", {
                y: 20,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.1,
                clearProps: "all" 
            }, "-=0.6")
            .from(".trust-indicators-row", {
                opacity: 0,
                duration: 1
            }, "-=0.6")
            .from(".visual-card-stack", {
                x: 50,
                opacity: 0,
                duration: 1.2
            }, "-=1");

        // Interactive Parallax
        const heroSection = document.querySelector('.hero-impact');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 30;
                const y = (e.clientY / window.innerHeight - 0.5) * 30;

                gsap.to(".shape-1", { x: x, y: y, duration: 2, ease: "power2.out" });
                gsap.to(".shape-2", { x: -x, y: -y, duration: 2, ease: "power2.out" });
                gsap.to(".card-main", { rotationY: x * 0.5, rotationX: -y * 0.5, duration: 1, ease: "power2.out" });
            });
        }
    }
});
