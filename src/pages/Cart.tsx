import { useContext, useState, useEffect } from "react";
import { context } from "../../hooks/Context";
import CartItem from "../../components/CartItem";
const Cart = () => {
  const { cartItems } = useContext(context);
  const [ordering, setOrdering] = useState(false);
  const cartUrls = cartItems.map(elem => (
    <CartItem key={elem.id} id={elem.id} url={elem.img} />
  ));

  const placeOrder = () => {
    console.log("clicked");
    setOrdering(true);
  };
  console.log("before", ordering);

  useEffect(() => {
    if (ordering === true) {
      const interval = setTimeout(() => {
        setOrdering(false);
        console.log("after", ordering);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [ordering]);

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {cartUrls}
      <p className="total-cost">
        Total :{" "}
        {(5.99 * cartItems.length).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="order-button">
        {ordering === true ? (
          <button
            disabled={true}
            className="bg-slate-400 rounded-lg text-white"
            onClick={placeOrder}
          >
            Placing Order Now...
          </button>
        ) : (
          <button
            className="bg-slate-500 rounded-lg text-white"
            onClick={placeOrder}
          >
            Place Your Order
          </button>
        )}
      </div>
    </main>
  );
};

export default Cart;
