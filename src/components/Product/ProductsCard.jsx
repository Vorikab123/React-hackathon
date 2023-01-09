import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Fab } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../css/style.css"
import { Box } from '@mui/system';
import { useProducts } from '../../pages/context/productsContext';
import { useNavigate } from 'react-router-dom';
import "../css/style.css"



export default function ProductsCard ({iphone}) {

 


  const navigate = useNavigate()

  const {deleteOneProduct} = useProducts()


  return (
    <Card sx={{ maxWidth: 175, textAlign: "center", borderRadius: "14px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 30px 0px 30px"}}>
      <Fab color="secondary" onClick={()=> navigate(`edit/${iphone.id}`)}   aria-label="edit" sx={{position:"absolute" , height: "40px", width: "40px", margin: "0px 0px 340px 170px"}} >
        <EditIcon />
      </Fab>
      <CardActionArea onClick={()=>navigate(`/edit/${iphone.id}`)} id = "getOneProduct" >
        <img src={iphone.image} width= "170px" height="220px"/>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" fontSize={15} fontFamily="monospace">
            {iphone.name} {iphone.category}
          </Typography>
          <Typography variant="h2" color="text.secondary" fontSize={15}>{iphone.memory} gb</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box sx={{display: "flex"}}>
      <Button size="small" id='buy__btn-card'>
          <ShoppingCartCheckoutIcon/>
        </Button>
      <Button size="small" id='delete__btn-card' onClick={()=>deleteOneProduct(iphone.id)}>
       <DeleteIcon />
        </Button>
      </Box>
      </CardActions>
      <Button id='btn-price' disabled sx={{position: "absolute", margin: "260px 0px 0px 150px", height: "20px"}}>{iphone.price}сом</Button>
    </Card>
  );
}

