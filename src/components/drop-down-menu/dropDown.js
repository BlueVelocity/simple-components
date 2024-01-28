export default function () {
  const dropDowns = document.querySelectorAll(".drop-down-menu");
  dropDowns.forEach((currentElement) => {
    currentElement.firstElementChild.addEventListener("click", (event) => {
      event.stopPropagation();
      dropDowns.forEach((element) => {
        if (element !== currentElement) {
          element.classList.remove("clicked");
        }
      });
      currentElement.classList.toggle("clicked");
    });

    window.addEventListener("click", function () {
      if (currentElement.classList.contains("clicked")) {
        currentElement.classList.remove("clicked");
      }
    });
  });
}
