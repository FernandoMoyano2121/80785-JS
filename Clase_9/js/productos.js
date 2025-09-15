//FUNCION QUE OBTIENE EL LISTADO DE PRODUCTOS DE LA API

import { manejarAgregarAlCarrito } from "./carrito.js";

async function ObtenerListaProductos() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  return data;
}

//FUNCION QUE MUESTRA LA TARJETA DE PRODUCTO

export async function mostrarCardsProductos() {
  try {
    const productList = await ObtenerListaProductos();

    productList.forEach((producto) => {
      crearTarjetaProducto(producto);
    });
  } catch (error) {
    console.log(error);
  }
}

//FUNCION QUE CREA LA TARJETA DEL PRODUCTO

function crearTarjetaProducto(producto) {
  const div = document.getElementById("output");
  const tarjeta = document.createElement("div");

  tarjeta.innerHTML = ` 
    <img src="${producto.image}" alt="${producto.title}" class="product-image">
    <h4>${producto.title}</h4>
    <p class="product-price">$${producto.price}</p>
    <button class="btn-comprar">Agregar</button>
  `;

  //boton agregar y su correspondiente evento
  const botonComprar=tarjeta.querySelector(".btn-comprar")
  botonComprar.addEventListener("click", function(){
    manejarAgregarAlCarrito(producto.id, producto.title, producto.price)
  })

  div.appendChild(tarjeta);
}

