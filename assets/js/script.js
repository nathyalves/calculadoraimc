
function calcularIMC(){
    
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value); 
    let imc = parseFloat(peso / (altura * altura));
    let classificacao = null;

    if (imc <= 16.9){
        classificacao = 'Abaixo do peso! :O'}
    else if (imc >= 17.0 && imc <= 18.4) {
        classificacao = 'Muito abaixo do peso! :('}
    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal!! :)'}
    else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Acima do peso... :('}
    else if (imc >= 30.0 && imc <= 34.9){
        classificacao = 'Obesidade grau I. :('}
    else if (imc >= 35.0 && imc <= 40.0){
        classificacao = 'Obesidade grau II. :O'}
    else if (imc > 40.0){
        classificacao = 'Obesidade grau III. :O'
    }
    else {
        classificacao = 'Erro.'}

    document.getElementById('resultado').setAttribute("value", "IMC: " + imc.toFixed(2) + " - " + classificacao);

    }
    