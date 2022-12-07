import React from "react";
import { Link } from "react-router-dom";
import cart from "../public/cart.svg";
import { useContext } from "react";
import { context } from "../hooks/Context";
const Header = () => {
  const { cartItems } = useContext(context);
  return (
    <header>
      <Link to="/">
        <h2>Nft_Me</h2>
      </Link>
      <Link to="/cart">
        <i
          className={
            cartItems.length > 0
              ? "ri-shopping-cart-fill ri-fw ri-2x"
              : "ri-shopping-cart-line ri-fw ri-2x"
          }
        ></i>
      </Link>
    </header>
  );
};

export default Header;
