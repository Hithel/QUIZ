import Pregunta from "./Pregunta.js";
import ListadoPreguntas from "./ListadoPreguntas.js"


const form = document.querySelector('#form');
const form2 = document.querySelector('#form2');
const DivPreguntas = document.querySelector("#DivPreguntas")
const listadoPreguntas = new ListadoPreguntas();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));

    let pregunta = new Pregunta(data);
    
    listadoPreguntas.agregarPregunta(pregunta);

    listadoPreguntas.mostrarPreguntas();
    form.reset();
});

DivPreguntas.addEventListener('click', (e) => {
    e.preventDefault();

    let div = e.target.closest("div");
    let id = div.id;

    let accion = e.target.dataset.accion;

    if (accion === "Eliminar"){
        listadoPreguntas.eliminarPreguntas(id);
    }
    else if (accion === "Modificar"){
        form2.addEventListener("submit", (e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));

            console.log(data);
        })

    }
})
