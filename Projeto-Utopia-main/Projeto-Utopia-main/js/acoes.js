//alert('funcionou')


var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menu = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado
var logo = document.getElementById('logotipo'); // logotipo do site
var btnOcultar = document.getElementById('iconClose') // icone fechar do menu


btnmostrar.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
    }

})

btnmostrar.addEventListener('click', function () {
    if (logo.style.display === 'none') {
        logo.style.display = 'block';
    }
    else {
        logo.style.display = 'none';

    }

})

btnOcultar.addEventListener('click', function () {
    menu.style.display = 'none';
    logo.style.display = 'block'
})


// Slider da pagina de abertura pagina Index

function slide1() {
    document.getElementById('img1Carrosel').src = "imagens/bar-index.jpg";
    setTimeout("slide2()", 3000)
}

function slide2() {
    document.getElementById('img1Carrosel').src = "imagens/barman.jpg";
    setTimeout("slide3()", 3000)
}

function slide3() {
    document.getElementById('img1Carrosel').src = "imagens/comida-index.jpg";
    setTimeout("slide1()", 3000)
}

// slider- cardapio pagina index

var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slide');
var intervalTime = 3000; // Tempo de troca de slide
var slideIndex = 0;

var nextSlide = () => {
    slideIndex++;
    if (slideIndex === slide.length) {
        slideIndex = 0;
    }
    updateSlide();
}

var updateSlide = () => {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, intervalTime);

// x = 0;
// const slides = document.querySelectorAll('.slide');
// const autoSlideInterval = 3000; // Intervalo de tempo em milissegundos para o slider automático

// function showSlide(n) {
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].classList.remove('active');
//   }
//   slides[slideIndex].classList.add('active');
// }

// function prevSlide() {
//   showSlide(--slideIndex);
// }

// function nextSlide() {
//   showSlide(++slideIndex);
// }

// function autoSlide() {
//   nextSlide();
//   setTimeout(autoSlide, autoSlideInterval);
// }

// showSlide(slideIndex); // Exibir o primeiro slide
// autoSlide(); // Iniciar o slider automáticolet slideInde







//Modal pagina reserva 

var reserva = document.getElementById('confirm-reserva'); //botao enviar reserva
var modal = document.getElementsByClassName('modal-container') //modal a ser exibido



reserva.onclick = function (){
    modal.style.display =='block'
}

