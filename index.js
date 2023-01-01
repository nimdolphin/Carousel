const elems = document.getElementsByClassName("arcticmonkeys");

const point = document.getElementsByClassName("point");

elems[0].style.display = "block";

point[0].style.background = "Burlywood";

const clickL = document.getElementById("clickL");
const clickR = document.getElementById("clickR");

let index = 0;

function clickLeft() {}

function clickRight() {}

clickL.addEventListener(
  "click",
  (clickLeft = () => {
    if (index === 0) {
      elems[index].style.display = "none";
      point[index].style.background = "BlanchedAlmond";

      index = elems.length - 1;

      elems[index].style.display = "block";
      point[index].style.background = "Burlywood";
    } else {
      elems[index].style.display = "none";
      point[index].style.background = "BlanchedAlmond";

      index--;

      elems[index].style.display = "block";
      point[index].style.background = "Burlywood";
    }
  })
);

clickR.addEventListener(
  "click",
  (clickRight = () => {
    if (index >= elems.length - 1) {
      elems[index].style.display = "none";
      point[index].style.background = "BlanchedAlmond";

      index = 0;

      elems[index].style.display = "block";
      point[index].style.background = "Burlywood";
    } else {
      elems[index].style.display = "none";
      point[index].style.background = "BlanchedAlmond";

      index++;

      elems[index].style.display = "block";
      point[index].style.background = "Burlywood";
    }
  })
);
