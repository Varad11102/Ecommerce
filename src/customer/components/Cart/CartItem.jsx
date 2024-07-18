import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { IconButton, Button } from '@mui/material';
import React from 'react';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img 
            className="w-full h-full object-cover object-top" 
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" 
            alt="Mens Slim Mid Rise Black Jeans"
          />
        </div>
        <div className="ml-5 space-y-5">
          <p className='font-semibold'>Mens Slim Mid Rise Black Jeans</p>
          <p className='opacity-70'>Size : L, White</p>
          <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>
          <div className="flex space-x-5 items-center mt-10">
            <p className='font-semibold'>₹599</p> {/* Added rupees symbol */}
            <p className='opacity-50 line-through'>₹1999</p> {/* Added rupees symbol */}
            <p className='text-green-800'>70% off</p>
          </div>
          
        </div>
      </div>
      <div className='flex items-center lg:space-x-10 ml-0 pt-4 lg:pt-0'>
          <div className='flex items-center space-x-3'>
            <IconButton >
              <RemoveCircleOutlineOutlined />
            </IconButton>
            <span className='py-1 px-7 border rounded-sm'>
              1
            </span>
            <IconButton>
              <AddCircleOutlineOutlined />
            </IconButton>
          </div>
          <div className='mt-4 lg:mt-0'>
            <Button variant='outlined'>Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
