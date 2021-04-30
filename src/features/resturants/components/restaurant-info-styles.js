import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  font-family:${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
`;

export const IsClosedTemporaryContainer = styled.View`
  margin-left: auto;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
