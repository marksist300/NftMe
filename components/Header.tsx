import React from "react";
import { Link } from "react-router-dom";
import cart from "../public/cart.svg";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2>Nft_Me</h2>
      </Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
};

export default Header;
