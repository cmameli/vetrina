// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Galleria con lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.gallery a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    lightboxImg.src = link.href;
    lightboxImg.alt = link.querySelector('img').alt;
    lightbox.hidden = false;
  });
});

const closeLightbox = () => { lightbox.hidden = true; };
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Anno nel footer
document.getElementById('year').textContent = new Date().getFullYear();
