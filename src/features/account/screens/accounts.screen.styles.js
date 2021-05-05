import styled from 'styled-components/native';
import { colors } from '../../../infra/theme/colors';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export const AccountScreenContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  padding: ${({ theme: { space } }) => space[4]};
`;

export const Title = styled.Text`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.largeTitle};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${({ theme: { space } }) => space[2]};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme: { space } }) => space[2]};
  margin-bottom: ${({ theme: { space } }) => space[2]};
`;
export const AuthTextInput = styled(TextInput).attrs({})`
  margin-bottom: ${({ theme: { space } }) => space[2]};
`;
