/*
var numAcerto = localStorage.getItem('numAcerto');
var numErro = localStorage.getItem('numErro');
var numNaoRespondido = localStorage.getItem('numNaoRespondido');

var ctx = document.getElementById('bar-chart-acertos-erros').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Acertos', 'Erros'],
    datasets: [{
      label: 'Índice de Acertos e Erros',
      data: [1, 2],
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
*/

/*
var ctx = document.getElementById('bar-chart-questoes-respondidas').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Questões Não Respondidas', 'Questões Respondidas'],
    datasets: [{
      label: 'Média de questões respondias e não respondidas',
      data: [numNaoRespondido, numAcerto+num],
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
*/

var ctx = document.getElementById('bar-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Índice de Acerto',
      data: [1, 5, 4, 6, 2],
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