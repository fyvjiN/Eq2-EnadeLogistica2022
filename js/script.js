//Função para fechar ou abrir o pop-up
function closeButton() {
    var btn = document.getElementsByClassName("close-pop")
    var popCerto = document.getElementById("pop-certo");
    var popErrado = document.getElementById("pop-errado");

    if(btn[0]) {
        popErrado.style.display = "none";
    }if(btn[1]) {
        popCerto.style.display = "none";
    }
}

var numErro = localStorage.getItem('numErro');
var numAcerto = localStorage.getItem('numAcerto');
if (numAcerto === null || numAcerto === 0) {
    numAcerto = 0;
  }
const respostaArmazenada = localStorage.getItem(window.location.href);
if (respostaArmazenada) {
    const inputResposta = document.querySelector(`input[name=resposta][value=${respostaArmazenada}]`);
    if (inputResposta) {
        inputResposta.checked = true;
        // desabilitar todas as opções da questão
        const radioInputs = document.querySelectorAll('input[name="resposta"]');
        for (let i = 0; i < radioInputs.length; i++) {
            radioInputs[i].disabled = true;
        }
    }
}

//Função que corrige a questão e contabiliza no contador
function corrigir(){
    console.log(numAcerto);
    console.log('Entrou no corrigir()');
    var radioInputs = document.querySelectorAll('input[name="resposta"]');
    var respCorreta = null;
    for (var i = 0; i < radioInputs.length; i++) {
        console.log('Entrou no primeiro for');
        var input = radioInputs[i];
        if (input.dataset.correct === "true") {
            console.log('pegou o dataset correto');
            respCorreta = input.value;
            break;
        }
    }

    var respSelecionada = document.querySelector('input[name="resposta"]:checked');
    var respostaCorreta = document.getElementById("correta");
    var respostaErrada = document.getElementById("errada");
    if (!respSelecionada) {
        alert("Selecione uma resposta antes de corrigir a questão.");
        return;
    }

    if(respSelecionada && respSelecionada.value === respCorreta){

        console.log('Entrou no certo!');
        numAcerto++;
        //armazena o valor de numAcerto incrementado ou não após o botão corrigir.
        localStorage.setItem('numAcerto', numAcerto);
        document.getElementById("pop-certo").style.display = "block";
        
    } else {
        console.log('Entrou no errado!');
        numErro++;
        //armazena o valor de numAcerto incrementado ou não após o botão corrigir.
        localStorage.setItem('numErro', numErro);
        document.getElementById("pop-errado").style.display = "block";
    }

    //desabilitar todas as opções da questão
    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].disabled = true;
    }

    // desabilitar o botão corrigir
    document.getElementById("btn-corrigir").disabled = true;

    // armazenar resposta selecionada pelo usuário
    if (respSelecionada) {
        localStorage.setItem(window.location.href, respSelecionada.value);
    }
}

//função dedicada para a página de resultado, contendo a lógica do número de acertos e erros da prova online.
function resultado(){
    console.log('abriu resultado!!!1');
    var numErro = 35 - numAcerto;
    document.getElementById("acertos").innerHTML = `Seus acertos: <b>${numAcerto}</b> / 35` // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}`
    document.getElementById("erros").innerHTML = `Seus erros: <b>${numErro}</b> / 35` // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}`
}

//função que ira limpar todos os dados da sessão local, reiniciando o conteúdo do teste e suas alternativas selecionadas. Alem disso, redireciona para a pagina de instrucao
function reiniciarProva(){
    console.log('entrou no resetar');
    localStorage.clear();
    window.href.location = "homepage/instrução.html";
}
