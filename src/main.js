const popup = document.getElementById('popup');
const openButtons = document.querySelectorAll('.button, .header-button, .hero-button, .contact-btn, .center-btn');
const closeBtn = document.querySelector('.close-popup');
const form = document.getElementById('joinForm');

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.classList.add('menu-open');
  });
});

// закриття
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  document.body.classList.remove('menu-open');
}); 

//   Клік поза формою
//   popup.addEventListener('click', (e) => {
//     if (e.target === popup) popup.classList.remove('active');
//     document.body.classList.remove('menu-open');
//   });
//   console.log(form)
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Зупиняє перезавантаження або перехід

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const savedForms = JSON.parse(localStorage.getItem('contactForms')) || [];
      savedForms.push(data);
      localStorage.setItem('contactForms', JSON.stringify(savedForms));

      document.getElementById('popup').classList.remove('active');
      document.getElementById('successPopup').classList.add('active');
      form.reset();
    } catch (err) {
      document.getElementById('errorPopup').classList.add('active');
    }
  });
}



const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const headerMenu = document.querySelector('.header-menu');
const headerLinks = document.querySelectorAll('.header-link');
const menuOverlay = document.querySelector('.menu-overlay');
  
if (burger && burgerClose && headerMenu && menuOverlay) {
  burger.addEventListener('click', () => {
    headerMenu.classList.add('open');
    menuOverlay.classList.add('active');
    document.body.classList.add('menu-open');
  });

  burgerClose.addEventListener('click', () => {
    headerMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  menuOverlay.addEventListener('click', () => {
    headerMenu.classList.remove('open');
    menuOverlay.classList.remove('active'); // ховаємо затемнення
    document.body.classList.remove('menu-open');
  }); 

  headerLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.classList.remove('open');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

const swiper = new Swiper('.benefits-swiper', {
  speed: 500,
  spaceBetween: 24,
  slidesPerView: 1.1,  // трохи видно сусідній слайд на мобілці
  loop: true,
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 24 },
    1024:{ slidesPerView: 3, spaceBetween: 28 }
  },
  navigation: {
    nextEl: '.benefits-btn.next',
    prevEl: '.benefits-btn.prev'
  },
  allowTouchMove: false
});