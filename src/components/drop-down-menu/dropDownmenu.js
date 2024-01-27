export default function () {
  const dropDowns = document.querySelectorAll(".drop-down-menu");
  dropDowns.forEach((element) => {
    element.firstElementChild.addEventListener("click", () => {
      element.classList.toggle("clicked");
    });
  });
}
