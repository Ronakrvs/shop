import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, Avatar, Typography, IconButton, CardContent, CardMedia, CardActions, Button ,Chip,Rating,Divider} from '@mui/material'
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// Redux

import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
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
        
        subheader="September 14, 2016"
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
          Add To Cart         <ShoppingBagOutlinedIcon />
        </Button>



        <Link to={`/product/${product.id}`}>
          <Button
            onClick={() => loadCurrentItem(product)}
          >
            View Item <ArrowForwardIcon />
          </Button>
        </Link>

      </CardActions>

    </Card>

    // <div className={styles.product}>
    //   <img
    //     className={styles.product__image}
    //     src={product.image}
    //     alt={product.title}
    //   />

    //   <div className={styles.product__details}>
    //     <p className={styles.details__title}>{product.title}</p>
    //     <p className={styles.details__desc}>{product.description}</p>
    //     <p className={styles.details__price}>$ {product.price}</p>
    //   </div>

    //   <div className={styles.product__buttons}>
    //     <Link to={`/product/${product.id}`}>
    //       <button
    //         onClick={() => loadCurrentItem(product)}
    //         className={`${styles.buttons__btn} ${styles.buttons__view}`}
    //       >
    //         View Item
    //       </button>
    //     </Link>
    //     <button
    //       onClick={() => addToCart(product.id)}
    //       className={`${styles.buttons__btn} ${styles.buttons__add}`}
    //     >
    //       Add To Cart
    //     </button>
    //   </div>
    // </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
