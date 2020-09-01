function hayAlgunNegativo(arr){
let condicion = (i)=>i<0;
return arr.some(condicion);

}
console.log(hayAlgunNegativo([-1,0,1]));
