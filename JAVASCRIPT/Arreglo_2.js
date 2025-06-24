function ejecutarEjercicio10() {
  const frutas = document.getElementById("inputFrutas").value.split(";");
  let resultado = "";
  let i = 0;

  while (i < frutas.length) {
    resultado += frutas[i] + "<br>";
    i++;
  }

  document.getElementById("resultado10").innerHTML = resultado;
}
