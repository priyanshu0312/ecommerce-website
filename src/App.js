import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import home from "./home";
import Product from "./Product";
import Footer from "./Footer";
import Cart from "./Cart";
import ProductsContextProvider from "./Global/ProductsContext";
import NotFound from "./NotFound";
import CartContextProvider from "./Global/CartContext";

class App extends React.Component {
  render() {
    return (
      <>
        <ProductsContextProvider>
          <CartContextProvider>
            <Router>
              <div>
                <Switch>
                  <Route exact path="/home" component={home} />
                  <Route exact path="/products" component={Product} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/not-found" component={NotFound} />
                  <Route exact path="*" component={home} />
                </Switch>
              </div>
            </Router>
          </CartContextProvider>
        </ProductsContextProvider>
      </>
    );
  }
}
export default App;
