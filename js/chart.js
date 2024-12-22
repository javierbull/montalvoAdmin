var ctx = document.getElementById("chartColaboradores").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Plataforma', 'Inhouse', 'Pre registrados', 'Sin confirmar'],
        datasets: [{
            data: [250, 100, 50, 50],
            backgroundColor: [
                'rgba(223, 251, 242, 1)',
                'rgba(238, 246, 252, 1)',
                'rgba(255, 251, 235, 1)',
                'rgba(254, 236, 240, 1)'
            ],
            borderColor: [
                'rgba(0,150,109,1)',
                'rgba(29, 114, 170, 1)',
                'rgba(227, 150, 1, 1)',
                'rgba(204, 15, 53, 1)'
            ],
            borderWidth: 2,
            fill: false,
        }]
        
    },
    options: {
        legend: {
            display: false
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
