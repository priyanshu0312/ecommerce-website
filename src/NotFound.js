import React from "react";
import './App.css'
import Header from "./Header";

const NotFound = () => {
  return (
    <div>
        <Header/>
      <div className="container">
        <div className="not-found">
          <h2>Page Not Found!</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
