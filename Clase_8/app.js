/* console.log("Inicio");

setTimeout(() => {
  console.log("fin");
}, 3000);

console.log("proceso..."); */

//2009 --> Callbacks
//2015 --> Promesas
//2019 --> async - await

/* function accionFutura() {
  return new Promise((resolve, reject) => {
    let exito = false;
    setTimeout(() => {
      if (exito === true) {
        resolve("promesa cumplida");
      } else {
        reject("Promesa rechazada");
      }
    }, 2000);
  });
}

accionFutura()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
 */

function preparCafe() {
  return new Promise((resolve, reject) => {
    let exito = true;
    setTimeout(() => {
      if (exito === true) {
        resolve("Capuchino");
      } else {
        reject("No hay café");
      }
    }, 2000);
  });
}

/* preparCafe()
  .then((res) => console.log(res))
  .catch((error) => console.log(error)); */

async function obtenerCafe() {
  try {
    const cafe = await preparCafe();
    console.log(`Muchas gracias ya tengo mi ${cafe}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

obtenerCafe();

/* fetch(); */
