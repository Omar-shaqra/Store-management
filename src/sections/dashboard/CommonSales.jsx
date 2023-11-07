import React from 'react';

import ProductCard from '../../components/ProductCard';
import Pie from '../../components/Charts/Pie';

const CommonSales = () => {
  return (
    <div className="flex flex-col h-fit w-[340px]  gap-3 boreder border-stone-800 rounded-2xl text-white text-lg  bg-[#292927]">
      {/* Top Section */}
      <div>
        <h1 className="px-3 pt-3 font-semibold text-xl">
          Common Sales Category
        </h1>
        <Pie />
      </div>
      <div className="self-center h-[1px] bg-stone-500" />
      {/* Bot Section */}
      <div className="flex flex-col m-3">
        <h1 className="px-3 pb-2 font-semibold text-xl">
          Top Products
        </h1>
        <ProductCard buttons={false} />
      </div>
    </div>
  );
};

export default CommonSales;
