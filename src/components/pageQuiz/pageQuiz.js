import {getPreguntasQuiz,CompararPreguntas} from "../peticiones/peticiones.js";

const form = document.querySelector("#form");

getPreguntasQuiz()

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    
    CompararPreguntas(data)
})