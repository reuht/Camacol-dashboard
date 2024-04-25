import { type } from "@testing-library/user-event/dist/type";
import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";

class Lineal extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line', 
            
          },
          colors: ['#005bed', '#d2e2f8'],

          fill: {
             colors: undefined,
             opacity: 0,
             type: 'transparent'
          },

          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    }
    render() {
      return (
        <div className="chart-lineal">
          <div className="chart-lineal-title">
            <p className="chart-lineal-title-text">Dashboard</p>
          </div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
 

  export default Lineal; 