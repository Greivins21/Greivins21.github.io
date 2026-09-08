// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// nav background on scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// scroll-reveal for section stubs (and any future .reveal elements)
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}
