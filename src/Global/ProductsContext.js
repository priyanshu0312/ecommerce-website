import React, { createContext, useState } from "react";

import Burger from "../images/burger.jpg";
import Pizza1 from "../images/pizza1.jpg";
import Pizza2 from "../images/pizza2.jpg";
import Pizza3 from "../images/pizza3.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "Panner Burger",
      price: 300,
      image: Burger,
      status: "Trending",
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: 550,
      image: Pizza1,
      status: "Trending",
    },
    { id: 3, name: "DC Burger", price: 100, image: Pizza2, status: "New" },
    {
      id: 4,
      name: "Pizza beans",
      price: 400,
      image: Burger,
      status: "Trending",
    },
    { id: 5, name: "HotDog crunc", price: 600, image: Pizza1, status: "New" },
    {
      id: 6,
      name: "Lays  steam",
      price: 300,
      image: Pizza3,
      status: "Trending",
    },
    { id: 7, name: "Kurkure crunchy", price: 30, image: Pizza2, status: "New" },
    {
      id: 8,
      name: "EggRoll double ",
      price: 60,
      image: Burger,
      status: "Trending",
    },
  ]);
  return (
    <div>
      <ProductsContext.Provider value={{products}}>
        {props.children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsContextProvider;
