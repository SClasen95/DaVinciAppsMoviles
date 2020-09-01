function algunoEsPar(arr){
    return arr.some(condicion);
}
var condicion = (i)=>i%2===0;

console.log(algunoEsPar([1,2,3]));