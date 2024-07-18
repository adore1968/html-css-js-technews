const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("show");
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
