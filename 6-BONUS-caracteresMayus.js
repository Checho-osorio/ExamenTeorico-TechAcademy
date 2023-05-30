/* 
Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después.
*/


const convertirMayusculas = (texto)  => {
    var separador = texto.indexOf(".");
    var textoConvertido = "";
  
    if (separador !== -1) {
      var textoPrevioPunto = texto.substring(0, indicePunto);
      var textoRestante = texto.substring(indicePunto);
  
      textoPrevioPunto = textoPrevioPunto.toUpperCase();
      textoConvertido = textoPrevioPunto + textoRestante;
    } else {
      textoConvertido = texto.toUpperCase();
    }
  
    console.log("Texto Convertido:", textoConvertido);
  }
  
  // Ejemplo de uso
//   let entrada = "www.techacademy.com";

let entrada = "Sergio Osorio"
  console.log("Texto Ingresado:", entrada);
  const resp = convertirMayusculas(entrada);