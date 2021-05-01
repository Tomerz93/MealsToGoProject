import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/locations/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { MapCallout } from '../components/map-callout.component';
import { Search } from '../components/search.components';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    setLatDelta(viewport.northeast.lat - viewport.southwest.lat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                key={restaurant.name}
                onPress={() => {
                  navigation.navigate('RestaurantDetailScreen', {
                    restaurant,
                  });
                }}
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
