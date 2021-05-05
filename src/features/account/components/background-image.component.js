import React from 'react';
import { BackgroundImage, ImageContainer } from './background-image.styles';

export const BackgroundCover = ({
  imageSrc = 'https://reactjs.org/logo-og.png',
  isPath = true,
  children,
}) => {
  return (
    <>
      <ImageContainer>
        <BackgroundImage source={isPath ? imageSrc : { uri: imageSrc }}>
          {children}
        </BackgroundImage>
      </ImageContainer>
    </>
  );
};
