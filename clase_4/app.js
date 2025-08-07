/* 
const entidad={
  clave:valor,
  clave:valor,
  clave:valor

}
*/

let nombre = "Fernnado";
let edad = 16;
let ciudad = "Mendoza";

const persona = {
  nombre: "Fernnado",
  edad: 16,
  ciudad: "Mendoza",
};

/* const tarea={

  titulo:
  completada:true

} */

/*
const producto={
  nombre:"",
  precio:"1883"
}
   */

console.log(persona.ciudad);
console.log(persona.edad);

console.log(persona["nombre"]);

persona.edad = 19;
persona["edad"] = 20;

console.log(persona);

const miArray = [1, 2, 3];
console.log(array.length);

/* FOR TRADICIONAL PARA RECORRER ARRAY */
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

//TEMPLATE FOR QUE GENERA EL MISMO VISUAL STUDIO
for (let index = 0; index < nombres.length; index++) {
  const element = nombres[index];
  console.log(element);
}

for (let nombre of nombres) {
  console.log(nombre);
}

/* |||||||||||||||||||||||||| METODOS ||||||||||||||||||||||||||||||||||| */

const nombres = ["Fran", "Fernando", "Carlos", "Juan", "Ana"];

/* push() */
nombres.push("Tomas");

/* unshift() */
nombres.unshift("Luciano");

/* pop() */
nombres.pop();
console.log(nombres.pop());

/* shift */
nombres.shift();

//splice()
nombres.splice(1, 2, "Jose");

const nombres1 = nombres.slice(1, 3);
console.log(nombres);

/* |||||||||||||||||||||||||| SISTEMA INVENTARIO ||||||||||||||||||||||||||||||||| */

const inventario = [];

const agregarProductos = (nombre, precio, stock) => {
  inventario.push({
    nombre: nombre,
    precio: precio,
    stock: stock,
  });
};

const mostrarListadoDeProductos = () => {
  let listado = `Listado de Productos\n`;

  for (let i = 0; i < inventario.length; i++) {
    listado += `
    - Nombre: ${inventario[i].nombre}
    - Precio: $${inventario[i].precio}
    - Stock: ${inventario[i].stock}
    `;
  }
  return console.log(listado);
};

const eliminarProductos = (nombre) => {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      inventario.splice(i, 1);
      mostrarListadoDeProductos();
      return;
    }
  }

  console.log("No se encontró el producto");
};

const modificarStock = (nombre, nuevoStock) => {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      inventario[i].stock = nuevoStock;

      alert(`El stock de ${nombre} ha sido actualizado a ${nuevoStock}`);

      return;
    }
  }
  console.log(`No se encontró el producto ${nombre}`);
};

agregarProductos("Arroz", 1500, 90);
agregarProductos("Tomate", 1500, 80);
agregarProductos("Leche", 1500, 100);
mostrarListadoDeProductos();

eliminarProductos("Arroz");
modificarStock("Leche", 150);
mostrarListadoDeProductos();
