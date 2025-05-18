// Actividad 3 Funciones y Callbacks
function lista() {
    const originalarray = [1, 2, 3, 4];
    console.log(originalarray);
    return originalarray;
}

function lista2(callback) {
    const originalarray = callback();
    const array2 = originalarray.map(num=>num *2);
    console.log(array2);
    return array2;
}

lista2(lista);