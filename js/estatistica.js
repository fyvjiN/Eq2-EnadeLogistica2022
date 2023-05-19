var dados = [
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
  
  const sectionGraficos = document.querySelector('.section-graficos');
  
  for (let i = 0; i < dados.length; i++) {
    const chartContainer = document.createElement('div');
    chartContainer.classList.add('chart-container');
    
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    
    sectionGraficos.appendChild(chartContainer);
    
    new Chart(canvas, {
        type: 'bar', // ou o tipo de gráfico desejado
        data: {
          labels: ['A', 'B', 'C', 'D', 'E'],
          datasets: [
            {
              label: `Questão ${i + 1}`,
              data: dados[i],
              backgroundColor: 'rgba(0, 123, 255, 0.5)',
            },
          ],
        },
        options: {
          //responsive: true, // torna o gráfico responsivo
          //maintainAspectRatio: false, // permite que o gráfico se ajuste ao tamanho do contêiner
          // outras configurações opcionais do gráfico
        },
      });
    }