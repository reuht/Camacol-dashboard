import React from 'react';
import Chart from 'react-apexcharts';

function Linechart() {
  const colors = ['#F190DB', '#FEDCB4', '#C6C6F7', '#EAE2A0', '#F1DDBF', '#90EDD7', '#F0C1B3', '#A1CFF0', '#BBE5F7', '#EDD0A5', '#F190DB', '#FEDCB4'];

  const options = {
    series: [{
      data: [21, 22, 10, 28, 16, 21, 13, 30, 96, 87, 78, 96]
    }],
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories:[['Objetivos'],
      ['La semana pasada'],
      ['El otro mes'],
      [''],
      ],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  };

  return (
    <div className='container-fluid mt-3 mb-3'>
      <h2>Ventas de vivienda en el Atlántico por rango de precio</h2>
      <Chart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
}

export default Linechart;