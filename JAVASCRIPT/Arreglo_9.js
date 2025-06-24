function ejecutarNumeroCell() {
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

    if (suma === numero) {
      resultado += `${numero} es un número perfecto<br>`;
    } else {
      resultado += `${numero} NO es un número perfecto<br>`;
    }
  }

  document.getElementById("resultado17").innerHTML = resultado;
}
