import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, Avatar, Typography, IconButton, CardContent, CardMedia, CardActions, Button ,Chip,Rating} from '@mui/material'
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// Redux

import { connect } from "react-redux";
import {CurrentItem,addToCart} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, CurrentItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={(product.title).slice(0, 20) + "..."}
        
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" wrap="wrap" color="text.secondary">
          
          <Chip label={product.category} />
        </Typography>
       
          <Rating name="half-rating" defaultValue={product.rating.rate} precision={0.5} /> 
          <br/>
          <Chip icon={<AttachMoneyIcon />} label={product.price} variant="outlined" />
      </CardContent>
      <CardActions disableSpacing>




        <Button
          onClick={() => addToCart(product.id)}
        >
          Add To Cart <ShoppingBagOutlinedIcon />
        </Button>



        <Link to={`/product/${product.id}`}>
          <Button
            onClick={() => CurrentItem(product)}
          >
            View Item <ArrowForwardIcon />
          </Button>
        </Link>

      </CardActions>

    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    CurrentItem: (item) => dispatch(CurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
