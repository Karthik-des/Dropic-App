import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import styles from './AppCss';
import car from './assets/Car.webm';

const Stack = createStackNavigator();

export default function App() {
  const [startingValue, setStartingValue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartingValue(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  if (startingValue) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.home}>
            <Image
              source={car}
              style={{ width: 200, height: 200, resizeMode: 'contain' }}
            />
            <StatusBar style="auto" />
          </View>
        </View>
      </View>
    );
  }

  // After splash, show navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
