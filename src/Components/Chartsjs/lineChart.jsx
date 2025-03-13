import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartWithFill = () => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 35, 45, 50, 60, 75, 120],
        borderColor: '#00aaff',
        backgroundColor: '',
        fill: false,
        borderWidth: 2, // Thin line
        pointRadius: 1, // Remove dots
        pointHoverRadius: 5, // Remove hover effect on dots
        tension: 0.5, // Add smoothness to the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: false, // Hide title
      },
    },
    scales: {
      x: {
        display: true, // Hide x-axis
        grid: {
          display: true, // Remove x-axis grid lines
        },
        border: {
          display: true, // Remove x-axis border
        },
      },
      y: {
        display: true, // Hide y-axis
        grid: {
          display: true, // Remove y-axis grid lines
        },
        border: {
          display: true, // Remove y-axis border
        },
      },
    },
  };

  return <Line data={data} options={options} style={{ height: '205px' }} />;
};

export default LineChartWithFill;