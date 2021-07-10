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
            <a href="" className="left-text">E-kart</a>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="">
              <span className="shoppingCart">
                <i className="fa fa-cart-plus"></i>
                <span className="count">0</span>
              </span>
            </a>
          </li>
        </ul>
      </nav> */}

      <nav class="navbar navbar-expand-md bg-lights navbar-dark fixed-top">
        <a class="navbar-brand" href="#">
          E-kart
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
          <a href="" className="shoppingCart">
            {" "}
            <i className="fa fa-cart-plus">
              <span className="count">2</span>
            </i>
          </a>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i className="fa fa-cart-plus">
                  <span className="count">2</span>
                </i>
              </a>
            </li>

            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
