


function quienesAprobaron(alumnos){
    return alumnos.filter(aprobo);
}


function aprobo(arr){
    let condicion = (i)=>i>=4;
    return arr.every(condicion);
}


console.log(quienesAprobaron([[1,7,8],[9,8,7]],[5,6,4]));

