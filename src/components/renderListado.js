export default function renderListado (lista) {
    let DivPreguntas = document.querySelector("#DivPreguntas");

    DivPreguntas.innerHTML = "";

    lista.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "mt-4");
        div.setAttribute("id", `${item.id}`);
        div.innerHTML = `
            <h1>${item.pregunta}</h1>
            <select class="form-select mt-2">
                <option value="">${item.A}</option>
                <option value="">${item.B}</option>
                <option value="">${item.C}</option>
                <option value="">${item.D}</option>
            </select>
            
            <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2 mt-3">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
        `;
        DivPreguntas.appendChild(div);
    })
}