import { Box } from '@mui/material';
import React from 'react';
import "../Footer/Footer.css"
const Footer= () => {
    return (
        <Box sx={{marginTop: "30px"}}>
            <footer >
        <div class="container">
          <div class="footer-col"><span>© 2023</span></div>
          <div class="footer-col">
            <div class="social-bar-wrap">
              <a title="Facebook" href="" target="_blank"><i class="fa fa-facebook"></i></a>
              <a title="Twitter" href="" target="_blank"><i class="fa fa-twitter"></i></a>
              <a title="Pinterest" href="" target="_blank"><i class="fa fa-pinterest"></i></a>
              <a title="Instagram" href="" target="_blank"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <a href="mailto:admin@yoursite.ru">Написать письмо</a>
          </div>
        </div>
      </footer>
        </Box>
    );
};

export default Footer;