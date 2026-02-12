// MOBILE MENU
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      ?.scrollIntoView({ behavior:'smooth' });
  });
});

// STICKY WHATSAPP BUTTON
const wa = document.createElement('a');
wa.href = 'https://wa.me/628123456789';
wa.className = 'wa-float';
wa.innerHTML = '<i class="fab fa-whatsapp"></i>';
document.body.appendChild(wa);

const toggleLang = document.createElement('button');
toggleLang.innerText = 'EN';
toggleLang.style.position = 'fixed';
toggleLang.style.left = '20px';
toggleLang.style.bottom = '22px';
toggleLang.style.padding = '8px 12px';
toggleLang.style.borderRadius = '6px';
toggleLang.style.border = 'none';
toggleLang.style.background = '#183d34';
toggleLang.style.color = '#fff';
toggleLang.style.cursor = 'pointer';

document.body.appendChild(toggleLang);

let lang = 'id';

toggleLang.addEventListener('click', () => {
  lang = lang === 'id' ? 'en' : 'id';
  toggleLang.innerText = lang.toUpperCase();

  document.querySelectorAll('[data-id]').forEach(el => {
    el.innerText = el.dataset[lang];
  });
});

function calcPrice() {
  let pax = document.getElementById("pax").value;
  let boat = document.getElementById("boat").value;

  let base = 1500000;

  if (boat === "luxury") base = 3000000;

  let total = pax * base;
  document.getElementById("totalPrice").innerText = total.toLocaleString();
}

const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});
