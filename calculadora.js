function calcularDesconto(){
    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    let imc = peso / (altura * altura);
    //Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
    if (imc > "18,5") {
        textContent = "Seu IMC está bom"
    }

}

