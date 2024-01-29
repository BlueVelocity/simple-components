import redImg from "./images/red.png";
import greenImg from "./images/green.png";
import blueImg from "./images/blue.png";
import purpleImg from "./images/purple.png";

export default function () {
  let images = [blueImg, greenImg, purpleImg, redImg];
  const frameElement = document.querySelector(".frame");
  const frameAdvanceElement = document.querySelector(".frame-a");
  const frameBackElement = document.querySelector(".frame-b");

  function highlightDot(id) {
    document
      .querySelectorAll("[data-dot-id]")
      .forEach((element) => element.classList.remove("highlighted-dot"));

    const dotElement = document.querySelector(`[data-dot-id="${id}"]`);

    dotElement.classList.add("highlighted-dot");
  }

  function showPicture() {
    frameElement.innerHTML = "";
    frameElement.appendChild(this.element);
    highlightDot(this.index);
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

    const dotElement = document.createElement("span");
    dotElement.innerText = ".";
    dotElement.setAttribute("data-dot-id", index);

    const dotsContainer = document.querySelector(".frame-dots");
    dotsContainer.appendChild(dotElement);

    dotElement.addEventListener("click", (event) => {
      event.stopPropagation();
      goToFrame(event.target.getAttribute("data-dot-id"));
    });

    return {
      index,
      element: imageElement,
      showPicture,
      showPictureA,
      showPictureB,
    };
  });

  const frameAdvance = document.querySelector(".frame-advance");
  const frameBack = document.querySelector(".frame-back");

  function advanceFrame() {
    const imgId = frameElement.firstChild.getAttribute("data-img-id");
    if (Number(imgId) + 2 === images.length) {
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
    emphasizeMainFrame();
  }

  function goBackFrame() {
    const imgId = frameElement.firstChild.getAttribute("data-img-id");
    if (Number(imgId) - 1 < 0) {
      images[images.length - 2].showPictureB();
      images[images.length - 1].showPicture();
      images[0].showPictureA();
    } else if (Number(imgId) - 1 === 0) {
      images[Number(imgId)].showPictureA();
      images[0].showPicture();
      images[images.length - 1].showPictureB();
    } else {
      images[Number(imgId)].showPictureA();
      images[Number(imgId) - 1].showPicture();
      images[Number(imgId) - 2].showPictureB();
    }
    emphasizeMainFrame();
  }

  function goToFrame(imgId) {
    if (Number(imgId) === images.length - 1) {
      images[Number(imgId) - 1].showPictureB();
      images[Number(imgId)].showPicture();
      images[0].showPictureA();
    } else if (Number(imgId) === 0) {
      images[images.length - 1].showPictureB();
      images[Number(imgId)].showPicture();
      images[1].showPictureA();
    } else {
      images[Number(imgId) - 1].showPictureB();
      images[Number(imgId)].showPicture();
      images[Number(imgId) + 1].showPictureA();
    }
    emphasizeMainFrame();
  }

  function emphasizeMainFrame() {
    frameElement.classList.toggle("bounce");
    setTimeout(() => frameElement.classList.toggle("bounce"), 200);
  }

  frameAdvance.addEventListener("click", () => {
    advanceFrame();
  });

  frameBack.addEventListener("click", () => {
    goBackFrame();
  });

  images[images.length - 1].showPictureB();
  images[0].showPicture();
  images[1].showPictureA();

  window.setInterval(advanceFrame, 10000);
}
