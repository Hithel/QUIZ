import renderListado from "../renderListado.js";
import renerQuiz from "../pageQuiz/renderQuiz.js";
import validacion from "../pageQuiz/validacion.js";

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});


export async function postPregunta(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let pregunta = await (await fetch(`${URL}/preguntas`,config)).json();
}

export async function getPreguntas(){
    
    let preguntas = await (await fetch(`${URL}/preguntas`)).json();
    renderListado(preguntas)
}

export async function deletePreguntas(id,div){

    let data = Object.fromEntries(new FormData(div.target));

    let config = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let delPregunta = await (await fetch(`${URL}/preguntas/${id}`,config)).json();
}

export async function actualizarPreguntas(id,data){
    
    let config = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    };

    let actPregunta = await (await fetch(`${URL}/preguntas/${id}`,config)).json();
}

export async function getPreguntasQuiz(){
    
    let preguntas = await (await fetch(`${URL}/preguntas`)).json();
    renerQuiz(preguntas);
}

export async function CompararPreguntas(data){

    let preguntas = await (await fetch(`${URL}/preguntas`)).json();
    validacion(data,preguntas);
}