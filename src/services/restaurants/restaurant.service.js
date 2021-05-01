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

const transformRestaurant = ({
  icon,
  name,
  rating,
  vicinity,
  business_status,
  opening_hours = {},
}) => ({
  icon: icon,
  name: name,
  rating: rating,
  photos: mockImages.map(
    (_) => mockImages[Math.ceil(Math.random() * mockImages.length - 1)]
  ),
  address: vicinity,
  isClosedTemporary: business_status === 'CLOSED_TEMPORARILY',
  isOpenNow: opening_hours.open_now,
});

export const restaurantTransform = ({ results = [] }) => {
  return camelize(results.map(transformRestaurant));
};
