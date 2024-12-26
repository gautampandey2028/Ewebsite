import React from 'react';

const ResData = ({ resdata }) => {
  const { images, id, brand, category, price, rating } = resdata;

  return (
    <>
      <div className="mx-5 m-8 p-4 w-52 border border-solid border-black rounded-xl bg-gray-100 hover:bg-slate-300 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
        <img className="rounded-md h-32 w-full object-cover mb-3" src={images} alt={brand} />
        <h4 className="text-gray-700 text-sm font-medium">{id}</h4>
        <h3 className="font-bold text-gray-800 text-lg mt-1">{brand}</h3>
        <h3 className="text-gray-600 text-md mt-1">{category}</h3>
        <h4 className="text-gray-700 text-md mt-2">${price}</h4>
        <h4 className="text-yellow-500 text-md font-semibold mt-1">{rating} ★</h4>
      </div>
    </>
  );
};

export default ResData;
