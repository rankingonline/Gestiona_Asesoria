import '../../shared/js/global.js';

console.log('Asesoria Fiscal JS Loaded');

// FAQ Accordion Logic
const triggers = document.querySelectorAll('.faq-trigger');

// FAQ Accordion Logic (Event Delegation)
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-trigger');
    if (trigger) {
        console.log('FAQ clicked', trigger);
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', !isExpanded);
    }
});

const initHeroAnimation = () => {
    if (typeof gsap !== 'undefined') {
        const heroTl = gsap.timeline();
        heroTl.from(".fiscal-hero h1", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".fiscal-hero .lead", {
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
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroAnimation);
} else {
    initHeroAnimation();
}
