function somar(){
    var num1 = parseInt(document.getElementById('num1').value)  
    var num2 = parseInt(document.getElementById('num2').value)
// .value para pegar o elemento que esta dentro
    var soma = num1 + num2  
    document.getElementById('resultado').innerHTML = 'Soma = ' + soma
    
} 

