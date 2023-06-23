import Pregunta from "./Pregunta.js";
import renderListado from "./renderListado.js";

export default class ListadoPreguntas extends Pregunta {
    constructor(){
        super({pregunta,A,B,C,D,correcta});
        this.lista = [];
    }

    agregarPregunta(pregunta){
        this.lista.push(pregunta);
    }

    mostrarPreguntas(){
        renderListado(this.lista);
        return console.log(this.lista);
    }
}