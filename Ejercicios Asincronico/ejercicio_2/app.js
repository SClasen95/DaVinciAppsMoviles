
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

obtenerChiste().then((chiste)=>{
    let chisteExtraido = chiste[0];
    console.log(chisteExtraido.setup);
    console.log(chisteExtraido.punchline);
}).catch((err)=>{
    console.log('F');
});