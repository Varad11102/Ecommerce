import React from 'react';
import "./ProductCard.css"; // Ensure this file exists or is appropriately managed in your project
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`) }className="productCard w-[15rem] h-25 m-3 transition-all cursor-pointer border-black">
      <div>
        <img className="h-[20rem] w-full object-cover object-left-top" src={product.image} alt=""/>
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 hover:underline">{product.brand}</p>
          <p>{product.title}</p>
          <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{product.price}</p>
            <p className='line-through opacity-50'>{product.selling_price}</p>
            <p className='text-green-600 font-semibold'>{product.disscount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
