const IVA = 0.21;

/**
 * @description Función que retorna un precio con descuento
 * @param {number} precio
 * @param {number} descuento
 * @returns {number} Precio con descuento
 */
const aplicarDescuento = (precio, descuento) => {
  let precioConDescuento = precio - (precio * descuento) / 100;
  return precioConDescuento;
};

/**
 * @description Función que retorna un precio con IVA
 * @param {number} precio
 * @returns {number} Precio con impuestos
 */
const calcularImpuestos = (precio) => {
  let precioConImpuestos = precio + precio * IVA;
  return precioConImpuestos;
};

alert("🟢🟢 BIENVENIDO A TU GESTOR DE PRODUCTOS 🟢🟢");

let precioTotal = 0;
let totalDeProductos = `Productos:\n`;
let agregar = confirm("¿Quieres agregar un producto?");

while (agregar) {
  let nombreDelProducto = prompt("Ingresa el nombre del producto");
  let precioDelProducto;

  do {
    precioDelProducto = parseFloat(
      prompt("Por favor ingresa el precio del producto (número positivo)")
    );

    if (isNaN(precioDelProducto) || precioDelProducto < 0) {
      alert("Precio inválido. Intenta nuevamente.");
    }
  } while (isNaN(precioDelProducto) || precioDelProducto < 0);

  const precioConIva = calcularImpuestos(precioDelProducto);
  precioTotal += precioConIva;
  totalDeProductos += `- ${nombreDelProducto} - $${precioConIva.toFixed(2)}\n`;

  agregar = confirm("¿Quieres agregar un nuevo producto?");
}

if (precioTotal > 0) {
  let descuento = parseFloat(
    prompt("Por favor ingresa el porcentaje de descuento")
  );

  if (isNaN(descuento) || descuento < 0 || descuento > 100) {
    descuento = 0;
    alert("Descuento inválido. Se aplicará 0% de descuento.");
  }

  const precioFinal = aplicarDescuento(precioTotal, descuento);
  alert(
    `${totalDeProductos}\n
        - Precio total con IVA: $ ${precioTotal.toFixed(2)}\n
        - Descuento aplicado: ${descuento}%\n
        - Precio final: $${precioFinal.toFixed(2)}`
  );
} else {
  alert("No has agregado ningún producto.");
}
