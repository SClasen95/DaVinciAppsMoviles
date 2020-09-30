
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(persona => {
    console.log(persona.results[0].name.title+" "+persona.results[0].name.first+" "+persona.results[0].name.last);
    console.log(persona.results[0].gender);
    console.log(persona.results[0].location.country+", "+persona.results[0].location.state+", "+persona.results[0].location.city+", "+persona.results[0].location.street.name+" "+persona.results[0].location.street.number+", "+persona.results[0].location.postcode);
    console.log(persona.results[0].email);
    console.log(persona.results[0].login.username);
    console.log(persona.results[0].login.password);
}).catch((err)=>{
    console.log('F');
});