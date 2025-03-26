import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartWithFill = ({classes}) => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Task Submission rate',
        data: [60, 60, 20, 120, 70, 70, 70],
        borderColor: '#70f',
        backgroundColor: '#71f',
        fill: false,
        borderWidth: 2, // Thin line
        pointRadius: 1, // Remove dots
        pointHoverRadius: 5, // Remove hover effect on dots
        tension: 0, // Add smoothness to the line
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

  return(   
  <div className={`col-start-6 col-span-4 row-start-7 row-span-full bg-p1 rounded-md p-4 shadow-xl shadow-s1/10 ${classes}`}>
   <h3 className='text-2xl pb-5 font-medium text-p2 '></h3>
   <Line data={data} options={options} style={{ height: '205px' }} />
   </div>
  )
};

export default LineChartWithFill;