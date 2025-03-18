// filepath: c:\Users\91705\Downloads\Basic JavaScript_ Escape Sequences in Strings _ freeCodeCamp.org_files\Office.com\src\Components\HeatMap.jsx
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
// import './HeatMap.css'; // Optional: for custom styles

const HeatMap = () => {
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
    <div className="heatmap-container  bg-p1  rounded-lg  w-full h-full row-start-2 row-span-3 col-start-1 col-span-6">
<select name="" id="" className='outline-1 rounded-sm px-3 p1'>
  <option value="By Month">By Month</option>
  <option value="By Month">By Annual</option>
</select>

      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), 0, -101)}
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
      />
    </div>
  );
};

export default HeatMap;