export default function renerQuiz(data){
    let form = document.querySelector('#form');

    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "mt-4");
        div.innerHTML = `
        <h1>${item.pregunta}</h1>
        <select class="form-select mt-2" id="${item.id}" name="${item.id}">
                <option value="A">A: ${item.A}</option>
                <option value="B">B: ${item.B}</option>
                <option value="C">C: ${item.C}</option>
                <option value="D">D: ${item.D}</option>
        </select>
        `;
        form.appendChild(div);
    })
}