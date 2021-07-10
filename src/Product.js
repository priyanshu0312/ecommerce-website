import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductsContext from "./Global/ProductsContext";
const Product = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-image">
            <img src={product.image}></img>
          </div>
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
