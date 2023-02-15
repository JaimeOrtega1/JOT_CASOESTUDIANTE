import { CasoUsoEstudiante } from '../caso-uso/caso-uso-estudiante.js';
import { RepositorioEstudiante } from '../repositorio/repositorio-estudiante.js'

const repositorioEstudiante = new RepositorioEstudiante()
const casoUsoEstudiante = new CasoUsoEstudiante(repositorioEstudiante)


const addEstudiante = document.querySelector('#id-add-estudiante');

addEstudiante.addEventListener('click', (event) => {
  casoUsoEstudiante.addEstudiante(
    { Matricula: "Data.Matricula", nombre: "data.nombre", genero: "data.genero",
        direccion : "data.direccion",Ci : "data.Ci", }
  )

  console.log(repositorioEstudiante.estudiantes)

})


const searchEstudiante = document.querySelector('#id-search_estudiante')