const convertir = require("./libraryCurrency.js");
let conversion = function (moneda) {
    console.log("La conversion de 1 USD a Pesos Argentinos es de "+moneda.conversion_rates.ARS+" pesos");
}

var moneda = "USD";


convertir(moneda)
  .then((m) => {
    conversion(m);
  }).catch((err) => {
    console.log("no se encontro la moneda");
  });