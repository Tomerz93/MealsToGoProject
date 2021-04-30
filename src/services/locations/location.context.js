import React, { useState, createContext, useEffect } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('San Francisco');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) return;

    (async () => {
      try {
        const rawLocation = await locationRequest(keyword.toLowerCase());
        setLocation(locationTransform(rawLocation));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, location, error, keyword, onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
