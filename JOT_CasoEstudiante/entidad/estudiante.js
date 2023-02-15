class Persona {
    constructor(Matricula, nombre, genero, direccion,Ci) {
      this.Matricula =  Matricula;
      this.nombre = nombre;
      this.genero = genero;
      this.direccion = direccion
      this.Ci = Ci;
    }
  }
  
  class Estudiante extends Persona {
  
    constructor(Matricula, nombre, genero, direccion, Ci) {
      super(Matricula, nombre, genero,direccion,Ci);
    }
  
    toString() {
      return JSON.stringify(this)
    }
  
    toJson() {
      return JSON.parse(this)
    }
  
  }
  
  export {
    Estudiante
  }