let _juegos = 1;
let _juegoactual = 0;
let _ganajugador = 0;
let _ganamaquina = 0;
let jugadastotales = 1;

document.getElementById("jugadas").addEventListener("change", function () {
  jugadastotales = parseInt(this.value);
  resetJuego();
});

function jugar(jugadoropcion) {
  if (_juegoactual >= jugadastotales) {
    document.getElementById("resultado").innerHTML = `
            Jugador: ${_ganajugador} <br>
            Maquina: ${_ganamaquina}
        `;
    return;
  }

  const opciones = ["piedra", "papel", "tijera"];
  const opcionesMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  let _resultado = "";

  if (jugadoropcion === opcionesMaquina) {
    _resultado = "Empate!";
  } else if (
    (jugadoropcion === "piedra" && opcionesMaquina === "tijera") ||
    (jugadoropcion === "papel" && opcionesMaquina === "piedra") ||
    (jugadoropcion === "tijera" && opcionesMaquina === "papel")
  ) {
    _resultado = "¡Ganaste esta ronda!";
    _ganajugador++;
  } else {
    _resultado = "¡Perdiste esta ronda!";
    _ganamaquina++;
  }

  _juegoactual++;
  document.getElementById("resultado").innerHTML = `
        Ronda: ${_juegoactual} / ${jugadastotales} <br>
        Elegiste: ${jugadoropcion} <br>
        La máquina eligió: ${opcionesMaquina} <br>
        ${_resultado} <br>
        Puntaje: Jugador ${_ganajugador} - ${_ganamaquina} Máquina
    `;

  if (_juegoactual >= jugadastotales) {
    document.getElementById(
      "resultado"
    ).innerHTML += `<br>¡Juego terminado! Puntaje final: Jugador ${_ganajugador} - ${_ganamaquina} Máquina`;
  }
}

function resetJuego() {
  _juegoactual = 0;
  _ganajugador = 0;
  _ganamaquina = 0;
  document.getElementById("resultado").innerHTML = "";
}
