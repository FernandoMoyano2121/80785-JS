export function confirmarAgregarProducto(nombreProducto) {
  return Swal.fire({
    title: '¿Agregar al carrito?',        // Título principal del modal
    text: `¿Deseas agregar "${nombreProducto}" al carrito?`, // Texto descriptivo 
    icon: 'question',                     // Ícono: question, success, error, warning,
    showCancelButton: true,               // Muestra botón de cancelar
    confirmButtonText: 'Sí, agregar',     // Texto del botón de confirmación
    cancelButtonText: 'Cancelar',         // Texto del botón de cancelar
    confirmButtonColor: '#3498db',      // Color del botón confirmar (azul)
    cancelButtonColor: '#95a5a6'        // Color del botón cancelar (gris)
  });
}

export function confirmarEliminarProducto(nombreProducto) {
  return Swal.fire({
    title: '¿Eliminar del carrito?',      // Título principal del modal
    text: `¿Deseas eliminar "${nombreProducto}" del carrito?`, // Texto descriptivo
    icon: 'warning',                      // Ícono de advertencia (triángulo amarillo)
    showCancelButton: true,               // Muestra botón de cancelar
    confirmButtonText: 'Sí, eliminar',    // Texto del botón de confirmación
    cancelButtonText: 'Cancelar',         // Texto del botón de cancelar
    confirmButtonColor: '#e74c3c',      // Color del botón confirmar (rojo)
    cancelButtonColor: '#95a5a6'        // Color del botón cancelar (gris)
  });
}

export function mostrarToastExito(mensaje) {
  Swal.fire({
    toast: true,                          // Activa modo toast (notificación pequeña)
    position: 'top-end',                  // Posición: top-start, top-end, bottom-start
    icon: 'success',                      // Ícono de éxito (check verde)
    title: mensaje,                       // Mensaje a mostrar
    showConfirmButton: false,             // No muestra botón de OK
    timer: 3000,                          // Auto-cierra en 3000ms (3 segundos)
    timerProgressBar: true                // Muestra barra de progreso del timer
  });
}

export function mostrarToastError(mensaje) {
  Swal.fire({
    toast: true,                          // Activa modo toast (notificación pequeña)
    position: 'top-end',                  // Posición en esquina superior derecha
    icon: 'error',                        // Ícono de error (X roja)
    title: mensaje,                       // Mensaje a mostrar
    showConfirmButton: false,             // No muestra botón de OK
    timer: 3000,                          // Auto-cierra en 3000ms (3 segundos)
    timerProgressBar: true                // Muestra barra de progreso del timer
  });
}