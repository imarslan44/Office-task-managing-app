// filepath: c:\Users\91705\Downloads\Basic JavaScript_ Escape Sequences in Strings _ freeCodeCamp.org_files\Office.com\src\Components\HeatMap.jsx
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
//import './HeatMap.css'; // Optional: for custom styles

const HeatMap = () => {
  const today = new Date();
  const values = [
    { date: '2023-01-01', count: 1 },
    { date: '2023-01-02', count: 4 },
    { date: '2023-01-03', count: 2 },
    // Add more data points here
  ];

  return (
    <div className="heatmap-container w-[600px] h-300px">
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(),4, 0)}
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
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default HeatMap;