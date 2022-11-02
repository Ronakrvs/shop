import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Button,Chip,Rating} from '@mui/material'

const SingleItem = ({ current, addToCart }) => {
  return (
  
    <Card sx={{ display: 'flex' }}>
       <CardMedia
      component="img"
      sx={{ width: 500 }}
      image={current.image}
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
    <Box  sx={{
        height: 50}}>
        <Typography component="div" variant="h5">
          {current.title}
        </Typography>
        </Box>
        <Typography variant="body2" wrap="wrap" color="text.secondary">
          
          <Chip label={current.category} />
        </Typography>
        <Box  sx={{
        height: 50}}></Box>
          <Rating name="half-rating" defaultValue={current.rating.rate} precision={0.5} />
          <Box  sx={{
        height: 80}}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
         {current.description}
        </Typography>
        </Box>
        <Box  sx={{
        height: 50}}> </Box>
          <Chip icon={<AttachMoneyIcon />} label={current.price} variant="outlined" />
         
          <Box  sx={{
        height: 50}}>
             </Box>
          <Button
          variant="contained" size="large"
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </Button>
       
      </CardContent>
        
    </Box>   
  </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
