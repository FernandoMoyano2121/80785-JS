/******************* vinculando elementos HTML en Js **********************/

const contenedor1 = document.getElementById("contenedor1");
console.log(contenedor1.nodeName);
console.log(contenedor1.textContent);

/************************** incrustando HTML ******************************/

let nombre = "Juan";
contenedor1.innerHTML = `<strong>Hola ${nombre}</strong>
`;
/* *********************agregando clases desde Js *****************************/

contenedor1.className = "contenedor1";
contenedor1.classList.add("contenedor1");

/* *********************acceso por clase *****************************/

const contenedor2 = document.getElementsByClassName("contenedor2");
console.log(contenedor2);

for (const element of contenedor2) {
  console.log(element.textContent);
}

/* ******************** Acceso por query selector ******************/

const contenedor3 = document.querySelector("#contenedor3");
console.log(contenedor3);

/* ********************* Acceso por query selector All ****************/
const contenedor4 = document.querySelectorAll(".contenedor4");
console.log(contenedor4);

/* ********************** crear elementos ****************************/

const contenedorDiv = document.getElementById("contenedorDiv");

const div = document.createElement("div");
div.textContent = "Dom y Eventos";

contenedorDiv.appendChild(div);

/* ******************************EVENTOS **************************/

function saludo() {
  alert("Hola");
}

contenedorDiv.addEventListener("click", saludo);

contenedorDiv.addEventListener("click", (evento) => {
  console.log(evento.target);
});
