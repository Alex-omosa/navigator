const navSlide = () => {
  const humbuger = document.querySelector(".humbuger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //toggle nav
  humbuger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animatelinks
    navLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 +
          0.2}s`;
      }
    });
    //animate humburger
    humbuger.classList.toggle("toggle");
  });
};
navSlide();
