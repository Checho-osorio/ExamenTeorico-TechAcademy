
/* 1. Clase persona con propiedades nombre, apellido y edad
        Crea el método getDetalles() el cual imprimirá en consola los atributos de la
        persona.
        El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
    2. La clase jugador hereda de persona e incluye la propiedad de posición
        sobreescribir el método getDetalles() para que muestre en consola los detalles
        de persona y los de jugador.
        El constructor recibe y asigna posición a los atributos internos.
    3. Clase entrenador hereda de persona y agrega años de experiencia y el id de
        federación
        Sobreescribir el método getDetalles() para que muestre en consola los detalles
        de persona y entrenador.
        El constructor recibe y asigna posición a los atributos internos.
        En el constructor configurar para que si no se recibe un id de federación este
        asigne un número aleatorio de 5 dígitos
    4. Clase equipo tiene las propiedades de entrenador y jugadores
        El constructor recibe el objeto de director y un arreglo con los jugadores que
        pertenecen al equipo (con 3 o 4 jugadores como ejemplo está bien)
        el método getDetalles() mostrar en consola los detalles del entrenador y de los
        jugadores.
    5. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición
        (Portero, Defensa , Medio y Delantero).
        crea un objeto de tipo entrenador con su nombre, edad y años de experiencia
        crea un equipo con los objetos de entrenador y estudiantes demostrando el
        funcionamiento de jerarquía.
 */

// Clase Persona
class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    getDetalles() {
        console.log("----------");
      console.log("Información personal:");
      console.log("----------");
      console.log("Nombre:", this.nombre);
      console.log("Apellido:", this.apellido);
      console.log("Edad:", this.edad);
    }
  }
  
  // Clase Jugador 
  class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
      super(nombre, apellido, edad);
      this.posicion = posicion;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log("Detalles del Jugador:");
      console.log("Posición:", this.posicion);
      console.log("----------");
    }
  }
  
  // Clase Entrenador 
  class Entrenador extends Persona {
    constructor(nombre, apellido, edad, experiencia, idFederacion) {
      super(nombre, apellido, edad);
      this.experiencia = experiencia;
      this.idFederacion = idFederacion || Math.floor(Math.random() * 90000) + 10000;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log("Detalles del Entrenador:");
      console.log("Experiencia:", this.experiencia);
      console.log("ID de Federación:", this.idFederacion);
      console.log("----------");
    }
  }
  
  // Clase Equipo
  class Equipo {
    constructor(entrenador, jugadores) {
      this.entrenador = entrenador;
      this.jugadores = jugadores;
    }
  
    getDetalles() {
      console.log("Detalles del Equipo:");
      console.log("Entrenador:");
      this.entrenador.getDetalles();
      console.log("Jugadores:");
      this.jugadores.forEach((jugador) => {
        jugador.getDetalles();
        console.log("----------");
      });
    }
  }
  
  // Datos 
  let jugadores = [
    new Jugador("Sergio", "Osorio", 30, "Portero"),
    new Jugador("Yoshi", "koopas", 28, "Defensa"),
    new Jugador("Luigi", "Bros", 30, "Medio"),
    new Jugador("Mario", "Bros", 32, "Delantero"),
  ];
  
  let entrenador = new Entrenador("browser ", "koopas", 45, 15);
  
  let equipo = new Equipo(entrenador, jugadores);
  
  equipo.getDetalles();
  