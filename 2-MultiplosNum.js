/* Escribir el código que muestre en consola los múltiplos de un número entero
dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100 */


let numeroIngresado = 2;


for( let i = 1; i <= 100 ; i++) {
    if (i % numeroIngresado === 0) {
            console.log(i);
    }
}

