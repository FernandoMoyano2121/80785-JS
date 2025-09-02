async function ObtenerListaPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6");
  const data = await response.json();

  return data.results;
}

async function mostrarCardsPokemon() {
  try {
    const pokemonList = await ObtenerListaPokemon();

    pokemonList.forEach((pokemon) => {
      crearTarjetaPokemon(pokemon);
    });
  } catch (error) {
    cconsole.log(error);
  }
}

function crearTarjetaPokemon(pokemon) {
  const div = document.getElementById("output");
  const tarjeta = document.createElement("div");

  tarjeta.innerHTML = ` <h4>${pokemon.name}</h4>
    <p>URL: <a href="${pokemon.url}" target="_blank">Ver detalles</a></p>`;

  div.appendChild(tarjeta);
}

mostrarCardsPokemon();
