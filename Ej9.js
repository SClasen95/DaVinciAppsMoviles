function rechazar(f, arr){
    return ret = arr.filter(e=>!f(e));    
}
var even = (i) => i%2===0;
var odd = (i) => i%2!==0;

console.log(rechazar(odd,[1,2,3]));