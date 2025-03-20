// filepath: c:\Users\91705\Downloads\Basic JavaScript_ Escape Sequences in Strings _ freeCodeCamp.org_files\Office.com\src\Components\BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({classes}) => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Tasks Submitted',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#8910c9',
        borderColor: '#70f',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 0,
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  
  return <div className={` bg-p1  p-4 rounded-lg shadow-xl shadow-s1/10 ${classes}`}>
   
  <Bar data={data} options={options} />
  </div>
};

export default BarChart;