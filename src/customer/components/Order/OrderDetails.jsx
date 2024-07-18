import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { OrderTracker } from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarBorderOutlined } from '@mui/icons-material'

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
      <div>
        <h1 className='font-semibold text-xl py'>Delivery Address</h1>
        <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>
      <Grid container className="space-y-5">
       {[1,1,1,1,1].map((item)=><Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div className='flex items-center space-x-2'> 
              <img src="https://via.placeholder.com/150" alt="product" className='w-[5rem] h-[5rem] object-cover object-top'/>
              <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Men Slide Mid Rise Black Jeans</p>
                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink</span>Size: M<span></span></p>
                <p>Seller: linaria</p>
                <p>₹1099</p>
              </div> 
            </div>
          </Grid> 
          <Grid item >
            <Box sx={{color:deepPurple[500]}}>
                <StarBorderOutlined sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
}

export default OrderDetails