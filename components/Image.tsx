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
  const { setFavorite } = useContext(context);
  const [hover, setHover] = useState<Boolean>(false);
  const itemHovered = () => {
    console.log(favorited, id);
    setHover(true);
  };

  const itemHoverFinished = () => {
    setHover(false);
  };

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
      {hover && <i className="ri-add-circle-line cart"></i>}
      <img src={img} className="image-grid" />
    </div>
  );
};

export default Image;
