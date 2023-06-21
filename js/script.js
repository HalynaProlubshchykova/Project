const burger = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

new Swiper(".image-slider", {
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
