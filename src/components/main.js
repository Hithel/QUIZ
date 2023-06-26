import Pregunta from "./Pregunta.js";
import ListadoPreguntas from "./ListadoPreguntas.js"


const form = document.querySelector('#form');
const formActualizar = document.querySelector("#formActualizar")
const DivPreguntas = document.querySelector("#DivPreguntas")
const listadoPreguntas = new ListadoPreguntas();

listadoPreguntas.mostrarPreguntas()


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));

    let pregunta = new Pregunta(data);
    
    listadoPreguntas.agregarPregunta(pregunta);

});

listadoPreguntas.mostrarPreguntas()

DivPreguntas.addEventListener('click', (e) => {
    e.preventDefault();

    let div = e.target.closest("div");
    let id = div.id;

    let accion = e.target.dataset.accion;

    if (accion === "Eliminar"){
        listadoPreguntas.eliminarPreguntas(id,div);
    }

    else if(accion === "Actualizar"){
        formActualizar.addEventListener("submit", (e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.target));
          listadoPreguntas.modificarPreguntas(id,data);
        });  
    }
})
listadoPreguntas.mostrarPreguntas();