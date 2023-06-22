export default function renderListado (lista) {
    lista.forEach((item) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h1></h1>
        <select>
            <option value="">algo</option>
            <option value="">otro algo</option>
            <option value="">otro del otro algo</option>
        </select>
        `
    })
}