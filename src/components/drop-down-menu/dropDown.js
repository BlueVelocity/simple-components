export default function () {
  const dropDowns = document.querySelectorAll(".drop-down-menu");
  dropDowns.forEach((currentElement) => {
    currentElement.firstElementChild.addEventListener("click", () => {
      dropDowns.forEach((element) => {
        if (element !== currentElement) {
          element.classList.remove("clicked");
        }
      });
      currentElement.classList.toggle("clicked");
    });
  });
}
