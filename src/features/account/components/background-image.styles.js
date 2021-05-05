import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const ImageContainer = styled.View`
  flex: 1;
`;
export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ isBlack }) =>
    isBlack ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
`;
