function ejecutarEjercicio14() {
  const palabra1 = document.getElementById("palabra1").value;
  const palabra2 = document.getElementById("palabra2").value;
  let resultado = "";

  const longitudMin = Math.min(palabra1.length, palabra2.length);

  for (let i = 0; i < longitudMin; i++) {
    const iguales = palabra1[i] === palabra2[i] ? "Sí" : "No";
    resultado += `¿Son iguales en posición ${i}? ${iguales}<br>`;
  }

  document.getElementById("resultado14").innerHTML = resultado;
}
