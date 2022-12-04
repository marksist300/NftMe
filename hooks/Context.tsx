import { createContext, useState, useEffect } from "react";
import React from "react";
type contextType = {
  photos: Object[] | undefined;
  setFavorite: (id: number) => void;
};

interface Props {
  children: React.ReactNode;
}

const context = createContext<contextType>({} as contextType);
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [photos, setPhotos] = useState<Object[]>();
  console.log("photos: ", photos);
  const setFavorite = (id: number) => {
    const favorited = photos?.map((photo: any) => {
      if (photo.id === id) {
        console.log(typeof photo);
        console.log(photo.id);
        console.log(photo.isFavorite);
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(favorited);
  };
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
    <context.Provider value={{ photos, setFavorite }}>
      {children}
    </context.Provider>
  );
};

export { ContextProvider, context };
