import { Estudiante } from "../entidad/estudiante.js";

export class CasoUsoEstudiante {
  constructor(repositorioEstudiante) {
    this.repositorioEstudiante = repositorioEstudiante;
  }

  addEstudiante(data) {
    const estudiante = new Estudiante(
      data.Matricula,
      data.nombre,
      data.genero,
      data.direccion,
      data.Ci
    );
    this.repositorioEstudiante.addEstudiante(estudiante)
  }

}
