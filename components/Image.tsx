import { useState } from "react";
import { useContext } from "react";
import { context } from "../hooks/Context";
type Props = {
  className: string | undefined;
  img: string;
  id: number;
  favorited: Boolean;
};
const Image = ({ className, img, id, favorited }: Props) => {
  const { setFavorite, addToCart, cartItems } = useContext(context);
  const [hover, setHover] = useState<Boolean>(false);
  const itemHovered = () => {
    setHover(true);
  };

  const itemHoverFinished = () => {
    setHover(false);
  };
  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === id);
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart"></i>;
    } else {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart({ img, id, favorited })}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={itemHovered}
      onMouseLeave={itemHoverFinished}
    >
      {hover && (
        <i
          className={`${
            favorited === true
              ? "ri-heart-fill favorite"
              : "ri-heart-line favorite"
          }`}
          onClick={() => setFavorite(id)}
        ></i>
      )}
      {hover && cartIcon()}
      <img src={img} className="image-grid" />
    </div>
  );
};

export default Image;
