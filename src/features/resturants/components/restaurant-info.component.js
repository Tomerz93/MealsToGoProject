import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Icon,
  SectionEnd,
  Section,
  RatingContainer,
  IsClosedTemporaryContainer,
} from './restaurant-info-styles';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { View } from 'react-native';
import { Favorite } from '../../../components/Favorites/favorite.component';

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name,
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    ],
    address = '100 Some random',
    isOpenNow = true,
    isClosedTemporary = true,
    rating = 4,
  } = restaurant;
  const stars = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favorite restaurant={restaurant} />
      </View>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <RatingContainer>
            {stars.map((_, index) => (
              <SvgXml
                key={`${name}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </RatingContainer>
          <SectionEnd>
            {isClosedTemporary && (
              <IsClosedTemporaryContainer>
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </IsClosedTemporaryContainer>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
