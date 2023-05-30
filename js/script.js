//Função para fechar ou abrir o pop-up
function closeButton() {
    var btn = document.getElementsByClassName("close-pop")
    var popCerto = document.getElementById("pop-certo");
    var popErrado = document.getElementById("pop-errado");
    var popOverlay1 = document.getElementById("pop-overlay1");
    var popOverlay2 = document.getElementById("pop-overlay2")

    if (btn[0]) {
        popOverlay1.style.display = "none";
    } if (btn[1]) {
        popOverlay2.style.display = "none";
    }
}

var menuCriado = false;
//Função que constroi o menu de navegação ao apertar o botão menu na página
function abrirMenuNavegacao() {
    if (!menuCriado) {

        menuCriado = true;
        const links = [
            '../question_page/EQ2_Q1_Ab_LOGISTICA_2022.html',
            '../question_page/EQ2_Q2_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q3_Aa_LOGISTICA_2022.html',
            '../question_page/EQ2_Q4_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q5_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q6_Ae_LOGISTICA_2022.html',
            '../question_page/EQ2_Q7_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q8_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q9_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q10_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q11_Aa_LOGISTICA_2022.html',
            '../question_page/EQ2_Q12_Aa_LOGISTICA_2022.html',
            '../question_page/EQ2_Q13_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q14_Ab_LOGISTICA_2022.html',
            '../question_page/EQ2_Q15_Ae_LOGISTICA_2022.html',
            '../question_page/EQ2_Q16_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q17_Ae_LOGISTICA_2022.html',
            '../question_page/EQ2_Q18_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q19_Ab_LOGISTICA_2022.html',
            '../question_page/EQ2_Q20_Ab_LOGISTICA_2022.html',
            '../question_page/EQ2_Q21_Ae_LOGISTICA_2022.html',
            '../question_page/EQ2_Q22_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q23_Ac_LOGISTICA_2022.html',
            '../question_page/EQ2_Q24_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q25_Ae_LOGISTICA_2022.html',
            '../question_page/EQ2_Q26_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q27_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q28_Aa_LOGISTICA_2022.html',
            '../question_page/EQ2_Q29_Ab_LOGISTICA_2022_INCOMPLETO.html',
            '../question_page/EQ2_Q30_Ab_LOGISTICA_2022.html',
            '../question_page/EQ2_Q31_Aa_LOGISTICA_2022.html',
            '../question_page/EQ2_Q32_Ae_LOGISTICA_2022.html',
            '../question_page/EQ2_Q33_Aa_LOGISTICA_2022.html',
            '../question_page/EQ2_Q34_Ad_LOGISTICA_2022.html',
            '../question_page/EQ2_Q35_Ab_LOGISTICA_2022.html'

        ]; // adicione os links que você precisa aqui
        const menu = document.createElement('div');
        menu.classList.add('menu-navegacao');
        const lista = document.createElement('ul');

        for (let i = 0; i < links.length; i++) {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = links[i];
            link.textContent = (i + 1).toString(); // use i + 1 para criar os números de menu sequenciais
            item.appendChild(link);
            lista.appendChild(item);
        }

        // Adiciona a lista ao menu
        menu.appendChild(lista);

        // Adiciona o menu à página
        document.body.appendChild(menu);

        // Adiciona um ouvinte de evento para capturar a tecla pressionada
        document.addEventListener('keydown', function(event) {
        // Verifica se a tecla pressionada é a tecla "Esc"
            if (event.keyCode === 27 || (!menu.contains(event.target))) {
                // Altera o estilo do menu para ocultá-lo
                menu.style.display = 'none';
                menuCriado = false;
            }
        });
    }
}

// Obtem o array de respostas armazenado no localStorage
var arrAnswers = JSON.parse(localStorage.getItem("arrAnswers"));

// Obtem a seção atual de questões e o seu respectivo ID
var sectionQuestion = document.querySelector(".section-question");
var dataId = sectionQuestion.getAttribute("data-id");

// Obtem a quantidade de questões não respondidas, definindo para 35 caso não exista.
var numNaoRespondido = localStorage.getItem('numNaoRespondido');
if (numNaoRespondido === null || numNaoRespondido === 0 || numNaoRespondido === -1) {
    numNaoRespondido = 35;
    console.log(numNaoRespondido);
}

// Obtem a quantidade de questões erradas, definindo para 0 caso não exista uma resposta errada
var numErro = localStorage.getItem('numErro');
if (numErro === null || numErro === 0) {
    numErro = 0;
}

// Obtem a quantidade de questões certas, definindo para 0 caso não exista uma resposta certa
var numAcerto = localStorage.getItem('numAcerto');
if (numAcerto === null || numAcerto === 0) {
    numAcerto = 0;
}

// Obtem a resposta armazenada pelo usuário e, caso já exista uma resposta marcada, marca a opção selecionada, desabilita todas as opções e desabilita o botão corrigir
var respostaArmazenada = localStorage.getItem(window.location.href);
if (respostaArmazenada) {
    const inputResposta = document.querySelector(`input[name=resposta][value=${respostaArmazenada}]`);
    if (inputResposta) {
        inputResposta.checked = true;
        // desabilitar todas as opções da questão
        const radioInputs = document.querySelectorAll('input[name="resposta"]');
        for (let i = 0; i < radioInputs.length; i++) {
            radioInputs[i].disabled = true;
        }
        // desabilitar o botão corrigir
        document.getElementById("btn-corrigir").disabled = true;
    }
}

//Função que corrige a questão e contabiliza no contador
function corrigir() {
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
        }

        if (input.checked) {
            console.log(input.value);
            arrAnswers[dataId - 1] = input.value;
            localStorage.setItem("arrAnswers", JSON.stringify(arrAnswers));
        }
    }

    var respSelecionada = document.querySelector('input[name="resposta"]:checked');
    var respostaCorreta = document.getElementById("correta");
    var respostaErrada = document.getElementById("errada");
    if (!respSelecionada) {
        alert("Você não selecionou nenhuma alternativa. Não há como corrigir a questão!");
        return;
    }

    if (respSelecionada && respSelecionada.value === respCorreta) {

        console.log('Entrou no certo!');
        numAcerto++;
        numNaoRespondido--;
        //armazena o valor de numNaoRespondido, decrementando seu valor.
        localStorage.setItem('numNaoRespondido', numNaoRespondido);
        //armazena o valor de numAcerto incrementado ou não após o botão corrigir.
        localStorage.setItem('numAcerto', numAcerto);
        document.getElementById("pop-overlay2").style.display = "block";

    } else {
        console.log('Entrou no errado!');
        numErro++;
        numNaoRespondido--;
        //armazena o valor de numNaoRespondido, decrementando seu valor.
        localStorage.setItem('numNaoRespondido', numNaoRespondido);
        //armazena o valor de numAcerto incrementado ou não após o botão corrigir.
        localStorage.setItem('numErro', numErro);
        document.getElementById("pop-overlay1").style.display = "block";
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

//Função que habilita as estatisticas de questões na tela da modal
function mostrarEstatisticas(){
    // Seleciona o elemento HTML com o id "#chart-container2"
    var menuEstatisticaErrado = document.querySelector("#chart-container2");
    // Seleciona o elemento HTML com o id "#chart-container"
    var menuEstatisticaCerto = document.querySelector("#chart-container");
    //Aciona o display block para o menu Errado
    if (menuEstatisticaErrado) {
        menuEstatisticaErrado.style.display = 'block';
    }
    //Aciona o display block para o menu Certo
    if (menuEstatisticaCerto) {
        menuEstatisticaCerto.style.display = 'block';
    }
}