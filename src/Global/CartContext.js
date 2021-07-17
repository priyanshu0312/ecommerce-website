import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const initialState = {
  shoppingCart: [],
  totalAmount: 0,
  quantity: 1,
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // to delete the individual items in Cart
  const removeItem = ({id}) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // increment items in cart
  const increment = ({id}) => {
    return dispatch({
      type: "INCREASE_ITEM",
      payload: id,
    });
  };

  // decrement items in cart
  const decrement = ({id}) => {
    return dispatch({
      type: "DECREASE_ITEM",
      payload: id,
    });
  };
  // clear the all items in Cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <div>
      <CartContext.Provider
        value={{ ...state, dispatch, removeItem, increment, decrement, clearCart }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
