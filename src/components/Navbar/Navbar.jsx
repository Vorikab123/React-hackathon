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
import { Badge, Button, IconButton, Menu, MenuItem } from '@mui/material';
import "../Navbar/Navbar.css"
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useAuth } from '../../pages/context/AuthContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '../../pages/context/cartContext';
import { ADMIN } from '../helpers/const';
import BurgerMenu from './BurgerMenu';
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
  const { user, handleLogout } = useAuth();
  const { getCart, cart } = useCart ();


  React.useEffect(() => {
    getCart();
  }, []);
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          handleMenuClose();
          navigate("/auth");
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleLogout();
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SupervisedUserCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
 
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        
        <AppBar id="navbar">
          <Toolbar>
            <BurgerMenu/>
          <Typography variant="h6" color="black" component="div" >
            <Button id= "apple-btn" 
            onClick={()=>navigate("/")}
            >
                <AppleIcon id="icon_btn"/>
            </Button>
          </Typography>
          <Container >
      <Box sx={{ 
          flexGrow: 1,
          display: { xs: 'flex', flexDirection: "colum", justifyContent: "center"
        }
           }}>
        <Box id="nav_menu" sx={{ 
          flexGrow: 1,
          display: { xs: 'flex', flexDirection: "row", justifyContent: "center", gap: "0px 150px"
        }
           }}>
          {pages.map((page) => (
                <Link id="pages" to={page.link} key={page.id} >{page.name}</Link>
              )
            )}
             </Box> 
             {user ? <Box id="nav_user" style={{color:"black", marginTop:"5px"}} >{user.email}</Box> : <Box  id="nav_user" style={{color:"black", marginTop:"5px"}}> Не авторизован</Box>}
             {user.email == ADMIN ? (
            <Link id='nav_admin'
              style={{
                color: "black",
                margin: "0 10px",
                textDecoration: "underline",
                marginTop:"5px",
                textDecorationLine:"none"
              }}
              to="/add-product"
            >
              Админ
            </Link>
          ) : null}
          <Box >
          <IconButton
              // size="large"
              // aria-label="show 17 new notifications"
              // color="inherit"
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={cart?.products.length} color="error">
                <AddShoppingCartIcon  />
              </Badge>
            </IconButton>
          </Box>
          <IconButton
              // size="large"
              // edge="end"
              // aria-label="account of current user"
              // aria-controls={menuId}
              // aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              // color="inherit"
            >
              <SupervisedUserCircleIcon  />
            </IconButton>
            <Box   />
          
        </Box>
       
            
        
      </Container>
          </Toolbar>
          {renderMobileMenu}
      {renderMenu}
        </AppBar>
       
      </ElevationScroll>
    </React.Fragment>
  );
}