import React from 'react'
import { Line } from 'react-chartjs-2'
import { CategoryScale, Chart } from 'chart.js'

Chart.register(CategoryScale)

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }
  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 100,
          },
        },
      ],
    },
  }

  return <Line data={data} options={options} />
}

export default LineChart
