import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskProgressChart = () => {
  const data = {
    labels: ['Small Tasks', 'Medium Tasks', 'Big Tasks'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [50, 30, 20], // Example data
        backgroundColor: [
          "#00aaff",
          'orange',
          'red',
        ],
        borderColor: "transparent",
        borderWidth: 1,
        hoverOffset: 2,
        spacing: 10 // Add hover effect
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '98%', // Make the chart thinner
    plugins: {
      legend: {
        position: 'top',
        
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: false,
        text: 'Task Progress',
        color: '#333',
        font: {
          size: 16,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        footerFont: {
          size: 12,
        },
      },
    },
    circumference: 180, // Half circle
    rotation: -90, // Start from the top
    animation: {
      animateRotate: true, // Enable rotation animation
      animateScale: true, // Enable scaling animation
    },
  };

  return (
    <div className="task-progress-chart-container p-5">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TaskProgressChart;