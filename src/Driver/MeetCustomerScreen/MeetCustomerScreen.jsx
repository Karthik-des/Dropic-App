import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import styles from './MeetCustomerScreenCss';

const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key

const PhoneIcon = ({ size = 20, color = 'white' }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size/4 }} />
);

const MessageIcon = ({ size = 20, color = 'white' }) => (
  <View style={{ 
    width: size, 
    height: size, 
    backgroundColor: color, 
    borderRadius: size/8,
    justifyContent: 'center',
    alignItems: 'center' 
  }}>
    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>✉</Text>
  </View>
);

const MapPinIcon = ({ size = 20, color = 'white' }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size/2 }} />
);

const ArrowRightIcon = ({ size = 20, color = 'white' }) => (
  <View style={{ 
    width: 0, 
    height: 0, 
    borderLeftWidth: size/2,
    borderTopWidth: size/4,
    borderBottomWidth: size/4,
    borderLeftColor: color,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  }} />
);

const MeetCustomerScreen = ({ route, navigation }) => {
  const { order } = route.params || {};
  const [waitTime, setWaitTime] = useState(180); // 3 minutes in seconds
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [duration, setDuration] = useState(null);
  const [alertShown, setAlertShown] = useState(false); // Track if alert has been shown
  const timerRef = useRef(null);

  useEffect(() => {
    getCurrentLocation();
    setDestinationFromOrder();
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setWaitTime(prev => {
        if (prev <= 1 && !alertShown) {
          // Show alert only once
          setAlertShown(true);
          Alert.alert(
            "Wait Time Exceeded",
            "3 minutes wait time completed. Returning to orders.",
            [{ text: "OK", onPress: () => navigation.navigate("OrderScreen") }]
          );
          return 0;
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [navigation, alertShown]);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location permission is required');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (error) {
      console.error('Error getting location:', error);
      // Fallback to default location (Hyderabad)
      setCurrentLocation({
        latitude: 17.3850,
        longitude: 78.4867,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  const setDestinationFromOrder = () => {
    // Parse destination from order address or use coordinates based on city
    let destCoords;
    
    if (order?.fromAddress) {
      // Sample coordinates based on common Indian cities from the order data
      const cityCoordinates = {
        'hyderabad': { latitude: 17.3850, longitude: 78.4867 },
        'bangalore': { latitude: 12.9716, longitude: 77.5946 },
        'mumbai': { latitude: 19.0760, longitude: 72.8777 },
        'delhi': { latitude: 28.7041, longitude: 77.1025 },
        'chennai': { latitude: 13.0827, longitude: 80.2707 },
        'kolkata': { latitude: 22.5726, longitude: 88.3639 },
        'pune': { latitude: 18.5204, longitude: 73.8567 },
        'agra': { latitude: 27.1767, longitude: 78.0081 },
        'pondicherry': { latitude: 11.9416, longitude: 79.8083 },
        'darjeeling': { latitude: 27.0360, longitude: 88.2627 },
      };

      const cityName = order.fromAddress.toLowerCase();
      const matchedCity = Object.keys(cityCoordinates).find(city => 
        cityName.includes(city)
      );
      
      destCoords = matchedCity ? cityCoordinates[matchedCity] : cityCoordinates.hyderabad;
    } else {
      destCoords = { latitude: 17.3850, longitude: 78.4867 }; // Default to Hyderabad
    }

    setDestination(destCoords);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGoToPickup = () => {
    navigation.navigate('ArrivingScreen', { order, currentLocation, destination });
  };

  const handleCancel = () => {
    navigation.navigate('CancelScreen', { order });
  };

  const handleStartRide = () => {
    // Navigate to OTP Screen with order data
    navigation.navigate('OtpScreen', { 
      order,
      currentLocation,
      destination 
    });
  };

  const onDirectionsReady = (result) => {
    setDuration(Math.round(result.duration));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meet the Customer</Text>
        <TouchableOpacity style={styles.messageButton} onPress={handleCancel}>
          <MessageIcon size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Map Container */}
        <View style={styles.mapContainer}>
          {currentLocation && destination ? (
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={currentLocation}
              showsUserLocation={true}
              showsMyLocationButton={false}
            >
              <Marker
                coordinate={currentLocation}
                title="Your Location"
                pinColor="blue"
              />
              <Marker
                coordinate={destination}
                title="Pickup Location"
                description={order?.fromAddress || 'Customer Location'}
                pinColor="green"
              />
              
              {GOOGLE_MAPS_APIKEY && (
                <MapViewDirections
                  origin={currentLocation}
                  destination={destination}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={4}
                  strokeColor="#2196F3"
                  onReady={onDirectionsReady}
                />
              )}
            </MapView>
          ) : (
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapPlaceholderText}>Loading Map...</Text>
            </View>
          )}
        </View>

        {/* Go to Pickup Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.goToPickupButton} onPress={handleGoToPickup}>
            <View style={styles.goToPickupIcon}>
              <Text style={styles.goToPickupIconText}>A</Text>
            </View>
            <Text style={styles.goToPickupText}>Go to pickup</Text>
            {duration && (
              <Text style={styles.durationText}>{duration} min</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Customer Verification */}
        <View style={styles.verificationSection}>
          <View style={styles.verificationIcon}>
            <View style={styles.verificationDot} />
          </View>
          <Text style={styles.verificationText}>Customer Verified Location</Text>
        </View>

        {/* Wait Timer Section */}
        <View style={styles.cardContainer}>
          <View style={styles.waitTimerCard}>
            <View>
              <Text style={styles.waitTimerTitle}>Wait Timer</Text>
              <Text style={styles.waitTimerTime}>
                {formatTime(waitTime)}
              </Text>
            </View>
            <View style={styles.waitTimerInfo}>
              <View style={styles.waitTimerIcon}>
                <View style={styles.waitTimerDot} />
              </View>
              <Text style={styles.waitTimerInfoText}>
                After 3 minutes, you will get extra charge for waiting
              </Text>
            </View>
          </View>
        </View>

        {/* Customer Address */}
        <View style={styles.cardContainer}>
          <View style={styles.addressCard}>
            <View style={styles.addressIcon}>
              <MapPinIcon size={16} color="white" />
            </View>
            <View style={styles.addressContent}>
              <Text style={styles.addressTitle}>Pickup Location</Text>
              <Text style={styles.addressText}>
                {order?.fromAddress || 'Customer pickup location'}
              </Text>
              <Text style={styles.customerInfo}>
                {order?.userName} • {order?.userPhone}
              </Text>
            </View>
          </View>
        </View>

        {/* Start Ride Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.startRideButton} onPress={handleStartRide}>
            <ArrowRightIcon size={20} color="white" />
            <Text style={styles.startRideText}>START RIDE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MeetCustomerScreen;