import React, { useState, useEffect } from "react";

import {AppBar,Toolbar,IconButton,Typography,Box,Badge} from '@mui/material'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const Navbar = ({ cart }) => {
  let history = useHistory();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
const handleDrawerToggle=()=>{
  history.push('/')
}
const onNavigateCart=()=>{
  history.push('/cart')
}
  return (
    <AppBar position="static">
       
        <Toolbar disableGutters>
       
          <Typography
            onClick={handleDrawerToggle}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              onClick={onNavigateCart}
              aria-label={`show ${cartCount} new notifications`}
              color="inherit"
            >
              <Badge badgeContent={cartCount} color="error">
                <LocalGroceryStoreOutlinedIcon />
              </Badge>
            </IconButton>
           
          </Box>

          </Toolbar>

    </AppBar>
   
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
