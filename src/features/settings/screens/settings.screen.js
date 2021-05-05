import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { useContext } from 'react/cjs/react.development';
import { SafeArea } from '../../../components/SafeArea/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Spacer } from '../../../components/spacer/spacer.component';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CameraScreen');
          }}
        >
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </TouchableOpacity>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your Favorites"
          left={(props) => <List.Icon {...props} color="red" icon="heart" />}
          onPress={() => navigation.navigate('FavoritesScreen')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
