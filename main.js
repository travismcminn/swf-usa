
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('#mobileMenuBtn');
  const mobileMenu = document.querySelector('#mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
});
