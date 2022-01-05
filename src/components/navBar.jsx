import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages/pagesStyle/navBar.style.scss";

export const NavBar = (props) => {
  
  const SetActive = (e) => {
    const items = Array.from(e.target.parentElement.children);
    items.map((item) => {
      return item.classList.remove("active")
    });
    e.target.classList.add("active");
  };

  return (
    <div className="colordMenu">
      <Link
        onClick={(e) => {
          SetActive(e);
        }}
        className="item active"
        to="/"
      >
        Home
      </Link>
      <Link
        onClick={(e) => {
          SetActive(e);
        }}
        className="item"
        to="/skate"
      >
        Skate
      </Link>
      {/* <Link
        onClick={(e) => {
          SetActive(e);
        }}
        className="item"
      >
        Shoes
      </Link> */}
      <Link
        onClick={(e) => {
          SetActive(e);
        }}
        id="right"
        className="item"
        to="/checkout"
      >
        <i style={{ userSelect: "none" }} className="fas fa-shopping-cart"></i>{" "}
        <span style={{ userSelect: "none" }}>{props.cartCounter}</span>
      </Link>
    </div>
  );
};
