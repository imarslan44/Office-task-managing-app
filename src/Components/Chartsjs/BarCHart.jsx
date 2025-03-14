// filepath: c:\Users\91705\Downloads\Basic JavaScript_ Escape Sequences in Strings _ freeCodeCamp.org_files\Office.com\src\Components\BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#00aaff',
        borderColor: '#00aaff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  return <div className='col-start-1  col-span-5 row-start-7 row-span-full bg-white  p-8 rounded-lg shadow-xs'>
    <h2 className='text-xl font-medium text-p2'>Tasks per month</h2>
  <Bar data={data} options={options} />
  </div>
};

export default BarChart;