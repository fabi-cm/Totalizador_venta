function precioTotal(precio_neto, cantidad_impuesto, descuento) {
    var total = 0;
    var cantDes = 0;
  
    if (descuento == 0) {
      total = precio_neto + cantidad_impuesto;
    }else{
      cantDes = (precio_neto * descuento)/100;
      total = (neto - cantDes) + cantidad_impuesto;
    }
    return total;
}
export default precioTotal;