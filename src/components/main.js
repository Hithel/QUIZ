const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);

});

