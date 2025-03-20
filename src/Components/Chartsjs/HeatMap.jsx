import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './HeatMap.css'; // Import custom styles

const HeatMap = ({ classes }) => {
  const today = new Date();
  const values = [
    { date: '2024-12-31', count: 2 },
    { date: '2024-12-02', count: 4 },
    { date: '2025-01-03', count: 2 },
    { date: '2025-01-04', count: 3 },
    { date: '2024-10-09', count: 2 },
    // Add more data points here
  ];

  return (
    <div className={`heatmap-container bg-p1 rounded-lg w-full h-full z-10 ${classes}`}>
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), 0, 1)}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': `${value.date} has count: ${value.count}`,
          };
        }}
        showWeekdayLabels={false}
        gutterSize={1}
      />
    </div>
  );
};

export default HeatMap;