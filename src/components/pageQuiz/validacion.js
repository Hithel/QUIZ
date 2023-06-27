export default function validacion(data,preguntas){

    let contadorCorrectos = 0;
    let contadorIncorrectos = 0;
    let body = document.querySelector("body");

    preguntas.forEach((item) => {
            for (var id in data) {
                if (data.hasOwnProperty(id)) {
                    if(data[id] === item.correcta) {
                        contadorCorrectos++;
                    }
                    else {
                       contadorIncorrectos++; 
                    }
                }
            }    
    });

    alert(`La cantidad de respuestas correctas es de ${contadorCorrectos}`)

}