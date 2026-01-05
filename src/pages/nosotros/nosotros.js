import '../../shared/js/global.js';

console.log('Nosotros JS Loaded');

// Animations
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate Team Cards Stagger
        gsap.to(".team-card", {
            scrollTrigger: {
                trigger: ".team-grid",
                start: "top 80%", // Start when top of grid hits 80% viewport
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Hero Animation
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
