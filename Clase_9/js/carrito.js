import { confirmarAgregarProducto, confirmarEliminarProducto, mostrarToastExito } from "./notificaciones.js"

/* FUNCION QUE MANEJA EL AGREGADO DE UN PRODUCTO AL CARRITO */

export async function manejarAgregarAlCarrito(id, title, precio){
 const resultado= await confirmarAgregarProducto(title)

 if(resultado.isConfirmed){
  agregarAlCarrito(title, precio)
  mostrarToastExito("Producto agregado al carrito")
 }
}


/* FUNCION QUE AGREGA UN PRODUCTO AL CARRITO */

function agregarAlCarrito( title, precio){

  const divCarrito=document.getElementById("carrito")
  const itemCarrito=document.createElement("div")


  itemCarrito.innerHTML=`
    <span class="item-info"><strong>${title}</strong> - $${precio}</span>
    <button class="btn-eliminar">Eliminar</button>
  `

  //boton eliminar y su correspondiente evento
  const botonEliminar=itemCarrito.querySelector(".btn-eliminar")
  botonEliminar.addEventListener("click", function(){
    manejarEliminarDelCarrito(itemCarrito, title)
  })
  divCarrito.appendChild(itemCarrito)
}

/* FUNCION QUE MANEJA LA ELIMINACION DE UN PRODUCTO DEL CARRITO */

export async function manejarEliminarDelCarrito(itemCarrito, title){
 const resultado= await confirmarEliminarProducto(title)

 if(resultado.isConfirmed){
   itemCarrito.remove()
    mostrarToastExito("Producto Eliminado del carrito")
 }
}
