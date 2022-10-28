document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  // let enemyLife = 3;
  const telaDoJogo = document.querySelector("#telaDoJogo");
  const nave = document.querySelector(".nave");
  const tiro = document.querySelector(".tiro");
  const inimigo = document.querySelector(".inimigo");
  let positionTopBottom = 0;
  let positionLeftRight = 0;
  window.addEventListener("keydown", (e) => {
    if (e.key == " ") {
      tiro.style.display = "block";
      setTimeout(() => {
        tiro.style.display = "none";
      }, 100);
    }
    if (e.key == "Control") {
      nave.classList.toggle("virarNave");
    }
    if (e.key == "ArrowDown") {
      positionTopBottom += 20;
      nave.style.top = positionTopBottom + "px";
    }
    if (e.key == "ArrowUp") {
      positionTopBottom -= 20;
      nave.style.top = positionTopBottom + "px";
    }
    if (e.key == "ArrowRight") {
      positionLeftRight += 20;
      nave.style.left = positionLeftRight + "px";
    }
    if (e.key == "ArrowLeft") {
      positionLeftRight -= 20;
      nave.style.left = positionLeftRight + "px";
    }
  });


  // setInterval(() => {
  //   let topAleatorio = Math.random() * 1000;
  //   let leftAleatorio = Math.random() * 1000;
  //   inimigo.style.left = leftAleatorio + "px";
  //   inimigo.style.top = topAleatorio + "px";
  // }, 10);

  // Enemy life
}
