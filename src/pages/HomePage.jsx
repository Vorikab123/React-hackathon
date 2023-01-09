import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import "../index.css"

const HomePage = () => {
    return (
       <Box id = "top" className='container' >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
    }}>
            <Typography variant='h2'>IPHONE 14</Typography>
            <Typography variant='h5'>Big and Bigger.</Typography>
            <Box>
                <Button  variant="contained" color="success">Learn more</Button>
                <Button  variant="outlined" color="error">Buy</Button>
            </Box>
            <img className='block__img' src="https://www.apple.com/v/iphone-14/d/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg" alt=""  />
           
        </Box>

          <Box id = "section">

       
        </Box>
         </Box>

    );
};

export default HomePage;