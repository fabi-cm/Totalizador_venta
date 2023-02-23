function impuesto(precio_neto, codigo_estado) {
    return (precio_neto*codigo_estado)/100;
}
export default impuesto;