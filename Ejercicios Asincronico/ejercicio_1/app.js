
const obtenerChiste = require("./library");

// Codigo funcion callback
function funcionCallback(chiste){
    let chisteExtraido = chiste[0];
    console.log(chisteExtraido.setup);
    console.log(chisteExtraido.punchline);
}

// Fin codigo
// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallback);
