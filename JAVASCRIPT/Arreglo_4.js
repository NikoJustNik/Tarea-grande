function ejecutarEjercicio12() {
  const palabra = document.getElementById("inputPalabra").value;
  let j = 0;
  let resultado = "";

  while (j < palabra.length) {
    resultado += palabra[j] + "<br>";
    j++;
  }

  document.getElementById("resultado12").innerHTML = resultado;
}
