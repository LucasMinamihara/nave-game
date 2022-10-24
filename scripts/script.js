document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  const nave = document.querySelector(".nave");
  const tiro = document.querySelector(".tiro");
  let positionTopBottom = 0;
  let positionLeftRight = 0;
  window.addEventListener("keydown", (e) => {
    if (e.key == " ") {
      tiro.style.display = "block";
    }
    if (e.key == "ArrowDown") {
      positionTopBottom += 20;
      nave.style.top = positionTopBottom + "px";
      console.log(positionTopBottom);
    }
    if (e.key == "ArrowUp") {
      positionTopBottom -= 20;
      nave.style.bottom = positionTopBottom + "px";
      console.log(positionTopBottom);
    }
    if (e.key == "ArrowRight") {
      positionLeftRight += 20;
      nave.style.right = positionLeftRight + "px";
      console.log(positionLeftRight);
    }
    if (e.key == "ArrowLeft") {
      positionLeftRight -= 20;
      nave.style.left = positionLeftRight + "px";
      console.log(positionLeftRight);
    }
  });
}
