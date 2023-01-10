import { Box, Button, TextField} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../pages/context/productsContext';
import ModeIcon from '@mui/icons-material/Mode';
import { useNavigate, useParams } from 'react-router-dom';


const EditComponent = () => {

    const navigate = useNavigate() 

    const { getOneProduct, oneProduct, editProductSave} = useProducts()

    const [product, setProduct] = useState(oneProduct)

    useEffect(()=>{
      setProduct(oneProduct)
    }, [oneProduct])

   const handleInput = (e) => {
    let editedProduct = {
      ...oneProduct,
      [e.target.name]: [e.target.value]
    }
    setProduct(editedProduct)
    
   }

  const {id} = useParams()

    useEffect(()=>{
        getOneProduct(id)
    },[])
    return (
      <Box sx={{display: "flex", justifyContent: "center",}}>
          <Box id= "edit__block" sx={{display: "flex", justifyContent: "center", alignItems: 'center'}}>
          <Box  sx={{
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        }}>
        <TextField
          id="outlined-multiline-static"
          name="name"
          multiline
          value={product.name}
          onChange= {handleInput}
        />
        <TextField
          id="outlined-multiline-static"
          name='memory'
          multiline
          value={product.memory}
          onChange= {handleInput}
        />
        <TextField
          id="outlined-multiline-static"
          name='title'
          multiline
          value={product.title}
          onChange= {handleInput}
        />
        <TextField
          id="outlined-multiline-static"
          name='image'
          multiline
          value={product.image}
          onChange= {handleInput}
        />
        <TextField
          id="outlined-multiline-static"
          name='category'
          multiline
          value={product.category}
          onChange= {handleInput}
        />
        <TextField
          id="outlined-multiline-static"
          name='price'
          multiline
          value={product.price}
          onChange= {handleInput}
        />
        <Button onClick={()=>{
          editProductSave(id, product)
          navigate("/products")
        }}>Edit  
 
             <ModeIcon sx={{marginLeft: "20px", height: "20px", width: "20px"}}/>
        </Button>

        </Box>
        </Box>
      </Box>

    );
};

export default EditComponent;

