import { useContext } from "react";
import { context } from "../../hooks/Context";
import CartItem from "../../components/CartItem";
const Cart = () => {
  const { cartItems } = useContext(context);

  const cartUrls = cartItems.map(elem => (
    <CartItem key={elem.id} id={elem.id} url={elem.img} />
  ));
  return <main>{cartUrls}</main>;
};

export default Cart;
