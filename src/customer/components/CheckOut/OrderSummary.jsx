import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import CartItem from '../Cart/CartItem';

const OrderSummary = () => {
  return (
    <div className='mt-10'>
      <div className='p-5 shadow-lg rounded-lg rounded-b-md border'>
        <AddressCard />
      </div>
      <div>
        <div className='lg:grid grid-cols-3 relative'>
          <div className='col-span-2'>
            {[1, 1, 1, 1].map((item) => (
              <CartItem key={item} />
            ))}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
              <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
              <hr />
              <div className='space-y-3 font-semibold'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>₹4697</span> {/* Added rupee symbol */}
                </div>
                <div className='flex justify-between pt-3 '>
                  <span>Discount</span>
                  <span className='text-green-600'>₹3419</span> {/* Added rupee symbol */}
                </div>
                <div className='flex justify-between pt-3 '>
                  <span>Delivery charges</span>
                  <span className='text-green-600'>free</span>
                </div>
                <div className='flex justify-between pt-3 mb-5'>
                  <span>Total Amount</span>
                  <span className='text-green-600'>₹1278</span> {/* Added rupee symbol */}
                </div>
                <Button
                  color='secondary'
                  variant='contained'
                  className='w-full'
                  sx={{
                    px: '2.5rem',
                    py: '.7rem',
                    bgcolor: '#9155fd',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: '#7e3af2',
                    },
                  }}
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;