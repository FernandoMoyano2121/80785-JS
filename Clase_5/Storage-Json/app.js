//------------------------------------------------------------------
//                        LOCAL STORAGE                             |
//------------------------------------------------------------------

localStorage.setItem("nombre1", "fernando");
localStorage.setItem("nombre2", "Lucía");
localStorage.setItem("nombre3", "Martín");

const nombre = localStorage.getItem("nombre1");
console.log(nombre);

localStorage.removeItem("nombre3");

localStorage.clear();

//JSON
/* const persona = {
  "nombre": "Ana",
  "edad": 28,
  "ciudad": "Córdoba",
};
*/

const persona = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Córdoba",
};

localStorage.setItem("persona", JSON.stringify(persona));
const personaGuardada = JSON.parse(localStorage.getItem("persona"));
console.log(personaGuardada);
