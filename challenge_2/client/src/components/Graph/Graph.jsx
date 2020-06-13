import React, { Component } from 'react';
import Chart from 'chart.js';

class Graph extends Component {
  componentDidMount() {
    console.log('data [graph] => ', this.props.data)
    this.generateGraph(this.props.data);
  }

  generateGraph({data}) {
    console.log('calling generateGraph => ', data)
    const ctx = document.getElementById('bitcoin');
    const bitcoinGraph = new Chart(ctx, {
      type: "line",
      data: {
        labels: data && Object.keys(data),
        datasets: [
          {
            label: "Bitcoin",
            data: data && Object.values(data),
            backgroundColor:
              [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
            borderColor:
              [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],

            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="bitcoin" width="300" height="300" />
      </div>
    )
  }
}

export default Graph;