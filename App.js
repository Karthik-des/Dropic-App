import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Video } from 'expo-av';
import carVideo from './assets/india3.mp4';
import styles from './AppCss';
import MapViewDirections from 'react-native-maps-directions';

// Screens
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import BookingScreen from './src/screens/BookingScreen/BookingScreen';
import BookRideScreen from './src/screens/BookingScreen/BookRideScreen';
import BookingRequestScreen from './src/screens/BookingScreen/BookingRequestScreen';
import TaxiInfoScreen from './src/screens/HomeScreen/TaxiInfoScreen';
import ReportRideScreen from './src/screens/BookingScreen/ReportRideScreen';
import BookingConfirmationScreen from './src/screens/BookingScreen/BookingConfirmationScreen';
import BookingStatusScreen from './src/screens/BookingScreen/BookingStatusScreen';
import CancelWarningScreen from './src/screens/BookingScreen/CancelWarningScreen';
import CancelReasonScreen from './src/screens/BookingScreen/CancelReasonScreen';
import CancelCommentScreen from './src/screens/BookingScreen/CancelCommentScreen';
import DrawerStack from './src/screens/DrawerStack/drawerstack';
import SafetyToolkit from './src/screens/MenuScreen/SafetyScreen';
import SafetyMore from './src/screens/MenuScreen/SafetyMore';
import EmergencyContactScreen from './src/screens/MenuScreen/EmergencyContactScreen';
import AddContactScreen from './src/screens/MenuScreen/AddContactScreen';
import MyRewards from './src/screens/MenuScreen/Myrewards';
import MenuScreen from './src/screens/HomeScreen/MenuScreen';
import SuperCoins from './src/screens/MenuScreen/SuperCoins';
import MyRideScreen from './src/screens/MenuScreen/MyRideScreen';
import SettingScreen from './src/screens/SettingScreen/SettingScreen';
import ClaimsScreen from './src/screens/MenuScreen/Claims';
import NotificationScreen from './src/screens/MenuScreen/NotificationScreen';
import ReferScreen from './src/screens/MenuScreen/ReferScreen';
import StartNewClaimScreen from './src/screens/MenuScreen/StartNewClaimScreen';
import HelpScreen from './src/screens/MenuScreen/HelpScreen';
import PrivacyScreen from './src/screens/MenuScreen/PrivacyScreen';
import TermsScreen from './src/screens/MenuScreen/TermsScreen';
import PassengerContactScreen from './src/screens/ContactScreen/PassengerContactScreen';
import ContactDriverScreen from './src/screens/ContactScreen/ContactDriverScreen';
import PaymentScreen from './src/screens/PaymentScreen/PaymentScreen';
import DisplayScreen from './src/screens/DisplayScreen/DisplayScreen';
import FeedBackScreen from './src/screens/FeedbackScreen/FeedBackScreen';
import MapScreen from './src/screens/MapScreen/MapScreen';

// Driver Flow Screens
import Driver from './src/Driver/DocumentsStatusScreen/DocumentsStatusScreen';
import MeetCustomerScreen from './src/Driver/MeetCustomerScreen/MeetCustomerScreen';
import OrderScreen from './src/Driver/Order/OrderScreen';
import ReplyScreen from './src/Driver/ReplyScreen/ReplyScreen';
import ArrivingScreen from './src/Driver/ArrivingScreen/ArrivingScreen';
import CancelScreen from './src/Driver/CancelScreen/CancelScreen';
import OtpScreen from './src/Driver/OtpScreen/OtpScreen';
import DrivingMapScreen from './src/Driver/DrivingMapScreen/DrivingMapScreen';
import TransactionScreen from './src/Driver/TransactionScreen/TransactionScreen';
import CompletedScreen from './src/Driver/CompletedScreen/CompletedScreen';

const Stack = createStackNavigator();

export default function App() {
  const [startingValue, setStartingValue] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setStartingValue(false), 2500);
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
              style={{ width: '200%', height: 700 }}
            />
            <StatusBar style="auto" />
          </View>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OrderScreen" screenOptions={{ headerShown: true }}>

        {/* Driver Flow */}
        <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="ReplyScreen" 
          component={ReplyScreen} 
          options={{ 
            headerShown: true,
            title: 'ReplyScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="MeetCustomer" 
          component={MeetCustomerScreen} 
          options={{ 
            headerShown: true,
            title: 'MeetCustomerScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="ArrivingScreen" 
          component={ArrivingScreen} 
          options={{ 
            headerShown: true,
            title: 'ArrivingScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="CancelScreen" 
          component={CancelScreen} 
          options={{ 
            headerShown: true,
            title: 'CancelScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="OtpScreen" 
          component={OtpScreen} 
          options={{ 
            headerShown: true,
            title: 'OtpScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="DrivingMapScreen" 
          component={DrivingMapScreen} 
          options={{ 
            headerShown: true,
            title: 'DrivingMapScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="TransactionScreen" 
          component={TransactionScreen} 
          options={{ 
            headerShown: true,
            title: 'TransactionScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen 
          name="CompletedScreen" 
          component={CompletedScreen} 
          options={{ 
            headerShown: true,
            title: 'CompletedScreen',
            headerBackTitle: 'Back'
          }} 
        />
        <Stack.Screen name="Driver" component={Driver} />

        {/* DrawerStack */}
        <Stack.Screen
          name="DrawerStack"
          options={{ headerShown: false }}
          component={(props) => (
            <DrawerStack {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
          )}
        />
        

        {/* Auth & Profile */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Login"
          component={(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
        />

        {/* Booking */}
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="BookRide" component={BookRideScreen} />
        <Stack.Screen name="BookingRequest" component={BookingRequestScreen} />
        <Stack.Screen name="ReportRide" component={ReportRideScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
        <Stack.Screen name="BookingStatusScreen" component={BookingStatusScreen} />
        <Stack.Screen name="CancelWarning" component={CancelWarningScreen} />
        <Stack.Screen name="CancelReason" component={CancelReasonScreen} />
        <Stack.Screen name="CancelComment" component={CancelCommentScreen} />
        <Stack.Screen name="ContactDriver" component={ContactDriverScreen} />
        <Stack.Screen name="PassengerContact" component={PassengerContactScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />

        {/* Home & Menu */}
        <Stack.Screen name="Display" component={DisplayScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Feedback" component={FeedBackScreen} />
        <Stack.Screen name="TaxiInfo" component={TaxiInfoScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="Safety" component={SafetyToolkit} />
        <Stack.Screen name="More" component={SafetyMore} />
        <Stack.Screen name="AddMore" component={EmergencyContactScreen} />
        <Stack.Screen name="AddContact" component={AddContactScreen} />
        <Stack.Screen name="MyRewards" component={MyRewards} />
        <Stack.Screen name="SuperCoins" component={SuperCoins} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="MyRides" component={MyRideScreen} />
        <Stack.Screen name="Claims" component={ClaimsScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="ReferAndEarn" component={ReferScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="NewClaims" component={StartNewClaimScreen} />
        <Stack.Screen name="StartNewClaimScreen" component={StartNewClaimScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}