import { useContext } from "react";
import { context } from "../hooks/Context";
interface Props {
  url?: string;
  id: number;
}
const CartItem = ({ url, id }: Props) => {
  const { removeFromCart } = useContext(context);
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeFromCart({ id })}
      ></i>
      <img src={url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
