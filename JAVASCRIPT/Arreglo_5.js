function ejecutarEjercicio13() {
  const palabra = document.getElementById("inputPalabra").value.toLowerCase();
  let vocales = 0;

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    if ("aeiou".includes(letra)) {
      vocales++;
    }
  }

  document.getElementById("resultado13").innerHTML = "Vocales: " + vocales;
}
