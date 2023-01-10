import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { useProducts } from '../../pages/context/productsContext';

const ProductDetails = () => {

    const {id} = useParams()

    const { getOneProduct, oneProduct} = useProducts()

    useEffect(()=>{
        getOneProduct(id)
    }, [])
    return (
        <Grid id = "page__details" >
            <Box>
                <img src={oneProduct.image} alt="" />
            </Box>
            <Box sx={{display: "flex",alignItems: 'center', justifyContent: "space-between", flexWrap: "wrap"}} >
            <TableContainer component={Paper} >
      <Table sx={{ minWidth: "90", height: "260px"}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{textAlign: "center"}}>
            <TableCell align="center">title</TableCell>
            <TableCell>Model</TableCell>
            <TableCell align="center">category</TableCell>
            <TableCell align="center">memory</TableCell>
            <TableCell align="center">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell width={200} align="center">{oneProduct.title}</TableCell>
              <TableCell component="th" scope="row">
                {oneProduct.name}
              </TableCell>
              <TableCell align="center">{oneProduct.memory} gb</TableCell>
              <TableCell align="center">{oneProduct.category}</TableCell>
              <TableCell align="center">{oneProduct.price} com</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

            </Box>
        </Grid>
    );
};

export default ProductDetails;



