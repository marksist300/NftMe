import React from "react";
interface Props {
  url?: string;
}
const CartItem = ({ url }: Props) => {
  console.log(url, typeof url);
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>
      <img src={url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
