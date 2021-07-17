import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { CartContext } from "./Global/CartContext";
import { ProductsContext } from "./Global/ProductsContext";
const Product = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="productImage">
              <img src={product.image}></img>
            </div>
            <div className="productDetails">
              <div className="proName">{product.name}</div>
              <div className="proPrice">${product.price}.00</div>
            </div>
            <div
              className="add-to-cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  id: product.id,
                  product,
                })
              }
            >
              Add to Cart
            </div>
            {product.status === "Trending" ? (
              <div className="hot">Trending</div>
            ) : (
              ""
            )}
            {product.status === "new" ? <div className="new">New</div> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
