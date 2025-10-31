window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) { // adjust value based on hero height
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
