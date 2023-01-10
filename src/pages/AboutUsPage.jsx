import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import "../components/css/style.css"
const AboutUsPage = () => {
    return (
        <Box id= "top">
            <Box sx={{display: "flex", flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Box sx={{width: "40%"}}>
                    <Button sx={{width: "100%", height: "100%", borderRadius: '30px', backgroundColor: "blue"}}>
                        <AppleIcon id = "big_apple"/>
                    </Button>

                </Box>
                <Box id= "right_block" sx={{width: "50%", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: 'center',backgroundColor:"ButtonShadow", borderRadius: "30px" }} >
                    <Typography variant='h1'>Новости</Typography>
                    <Typography sx={{textAlign: 'center'}} variant="h6">
                    Мы создаём наши продукты максимально удобными, но безопасность и конфиденциальность всегда остаются нашим приоритетом. Специалисты, разрабатывающие оборудование, программное обеспечение и сервисы Apple, внимательно изучают отзывы и постоянно вносят улучшения, чтобы наши пользователи были надёжно защищены от нежелательного отслеживания. 
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutUsPage;