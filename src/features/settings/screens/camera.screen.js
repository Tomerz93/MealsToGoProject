import React from 'react';
// import { Camera } from 'expo-camera';

export const CameraScreen = ({ navigation }) => {
  // const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return null;
};
