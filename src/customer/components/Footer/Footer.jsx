import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Grid
        className='bg-black text-white text-center mt-10 py-10'
        container
        sx={{ bgcolor: "black", color: "white", py: 5 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant="h6">
            Company
          </Typography>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              About
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Blog
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Press
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Jobs
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant="h6">
            Solutions
          </Typography>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Marketing
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Analytics
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Commerce
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Insights
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant="h6">
            Documentation
          </Typography>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Guides
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant="h6">
            Legal
          </Typography>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Claim
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Privacy
            </Button>
          </div>
          <div>
            <Button
              className='pb-5'
              sx={{ color: '#FFFFFF' }}
              variant="h6"
              gutterBottom
            >
              Terms
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: '#FFFFFF', mt: 3 }}>
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
