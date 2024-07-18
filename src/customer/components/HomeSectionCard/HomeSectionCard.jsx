import React from 'react';

const HomeSectionCard = ({ product }) => {
  return (
    <div className='cursor-pointer border-black flex flex-col place-items-center border-[#00000] bg-white border- rounded-lg shadow-lg overflow-hidden w-60 mx-3 px-15 h-90'>
      <div className='h-80 w-40 my-3'>
        <img
          className='object-cover object-top shadow-md h-full w-full'
          src={product.image}
          alt="Product"
        />
      </div>

      <div className='mb-5 overflow-hidden'>
        <h3 className="text-lg font-semibold text-gray-950 text-left font-serif ml-6">{product.brand}</h3>
        <h3 className="text-sm text-left text-gray-500 font-serif py-3 ml-6">{product.title}</h3>
      </div>
    </div>
  );
}

export default HomeSectionCard;
