import { Box, Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import "../../components/admin/Pay.css"
import ModeIcon from '@mui/icons-material/Mode';
import { useNavigate } from 'react-router';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
const Pay = () => {
    const {user, setUser}= useState({
        name: "",
        card: "",
        code: "",
        date: "",
        money: ""
    })
    const navigate = useNavigate()
    

    return (
       <Box>
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
          label = "name"
          multiline
          onChange={(e)=>setUser({...user, name: e.target.value})}
        />
        <TextField
          id="outlined-multiline-static"
          name='card'
          label="card"
          multiline
          onChange={(e)=>setUser({...user, card: e.target.value})}
        />
         <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          onChange={(e)=>setUser({...user, money: e.target.value})}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-multiline-static"
          name='code'
          multiline
          label= "money"
          onChange={(e)=>setUser({...user, money: e.target.value})}
        />
        <TextField
          id="outlined-multiline-static"
          name='code'
          multiline
          label= "code"
          onChange={(e)=>setUser({...user, code: e.target.value})}
        />
        <TextField
          id="outlined-multiline-static"
          name='code'
          multiline
          label= "data"
          onChange={(e)=>setUser({...user, data: e.target.value})}
        />
      
        <Button onClick={()=>{
          navigate("/products")
        }}>buy  
 
             <ModeIcon sx={{marginLeft: "20px", height: "20px", width: "20px"}}/>
        </Button>

        </Box>
        </Box>
      </Box>
       </Box>
    );
};

export default Pay;