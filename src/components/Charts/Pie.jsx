import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

export default function Pie() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [100, 70, 300, 0],
            backgroundColor: ['#FFE500', '#5BDC90', '#FFFFFF'],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-5">
      <canvas ref={chartRef} className="w52 h-48" />
      <div className="mr-2 mt-2 ">
        <div className=" flex justify-start items-center content-center">
          <div className="w-7 h-3 bg-[#FFE500] border rounded-full mr-3" />
          <p>Electronics</p>
        </div>
        <div className=" flex justify-start items-center content-center">
          <div className="w-7 h-3 bg-[#5BDC90] border rounded-full mr-3" />
          <p>Mobile</p>
        </div>
        <div className=" flex justify-start items-center content-center">
          <div className="w-7 h-3 bg-[#FFFFFF] border rounded-full mr-3" />
          <p>Laptop</p>
        </div>
      </div>
    </div>
  );
}
