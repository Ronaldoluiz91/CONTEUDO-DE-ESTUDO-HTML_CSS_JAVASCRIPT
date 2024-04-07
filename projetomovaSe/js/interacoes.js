// alert('funcionou');

$(document).ready(function(){
    $('#destaque').slick({
        autoplay: true,
        autoplaySpeed:2000,
        dots: true,
        arrows:false
    });
});


var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menu = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado


//Ações do menu

btnmostrar.addEventListener('click', function() {
    if(menu.style.display === 'block')
    {
        menu.style.display = 'none';
    }
     else{
        menu.style.display = 'block';
    }

})
