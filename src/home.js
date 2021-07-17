import React from "react";
import Header from "./Header";
import "./App";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Product from "./Product";

const home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <img className="img-fluid" src="/images/shoppingbanner.jpg"></img>
      </div>
      <br /> <br />
      <Product/>
      <Footer />
    </div>
  );
};

export default home;
