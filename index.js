const images = [
  "./img/photo1.jpg",
  "./img/photo2.jpg",
  "./img/photo3.jpg",
  "./img/photo4.jpg",
  "./img/photo5.jpg",
  "./img/photo6.jpg",
];

const container = document.getElementById("imgContainer");

function createImages() {
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.className = "arcticmonkeys";

    img.src = images[i];
    container.appendChild(img);
  }
}
createImages();

const elems = document.getElementsByClassName("arcticmonkeys");

const point = document.getElementsByClassName("point");

elems[0].style.display = "block";

point[0].style.background = "Burlywood";

function createButtons() {
  const clickL = document.getElementById("clickL");
  const clickR = document.getElementById("clickR");

  let index = 0;

  function addChangeNone() {
    elems[index].style.display = "none";
    point[index].style.background = "BlanchedAlmond";
  }

  function addChangeBlock() {
    elems[index].style.display = "block";
    point[index].style.background = "Burlywood";
  }

  clickL.addEventListener(
    "click",
    (clickLeft = () => {
      if (!index) {
        addChangeNone();

        index = elems.length - 1;

        addChangeBlock();
      } else {
        addChangeNone();

        index--;

        addChangeBlock();
      }
    })
  );

  clickR.addEventListener(
    "click",
    (clickRight = () => {
      if (index >= elems.length - 1) {
        addChangeNone();

        index = 0;

        addChangeBlock();
      } else {
        addChangeNone();

        index++;

        addChangeBlock();
      }
    })
  );
}

createButtons();
