function ejecutarEjercicio16() {
  const numeros = document.getElementById("inputNumeros").value.split(";").map(Number);
  let resultado = "";

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    let suma = 0;
    let d = 1;

    while (d < numero) {
      if (numero % d === 0) {
        suma += d;
      }
      d++;
    }

    resultado += `Suma de divisores de ${numero}: ${suma}<br>`;
  }

  document.getElementById("resultado16").innerHTML = resultado;
}
