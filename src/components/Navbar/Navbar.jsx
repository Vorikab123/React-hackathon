import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppleIcon from '@mui/icons-material/Apple';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import "../Navbar/Navbar.css"
function ElevationScroll(props) {

  

  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



export default function Nabvar(props) {
  const navigate = useNavigate();
  const pages = [
    {
        link: "/",
        name:"Главная",
        id:1
    },
    {
      link: "/products",
      name: "Продукты",
      id: 2
    },
    {
      link: "/about-us",
      name: "о APPLE",
      id: 3,
    },
  ]
 
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar id="navbar">
          <Toolbar>
          <Typography variant="h6" color="black" component="div" >
            <Button id= "apple-btn" 
            onClick={()=>navigate("/")}
            >
                <AppleIcon id="icon_btn"/>
            </Button>
          </Typography>
          <Container >
      <Box  sx={{ 
          flexGrow: 1,
          display: { xs: 'flex', flexDirection: "row", justifyContent: "center", gap: "0px 150px", paddingRight: "150px"
        }
           }}>
          {pages.map((page) => (
                <Link id="pages" to={page.link} key={page.id} >{page.name}</Link>
              )
            )}       
        </Box>
      </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}