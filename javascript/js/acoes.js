
var botaoAzul = document.getElementById("azul");
var botaoVerde = document.getElementById("verde");
var botaoLaranja = document.getElementById("laranja");

botaoAzul.onclick = function () {
    document.getElementById('text').innerHTML = 'azul significa...',
        document.body.style.backgroundColor = 'blue';
}

botaoLaranja.onclick = function () {
    document.getElementById('text').innerHTML = 'laranja significa...',
        document.body.style.backgroundColor = 'orange';
}
botaoVerde.onclick = function () {
    document.getElementById('text').innerHTML = "verde significa...";
    document.body.style.backgroundColor = 'green';
}
