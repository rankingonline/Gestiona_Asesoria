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
