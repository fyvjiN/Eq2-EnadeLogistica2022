// Função dedicada à página de resultado, contendo a lógica do número de acertos e erros da prova online.
function resultado() {

    // Obtém o número de acertos, erros e questões não respondidas armazenados no localStorage
    var numAcerto = localStorage.getItem('numAcerto');
    var numErro = localStorage.getItem('numErro');
    var numNaoRespondido = localStorage.getItem('numNaoRespondido');

    // Verifica se o número de acertos é nulo
    if (numAcerto == null) {
        document.getElementById("acertos").innerHTML = `Seus acertos: <b>0</b> / 35`;
    } else {
        document.getElementById("acertos").innerHTML = `Seus acertos: <b>${numAcerto}</b> / 35`;
    }

    // Verifica se o número de erros é nulo
    if (numErro == null) {
        document.getElementById("erros").innerHTML = `Seus erros: <b>0</b> / 35`;
    } else {
        document.getElementById("erros").innerHTML = `Seus erros: <b>${numErro}</b> / 35`;
    }

    // Verifica se o número de questões não respondidas é nulo
    if (numNaoRespondido == null) {
        document.getElementById("nao-respondidas").innerHTML = `Questões não respondidas: <b>35</b> / 35`;
    } else {
        document.getElementById("nao-respondidas").innerHTML = `Questões não respondidas: <b>${numNaoRespondido}</b> / 35`;
    }
}

// Função que limpa todos os dados da sessão local, reiniciando o conteúdo do teste e suas alternativas selecionadas.
// Além disso, redireciona para a página de instruções.
function reiniciarProva() {
    // Limpa os dados armazenados no localStorage e sessionStorage
    localStorage.clear();
    sessionStorage.clear();
    // Redireciona para a página de instruções
    window.location.href = "instrucao.html";
}
