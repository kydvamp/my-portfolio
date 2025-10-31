const nav = document.querySelector('nav');
const heroHeight = document.querySelector('#hero').offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= heroHeight) {
    nav.style.background = '#161b22'; // color for other sections
  } else {
    nav.style.background = 'transparent'; // transparent over hero
  }
});
