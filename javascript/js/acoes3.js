
var botaoAzul = document.getElementById("azul");
var botaoVerde = document.getElementById("verde");
var botaoLaranja = document.getElementById("laranja");

botaoAzul.onclick = function () {
    document.getElementById('textAzul').style.visibility = 'visible',
        document.getElementById('textVerde').style.visibility = 'hidden',
        document.getElementById('textLaranja').style.visibility = 'hidden',
        document.body.style.backgroundColor = 'blue';
}

botaoLaranja.onclick = function () {
    document.getElementById('textLaranja').style.visibility = 'visible',
        document.getElementById('textAzul').style.visibility = 'hidden',
        document.getElementById('textVerde').style.visibility = 'hidden',
        document.body.style.backgroundColor = 'orange';
}
botaoVerde.onclick = function () {
    document.getElementById('textVerde').style.visibility = 'visible',
        document.getElementById('textAzul').style.visibility = 'hidden',
        document.getElementById('textLaranja').style.visibility = 'hidden',
        document.body.style.backgroundColor = 'green';
}



