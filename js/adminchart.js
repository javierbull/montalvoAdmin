var ctx = document.getElementById("chartCategorias").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Cineplanet', 'Entretenimiento', 'Salud y belleza', 'Boxes y regalos', 'Viajes y turismo'],
        datasets: [{
            label: 'Solicitudes',
                data: [1000,830,950,450,500],
                fill: true,
                borderRadius: 8,
                backgroundColor: [
                    '#0ABDA0',
                    '#59E5C8',
                    '#24D5B5',
                    '#96FAE1',
                    '#CAFEEE'
                ],
                datalabels: {
                    display: false
                }
        }]
        
    },
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            }
        },
        scales: {
          yAxes: [{
            ticks:{
                beginAtZero: true
            }
          }]
        },
        
        
      },
   

});

var ctx = document.getElementById("chartColaboradores").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ['Activos', 'Inactivos', 'Pre-registrados'],
        datasets: [{
            label: 'Colaboradores',
                data: [400,350,250],
                fill: true,
                backgroundColor: [
                    '#76B435',
                    '#FFAE11',
                    '#FF5F73'
                ],
                datalabels: {
                    display: false
                }
        }]
        
    },
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            }
        },
      },
   

});

var ctx = document.getElementById("chartCanales").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ['WhatsApp', 'Digital', 'In-house'],
        datasets: [{
            label: 'Porcentaje',
                data: [40,35,25],
                fill: true,
                backgroundColor: [
                    '#76B435',
                    '#518AF9',
                    '#FFBC3B'
                ],
                datalabels: {
                    display: false
                }
        }]
        
    },
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            }
        },
      },
   

});
