function aprobo(arr){
    return arr.every(condicion);
}
var condicion = (i)=>i>=4;

console.log(aprobo([8,4,7]));