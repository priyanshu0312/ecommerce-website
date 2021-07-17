import React from "react";
import "./home.css";
import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      {/* <nav>
        <ul className="left">
          <li>
            <Link to="" className="left-text">E-kart</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link to="">
              <span className="shoppingCart">
                <i className="fa fa-cart-plus"></i>
                <span className="count">0</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav> */}

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
              <span className="count">0</span>
            </i>
          </Link>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/cart">
                <i className="fa fa-cart-plus">
                  <span className="count">0</span>
                </i>
              </Link>
            </li>

            {/* <li class="nav-item">
              <Link class="nav-link" to="#">
                Link
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                Link
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
