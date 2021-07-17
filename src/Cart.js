import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "./Global/CartContext";



const Cart = (props) => {
  const {
    shoppingCart,
    removeItem,
    clearCart,
    increment,
    decrement,
    totalItem,
    dispatch,
    totalAmount,
  } = useContext(CartContext);
  const handleToken = async (token) => {

    // // const product = {name: 'All Products', price: totalAmount}
    // //   const response = await axios.post('https://w7gqb.sse.codesandbox.io/checkout', {
    // //       token,
    // //       product
    // //   });
    // //   const {status} = response.data;
    // //   if(status === 'success'){
         
    // //       dispatch({type: 'CLEAR_CART'});
    // //       props.history.push(`/home`)
    // //       toast.success("You have paid successfully now you can continue your shopping!", {
    // //         position: toast.POSITION.TOP_RIGHT
    // //       });

    // //   } else {
       
    //   }

}
  console.log("shoppingCart", shoppingCart);

  return (
    <div>
      <Header />
      <div className="cart-container">
        {/* <button className="btn btn-danger" onClick={clearCart}>
          Clear Cart
        </button> */}
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
        {shoppingCart.length > 0 ? (
          <div className="cart-summary">
            <div className="summary">
              <h3>Cart Summary</h3>
              <div className="total-items">
                <div className="items">Total Items</div>
                <div className="items-count">{totalItem}</div>
              </div>
              <div className="total-price-section">
                <div className="just-title">Total Price</div>
                <div className="items-price">${totalAmount}.00</div>
              </div>
              <div className="stripe-section">
                <StripeCheckout
                  stripeKey="pk_test_51JEEfZSA08IJltavWWhnvv2fA4SVlOsae6a3sc5ryujtCQ83UAoF53405Cfoa93MemUTXn8I2qoIEirI1CGC8u1w007CeYJ5UW"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={totalAmount * 100}
                  name="All products"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
