function cuantosCumplen(f, arr){
    var i=0;
    arr.forEach(element => {
        if(f(element)){
            i++;
        }
    });
    return i;
}
var even = (i) => i%2===0;
var odd = (i) => i%2!==0;

console.log(cuantosCumplen(odd,[1,2,3]));