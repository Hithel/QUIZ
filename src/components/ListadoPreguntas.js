import {postPregunta,getPreguntas,deletePreguntas,actualizarPreguntas} from "./peticiones/peticiones.js";


import Pregunta from "./Pregunta.js";
import renderListado from "./renderListado.js";

export default class ListadoPreguntas extends Pregunta {
    constructor(){
        super({pregunta,A,B,C,D,correcta});
    }

    agregarPregunta(pregunta){
        postPregunta(pregunta)
    }

    mostrarPreguntas(){
        getPreguntas()
    }
    
    eliminarPreguntas(id,div){
        deletePreguntas(id,div)
    }
    modificarPreguntas(id, data){
        actualizarPreguntas(id,data)
    }
}