let slideDown = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  delay: 200
});

let slideRight = {
  origin: 'left',
  distance: '100px',
  duration: 2000,
  delay: 200
}

ScrollReveal().reveal('.shoe', slideDown);
ScrollReveal().reveal('.title', slideRight);