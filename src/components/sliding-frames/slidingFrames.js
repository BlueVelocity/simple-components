import redImg from "./images/red.png";
import greenImg from "./images/green.png";
import blueImg from "./images/blue.png";
import purpleImg from "./images/purple.png";

export default function () {
  let images = [redImg, greenImg, blueImg, purpleImg];
  const frameElement = document.querySelector(".frames");

  function showPicture() {
    frameElement.innerHTML = "";
    frameElement.appendChild(this.element);
  }

  images = images.map((image, index) => {
    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.setAttribute("data-img-id", index);

    return { element: imageElement, showPicture };
  });

  const frameAdvance = document.querySelector(".frame-advance");
  const frameBack = document.querySelector(".frame-back");

  frameAdvance.addEventListener("click", () => {
    const imgId = frameElement.firstChild.getAttribute("data-img-id");
    if (Number(imgId) + 1 < images.length) {
      images[Number(imgId) + 1].showPicture();
    } else {
      images[0].showPicture();
    }
  });

  frameBack.addEventListener("click", () => {
    const imgId = frameElement.firstChild.getAttribute("data-img-id");
    if (Number(imgId) - 1 >= 0) {
      images[Number(imgId) - 1].showPicture();
    } else {
      images[images.length - 1].showPicture();
    }
  });

  images[0].showPicture();
}
