var numAcerto = parseInt(localStorage.getItem('numAcerto'));
var numErro = parseInt(localStorage.getItem('numErro'));
var numRespondido = numAcerto + numErro;
var numNaoRespondido = localStorage.getItem('numNaoRespondido');

var ctx = document.getElementById('bar-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Questõe Não Respondidas', 'Questões Respondidas'],
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

var ctx = document.getElementById('bar-chart-acertos-erros').getContext('2d');
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