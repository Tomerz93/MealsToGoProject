import React, { useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useContext } from 'react/cjs/react.development';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { BackgroundCover } from '../components/background-image.component';
import {
  AccountScreenContainer,
  AuthButton,
  ErrorContainer,
  AuthTextInput,
  Title,
} from './accounts.screen.styles';
export const AuthScreen = ({
  route: { params: { mode = 'login' } = {} } = {},
}) => {
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error, loading, onRegister } = useContext(
    AuthenticationContext
  );
  const handleOnClick = () => {
    if (mode === 'login') {
      if (!email || !password) return;
      onLogin(email, password);
    } else {
      if (!email || !password || !confirmPassword) return;
      onRegister(email, password, confirmPassword);
    }
  };
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
        <View style={{ width: 250 }}>
          <AuthTextInput
            label="Email"
            autoCapitalize="none"
            icon="mail"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <AuthTextInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
          {mode !== 'login' && (
            <AuthTextInput
              label="Confirm Password"
              value={confirmPassword}
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(value) => setConfirmPassword(value)}
            />
          )}
          {loading && (
            <Spacer size="large">
              <ActivityIndicator animating color={Colors.blue300} />
            </Spacer>
          )}
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={handleOnClick}
          >
            {loading ? 'Loading' : mode === 'login' ? 'Login' : 'Register'}
          </AuthButton>
          {!!error && (
            <ErrorContainer>
              <Spacer>
                <Text variant="error">{error}</Text>
              </Spacer>
            </ErrorContainer>
          )}
        </View>
      </AccountScreenContainer>
    </BackgroundCover>
  );
};
