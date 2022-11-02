import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useDispatch } from 'react-redux'
import SingleItem from "./components/SingleItem/SingleItem";
import { getProduct } from "./redux/Shopping/shopping-actions";

function App({ current }) {
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getProduct())

  }, [])
  

  return (
    <Router>
    
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
     
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};


export default connect(mapStateToProps)(App);
