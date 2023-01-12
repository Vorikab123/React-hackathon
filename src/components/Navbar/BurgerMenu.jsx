import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"

const options = [
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
];

const ITEM_HEIGHT = 48;

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='burger_nav'>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
       <MenuIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem onClick={handleClose}>
            <Link to={option.link} key={option.id}  style={{color: "black", textDecoration: "none"}} >{option.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
