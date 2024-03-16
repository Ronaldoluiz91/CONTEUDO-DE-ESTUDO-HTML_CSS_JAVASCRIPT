
//Exercicio1
var num = Number(prompt('digite um numero'));
var numAnterior = num -1;
var numPosterior = num +1;

alert('o numero vizinho anterior é: ' +numAnterior+  ' e o numero vizinho posterior é: ' +numPosterior);

//exercicio2
var conta = Number.parseFloat(prompt('digite o valor da conta a ser paga'));
var clientes = Number(prompt('digite a quantidade de clientes'));
var resultado = conta / clientes ;

alert('o valor a ser pago por cada cliente é de: R$' +resultado.toFixed(2).replace('.', ','));

//exercicio3
var precoProduto = Number.parseFloat(prompt('qual o valor do produto'));
alert('PAGAMENTO A VISTA COM 10% DE DESCONTO OU PARCELADO EM 3X SEM JUROS');

 //var porcetagemDesconto = Number(prompt('Qual a % de desconto do produto')); //caso queira capturar a % de desconto informada pelo usuario
//var desconto = precoProduto *(porcetagemDesconto/100); //usaria esta caso queira capturar o valor do desconto informado pelo usuario

var desconto = precoProduto *(10/100)
var precoAvista = precoProduto - desconto;
var parcela = Number(prompt('digite a quantide de parcelas'));
var precoParcelado = precoProduto/parcela;

alert('o Preço a vista é: R$'+precoAvista.toFixed(2).replace('.',',')+ ' o preço parcelado é: R$ '+precoParcelado.toFixed(2).replace('.',','));


//exercicio4
var nota1 = Number.parseFloat(prompt('Qual a primeira nota do aluno'));
var nota2 = Number.parseFloat(prompt('Qual a segunda nota do aluno'));
var media = (nota1+nota2) /2 ;

alert('a média das notas do aluno é de: '+media);

