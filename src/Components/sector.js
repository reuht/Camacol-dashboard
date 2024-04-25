import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";


class Sector extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13],
        options: {
          legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center', 
          }, 

          chart: {
            width: '100%',
            type: 'pie',
            labels: false
          },
          colors: ['#1b407e', '#99d4d4', '#c6c6f7', '#005bed', '#d2e2f8'],
          
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: '100%'
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

    render() {
      return (
        <div className="chart-sector-style">
          <div className="chart-sector-style-title">
            <p className="chart-sector-style-title-text">Ventas de vivienda en el atlántico</p>
          </div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }


  export default Sector; 