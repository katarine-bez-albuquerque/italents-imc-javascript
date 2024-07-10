window.onload = function () {

    var altura = document.getElementById("altura");
    var peso = document.getElementById("peso");
    var resultado = document.getElementById("resultado");
    var imc = document.getElementById("imc");
    var calcular = document.getElementById("calcular");
    var limpar = document.getElementById("limpar");
    
    calcular.addEventListener("click", function () {
        let numero1 = 0, numero2 = 0;
        numero1 = Number(altura.value);
        numero2 = Number(peso.value);
        validarValores(numero1, numero2, resultado);
        // Calcula o IMC
        let total = numero2 / (numero1 * numero1);
        // Se diferente de total exibe um erro, senão exibe as informações.
        if(!total) {
            limparCampos();
            limparValores();
        }
        else {
            imc.textContent = total.toFixed(2); 

            verificarIMC(total, resultado);
                    
            limparCampos();
        }        
    });

    limpar.addEventListener("click", function(){
        limparCampos();
        limparValores();
    });
}

function limparValores() {
    resultado.textContent = "";
    imc.textContent = "";
}

function limparCampos() {
    altura.value = "";
    peso.value = "";
}

function validarValores(numero1, numero2, resultado) {
    if((typeof(numero1) !== 'number' || !numero1 || numero1 < 0)
        || (typeof(numero2) !== 'number' || !numero2 || numero2 < 0)) {
            resultado.textContent = "Informe somente números!";
            throw new Error("Informe somente números!");
    }    
}

function verificarIMC(total, resultado) {
    if(total < 18.5) {
        console.log('Abaixo do Peso');
        resultado.textContent = 'Abaixo do Peso';
    }
    else if(total < 24.9) {
        console.log('Peso Normal');
        resultado.textContent = 'Peso Normal';
    }
    else if(total < 29.9) {
        console.log('Sobrepeso');
        resultado.textContent = 'Sobrepeso';
    }
    else if(total >= 30) {
        console.log('Obesidade');
        resultado.textContent = 'Obesidade';
    }
}

// Testando IMC
function testarIMC() {
    
    let altura = 1.75;
    let peso = 65;

    validarValores(altura, peso, "");

    let total = peso / (altura * altura);
    console.log(total.toFixed(2));

    verificarIMC(total, "");
}

testarIMC();