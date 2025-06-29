let secuencia = [];
let secuenciaUsuario = [];
let colores = ["rojo", "verde", "azul", "amarillo"];
let jugador = "";
let nivel = 0;

document.getElementById("simon-form").addEventListener("submit", function (e) {
  e.preventDefault();
  jugador = document.getElementById("simon-player").value;
  document.getElementById("simon-form").style.display = "none";
  document.getElementById("simon-game").classList.remove("oculto");
  document.getElementById("simon-turno").textContent = `Turno de ${jugador}`;
  siguienteNivel();
});

function siguienteNivel() {
  nivel++;
  document.getElementById("simon-status").textContent = `Nivel ${nivel}`;
  secuenciaUsuario = [];
  const nuevoColor = colores[Math.floor(Math.random() * 4)];
  secuencia.push(nuevoColor);
  reproducirSecuencia();
}

function reproducirSecuencia() {
  let i = 0;
  const intervalo = setInterval(() => {
    iluminar(secuencia[i]);
    i++;
    if (i >= secuencia.length) clearInterval(intervalo);
  }, 800);
}

function iluminar(color) {
  const boton = document.getElementById(color);
  boton.classList.add("activo");
  setTimeout(() => boton.classList.remove("activo"), 400);
}

colores.forEach(color => {
  document.getElementById(color).addEventListener("click", () => {
    secuenciaUsuario.push(color);
    iluminar(color);
    verificar();
  });
});

function verificar() {
  const i = secuenciaUsuario.length - 1;
  if (secuenciaUsuario[i] !== secuencia[i]) {
    document.getElementById("simon-status").textContent = `¡Perdiste, ${jugador}! Llegaste al nivel ${nivel}`;
    secuencia = [];
    nivel = 0;
    return;
  }

  if (secuenciaUsuario.length === secuencia.length) {
    setTimeout(siguienteNivel, 1000);
  }
}
