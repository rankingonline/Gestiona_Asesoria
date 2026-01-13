// Scripts for Contacto Page
import '../../shared/css/global.css';
import '../../shared/js/global.js';

console.log('Contacto Page Loaded');

const initIcons = () => {
    if (window.lucide) {
        window.lucide.createIcons();
        console.log('Icons created');
    } else {
        // Retry if script hasn't loaded (though it should have)
        setTimeout(initIcons, 50);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIcons);
} else {
    initIcons();
}
