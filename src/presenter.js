import sumar from "./sumador";

const cantidad = document.querySelector("#cantidad-item")
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidadNumber = Number.parseInt(cantidad.value);

  div.innerHTML = "<p> Cantidad item:" + cantidadNumber + "</p>";
});
