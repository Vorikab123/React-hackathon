import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Fab, IconButton } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../css/style.css"
import { Box } from '@mui/system';
import { useProducts } from '../../pages/context/productsContext';
import { useNavigate } from 'react-router-dom';
import "../css/style.css"
import { useCart } from '../../pages/context/cartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { ADMIN } from '../helpers/const';
import { useAuth } from '../../pages/context/AuthContext';
// import "../Product/ProductCart.css"




export default function ProductsCard ({iphone}) {

 


  const navigate = useNavigate()
  const { addProductToCart,checkProductInCart } = useCart();

  const {
    user: { email },
  } = useAuth();

  const {deleteOneProduct} = useProducts()


  return (
    <Card id='product_cart' sx={{ maxWidth: 175, textAlign: "center", borderRadius: "14px", display: "flex", flexDirection: "column",  alignItems: "center", margin: "20px 11px 0px 20px", height: 350}} >
     
        {email == ADMIN? ( <Fab color="secondary" onClick={()=> navigate(`edit/${iphone.id}`)}   aria-label="edit" sx={{position:"absolute" , height: "40px", width: "40px", margin: "0px 0px 340px 170px"}} ><EditIcon />  </Fab>):(null)}
     
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
      <IconButton onClick={() => addProductToCart(iphone)}>
            {email !== ADMIN? (<>{checkProductInCart(iphone.id) ? (<><RemoveShoppingCartIcon sx={{color:"black"}}/></>) : (<><ShoppingCartCheckoutIcon/></>)}</>):(null)}
           
          </IconButton>
        </Button>
      {email == ADMIN? (<Button size="small" id='delete__btn-card' onClick={()=>deleteOneProduct(iphone.id)}>
       <DeleteIcon />
        </Button>):(null)}
      </Box>
      </CardActions>
      <Button id='btn-price' disabled sx={{position: "absolute", margin: "205px 0px 0px 100px", height: "20px"}}>{iphone.price}сом</Button>
    </Card>
  );
}

