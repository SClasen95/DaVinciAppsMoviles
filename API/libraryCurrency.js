const rp=require("request-promise");

function convertir(monedaBase){
    var options={
        uri:"https://v6.exchangerate-api.com/v6/1845529c3f947cf2062e29ad/latest/"+monedaBase,
        json:true
    }
    return rp(options);
}

module.exports=convertir;
