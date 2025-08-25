import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './ArrivingScreenCss';

const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key

const PhoneIcon = ({ size = 20, color = 'white' }) => (
  <View style={{ width: size, height: size, backgroundColor: color, borderRadius: size/4 }} />
);

const NavigationIcon = ({ size = 20, color = 'white' }) => (
  <View style={{ 
    width: size, 
    height: size, 
    backgroundColor: color, 
    borderRadius: size/4,
    justifyContent: 'center',
    alignItems: 'center' 
  }}>
    <Text style={{ color: '#2196F3', fontSize: 12, fontWeight: 'bold' }}>🧭</Text>
  </View>
);

const ArrivingScreen = ({ route, navigation }) => {
  const { order, currentLocation, destination } = route.params || {};
  const [arrivalTime, setArrivalTime] = useState('5 min');
  const [distance, setDistance] = useState('2.1 km');

  useEffect(() => {
    // Simulate arrival countdown
    const timer = setTimeout(() => {
      setArrivalTime('2 min');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    Alert.alert("Calling Customer", `Calling ${order?.userPhone || 'customer'}...`);
  };

  const handleMessage = () => {
    navigation.navigate('CancelScreen', { order });
  };

  const handleArrivedAtPickup = () => {
    Alert.alert(
      "Arrived at Pickup",
      "You have arrived at the pickup location. Please wait for the customer.",
      [
        { text: "OK", onPress: () => navigation.navigate("MeetCustomer", { order }) }
      ]
    );
  };

  const onDirectionsReady = (result) => {
    setDistance(`${result.distance.toFixed(1)} km`);
    setArrivalTime(`${Math.round(result.duration)} min`);
  };

  return (
    <View style={styles.container}>
      {/* Map Container */}
      <View style={styles.mapContainer}>
        {currentLocation && destination ? (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: (currentLocation.latitude + destination.latitude) / 2,
              longitude: (currentLocation.longitude + destination.longitude) / 2,
              latitudeDelta: Math.abs(currentLocation.latitude - destination.latitude) * 2,
              longitudeDelta: Math.abs(currentLocation.longitude - destination.longitude) * 2,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
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
            <Text style={styles.mapPlaceholderText}>Loading Navigation...</Text>
          </View>
        )}
      </View>

      {/* Arrival Info Card */}
      <View style={styles.arrivalInfoCard}>
        <View style={styles.arrivalHeader}>
          <View style={styles.arrivalTimeContainer}>
            <Text style={styles.arrivalTime}>{arrivalTime}</Text>
            <Text style={styles.arrivalLabel}>to pickup</Text>
          </View>
          <View style={styles.distanceContainer}>
            <Text style={styles.distance}>{distance}</Text>
            <Text style={styles.distanceLabel}>via fastest route</Text>
          </View>
        </View>
        
        <View style={styles.customerInfo}>
          <View style={styles.customerDetails}>
            <Text style={styles.customerName}>{order?.userName || 'Customer'}</Text>
            <Text style={styles.customerPhone}>{order?.userPhone || 'N/A'}</Text>
            <Text style={styles.pickupAddress}>{order?.fromAddress || 'Pickup Location'}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.callButton} onPress={handleCall}>
            <PhoneIcon size={20} />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navigationButton}>
            <NavigationIcon size={20} />
            <Text style={styles.navigationButtonText}>Navigate</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Arrived Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.arrivedButton} onPress={handleArrivedAtPickup}>
          <Text style={styles.arrivedButtonText}>I'VE ARRIVED AT PICKUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArrivingScreen;