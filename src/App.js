import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import home from "./home";
import productdetails from "./product-details";
import Product from "./Product";
import Footer from "./Footer";
import Cart from "./Cart";
import signUp from "./signUp";
import ProductsContextProvider from "./Global/ProductsContext";

class App extends React.Component {
  render() {
    return (
      <>
        <ProductsContextProvider>
          <Router>
            <div>
              <Switch>
                <Route exact path="/home" component={home} />
                <Route
                  exact
                  path="/product-details"
                  component={productdetails}
                />
                
                <Route exact path="/header" component={Header} />
                <Route exact path="/products" component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/user-account" component={signUp} />
                <Route exact path="*" component={home} />
              </Switch>
            </div>
          </Router>
        </ProductsContextProvider>
      </>
    );
  }
}
export default App;
