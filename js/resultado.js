//função dedicada para a página de resultado, contendo a lógica do número de acertos e erros da prova online.
function resultado(){

    var numAcerto = localStorage.getItem('numAcerto');
    var numErro = localStorage.getItem('numErro');
    var numNaoRespondido = localStorage.getItem('numNaoRespondido');
    console.log('abriu resultado!!!1');

    if (numAcerto == null){
        document.getElementById("nao-respondidas").innerHTML = `Seus acertos: <b>0</b> / 35`;
    } else {
        document.getElementById("acertos").innerHTML = `Seus acertos: <b>${numAcerto}</b> / 35`; // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    }
  
    if (numErro == null){
        document.getElementById("erros").innerHTML = `Seus erros: <b>0</b> / 35`; // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    } else {
        // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}`
        document.getElementById("erros").innerHTML = `Seus erros: <b>${numErro}</b> / 35`; // Aqui ira apresentar o resultado mostrando a quantidade de acertos
    }

    if (numNaoRespondido == null){
        document.getElementById("nao-respondidas").innerHTML = `Questões não respondidas: <b>35</b> / 35`;
    } else {
        // document.getElementById("escolha").innerHTML = `Suas respostas: ${quebrar}`
        document.getElementById("nao-respondidas").innerHTML = `Questões não respondidas: <b>${numNaoRespondido}</b> / 35`;
    }


}

//função que ira limpar todos os dados da sessão local, reiniciando o conteúdo do teste e suas alternativas selecionadas. Alem disso, redireciona para a pagina de instrucao
function reiniciarProva(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "instrucao.html";
}
