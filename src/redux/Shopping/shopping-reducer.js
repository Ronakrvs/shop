import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products:[],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  // console.log(state,action)
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCT:
      // console.log(state,action)
      return {
        ...state,
        products:action.payload
      };
    case actionTypes.ADD_TO_CART:
      // console.log(state)
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      console.log(item)
      const haveCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: haveCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
