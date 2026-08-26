document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');

  function toggleMenu() {
    if (drawer && overlay) {
      drawer.classList.toggle('open');
      overlay.classList.toggle('open');
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }
  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }

  // Initialize Hero Swiper Slider
  if (document.querySelector('.hero-swiper')) {
    const heroSwiper = new Swiper('.hero-swiper', {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 800,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.hero-swiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero-swiper .swiper-button-next',
        prevEl: '.hero-swiper .swiper-button-prev',
      },
    });
  }
});