import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "./Global/CartContext";

const Cart = () => {
  const { shoppingCart, removeItem, clearCart, increment, decrement } =
    useContext(CartContext);
  console.log("shoppingCart", shoppingCart);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
        <div className="cart-details">
          {shoppingCart.length > 0
            ? shoppingCart.map((cart) => (
                <div className="cart" key={cart.id}>
                  <span className="cart-image">
                    <img src={cart.image} alt="not-found" />
                  </span>
                  <span className="cart-product-name">{cart.name}</span>
                  <span className="cart-product-price">${cart.price}</span>
                  <span className="inc">
                    <i
                      className="fas fa-plus"
                      onClick={() => increment({ id: cart.id })}
                    ></i>
                  </span>
                  <span className="product-quantity">{cart.quantity}</span>
                  <span className="dec">
                    <i
                      className="fas fa-minus"
                      onClick={() => decrement({ id: cart.id })}
                    ></i>
                  </span>
                  <div className="product-total-price">
                    {cart.quantity * cart.price}
                  </div>
                  <div className="delete-product">
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => removeItem({ id: cart.id })}
                    ></i>
                  </div>
                </div>
              ))
            : "Sorry Your Cart is currently  empty"}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
