document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  // Navbar toggle
  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  }

  // Scroll spy
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          let targetLink = document.querySelector(`header nav a[href*='${id}']`);
          if (targetLink) targetLink.classList.add('active');
        });
      }
    });
  };

  // ScrollReveal setup
  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .skill-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  ScrollReveal().reveal('.skill-box', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
    reset: false
  });

  // Background music player
  const playlist = [
    "ms/AUD-20250527-WA0000.mp3",
    "ms/AUD-20250527-WA0001.mp3",
    "ms/AUD-20250527-WA0002.mp3"
  ];

  let currentIndex = 0;
  const music = document.getElementById("bg-music");

  if (music) {
    music.volume = 0.99;

    function playMusic(index) {
      music.src = playlist[index];
      music.load();
      music.play().catch(() => {
        document.body.addEventListener("click", () => {
          music.play();
        }, { once: true });
      });
    }

    music.addEventListener("ended", () => {
      currentIndex = (currentIndex + 1) % playlist.length;
      playMusic(currentIndex);
    });

    playMusic(currentIndex);
  }
});