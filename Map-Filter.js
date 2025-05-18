// Uso de map y filter en un array 

const nros = [3, 7, 12, 5, 2];

let nros_cuadrado = nros.map((nro)=>{return nro * 2});

let nros_filtrados = nros_cuadrado.filter((nro)=>{return nro > 5});

console.log(nros_filtrados)