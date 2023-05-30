/* Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto. */


const repeticiones = ( cadena , elemento) => {

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
       if (cadena[i] === elemento) {
            contador ++        
       }
        
    }

    return contador
}


// Ejemplo de uso:
const cadena = "hola como estas";
const caracterDado = "o";


const search = repeticiones(cadena, caracterDado)

console.log(` en la cadena "${ cadena }" el caracter "${ caracterDado }" se repite ${ search } veces`);