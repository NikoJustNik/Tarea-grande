function ejecutarEjercicio11() {
  const palabra = document.getElementById("inputPalabra").value;
  let resultado = "";

  for (let i = 0; i < palabra.length; i++) {
    resultado += palabra[i] + "<br>";
  }

  document.getElementById("resultado11").innerHTML = resultado;
}
