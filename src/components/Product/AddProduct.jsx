import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../pages/context/productsContext';


const AddProduct = () => {
  const navigate = useNavigate()

  const {addProduct} = useProducts()

    const [product, setProduct] = useState({
        name: "",
        memory: "",
        title: "",
        image: "",
        category: "",
        price: "",
    })

    
    return (
        <Box id="top" >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",

      }} >
           <TextField 
           className = "input-add"
           sx={{
            width: "350px",
            marginRight: "100px",
           }}
  helperText="PLEASE ENTER NAME"
  id="demo-helper-text-misaligned"
  label="NAME" 
  onChange={(e)=>setProduct({...product, name: e.target.value})}
/>
           <TextField 
           className = "input-add"
           sx={{
            width: "350px",
            marginRight: "100px",
           }}
  helperText="PLEASE ENTER MEMORY"
  id="demo-helper-text-misaligned"
  label="MEMORY" 
  onChange={(e)=>setProduct({...product, memory: e.target.value})}
/>
           <TextField 
           className = "input-add"
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="PLEASE ENTER TITLE"
  id="demo-helper-text-misaligned"
  label="TITLE"
  onChange={(e)=>setProduct({...product, title: e.target.value})}
/>
           <TextField
           className="input-add"
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="PLEASE ENTER IMAGE"
  id="demo-helper-text-misaligned"
  label="IMAGE"
  onChange={(e)=>setProduct({...product, image: e.target.value})}

/>
           <TextField
           className = "input-add"
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="PLEASE ENTER CATEGORY"
  id="demo-helper-text-misaligned"
  label="CATEGORY"
  onChange={(e)=>setProduct({...product, category: e.target.value})}
/>
           <TextField
           className = "input-add"
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="PLEASE ENTER PRICE"
  id="demo-helper-text-misaligned"
  label="PRICE"
  onChange={(e)=>setProduct({...product, price: e.target.value})}
/>
<Button
 onClick={()=>{
  addProduct(product)
  navigate("/products")
 }}
  sx={{
      width: "350px",
      marginRight: "100px"
}} variant="contained" color="success">
  Success
</Button>
</Box>
<Box sx={{
    marginTop: "25px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
}}> 
</Box>
</Box> 
    );
};

export default AddProduct;