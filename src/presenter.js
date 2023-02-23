import porcentaje_estado from "./porcentaje_estado";
import descuento from "./descuento";
import impuesto from "./impuesto";

const form = document.querySelector("#totalizador-form");
const cantidad = document.querySelector("#cantidad-item");
const precio = document.querySelector("#precio-item");
const codigo_estado = document.querySelector("#codigo-estado");

const div_cantidad = document.querySelector("#cantidad-item-div");
const div_precio = document.querySelector("#precio-item-div");
const div_codigo_estado = document.querySelector("#codigo-estado-div");
const div_precio_neto = document.querySelector("#precio-neto-div");
const div_descuento = document.querySelector("#precio-descuento-div");
const div_impuesto = document.querySelector("#impuesto-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  var porcentaje_impuesto = porcentaje_estado(codigo_estado.value);
  var precio_neto = precio.value * cantidad.value;
  var cantidad_descuento = descuento(cantidad.value);
  var cantidad_impuesto = impuesto(precio_neto, porcentaje_impuesto);

  div_cantidad.innerHTML = "<p> Cantidad de item: " + cantidad.value + "</p>";
  div_precio.innerHTML = "<p> Precio de item: " + precio.value + "</p>";
  div_codigo_estado.innerHTML ="<p> Codigo del Estado de " +codigo_estado.value +": " +porcentaje_impuesto +"%</p>";
  div_precio_neto.innerHTML ="<p> Precio Neto:(" +cantidad.value +"*$" +precio.value +"):$" +precio_neto +"</p>";
  div_descuento.innerHTML ="<p> Porcentaje de Descuento: " + cantidad_descuento + "%</p>";
  div_impuesto.innerHTML ="<p> Impuesto para " +codigo_estado.value +"(" +porcentaje_impuesto +"): $" +cantidad_impuesto +"</p>";
});
