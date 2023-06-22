import Pregunta from "./Pregunta.js";
// import renderListado from "./renderListado.js";

export default class ListadoPreguntas extends Pregunta {
    constructor(){
        this.lista = {};
    }

    agregarPregunta(pregunta){
        this.lista.push(pregunta);
    }

    mostrarPreguntas(){
        // renderListado(this.lista);
        console.log(this.lista);
    }
}