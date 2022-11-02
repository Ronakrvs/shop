import * as actionTypes from "./shopping-types";

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: id,
    },
  };
};

export const getProduct = ()=>async(dispatch)=>{
  // console.log("dispatch",dispatch)

 
      const data= await (await fetch('https://fakestoreapi.com/products')).json()
      console.log(data)
      dispatch( {
        type:actionTypes.GET_ALL_PRODUCT,
        payload:data
      })
     
  


}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const CurrentItem = (item) => {
  return {
    type: actionTypes.CURRENT_ITEM,
    payload: item,
  };
};
