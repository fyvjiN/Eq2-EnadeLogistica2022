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

var isQuestionary = sessionStorage.setItem("isQuestionary", 0);
var isQuestionary = sessionStorage.getItem("isQuestionary");
if (isQuestionary == 0) {
    localStorage.setItem("arrAnswers", JSON.stringify(arrAnswers));
}