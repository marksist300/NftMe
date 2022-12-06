import { createContext, useState, useEffect } from "react";
import React from "react";
type contextType = {
  photos: Object[] | undefined;
  setFavorite: (id: number) => void;
  addToCart: (newItem: CartObject) => void;
  cartItems: CartObject[];
};

interface Props {
  children: React.ReactNode;
}
interface CartObject {
  img: string;
  id: number;
  favorited: Boolean;
}

const context = createContext<contextType>({} as contextType);
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [photos, setPhotos] = useState<Object[]>();
  const [cartItems, setCartItems] = useState<Array<CartObject>>([]);
  const setFavorite = (id: number) => {
    const favorited = photos?.map((photo: any) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(favorited);
  };

  function addToCart(newItem: CartObject) {
    setCartItems(prevItems => [...prevItems, newItem]);
  }
  console.log("added to Cart");
  console.log("items: ", cartItems);
  useEffect(() => {
    const getData = async () => {
      const retrieve = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const response = await retrieve.json();
      setPhotos(response);
    };
    getData();
  }, []);
  return (
    <context.Provider value={{ photos, setFavorite, addToCart, cartItems }}>
      {children}
    </context.Provider>
  );
};

export { ContextProvider, context };
