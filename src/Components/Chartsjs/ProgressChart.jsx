import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskProgressChart = ({classes}) => {
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Tasks',
        data: [23, 20], // Example data: 23 completed out of 43 total tasks
        backgroundColor: [
          'chocolate', // Dull color for completed tasks
          'rgba(211, 211, 211, 0.6)', // Dull color for remaining tasks
        ],
        borderColor: [
          'orange',
          'whi',
        ],
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
        display: true,
        text: '',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((prev, curr) => prev + curr, 0);
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${currentValue} (${percentage}%)`;
          },
        },
      },
      datalabels: {
        display: true,
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((prev, curr) => prev + curr, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: '#000',
        font: {
          size: 15,
          weight: 'bold',
        },
      },
    },
    cutout: '70%', // Make the chart thinner
  };

  return (
    <div className={`task-progress-chart-container col-span-5 bg-p1 row-span-5 flex items-center ${classes}`}>
      <div className="flex  items-center justify-center ">
      <div className="flex justify-between w-40  rounded-lg p-8 bg-linear-to-br flex-col text-2xl h-30 items-between text-nowrap font-medium">
          <span className="text-p2 tracking-tighter   h-full p-">Completed Tasks</span>
          <span className="text-p2 tracking-tighter   h-full p-">Remaining Tasks</span>
        </div>
        
        <Doughnut data={data} options={options}style={{ width: "2rem", height: "2rem", display:"grid", placeContent: "center", transform: "translateY(-5%)", padding: "0px",margin: 0,  scale: .2,  }}/>
        
      </div>

    </div>
  );
};

export default TaskProgressChart;