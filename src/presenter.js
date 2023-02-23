import impuesto from "./impuesto";

const form = document.querySelector("#totalizador-form");

const cantidad = document.querySelector("#cantidad-item");
const div_cantidad = document.querySelector("#cantidad-item-div");

const precio = document.querySelector("#precio-item");
const div_precio = document.querySelector("#precio-item-div");

const codigo_estado = document.querySelector("#codigo-estado");
const div_codigo_estado = document.querySelector("#codigo-estado-div"); 


form.addEventListener("submit", (event) => {
  event.preventDefault();

  div_cantidad.innerHTML = "<p> Cantidad de item: " + cantidad.value + "</p>";
  div_precio.innerHTML = "<p> Precio de item: " + precio.value + "</p>";
  var cantidad_impuesto = impuesto(codigo_estado.value)
  div_codigo_estado.innerHTML = "<p> Codigo del Estado de "+ codigo_estado.value +": " + cantidad_impuesto + "%</p>";
});

