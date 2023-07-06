import { useState, useEffect, useContext, createContext } from "react";

const initFavorites = {};

export const FavoritesContext = createContext();

const getInitialState = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : initFavorites;
};

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (dog) => {
    setFavorites((prev) => {
      return { ...prev, [dog.id]: dog };
    });
  };

  const removeFavorite = (dog) => {
    setFavorites((prev) => {
      const { [dog.id]: removedDog, ...updatedFavorites } = prev;
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, removeFavorite, favorites }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesContextProvider;
