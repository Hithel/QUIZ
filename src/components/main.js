import Pregunta from "./Pregunta.js";
import ListadoPreguntas from "./ListadoPreguntas.js"

const form = document.querySelector('#form');
const listadoPreguntas = new ListadoPreguntas();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));

    let pregunta = new Pregunta(data);
    
    listadoPreguntas.agregarPregunta(pregunta);

    listadoPreguntas.mostrarPreguntas();
    form.reset();
});

