import camelize from 'camelize';
import { locations } from './location.mock';

export const locationRequest = (searchTerm = 'san francisco') => {
  return new Promise((res, rej) => {
    if (!locations[searchTerm]) rej('No Location Found');
    res(locations[searchTerm]);
  });
};

export const locationTransform = (res) => {
  const { geometry = {} } = camelize(res.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
