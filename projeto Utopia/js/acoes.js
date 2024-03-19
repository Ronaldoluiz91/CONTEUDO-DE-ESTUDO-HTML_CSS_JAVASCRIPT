//alert('funcionou')
var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menus = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado

btnmostrar.addEventListener('click', function() {
    if(menus.style.display === 'block')
    {
        menus.style.display = 'none';
    }
     else{
        menus.style.display = 'block';
    }

})
