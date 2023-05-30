// Obtém os valores armazenados no localStorage para 'numAcerto' e 'numErro' e converte-os para números inteiros
var numAcerto = parseInt(localStorage.getItem('numAcerto'));
var numErro = parseInt(localStorage.getItem('numErro'));

// Calcula o número total de perguntas respondidas
var numRespondido = numAcerto + numErro;

// Obtém o valor armazenado no localStorage para 'numNaoRespondido'
var numNaoRespondido = localStorage.getItem('numNaoRespondido');

// Obtém o contexto do elemento de gráfico de barras com o ID 'bar-chart'
var ctx = document.getElementById('bar-chart').getContext('2d');

// Cria um novo gráfico de barras para exibir o índice de questões respondidas e não respondidas
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Questões Não Respondidas', 'Questões Respondidas'],
    datasets: [{
      label: 'Índice de questões respondidas e não respondidas',
      data: [numNaoRespondido, numRespondido],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Obtém o contexto do elemento de gráfico de barras com o ID 'bar-chart-acertos-erros'
var ctx = document.getElementById('bar-chart-acertos-erros').getContext('2d');

// Cria um novo gráfico de barras para exibir o índice de acertos e erros
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Índice de acertos e erros'],
    datasets: [{
      label: 'Acertos',
      data: [numAcerto],
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }, {
      label: 'Erros',
      data: [numErro],
      backgroundColor: 'rgb(255, 0, 0, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
