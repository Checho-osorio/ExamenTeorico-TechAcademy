/* Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
mismo pero invertido. */

const Invertir = ( array ) => {
    console.log('EL arreglo Original es: ', array);

    let arrayInv = array.reverse();

    return arrayInv
}



let arregloOriginal = [23, 5, 34, 56, 98, "cadena", 7];
const respt = Invertir(arregloOriginal);

console.log('EL arreglo Invertido  es: ', respt);
