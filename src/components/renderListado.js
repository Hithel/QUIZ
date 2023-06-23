export default function renderListado (lista) {
    let DivPreguntas = document.querySelector("#DivPreguntas");

    DivPreguntas.innerHTML = "";

    lista.forEach((item) => {
        console.log(item.pregunta);
        let div = document.createElement("div");
        div.setAttribute("class", "mt-4");
        div.innerHTML = `
            <h1>${item.pregunta}</h1>
            <select class="form-select mt-2">
                <option value="">${item.A}</option>
                <option value="">${item.B}</option>
                <option value="">${item.C}</option>
                <option value="">${item.D}</option>
            </select>
        `;
        DivPreguntas.appendChild(div);
    })
}