import React from 'react';

import ProductCard from '../components/ProductCard';

const ManageProduct = () => {
  return (
    <div className=" ml-5 px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ManageProduct;
