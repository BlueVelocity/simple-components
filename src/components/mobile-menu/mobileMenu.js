export default function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuButtons = document.querySelectorAll(".mobile-menu-toggle");

  mobileMenu.addEventListener("click", (event) => event.stopPropagation());

  mobileMenuButtons.forEach((element) =>
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      mobileMenu.classList.toggle("reveal");
    }),
  );

  window.addEventListener("click", function () {
    if (mobileMenu.classList.contains("reveal")) {
      mobileMenu.classList.remove("reveal");
    }
  });
}
