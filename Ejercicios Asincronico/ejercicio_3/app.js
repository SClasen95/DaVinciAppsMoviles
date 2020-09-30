
const obtenerPokemon = require("./library");

// Codigo funcion callback
function funcionCallback(pokemon){
    console.log(pokemon.name);
    let i = 1;
    console.log("Habilidades: ")
    pokemon.abilities.forEach(e => {
        console.log(i+") "+ e.ability.name);
        i=i+1;
    });
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("charmander", funcionCallback);
