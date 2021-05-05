import React, { useState, createContext, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const saveFavorites = async (value, uid) => {
    try {
      await AsyncStorage.setItem(`favorites-${uid}`, JSON.stringify(value));
    } catch (error) {}
  };

  const getFavorites = async (key) => {
    try {
      const favoritesJson = await AsyncStorage.getItem(key);
      if (favoritesJson) {
        setFavorites(JSON.parse(favoritesJson));
      }
    } catch (error) {}
  };

  const add = (restaurant) => {
    setFavorites((prevRestaurants) => [...prevRestaurants, restaurant]);
  };
  const [favorites, setFavorites] = useState({});
  const { user } = useContext(AuthenticationContext);
  const toggleFavorites = (restaurant) => {
    setFavorites((prevRestaurants) => {
      const restaurantData = { ...prevRestaurants };
      if (restaurantData[restaurant.placeId]) {
        delete restaurantData[restaurant.placeId];
      } else {
        restaurantData[restaurant.placeId] = restaurant;
      }
      return restaurantData;
    });
  };
  const remove = (restaurant) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((prevRes) => prevRes.placeId !== restaurant.placeId)
    );
  };

  useEffect(() => {
    if (user?.uid) {
      getFavorites(`favorites-${user.uid}`);
    }
  }, [user]);

  useEffect(() => {
    if (user?.uid && Object.keys(favorites).length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        toggleFavorites,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
