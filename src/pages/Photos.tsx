import React from "react";
import { useContext } from "react";
import { context } from "../../hooks/Context";
import Image from "../../components/Image";
const Photos = () => {
  const { photos } = useContext(context);

  //function to randomise the classnames of the images
  function getClass(i: number) {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  }

  return (
    <main className="photos">
      {photos &&
        photos.map((item: any, i: any) => (
          <Image
            key={item.id}
            img={item.url}
            id={item.id}
            favorited={item.isFavorite}
            className={getClass(i)}
          />
        ))}
    </main>
  );
};

export default Photos;
