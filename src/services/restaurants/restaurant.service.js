import { mocks, mockImages } from './mock';
import camelize from 'camelize';
export const getRestaurants = (location = '37.7749295,-122.4194155') => {
  return new Promise((res, rej) => {
    if (mocks[location]) {
      res(mocks[location]);
    } else {
      rej('location not found');
    }
  });
};

export const restaurantTransform = ({ results = [] }) => {
  return camelize(
    results.map((restaurant) => ({
      ...restaurant,
      photos: mockImages.map(
        (_) => mockImages[Math.ceil(Math.random() * mockImages.length - 1)]
      ),
      address: restaurant.vicinity,
      isClosedTemporary: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    }))
  );
};
