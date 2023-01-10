import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import MoreImage from '../components/MoreImage/MoreImage';
import "../index.css"

const HomePage = () => {

    const navigate= useNavigate()

    return (
       <Box id = "top" className='container' >
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
    }}>
            <Typography variant='h2'>IPHONE 14</Typography>
            <Typography variant='h5'>Big and Bigger.</Typography>
            <Box>
                <Button onClick={()=>navigate("/products")}  variant="outlined" color="error">Buy</Button>
            </Box>
            <img className='block__img' src="https://www.apple.com/v/iphone-14/d/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg" alt=""  />
           
        </Box>
        <Box>

      <div>
        <h1 style={{textAlign: 'center'}}>_</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap"}}>

<div>
    <img  id='block__image-right' style={{borderRadius: "40px"}} src='https://cdn.ipadizate.com/2022/09/iPhone-14-ios-16.jpg' width="500px"/>
</div>
<div style={{width: "40%"}}>
   <h1>IOS 16</h1> 
   <span style={{fontSize: '20px', width: "10%"}}>В момент выхода обновления может быть большая нагрузка на серверы — рискуете не успеть установить до конца дня. Поэтому, если у вас не получается скачать сразу, попробуйте подождать до утра.</span>
   <h6></h6>
</div>
</div>  
<h1 style={{textAlign: 'center'}}>_</h1>
      </div>
        </Box>

          <Box id = "section" sx={{display: "flex", justifyContent: "center"}}>
            <MoreImage/>
       
        </Box>
        <div>
        <h1 style={{textAlign: 'center'}}>_</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap"}}>

<div style={{width: "40%"}}>
   <h1  >O APPLEPAY</h1> 
   <span style={{fontSize: '20px', width: "10%"}}>Защита транзакций в Apple Pay обеспечивается за счет функций безопасности, встроенных в аппаратное и программное обеспечение вашего устройства. Кроме того, для использования Apple Pay на устройстве необходимо задать пароль и, по желанию, настроить Face ID или Touch ID</span>
   <h6></h6>
</div>
<div>
    <img id='block__image-right' style={{borderRadius: "40px"}} src='https://passageirodeprimeira.com/wp-content/uploads/2019/08/passageirodeprimeira.com-o-guia-dos-cartoes-compativeis-com-o-apple-pay-no-brasil-apple-pay-itau.png' width="500px"/>
</div>
</div>  
<h1 style={{textAlign: 'center'}}>_</h1>
      </div>
         </Box>

    );
};

export default HomePage;