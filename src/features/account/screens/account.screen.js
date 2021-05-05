import React from 'react';
import { View } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { BackgroundCover } from '../components/background-image.component';
import {
  AccountScreenContainer,
  AuthButton,
  Title,
} from './accounts.screen.styles';
export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundCover
      imgType="asset"
      imageSrc={require('../../../../assets/home_bg.jpg')}
    >
      <View>
        <Title>Meals To Go</Title>
        <Spacer size="large" />
      </View>
      <AccountScreenContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login', { mode: 'Register' })}
        >
          Register
        </AuthButton>
      </AccountScreenContainer>
    </BackgroundCover>
  );
};
