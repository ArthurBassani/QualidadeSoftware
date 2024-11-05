const btn = document.querySelector(".btn");
const contador = document.querySelector(".contador");
let i = 0;
btn.addEventListener("click", function (e) {
  i++;
  contador.innerHTML = i;
});
