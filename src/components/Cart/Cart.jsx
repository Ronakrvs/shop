import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {Grid,Card,CardContent,Typography,CardActions,Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  let history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const goTo=()=>{
    history.push('/')
}
  
if(cart.length === 0){
return (
  <>
  <div className={styles.no_data} >
 <div className={styles.child}>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
No Product Available
 
        </Typography>
        <Button variant="contained" onClick={goTo} startIcon={<ArrowBackIcon />}>
       GO TO STORE
      </Button>
        </div>
  </div>
  </>
)
}else{


  return (
    <Grid container spacing={2}>
    <Grid item xs={8}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
  {cart.map((item) => (
         <Grid item xs={12} style={{marginTop:"2%"}} columnSpacing={{ xs: 3, sm: 2, md: 3 }} key={item.id}>
       <CartItem key={item.id} item={item} />
        </Grid>
      ))}
</Grid>

<Grid  style={{marginTop:"2%"}}  item xs={4} > 
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Cart Summary
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        TOTAL: ({totalItems} items)
        </Typography>
        <Typography variant="body2">
        $ {totalPrice.toFixed(2)}
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large"> Proceed To Checkout</Button>
      </CardActions>
    </Card>


       </Grid>
</Grid>
    
  );
      }
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
