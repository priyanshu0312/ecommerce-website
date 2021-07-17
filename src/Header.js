import React, { useContext } from "react";
import "./home.css";
import "./App.css";
import { Link } from "react-router-dom";
import { CartContext } from "./Global/CartContext";

const Header = () => {
  const { totalItem } = useContext(CartContext);

  return (
    <div>
      
      
      <nav class="navbar navbar-expand-md bg-lights navbar-dark fixed-top">
        <Link class="navbar-brand" to="/home">
          E-kart
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
          <Link to="/cart" className="shoppingCart">
            {" "}
            <i className="fa fa-cart-plus">
              <span className="count">{totalItem}</span>
            </i>
          </Link>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/cart">
                <i className="fa fa-cart-plus">
                  <span className="count">{totalItem}</span>
                </i>
              </Link>
            </li>

          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
