import React from 'react';

import LineChart from '../../components/Charts/LineChart';

const RevenueReport = () => {
  return (
    <div className="text-white font-semibold ">
      <h1 className="px-3 pt-3 text-xl">Revenue report</h1>
      <div className="flex justify-center gap-5">
        <div className="items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white border rounded-full mr-3" />
            <p> Earnings</p>
          </div>
          <p className="flex justify-center font-semibold text-2xl">
            37000k
          </p>
        </div>
        <div className="items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#FFE500] border rounded-full mr-3" />
            <p> Invested</p>
          </div>
          <p className="flex justify-center font-semibold text-2xl">
            37000k
          </p>
        </div>
        <div className="items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#5BDC90] border rounded-full mr-3" />
            <p> Expenses</p>
          </div>
          <p className="flex justify-center font-semibold text-2xl">
            37000k
          </p>
        </div>
      </div>
      <LineChart />
    </div>
  );
};

export default RevenueReport;
