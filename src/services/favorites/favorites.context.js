import React, { useState, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const add = (restaurant) => {
    setFavorites((prevRestaurants) => [...prevRestaurants, restaurant]);
  };
  const remove = (restaurant) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((prevRes) => prevRes.placeId !== restaurant.placeId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
