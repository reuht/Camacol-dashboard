import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";


class Sector extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 13],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
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
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={360} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }


  export default Sector; 