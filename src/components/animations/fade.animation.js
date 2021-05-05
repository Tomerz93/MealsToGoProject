import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const FadeInView = ({ duration = 500, children, ...props }) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnimation, duration]);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeInAnimation,
      }}
    >
      {children}
    </Animated.View>
  );
};
