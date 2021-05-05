import React from 'react';
import { CompactRestaurantInfo } from '../../../components/Restaurant/compact-restaurant.component';

export const MapCallout = ({ restaurant = {} }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
