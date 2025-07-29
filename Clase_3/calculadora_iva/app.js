// Funciones básicas
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const calculoIva = (precio) => precio * 0.21;

// Entrada de datos por prompt
let precio1 = parseFloat(prompt("Ingresa el primer precio:"));
let precio2 = parseFloat(prompt("Ingresa el segundo precio:"));

// Verificamos si los valores ingresados son válidos
if (isNaN(precio1) || isNaN(precio2)) {
  alert("Por favor, ingresa valores numéricos válidos.");
} else {
  // Operaciones
  const sumaTotal = suma(precio1, precio2);
  const restaTotal = resta(precio1, precio2);

  const ivaSobreSuma = calculoIva(sumaTotal);
  const ivaSobreResta = calculoIva(restaTotal);

  // Salida formateada
  console.log(
    `Suma: $${sumaTotal.toFixed(2)} - IVA (21%): $${ivaSobreSuma.toFixed(2)}`
  );
  console.log(
    `Resta: $${restaTotal.toFixed(2)} - IVA (21%): $${ivaSobreResta.toFixed(2)}`
  );
}
