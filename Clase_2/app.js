/* 

if(condicion){

  codigo a ejecutar
  
}

*/

/* if (true) {
  console.log("Hola");
}

console.log("Me ejecuto si o si "); */

/* |||||||||||||||||||| OPERADORES  COMPARACIÓN y LÓGICOS ||||||||||||||||||||||||||||| */

// ==  Igualdad(valor)
// === Igualdad estricta(compara valor y tipo de dato)
//  <  Menor que
//  > Mayor que
// <= Menor o igual que
// >= Mayor o igual que
// != diferente que (valor)
// !== desigualdad estricta (valor y tipo de dato)
// && Operador and (y)
// || Operador or (o)
// ! Operador not (no)

/* |||||||||||||||||||||||||||||||||||| IF ||||||||||||||||||||||||||||| */

let edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

console.log("Me ejecuto si o si ");

let numero = 5;

if (numero === 5) {
  console.log(`Èl numero es igual a ${numero}`);
}

/* ||||||||||||||||||| IF - VALIDACIONES |||||||||||||||||||||||||||| */

let miEdad = prompt("Ingresa tu edad");
console.log(miEdad);

if (miEdad === "" || miEdad === null) {
  alert("Ingresa un valor");
} else if (isNaN(miEdad)) {
  alert("por favor el valor tiene que ser un numero");
} else {
  miEdad = parseInt(miEdad);
  console.log(`Tienes ${miEdad} años`);
  console.log(typeof miEdad);
}

/* 
for(inicializacion, condicion, actualización){
  ...codigo a ejectuar
}
*/

/* for (let i = 0; i < 10; i++) {
  console.log(i);
}
 */

let numeroIngresado = parseInt(prompt("Por favor ingresa un numero"));

for (let i = 1; i <= 10; i++) {
  let tabla = numeroIngresado * i;
  console.log(`El ${numeroIngresado} X ${i} = ${tabla}`);
}

/*||||||||||||||||||||||||||||||||||| BREAK ||||||||||||||||||||||||||||||| */

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("no pouedes continuar");
    break;
  }
  console.log(i);
}

console.log("Estoy fuera del ciclo");

/* |||||||||||||||||||||||||||| CONTINUE ||||||||||||||||||||||||||||||||||*/

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

/* |||||||||||||||||||| ADIVINAR EL NUMERO SECRETO ||||||||||||||||||||||||||||||| */

/*ENTRADA:
 Ingreso de numero por parte del usuario  prompt()

PROCESO:
  - if()
  - for()
  - Variables = numer que elige el usuario
  - Variable =  numero secreto
  - Variable = intentos permitidos

SALIDA
 alert() console.log() 
*/

let numeroSecreto = 8;
let intentosTotales = 3;

for (
  let intentosUsuario = 1;
  intentosUsuario <= intentosTotales;
  intentosUsuario++
) {
  let eleccionUsuario = parseInt(
    prompt("Ingresa un numero para intentar adivinar el secreto ")
  );

  if (eleccionUsuario === numeroSecreto) {
    console.log(`Adivinaste!! el numero secreto era ${numeroSecreto}`);
    break;
  }

  if (intentosUsuario === intentosTotales) {
    alert(`No conseguiste adivinar el numero, el numero era  ${numeroSecreto}`);
    break;
  }

  alert(`Llevas ${intentosUsuario} intento`);
}

/* ||||||||||||||||||||||||||||  WHILE ||||||||||||||||||||||||||||||| */

/* 
while(condicion){
continuá ejectuando éste codigo
}
*/

/* while (true) {
  console.log("hole");
} */

/* ||||||||||||||||| TABLA DE MULTIPLICAR CON WHILE |||||||||||||||||||||||||||| */

let numeroIngresado1 = parseInt(prompt("Ingresa un numero"));

if (
  isNaN(numeroIngresado1) ||
  numeroIngresado1 === "" ||
  numeroIngresado1 === null
) {
  alert("Ingresa un valor valido");
} else {
  let i = 1;
  while (i <= 10) {
    let tabla = numeroIngresado1 * i;
    console.log(`${numeroIngresado1} * ${i} = ${tabla}`);
    i++;
  }
}
