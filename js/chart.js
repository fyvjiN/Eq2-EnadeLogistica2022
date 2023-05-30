// Seleciona o elemento HTML com a classe "section-question"
var sectionQuestion = document.querySelector(".section-question");

// Obtém o valor do atributo "data-id" do elemento selecionado
var dataId = sectionQuestion.getAttribute("data-id");

// Matriz contendo as médias de respostas para cada pergunta
var allQuestions = [
	[0.39,0.18,0.22,0.06,0.15],
	[0.61,0.06,0.21,0.07,0.05],
	[0.28,0.2,0.12,0.3,0.09],
	[0.09,0.52,0.06,0.24,0.09],
	[0.02,0.62,0.06,0.11,0.18],
	[0.14,0.62,0.12,0.04,0.08],
	[0.19,0.21,0.26,0.2,0.14],
	[0.25,0.18,0.26,0.21,0.11],
	[0.16,0.18,0.25,0.27,0.14],
	[0.29,0.12,0.05,0.07,0.46],
	[0.58,0.09,0.18,0.1,0.05],
	[0.25,0.14,0.09,0.42,0.1],
	[0.02,0.03,0.89,0.03,0.03],
	[0.13,0.11,0.17,0.21,0.37],
	[0.29,0.09,0.2,0.15,0.27],
	[0.07,0.6,0.16,0.08,0.09],
	[0.27,0.12,0.07,0.17,0.36],
	[0.3,0.05,0.14,0.43,0.07],
	[0.03,0.05,0.04,0.54,0.34],
	[0.23,0.31,0.15,0.11,0.2],
	[0.21,0.12,0.24,0.09,0.33],
	[0.21,0.32,0.31,0.1,0.05],
	[0.1,0.21,0.17,0.19,0.33],
	[0.18,0.6,0.1,0.03,0.09],
	[0.16,0.37,0.12,0.14,0.2],
	[0.13,0.08,0.35,0.22,0.21],
	[0.21,0.19,0.17,0.2,0.22],
	[0.2,0.55,0.05,0.16,0.04],
	[0.06,0.1,0.6,0.14,0.11],
	[0.21,0.18,0.15,0.16,0.29],
	[0.26,0.2,0.2,0.21,0.12],
	[0.12,0.15,0.19,0.39,0.15],
	[0.4,0.29,0.21,0.03,0.07],
	[0.19,0.38,0.14,0.07,0.21],
	[0.45,0.1,0.07,0.3,0.28]
]

// Obtém o contexto do elemento de gráfico de barras com o ID "bar-chart"
var ctx = document.getElementById('bar-chart').getContext('2d');

// Cria um novo gráfico de barras usando o Chart.js
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Média de respostas por alternativa',
      data: allQuestions[dataId-1],
      backgroundColor: 'rgba(87, 151, 233, 0.5)',
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

// Obtém o contexto do elemento de gráfico de barras com o ID "bar-chart2"
var ctx = document.getElementById('bar-chart2').getContext('2d');

// Cria um novo gráfico de barras usando o Chart.js
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Média de respostas por alternativa',
      data: allQuestions[dataId-1],
      backgroundColor: 'rgba(87, 151, 233, 0.5)',
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
