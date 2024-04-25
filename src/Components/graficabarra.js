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
        columnWidth: '70%', // Ajusta el ancho de las barras para dejar más espacio
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
      categories: ['Objetivo', '', '', 'La semana pasada', '', '', 'El mes pasado', '', ''],
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 'normal'
        },
        align: 'center',
        rotate: 0 // Rotación de las etiquetas en el eje X (0 grados)
      }
    }
  };

  return (
    <div className='grafica-barra-container'>
      <div className='grafica-barra-title'>
        <p className='grafica-barra-title-text'>Ventas de vivienda en el Atlántico por rango de precio</p>
      </div>
      <Chart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
}

export default Linechart;


