import React from "react";
import {Grid} from '@mui/material'
import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({ products }) => {
  console.log(products)
  return (
     <Grid container style={{marginTop:"2%"}} justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

      {products.map((product) => (
         <Grid item xs={1} sm={2} md={4} key={product.id}>
        <Product key={product.id} product={product} />
        </Grid>
      ))}
      </Grid>
   
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: state.shop.products,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProduct: () => dispatch(getProduct()),
//      };
// };

export default connect(mapStateToProps)(Products);
