
const obtenerPokemon = require("./library");

// Usar la funcion obtenerPokemon(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("blastoise").then(pokemon=>{
    console.log(pokemon.name);
    let i = 1;
    console.log("Habilidades: ")
    pokemon.abilities.forEach(e => {
        console.log(i+") "+ e.ability.name);
        i=i+1;
    });

}).catch((err)=>{
    console.log('F');
});