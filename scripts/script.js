document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  // let enemyLife = 3;
  const telaDoJogo = document.querySelector("#telaDoJogo");
  const nave = document.querySelector(".nave");
  const tiro = document.querySelector(".tiro");
  const inimigo = document.querySelector(".inimigo");
  let posicaoInimigoX;
  let posicaoInimigoY;
  let posicaoTiroX;
  let posicaoTiroY;
  let positionTopBottom = 0;
  let positionLeftRight = 0;
  window.addEventListener("keydown", async (e) => {
    if (e.key == " ") {
      tiro.style.display = "block";
      setTimeout(() => {
        tiro.style.display = "none";
      }, 200);
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
  try {
    setInterval(() => {
      let topAleatorio = Math.random() * 1000;
      let leftAleatorio = Math.random() * 1000;
      inimigo.style.left = leftAleatorio + "px";
      inimigo.style.top = topAleatorio + "px";
    }, 30);

    setInterval(() => {
      posicaoInimigoX = inimigo.getBoundingClientRect().x;
      posicaoInimigoY = inimigo.getBoundingClientRect().y;
    }, 2000);

    setInterval(() => {
      posicaoTiroX = tiro.getBoundingClientRect().x;
      posicaoTiroY = tiro.getBoundingClientRect().y;
    }, 100);

    setInterval(() => {
      if (
        posicaoInimigoX === posicaoTiroX &&
        posicaoInimigoY === posicaoTiroY
      ) {
        inimigo.style.display = "none";
        console.log("Acertou o inimigo!");
      }
    }, 10);
  } catch (err) {
    console.log(err);
  }

  // Enemy life
}
