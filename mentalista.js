var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;
document.querySelector("#attempts").innerText = `Tentativas: ${tentativas}`;
document.getElementById("attempts").value = tentativas;

function send() {
    var chute = document.getElementById("input-box").value;
    if (chute == numeroSecreto) {
        document.querySelector("p").innerText = "Você acertou!";
        document.querySelector("#attempts").innerText = `Tentativas: ${tentativas}`;
        document.getElementById("btn").disabled = true;
        document.getElementById("restart").disabled = false;
    } else if (chute > numeroSecreto) {
        document.querySelector("p").innerText ="O número secreto é menor.";
        tentativas = tentativas - 1;
        document.querySelector("#attempts").innerText = `Tentativas: ${tentativas}`;
        document.getElementById("input-box").value = "";
    } else if (chute < numeroSecreto) {
        document.querySelector("p").innerText = "O número secreto é maior.";
        tentativas = tentativas - 1;
        document.querySelector("#attempts").innerText = `Tentativas: ${tentativas}`;
        document.getElementById("input-box").value = "";
    } if (tentativas == 0) {
        document.querySelector("p").innerText ="Suas tentativas acabaram.";
        document.getElementById("btn").disabled = true;
        document.getElementById("restart").disabled = false;
    } else if (chute > 10 || chute < 0) {
        document.querySelector("p").innerText ="Valor inválido.";
        document.getElementById("btn").disabled = true;
        document.getElementById("restart").disabled = false;
    }
}

function restart() {
    tentativas = 3;
    numeroSecreto = parseInt(Math.random() * 10);
    document.querySelector("p").innerText = "Digite um número de 0 a 10";
    document.getElementById("input-box").value = "";
    document.getElementById("btn").disabled = false;
    document.querySelector("#attempts").innerText = `Tentativas: ${tentativas}`;
    document.getElementById("restart").disabled = true;
}