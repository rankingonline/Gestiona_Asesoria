import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log('Gestiona Asesoría App Loaded');

  // Form Submission Handler (Placeholder)
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
  }

  // Navbar scroll glassmorphism effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

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
      // Since Lucide replaces <i> with <svg>, we need to clear and re-add element for Lucide to process,
      // OR manually swap SVG. The easiest robust way with Lucide static linking:
      muteToggle.innerHTML = `<i data-lucide="${iconName}"></i>`;
      window.lucide.createIcons();
    });
  }

  // Smooth Scroll for anchor links (just in case native behavior fails or needs enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
