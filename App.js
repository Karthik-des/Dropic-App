import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import styles from './AppCss';
import { Video } from 'expo-av';
import carVideo from './assets/car.mp4';
import BookingScreen from './src/screens/BookingScreen/BookingScreen';
import PaymentScreen from './src/screens/PaymentScreen/PaymentScreen';
import ContactScreen from './src/screens/ContactScreen/ContactDetailsScreen';
import DsiplayScreen from './src/screens/DisplayScreen/DisplayScreen';
import FeedBackScreen from './src/screens/FeedbackScreen/FeedBackScreen';

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
            <Video
  source={carVideo}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="contain"
  shouldPlay
  isLooping
  style={{ width: '100%', height: 300 }}
/>
            <StatusBar style="auto" />
          </View>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Display" component={DsiplayScreen} />
        <Stack.Screen name="Feedback" component={FeedBackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
