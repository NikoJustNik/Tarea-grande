function ejecutarEjercicio15() {
  const numeros = document.getElementById("inputNumeros").value.split(";").map(Number);
  let resultado = "";

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    resultado += `Divisores de ${numero}:<br>`;
    let d = 1;
    while (d <= numero) {
      if (numero % d === 0) {
        resultado += d + "<br>";
      }
      d++;
    }
  }

  document.getElementById("resultado15").innerHTML = resultado;
}
