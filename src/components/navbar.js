import React from "react";
import "../styles/navbar.css";
import { BiBasket } from "react-icons/bi";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Eatpod
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i className=""><BiBasket/></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
