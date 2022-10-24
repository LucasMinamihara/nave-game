document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  const telaDoJogo = document.querySelector("#telaDoJogo");
  const nave = document.querySelector(".nave");
  const tiro = document.querySelector(".tiro");
  const inimigos = `<div class="inimigos"></div>`;
  let positionTopBottom = 0;
  let positionLeftRight = 0;
  window.addEventListener("keydown", (e) => {
    console.log(e.key);
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
  // Spawn de inimigos
  setInterval(() => {
    
    let topAleatorio = Math.random() * 1000;
    let leftAleatorio = Math.random() * 1000;
    telaDoJogo.insertAdjacentElement(inimigos);
  }, 20000);
}
