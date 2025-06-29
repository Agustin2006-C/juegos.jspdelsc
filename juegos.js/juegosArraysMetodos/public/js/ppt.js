// Agrega aquí el contenido de tu JS de piedra papel o tijeraslet pptMode = 2;
let pptPlayer1 = "";
let pptPlayer2 = "";
let turnoActual = 1;
let eleccionJugador1 = "";

document.getElementById("ppt-form").addEventListener("submit", function (e) {
  e.preventDefault();
  pptPlayer1 = document.getElementById("ppt-player1").value || "Jugador 1";
  pptMode = parseInt(document.getElementById("ppt-mode").value);
  pptPlayer2 = pptMode === 1 ? "Robot" : document.getElementById("ppt-player2").value || "Jugador 2";

  document.getElementById("ppt-form").style.display = "none";
  document.getElementById("ppt-game").classList.remove("oculto");
  document.getElementById("ppt-turno").textContent = `Turno de ${pptPlayer1}`;
});

function seleccionar(eleccion) {
  if (pptMode === 1) {
    // Contra robot
    const opciones = ["piedra", "papel", "tijera"];
    const robot = opciones[Math.floor(Math.random() * 3)];
    mostrarResultado(eleccion, robot);
  } else {
    // Jugador vs Jugador
    if (turnoActual === 1) {
      eleccionJugador1 = eleccion;
      turnoActual = 2;
      document.getElementById("ppt-turno").textContent = `Turno de ${pptPlayer2}`;
    } else {
      mostrarResultado(eleccionJugador1, eleccion);
      turnoActual = 1;
      document.getElementById("ppt-turno").textContent = `Turno de ${pptPlayer1}`;
    }
  }
}

function mostrarResultado(j1, j2) {
  let resultado = "";
  if (j1 === j2) {
    resultado = "¡Empate!";
  } else if (
    (j1 === "piedra" && j2 === "tijera") ||
    (j1 === "papel" && j2 === "piedra") ||
    (j1 === "tijera" && j2 === "papel")
  ) {
    resultado = `${pptPlayer1} gana con ${j1} contra ${j2}`;
  } else {
    resultado = `${pptPlayer2} gana con ${j2} contra ${j1}`;
  }
  document.getElementById("ppt-resultado").textContent = resultado;
}
