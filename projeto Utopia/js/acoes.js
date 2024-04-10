//alert('funcionou')


var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menu = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado
var logo = document.getElementById('logotipo'); // logotipo do site
var btnOcultar = document.getElementById('iconClose') // icone fechar do menu


btnmostrar.addEventListener('click', function() {
    if(menu.style.display === 'block')
    {
        menu.style.display = 'none';
    }
     else{
        menu.style.display = 'block';
    }

})

btnmostrar.addEventListener('click', function() {
    if(logo.style.display === 'none')
    {
        logo.style.display = 'block';
    }
     else{
        logo.style.display = 'none';
    
    }

})

btnOcultar.addEventListener('click', function() {
 menu.style.display = 'none';
 logo.style.display = 'block'
})


// Slider da pagina Index

function slide1(){
    document.getElementById('img1Carrosel').src="imagens/Bar-copia.jpg";
    setTimeout("slide2()", 3000)
    
    }
    
    function slide2(){
    document.getElementById('img1Carrosel').src="imagens/restaurante13.jpg";
    setTimeout("slide3()", 3000)
    }
    
    function slide3(){
    document.getElementById('img1Carrosel').src="imagens/restaurante11.jpg";
    setTimeout("slide4()", 3000)
    }

    function slide4(){
        document.getElementById('img1Carrosel').src="imagens/restaurante12.jpg";
        setTimeout("slide1()", 3000)
        }

