//const { addLeadingDotSlashArray } = require("@11ty/eleventy/src/TemplatePath");


function showFriends() {
    document.querySelector("#lista").innerHTML = "";
    $.get(`http://localhost:5000/amigos`, function(data) {
        for (let i=0; i<data.length; i++) {
        let elemento = document.createElement('li');
        elemento.innerText = data[i].name;
        let amigos = document.querySelector("#lista");
        amigos.appendChild(elemento);
    };
});
}

$('#boton').click(showFriends);

$("#search").click(function() {
    $.get("http://localhost:5000/amigos", function(data) {
    let input = document.querySelector('#input');
    let valor = input.value;
    let amigo = data[valor-1].name;
    let container = document.querySelector("#amigo");
    container.innerText = amigo;
    input.value = ""
    });
})

let inputDelete = document.querySelector("#inputDelete");
let btnDelete = document.querySelector("#delete");
btnDelete.addEventListener("click", function() {
    let idAmigo = inputDelete.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        document.querySelector("#sucess").innerText = "Amigo elimitado correctamente"
        inputDelete.value = ""
        showFriends()
    })
})