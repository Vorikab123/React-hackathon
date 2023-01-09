import { Box, Grid} from '@mui/material';
import React from 'react';
import { useProducts } from '../../pages/context/productsContext';
import ProductsCard from './ProductsCard';

const ProductsList = () => {
    const {products} = useProducts()
    return (
        <Grid >
           <Box sx={{
             display: "flex" ,
             flexWrap: "wrap", 
             justifyContent: "space-around",
             minHeight : "40vh",
             gap: "15px "
             }}>
                 {products.map((iphone)=>(
            <ProductsCard iphone= {iphone} key={iphone.id} />
           ))} 
             </Box>
           </Grid>

    );
};

export default ProductsList;