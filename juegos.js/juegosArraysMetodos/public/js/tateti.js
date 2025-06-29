// Agrega aquí el contenido de tu JS de tatetidocument.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tateti-form");
  const container = document.getElementById("tateti-container");
  const turno = document.getElementById("turno");
  const casillas = document.querySelectorAll(".casilla");

  let board = Array(9).fill(null);
  let currentPlayer = "X";
  let mode = 2;
  let player1 = "";
  let player2 = "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    player1 = document.getElementById("player1").value || "Jugador 1";
    mode = parseInt(document.getElementById("mode").value);
    player2 = mode === 1 ? "Robot" : document.getElementById("player2").value || "Jugador 2";

    form.style.display = "none";
    container.classList.remove("oculto");
    updateTurn();
  });

  casillas.forEach(casilla => {
    casilla.addEventListener("click", () => {
      const index = parseInt(casilla.dataset.index);
      if (board[index] || checkWinner()) return;

      board[index] = currentPlayer;
      casilla.textContent = currentPlayer;

      if (checkWinner()) {
        turno.textContent = `${getPlayerName(currentPlayer)} gana!`;
        return;
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
      updateTurn();

      if (mode === 1 && currentPlayer === "O") {
        setTimeout(robotMove, 500);
      }
    });
  });

  function updateTurn() {
    turno.textContent = `Turno de ${getPlayerName(currentPlayer)}`;
  }

  function getPlayerName(symbol) {
    return symbol === "X" ? player1 : player2;
  }

  function checkWinner() {
    const wins = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    return wins.some(([a,b,c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  }

  function robotMove() {
    const empty = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
    const index = empty[Math.floor(Math.random() * empty.length)];
    board[index] = "O";
    casillas[index].textContent = "O";
    if (checkWinner()) {
      turno.textContent = `${player2} gana!`;
    } else {
      currentPlayer = "X";
      updateTurn();
    }
  }
  // End of DOMContentLoaded event listener


function volverInicio() {
  window.location.href = "/";
}
