import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import styles from './DrivingMapScreenCss';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key

const DrivingMapScreen = ({ route, navigation }) => {
  const { order, currentLocation: initialLocation, destination: initialDestination } = route.params || {};
  const [currentLocation, setCurrentLocation] = useState(initialLocation);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [traveledDistance, setTraveledDistance] = useState(0);
  const mapRef = useRef(null);
  const locationWatchId = useRef(null);
  const lastLocation = useRef(initialLocation);

  useEffect(() => {
    setDestinationFromOrder();
    startLocationTracking();
    
    return () => {
      if (locationWatchId.current) {
        locationWatchId.current.remove();
      }
    };
  }, []);

  const setDestinationFromOrder = () => {
    // Set destination based on order's drop location
    let destCoords;
    
    if (order?.toAddress) {
      // Sample coordinates based on common Indian cities from the order data
      const cityCoordinates = {
        'hyderabad': { latitude: 17.4065, longitude: 78.4772 },
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

      const cityName = order.toAddress.toLowerCase();
      const matchedCity = Object.keys(cityCoordinates).find(city => 
        cityName.includes(city)
      );
      
      destCoords = matchedCity ? cityCoordinates[matchedCity] : cityCoordinates.hyderabad;
    } else {
      destCoords = { latitude: 17.4065, longitude: 78.4772 }; // Default destination
    }

    setDestination(destCoords);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const startLocationTracking = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        locationWatchId.current = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          (location) => {
            const newLocation = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            };
            
            // Calculate traveled distance
            if (lastLocation.current) {
              const distanceDelta = calculateDistance(
                lastLocation.current.latitude,
                lastLocation.current.longitude,
                newLocation.latitude,
                newLocation.longitude
              );
              setTraveledDistance(prev => prev + distanceDelta);
            }
            
            setCurrentLocation(newLocation);
            lastLocation.current = newLocation;
            
            // Update map region to follow user
            if (mapRef.current) {
              mapRef.current.animateToRegion(newLocation, 1000);
            }
          }
        );
      }
    } catch (error) {
      console.error('Error starting location tracking:', error);
    }
  };

  const handleCompleteRide = () => {
    Alert.alert(
      "Complete Ride",
      "Are you sure you want to complete this ride?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Complete",
          onPress: () => {
            navigation.navigate('TransactionScreen', {
              order,
              traveledDistance: traveledDistance.toFixed(2),
              finalCost: order?.totalCost || '150'
            });
          }
        }
      ]
    );
  };

  const onDirectionsReady = (result) => {
    setDistance(result.distance.toFixed(1));
  };

  return (
    <View style={styles.container}>
      {/* Traveling Distance Bar */}
      <View style={styles.distanceBar}>
        <Text style={styles.distanceLabel}>Traveling Distance</Text>
        <Text style={styles.distanceValue}>{traveledDistance.toFixed(2)} km</Text>
      </View>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        {currentLocation && destination ? (
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={currentLocation}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={false}
            showsTraffic={true}
          >
            <Marker
              coordinate={currentLocation}
              title="Your Location"
              pinColor="blue"
            />
            <Marker
              coordinate={destination}
              title="Drop Location"
              description={order?.toAddress || 'Destination'}
              pinColor="red"
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

      {/* Destination Info */}
      <View style={styles.destinationCard}>
        <View style={styles.destinationIcon}>
          <View style={styles.destinationDot} />
        </View>
        <View style={styles.destinationInfo}>
          <Text style={styles.destinationLabel}>Drop Location</Text>
          <Text style={styles.destinationAddress}>
            {order?.toAddress || 'Destination address'}
          </Text>
          {distance && (
            <Text style={styles.remainingDistance}>
              {distance} km remaining
            </Text>
          )}
        </View>
      </View>

      {/* Bottom Action Button */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.completeRideButton} onPress={handleCompleteRide}>
          <Text style={styles.completeRideButtonText}>COMPLETED RIDE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrivingMapScreen;