
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

/*botaoAzul.onclick.document.getElementById('text').innerHTML = 'azul significa...',
        document.body.style.backgroundColor = 'blue';


botaoLaranja.onclick.document.getElementById('text').innerHTML = 'laranja significa...',
        document.body.style.backgroundColor = 'orange';

botaoVerde.onclick.document.getElementById('text').innerHTML = "verde significa...";
    document.body.style.backgroundColor = 'green';*/

/* botaoAzul.onclick = () => document.body.style.backgroundColor = "blue";
    botaoAzul.onclick= () => texto.textContent ='azul significa....'; 

    botaoVerde.onclick = () => document.body.style.backgroundColor = "green";
    botaoVerde.onclick= () => texto.textContent ='verde significa....'; 
    
    botaoLaranja.onclick = () => document.body.style.backgroundColor = "orange";
    botaoLaranja.onclick= () => texto.textContent ='azul significa....'; */
    