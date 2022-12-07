import { useContext } from "react";
import { context } from "../../hooks/Context";
import CartItem from "../../components/CartItem";
const Cart = () => {
  const { cartItems } = useContext(context);

  const cartUrls = cartItems.map(elem => (
    <CartItem key={elem.id} id={elem.id} url={elem.img} />
  ));
  return (
    <main className="cart-page">
      {cartUrls}
      <p className="total-cost">
        Total :{" "}
        {(5.99 * cartItems.length).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="order-button">
        <button className="bg-slate-500 rounded-lg text-white">
          Place Your Order
        </button>
      </div>
    </main>
  );
};

export default Cart;
