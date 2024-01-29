import redImg from "./images/red.png";
import greenImg from "./images/green.png";
import blueImg from "./images/blue.png";
import purpleImg from "./images/purple.png";

export default function () {
  let images = [redImg, greenImg, blueImg, purpleImg];
  const frameElement = document.querySelector(".frame");
  const frameAdvanceElement = document.querySelector(".frame-a");
  const frameBackElement = document.querySelector(".frame-b");

  function showPicture() {
    frameElement.innerHTML = "";
    frameElement.appendChild(this.element);
  }

  function showPictureA() {
    frameAdvanceElement.innerHTML = "";
    frameAdvanceElement.appendChild(this.element);
  }

  function showPictureB() {
    frameBackElement.innerHTML = "";
    frameBackElement.appendChild(this.element);
  }

  images = images.map((image, index) => {
    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.setAttribute("data-img-id", index);

    return { element: imageElement, showPicture, showPictureA, showPictureB };
  });

  const frameAdvance = document.querySelector(".frame-advance");
  const frameBack = document.querySelector(".frame-back");

  frameAdvance.addEventListener("click", () => {
    const imgId = frameElement.firstChild.getAttribute("data-img-id");
    if (Number(imgId) === images.length) {
      images[images.length].showPictureB();
      images[0].showPicture();
      images[1].showPictureA();
    } else if (Number(imgId) + 2 === images.length) {
      images[Number(imgId)].showPictureB();
      images[Number(imgId) + 1].showPicture();
      images[0].showPictureA();
    } else if (Number(imgId) + 1 < images.length) {
      images[Number(imgId)].showPictureB();
      images[Number(imgId) + 1].showPicture();
      images[Number(imgId) + 2].showPictureA();
    } else {
      images[images.length - 1].showPictureB();
      images[0].showPicture();
      images[1].showPictureA();
    }
  });

  frameBack.addEventListener("click", () => {
    const imgId = frameElement.firstChild.getAttribute("data-img-id");
    if (Number(imgId) === images.length) {
      images[images.length].showPictureA();
      images[0].showPicture();
      images[1].showPictureB();
    } else if (Number(imgId) + 2 === images.length) {
      images[Number(imgId)].showPictureA();
      images[Number(imgId) + 1].showPicture();
      images[0].showPictureB();
    } else if (Number(imgId) + 1 < images.length) {
      images[Number(imgId)].showPictureA();
      images[Number(imgId) + 1].showPicture();
      images[Number(imgId) + 2].showPictureB();
    } else {
      images[images.length - 1].showPictureA();
      images[0].showPicture();
      images[1].showPictureB();
    }
  });

  images[images.length - 1].showPictureB();
  images[0].showPicture();
  images[1].showPictureA();
}
