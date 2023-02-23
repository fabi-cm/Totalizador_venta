function descuento(cantidad) {
  var resp = 0;
  if (cantidad < 1000) {
    resp = 0;
  } else if (cantidad >= 1000 && cantidad < 3000) {
    resp = 3;
  } else if (cantidad >= 3000 && cantidad < 7000) {
    resp = 5;
  } else if (cantidad >= 7000 && cantidad < 10000) {
    resp = 7;
  } else if (cantidad >= 10000 && cantidad < 30000) {
    resp = 10;
  } else if (cantidad >= 30000) {
    resp = 15;
  }
  return resp;
}
export default descuento;
