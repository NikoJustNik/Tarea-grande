function ejecutarEjercicio9() {
  const input = document.getElementById("inputFrutas").value;
  const frutas = input.split(";");
  let resultado = "";

  for (let i = 0; i < frutas.length; i++) {
    resultado += frutas[i] + "<br>";
  }

  document.getElementById("resultado9").innerHTML = resultado;
}
