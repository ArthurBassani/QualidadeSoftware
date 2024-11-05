const btn = document.querySelector(".btn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const soma = document.getElementById("soma");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const res = document.querySelector(".resultados");
const item = document.createElement("li");

btn.addEventListener("click", function (e) {
  if (num1.value == NaN || num2 == NaN) {
    console.log("Informe somente números");
    return;
  }
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  soma.innerHTML = `Soma:  ${valor1 + valor2}`;
  sub.innerHTML = `Subtração:  ${valor1 - valor2}`;
  mult.innerHTML = `Multiplicação:  ${valor1 * valor2}`;

  switch (valor2) {
    case 0:
      div.innerHTML = `Divisão:  Impossível dividir por 0`;
      break;
    default:
      div.innerHTML = `Divisão:  ${valor1 / valor2}`;
      break;
  }
  if (num1.value == valor2) {
    item.textContent = "Números são iguais";
    res.appendChild(item);
  } else {
    item.textContent = "Números não são iguais";
    res.appendChild(item);
    return;
  }
});
