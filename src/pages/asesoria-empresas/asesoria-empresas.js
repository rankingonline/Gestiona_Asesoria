import '../../shared/js/global.js';

console.log('Asesoría Empresas page loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Page specific logic here
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Initialize animations if needed
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation (Copied from Nosotros)
        const heroTl = gsap.timeline();
        heroTl.from(".about-hero h1", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".about-hero .lead", {
                y: 20,
                opacity: 0,
                duration: 0.8
            }, "-=0.6")
            .from(".badge-pill", {
                scale: 0.8,
                opacity: 0,
                duration: 0.5
            }, "-=1");
    }
});
