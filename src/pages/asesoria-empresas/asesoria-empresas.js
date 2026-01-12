// Scripts for Asesoría Empresas
import '../../shared/css/global.css';
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
    }
});
