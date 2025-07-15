/*
||||||||||||||||||||||PALABRAS RESERVADAS|||||||||||||||||||||||||||||||

break / case / catch / continue
default / let / delete / do / while / else / finally / if /
in / instanceof / new / return /switch / this / throw / try
typeof / var / void / while / with /

*/

/* |||||||||||||||||||||||OPERADORES ARITMETICOS||||||||||||||||||||||| */

// Suma: +
// Resta: -
// Multiplicación: *
// División: /
// Módulo (resto de la división): %
// Incremento: ++
// Decremento: --

/* |||||||||||||||||||||||| VARIABLES Y TIPOS DE DATOS |||||||||||||||||||||*/

/* Declaracion con var , en desuso */
var cantidad;
/* tipo de dato string */
let nombre = "fernando";
/* Reasignacion de valor en variables declaradas con let */
nombre = "Juan";

/* estandar para variables - camelCase */

/* Tipo de dato boolean */
let esVerdad = true;
/* Tipo de dato null */
let nulo = null;
/* Tipo de dato undefined */
let indefinido = undefined;
/* Tipo de dato number */
let numero = 8;

/* ERROR app.js:37 Uncaught TypeError: Assignment to constant variable
No se puede redefinir un valor cuando la variable se declara con const */

const miNombre = "Lucas";
miNombre = "juan";

/* |||||||||||||||||| OPERACIONES BÁSICAS ||||||||||||||||||||||||||||| */

let x = 10; // Asignación básica (=)
x += 5; // Equivalente a: x = x + 5;
x -= 2; // Equivalente a: x = x - 2;
x *= 3; // Equivalente a: x = x * 3;
x /= 2; // Equivalente a: x = x / 2;

console.log(x); // Muestra el resultado final

/*|||||||||||||||||||| VIENDO SALIDAS DE DATOS POR CONSOLE.LOG() |||||||||||||||||||||||||*/

let numero1 = 5;
console.log("hola");
console.log(numero1);

/*||||||||||||||||||||| INGRESANDO DATOS POR PROMPT() ||||||||||||||||||||||*/

/* guardamos el dato en una variable */
let edad = prompt("Ingresa tu edad");
/* podemos ver el valor contenido en la variable por medio de console.log() */
console.log(edad);
/* tambien podemos usar alert() */
alert(edad);
