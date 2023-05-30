/* Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar. */


for (let i = 0; i < 5; i++) {

    // Generación de numero Random
    const numGenerado = Math.floor(Math.random() * 100); 
    // Validación de numero, si es par o impar
  if (numGenerado % 2 === 0) {
    console.log("El número generado es: " + numGenerado + " -- este numero es par");
  } else {
    console.log("El número generado es: " + numGenerado + " -- este numero es impar");
  }
    
}