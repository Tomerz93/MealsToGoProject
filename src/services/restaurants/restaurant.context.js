import React, { useState, createContext, useEffect, useContext } from 'react';
import { restaurantTransform, getRestaurants } from './restaurant.service';
import { LocationContext } from '../locations/location.context';
export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { location } = useContext(LocationContext);
  useEffect(() => {
    setIsLoading(true);
    setRestaurants([]);
    (async () => {
      try {
        const restaurantRawData = await getRestaurants(
          `${location.lat},${location.lng}`
        );
        setRestaurants(restaurantTransform(restaurantRawData));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
