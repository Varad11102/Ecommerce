import { Box, Grid, TextField, Button } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address');  
    const data = new FormData(e.target);
    console.log("address");
    const address = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      address: data.get('address'),
      city: data.get('City'),
      state: data.get('State'),
      zip: data.get('Zip'),
      phoneNumber: data.get('phoneNumber'),
    };
    console.log(address);
    
    
  };  
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained'>
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    required
                    id='lastName'
                    name='lastName'
                    fullWidth
                    label='Last Name'
                    autoComplete='family-name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id='address'
                    name='address'
                    fullWidth
                    label='Address'
                    autoComplete='given-name'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    required
                    id='City'
                    name='City'
                    fullWidth
                    label='City'
                    autoComplete='family-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    required
                    id='State'
                    name='State'
                    fullWidth
                    label='State'
                    autoComplete='family-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    required
                    id='Zip'
                    name='Zip'
                    fullWidth
                    label='Zip/Postal Code'
                    autoComplete='shipping postal-code'
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    required
                    id='phoneNumber'
                    name='phoneNumber'
                    fullWidth
                    label='phoneNumber'
                    autoComplete='shipping postal-code'
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <Button sx={{ py:1.5,mt:2,bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained' type='submit'>Deliver Here</Button>
                </Grid>
                {/* Add more fields here as needed */}
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
