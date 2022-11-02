import React, { useState } from "react";
import styles from "./Item.module.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {Button,Chip} from '@mui/material'
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    // console.log(e)
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <Card sx={{ display: 'flex',height:250 }}>
           <CardMedia
   component="img"
   sx={{ width: 300 }}
   image={item.image}
   alt="Live from space album cover"
 /> 
 <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
    <Box  sx={{
        height: 50}}>
        <Typography component="div" variant="h5">
          {item.title}
        </Typography>
        </Box>
        <Box  sx={{
        height: 20}}> </Box>
          <Chip icon={<AttachMoneyIcon />} label={item.price} variant="outlined" />
         
         <Box sx={{height:20}}></Box>
         <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <Button
          onClick={() => removeFromCart(item.id)}
            >
        <DeleteOutlineOutlinedIcon/>
        </Button>
        </CardContent>
      
        </Box>
</Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
