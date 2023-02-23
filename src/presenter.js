import sumar from "./sumador";

const form = document.querySelector("#totalizador-form");

const cantidad = document.querySelector("#cantidad-item");
const div_cantidad = document.querySelector("#cantidad-item-div");

const precio = document.querySelector("#precio-item");
const div_precio = document.querySelector("#precio-item-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div_cantidad.innerHTML = "<p> Cantidad de item: " + cantidad.value + "</p>";
  div_precio.innerHTML = "<p> Precio de item: " + precio.value + "</p>";
});
