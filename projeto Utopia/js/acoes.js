//alert('funcionou')
var btnmostrar = document.getElementById('iconMenu');
var menus = document.querySelector('itens');

/*btnmostrar.onclick = function()
{
    if(menus.style.display === 'none')
    {
        menus.style.display === 'block';
    }
     else{
        menus.style.display = 'none';
    }
};*/

btnmostrar.addEventListener('click', () =>{
    menus.classList.toggle('active');
})