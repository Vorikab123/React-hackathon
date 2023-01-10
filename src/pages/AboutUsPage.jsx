import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import "../components/css/style.css"
const AboutUsPage = () => {
    return (
        <Box id= "top">
            <Box sx={{display: "flex", flexDirection: 'row', justifyContent: "center"}}>
                <Box sx={{width: "40%"}}>
                    <Button sx={{width: "100%", height: "100%", borderRadius: '30px 0px 0px 30px', backgroundColor: "blue"}}>
                        <AppleIcon id = "big_apple"/>
                    </Button>

                </Box>
                <Box id= "right_block" sx={{width: "50%", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: 'center',backgroundColor:"ButtonShadow", borderRadius: " 0 30px 30px 0" }} >
                    <Typography variant='h3'>Новости</Typography>
                    <Typography sx={{fontSize: '15px', width: "350px"}} variant="h6">
                    Мы создаём наши продукты максимально удобными, но безопасность и конфиденциальность всегда остаются нашим приоритетом. Специалисты, разрабатывающие оборудование, программное обеспечение и сервисы Apple, внимательно изучают отзывы и постоянно вносят улучшения, чтобы наши пользователи были надёжно защищены от нежелательного отслеживания. 
                    </Typography>
                </Box>
            </Box>
            <div>
        <h1 style={{textAlign: 'center'}}>_</h1>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap"}}>

<div>
    <img  id='block__image-right' style={{borderRadius: "40px"}} src='https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/content-link-authorized-provider_2x.png' width="300px"/>
</div>
<div style={{width: "40%"}}>
   <h1>В сервисах Apple появятся новые ресурсы в честь Месяца здоровья сердца</h1> 
   <span style={{fontSize: '20px', width: "10%"}}>Новый челлендж в приложении «Активность» на Apple Watch и сведения о влиянии активности на здоровье сердца, полученные в ходе исследования Apple Heart and Movement Study</span>
   <h6></h6>
</div>
</div>  
<h1 style={{textAlign: 'center'}}>_</h1>
      </div>
        </Box>
    );
};

export default AboutUsPage;