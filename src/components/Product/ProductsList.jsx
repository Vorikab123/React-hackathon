import { Box, CircularProgress, Grid, Pagination} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../pages/context/productsContext';
import ProductsCard from './ProductsCard';
import SideBar from './Sidebar';

const ProductsList = () => {
    const {products, getProduct} = useProducts()
    const [page, setPage] = useState(1);

    const itemPerPage = 5;
  
    const count = Math.ceil(products.length / itemPerPage);
  
    const handleChange = (e, p) =>{
      console.log(p)
      setPage(p)
    }
  
    function currentData () {
      const begin = (page-1) * itemPerPage;
      const end = begin + itemPerPage
      return products.slice(begin, end)
    }

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=>{
      getProduct()
    }, [searchParams])
    return (
        <Grid sx={{display: "flex", flexDirection: "row", }} >
          <Box id="containerList" sx={{display: "flex", flexDirection: "row" }}>
          <SideBar/>
          <Box sx={{display: "flex", flexDirection: "column", }}>
           <Box sx={{
             display: "flex" ,
             flexWrap: "wrap", 
             minHeight : "40vh",
             padding: "0px"
             }}>
                 {products.length > 0 ? (currentData().map((iphone)=>(
            <ProductsCard iphone= {iphone} key={iphone.id} />
           ))): (<Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", width: "800px"}}><CircularProgress color="inherit" /></Box>)} 
             </Box>
             <Box sx={{display: "flex", justifyContent: "center" , margin: "30px "}}>
             <Pagination count={count} page = {page} onChange= {handleChange} variant="outlined" />
             </Box>
             </Box>
             </Box>
           </Grid>

    );
};

export default ProductsList;