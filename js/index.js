// Declaração e inicialização da matriz de respostas do questionário
var arrAnswers = [
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida",
    "Não respondida"
]

// Definição do valor "0" para a chave "isQuestionary" no sessionStorage
var isQuestionary = sessionStorage.setItem("isQuestionary", 0);

// Recuperação do valor armazenado na chave "isQuestionary" do sessionStorage
var isQuestionary = sessionStorage.getItem("isQuestionary");

// Verifica se o valor recuperado é igual a 0
if (isQuestionary == 0) {
    // Armazena a matriz de respostas no localStorage como uma string JSON
    localStorage.setItem("arrAnswers", JSON.stringify(arrAnswers));
}