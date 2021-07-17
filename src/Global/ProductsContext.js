import React, { createContext, useState } from "react";
import headphone from "../images/headphone.jpg";
import airpods from "../images/airpods.jpg";
import bluetooth from "../images/blutoothpods.jpg";
import white from "../images/whiteheadphone.jpg";
import pr from "../images/notepad.jpg";
import dslr from "../images/dslr.jpg";
import radio from "../images/radio.jpg";
import handbag from "../images/bag.jpg";
import lappy from "../images/lappy.jpg";
import hometheatre from "../images/hometheatre.jpg";
import speaker from "../images/speaker.jpg";
import home from "../home";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: " Headphone",
      price: 300,
      image: headphone,
      status: "Trending",
    },
    {
      id: 2,
      name: "Backpack",
      price: 550,
      image: handbag,
      status: "new",
    },
    {
      id: 3,
      name: " Portable speaker",
      price: 100,
      image: speaker,
      status: "Trending",
    },
    {
      id: 4,

      name: "Laptop",
      price: 840,
      image: lappy,
      status: "new",
    },
    {
      id: 5,
      name: "Home Theatre",
      price: 600,
      image: hometheatre,
      status: "Trending",
    },
    {
      id: 6,
      name: "Notepad",
      price: 300,
      image: pr,
      status: "new",
    },
    {
      id: 7,
      name: "Premium AirPods",
      price: 85,
      image: airpods,
      status: "new",
    },
    {
      id: 8,
      name: " White Headphone",
      price: 315,
      image: white,
      status: "Trending",
    },
    {
      id: 9,
      name: "DSLR Camera ",
      price: 50,
      image: dslr,
      status: "new",
    },
    {
      id: 10,
      name: "Headphone",
      price: 60,
      image: headphone,
      status: "Trending",
    },
    {
      id: 11,
      name: "Bluetooth Earpods",
      price: 60,
      image: bluetooth,
      status: "new",
    },
    {
      id: 12,
      name: "Hand Radio",
      price: 60,
      image: radio,
      status: "new",
    },
  ]);
  return (
    <div>
      <ProductsContext.Provider value={{ products: [...products] }}>
        {props.children}
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsContextProvider;
