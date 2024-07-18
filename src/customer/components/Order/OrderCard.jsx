import { AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';
import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
     
        <div onClick={()=>navigate(`/account/order/${5})`)}className='p-5 shadow-lg rounded-sm hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70"
                            alt="product"
                            className="w-[5rem] rounded-md h-[5rem] object-cover object-top"
                        />
                        <div className="ml-5 space-y-2">
                            <p className="">Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p className="text-center">₹ 499</p>
                </Grid>
                <Grid item xs={2}>
                    {true ? (
                        <div className="flex items-center space-x-1">
                            <AdjustmentsVerticalIcon className='w-4 h-4 text-green-600'/>
                            <span>Delivered on March 08, 2025</span>
                        </div>
                    ) : (
                        <p>
                            <span>Expected Delivery on March 10, 2025</span>
                        </p>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default OrderCard;
