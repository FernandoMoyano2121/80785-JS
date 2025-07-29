let saludo = "Hola como estás?";
console.log(saludo);

saludo = "Hola chicos";
console.log(saludo);

/* |||||||||||||||||||||||| ESTRUCTURA DE FUNCION ||||||||||||||||||||||||||||*/

/* function saludar(){
      codigo a ejectuar
} */

/* |||||||||||||||||||||||||FUNCION CON DUCUMENTACION JSDOC|||||||||||||||||||||| */

/**
 * @description Funcion que emite un saludo por consola
 * @param {string} mensaje
 */
function saludar(mensaje) {
  return console.log(mensaje);
}

saludar("Hola como están");

/* ||||||||||||||||||||||||| FUNCION DE SUMA |||||||||||||||||||||||||||||||| */

let num1 = 20;
let num2 = 10;

const suma = num1 + num2;
console.log(suma);

function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

let operación = sumar(5, 7);
console.log(operación);

/* ||||||||||||||||||||CALCULADORA CON ESTRUCTURA SWITCH CASE||||||||||||||||||||||||||| */

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
    case "-":
      return primerNumero - segundoNumero;
    case "*":
      return primerNumero * segundoNumero;
    case "/":
      return primerNumero / segundoNumero;
    default:
      return 0;
  }
}

console.log(calculadora(5, 6, "*"));
console.log(calculadora(5, 6, "+"));

/* |||||||||||||||||||||||||||||| SCOPE GLOBAL |||||||||||||||||||||||||||||||||| */

let resultado = 0;

function sumar(a, b) {
  resultado = a + b;
}

sumar(5, 6);

console.log(resultado);

/* ||||||||||||||||||||||| SCOPE LOCAL ERROR DE REFERENCIA||||||||||||||||||||| */

function sumar(a, b) {
  let resultado = a + b;
}

console.log(resultado);

/* |||||||||||||||| DIFERENTES SCOPE MISMOS NOMBRES DE VARIABLES||||||||||||||||| */

function sumar(a, b) {
  let resultado = a + b;
}

function resta(a, b) {
  let resultado = a - b;
}

/* |||||||||||||||||||||||||||||||| FUNCION ANONIMA |||||||||||||||||||||||||||| */

const sumar = function (a, b) {
  return a + b;
};

sumar(4, 5);

/* |||||||||||||||||||||||||| FUNCION FLECHA |||||||||||||||||||||||||||||||||  */

const sumando = (a, b) => a + b;
