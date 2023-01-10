import { FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../pages/context/productsContext";
import "../css/style.css"
// import "../Product/ProductCart.css"

const SideBar = () => {

 const {fetchByParams} = useProducts()

  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("q") || "")

  useEffect(()=>{
    setSearchParams({
      q: search,
    })
  }, [search])
  return (
    <Grid id="sidebar" item sx={{width: "230px", margin: "20px 30px 0px 30px", borderRadius: "30px",}}>
      <Paper id = "sidebar" elevation={5} sx={{ p: 2, borderRadius: "30px" }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          variant="outlined"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
       <Grid>
          <FormControl>
            <FormLabel>Model</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("category", e.target.value)}>
              <FormControlLabel value="all" control={<Radio />} label="all"/>
              <FormControlLabel value="11" control={<Radio />} label="11"/>
              <FormControlLabel value="11 pro" control={<Radio />} label="11 pro"/>
              <FormControlLabel value="11 pro max" control={<Radio />} label="11 pro max"/>
              <FormControlLabel value="12" control={<Radio />} label="12"/>
              <FormControlLabel value="12 mini" control={<Radio />} label="12 mini"/>
              <FormControlLabel value="12 pro" control={<Radio />} label="12 pro"/>
              <FormControlLabel value="12 pro max" control={<Radio />} label="12 pro max"/>
              <FormControlLabel value="13" control={<Radio />} label="13"/>
              <FormControlLabel value="13 mini" control={<Radio />} label="13 mini"/>
              <FormControlLabel value="13 pro" control={<Radio />} label="13 pro"/>
              <FormControlLabel value="14 pro max" control={<Radio />} label="13 pro max"/>
            </RadioGroup>
          </FormControl>
        </Grid>
          <FormControl>
            <FormLabel>Memory</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("memory", e.target.value)}>
              <FormControlLabel value="all" control={<Radio />} label="all"/>
              <FormControlLabel value="64" control={<Radio />} label="64"/>
              <FormControlLabel value="128" control={<Radio />} label="128"/>
              <FormControlLabel value="256" control={<Radio />} label="256"/>
              <FormControlLabel value="512" control={<Radio />} label="512"/>
            </RadioGroup>
          </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;