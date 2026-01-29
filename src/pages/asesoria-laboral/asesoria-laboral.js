import '../../shared/js/global.js';

console.log('Asesoría Laboral page loaded');

const init = () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // FAQ Accordion Logic
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', !isExpanded);
            trigger.parentElement.classList.toggle('active');
        });
    });

    if (typeof gsap !== 'undefined') {
        // Hero Animation (Matching Nosotros and other asesorías)
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
    } else {
        console.warn('GSAP not loaded');
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
