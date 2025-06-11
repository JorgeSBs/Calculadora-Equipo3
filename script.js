function calcular(operador) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = "Resultado: Ingresa ambos números.";
    return;
  }

  let total;
  switch (operador) {
    case '+':
      total = num1 + num2;
      break;
    case '-':
      total = num1 - num2;
      break;
    case '*':
      total = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultado.textContent = "Resultado: No se puede dividir entre 0.";
        return;
      }
      total = num1 / num2;
      break;
  }

  resultado.textContent = "Resultado: " + total;
}
