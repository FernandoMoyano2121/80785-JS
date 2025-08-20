const saludo = "hola";
console.log(saludo);

saludo = "hola como estas?";
console.log(saludo);

function saludar(mensaje) {
  console.log(mensaje);
}

saludar("dshasdha");
saludar("hhfhfajshkjfahsdkjfhsakhdfajid");

/* --------------------------------------------- */

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

console.log(sumar(5, 3)); // 8
console.log(multiplicar(5, 3)); // 15

//--------------------------------------------------------------------
//                   FUNCIONES DE ORDEN SUPERIOR
//--------------------------------------------------------------------

// Función de orden superior que acepta otra función para realizar la operación
function operar(a, b, operacion) {
  return operacion(a, b);
}

// Función para sumar
function sumar(a, b) {
  return a + b;
}

// Función para multiplicar
function multiplicar(a, b) {
  return a * b;
}

console.log(operar(5, 3, sumar)); // 8
console.log(operar(5, 3, multiplicar)); // 15

//--------------------------------------------------------------------
//                   EJEMPLO VERIFICAR EDAD                          |
//--------------------------------------------------------------------

function puedeVotar(edad) {
  return edad > 18;
}

function puedeBeber(edad) {
  return edad >= 21;
}

function verificarEdad(edad, fn) {
  return fn(edad);
}

verificarEdad(18, puedeBeber);

/* ARRAY PRINCIPAL */
const miArray = [1, 2, 3, 4, 5];

for (let index = 0; index < miArray.length; index++) {
  const element = miArray[index];
}

//------------------------------------------------------------------
//                            FOREACH                              |
//------------------------------------------------------------------

miArray.forEach((elemento) => {
  console.log(elemento);
});

const nuevoArray = [];

//------------------------------------------------------------------
//                   FOREACH CONSTRUCCION CASERA                   |
//------------------------------------------------------------------

function porCadaElemento(array, funcionInferior) {
  for (let elemento of array) {
    funcionInferior(elemento);
  }
}

porCadaElemento(miArray, console.log);

//------------------------------------------------------------------
//                             FIND                                |
//------------------------------------------------------------------

const miArray1 = [1, 2, 3, 4, 5, 15];
const numeroMayorADiez = miArray1.find((element) => element > 10);

console.log(numeroMayorADiez);

//------------------------------------------------------------------
//                             FILTER()                            |
//------------------------------------------------------------------

const cursos = [
  { nombre: "Javascript", precio: 15000 },
  { nombre: "ReactJS", precio: 22000 },
  { nombre: "AngularJS", precio: 22000 },
  { nombre: "Desarrollo Web", precio: 16000 },
];

const cursosCaros = cursos.filter((el) => el.precio > 15000);
console.log(cursosCaros);

//------------------------------------------------------------------
//                             MAP()                                |
//------------------------------------------------------------------

const miArray2 = [1, 2, 3, 4, 5, 15];

const numerosXdos = miArray2.map((el) => el * 2);
console.log(numerosXdos);

const nombreCursos = cursos.map((el) => el.nombre);
console.log(nombreCursos);

//------------------------------------------------------------------
//                             SOME()                               |
//------------------------------------------------------------------

const isJavascript = cursos.some((el) => el.nombre === "Javascript");
console.log(isJavascript);

//------------------------------------------------------------------
//                             REDUCE()                             |
//------------------------------------------------------------------

const miArray3 = [1, 2, 3, 4, 5, 15];
const total = miArray3.reduce(
  (acumulador, elemento) => acumulador + elemento,
  0
);
console.log(total);

//------------------------------------------------------------------
//                        PEQUEÑO E-COMMERCE                         |
//------------------------------------------------------------------

const productos = [
  {
    id: 1,
    producto: "Pan",
    precio: 9000,
  },
  {
    id: 2,
    producto: "Leche",
    precio: 600,
  },
  {
    id: 3,
    producto: "Tomate",
    precio: 200,
  },
  {
    id: 4,
    producto: "Pera",
    precio: 125,
  },
];

const productoEncontrado = productos.find((producto) => producto.id === 3);
console.log(productoEncontrado);

const productosBaratos = productos.filter((producto) => producto.precio < 600);

productosBaratos.forEach((productoBarato) =>
  console.log(
    `${productoBarato.id} ${productoBarato.producto} ${productoBarato.precio}`
  )
);

const existe = productos.some((producto) => producto.producto === "Pera");
console.log(existe);

const listadoDeProductos = productos.map((producto) => producto.producto);
console.log(listadoDeProductos);

listadoDeProductos.forEach(() => {});
