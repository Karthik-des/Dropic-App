import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Alert,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import styles from './DriverDisplayScreenCss';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImRhYTY0YmIzYjkwMjRmZjU5MGFhYjlmNjViN2M4M2FjIiwiaCI6Im11cm11cjY0In0=';

const DisplayScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const mapRef = useRef(null);

  const { fromAddress, toAddress, addAddress, dropAddress, mainPassengers, addPassengers, dropPassengers, date } = route.params || {};
  const [updatedFrom, setUpdatedFrom] = useState(fromAddress || '');
  const [updatedTo, setUpdatedTo] = useState(toAddress || '');
  const [updatedAdd, setUpdatedAdd] = useState(addAddress || '');
  const [updatedDrop, setUpdatedDrop] = useState(dropAddress || '');
  const [fromCoords, setFromCoords] = useState(null);
  const [toCoords, setToCoords] = useState(null);
  const [addCoords, setAddCoords] = useState(null);
  const [dropCoords, setDropCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);
  const [segmentDistances, setSegmentDistances] = useState([]);
  const [totalDistance, setTotalDistance] = useState('');
  const [duration, setDuration] = useState('');

  const mainPassengerCount = parseInt(mainPassengers || '1');
  const addPassengerCount = parseInt(addPassengers || '0');
  const dropPassengerCount = parseInt(dropPassengers || '0');

  const getRatePerKm = (type) => {
    switch (type) {
      case 'Luxury': return 15;
      case 'AC': return 14;
      default: return 13;
    }
  };

  const drivers = [
    { name: 'Rajesh Kumar', carModel: 'Toyota Innova', type: 'Luxury' },
    { name: 'Anita Sharma', carModel: 'Hyundai Verna', type: 'AC' },
    { name: 'Mohit Verma', carModel: 'Maruti Dzire', type: 'Non-AC' },
    { name: 'Suresh Patel', carModel: 'Honda City', type: 'Luxury' },
    { name: 'Priya Mehta', carModel: 'Tata Indigo', type: 'AC' },
  ];

  const fetchCoordinatesAndRoute = async () => {
    try {
      const fromRes = await axios.get(`https://api.openrouteservice.org/geocode/search`, {
        params: { api_key: API_KEY, text: updatedFrom },
      });
      const toRes = await axios.get(`https://api.openrouteservice.org/geocode/search`, {
        params: { api_key: API_KEY, text: updatedTo },
      });
      let addRes, dropRes;
      if (updatedAdd) {
        addRes = await axios.get(`https://api.openrouteservice.org/geocode/search`, {
          params: { api_key: API_KEY, text: updatedAdd },
        });
      }
      if (updatedDrop) {
        dropRes = await axios.get(`https://api.openrouteservice.org/geocode/search`, {
          params: { api_key: API_KEY, text: updatedDrop },
        });
      }

      const from = fromRes.data.features[0]?.geometry?.coordinates;
      const to = toRes.data.features[0]?.geometry?.coordinates;
      const add = addRes ? addRes.data.features[0]?.geometry?.coordinates : null;
      const drop = dropRes ? dropRes.data.features[0]?.geometry?.coordinates : null;

      if (from && to) {
        const fromLatLng = { latitude: from[1], longitude: from[0] };
        const toLatLng = { latitude: to[1], longitude: to[0] };
        setFromCoords(fromLatLng);
        setToCoords(toLatLng);

        let coordinates = [from, to];
        let fitCoords = [fromLatLng, toLatLng];

        if (updatedAdd && add) {
          const addLatLng = { latitude: add[1], longitude: add[0] };
          setAddCoords(addLatLng);
          coordinates = [from, add, to]; // From → Add → To
          fitCoords = [fromLatLng, addLatLng, toLatLng];
        } else if (updatedDrop && drop) {
          const dropLatLng = { latitude: drop[1], longitude: drop[0] };
          setDropCoords(dropLatLng);
          coordinates = [from, drop, to]; // From → Drop → To
          fitCoords = [fromLatLng, dropLatLng, toLatLng];
        }

        const directionsRes = await axios.post(
          `https://api.openrouteservice.org/v2/directions/driving-car/geojson`,
          { coordinates },
          {
            headers: {
              'Authorization': API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );

        const coords = directionsRes.data.features[0].geometry.coordinates.map(([lon, lat]) => ({
          latitude: lat,
          longitude: lon,
        }));
        setRouteCoords(coords);

        const segments = directionsRes.data.features[0].properties.segments;
        const distances = segments.map(segment => segment.distance / 1000);
        setSegmentDistances(distances);
        console.log('Segment Distances:', distances); // Debug log
        const totalKm = distances.reduce((acc, dist) => acc + dist, 0);
        setTotalDistance(totalKm.toFixed(2));

        const totalTime = segments.reduce((acc, segment) => acc + segment.duration, 0) / 60;
        setDuration(`${totalTime.toFixed(1)} min`);

        setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.fitToCoordinates(fitCoords, {
              edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
              animated: true,
            });
          }
        }, 500);
      } else {
        console.warn('Failed to retrieve coordinates for From or To');
        Alert.alert('Error', 'Unable to retrieve coordinates for From or To. Please check the addresses.');
      }
    } catch (err) {
      console.error('Error fetching map data:', err.message);
      Alert.alert('Error', 'Failed to fetch route data. Please check your inputs and try again.');
    }
  };

  useEffect(() => {
    if (updatedFrom && updatedTo) {
      fetchCoordinatesAndRoute();
    }
  }, [updatedFrom, updatedTo, updatedAdd, updatedDrop]);

  const handleCreateRideAlert = () => {
    Alert.alert('Ride Alert Created', 'Your ride alert has been successfully posted!');
  };

  const calculateCosts = (rate, mainDistance, addDistance, dropDistance) => {
    let mainCost, addCost, dropCost, remainingPassengers;

    if (updatedAdd && addPassengerCount > 0 && segmentDistances.length > 1) {
      mainDistance = parseFloat(totalDistance);
      addDistance = segmentDistances[1];
      mainCost = mainDistance ? (mainDistance * rate * mainPassengerCount).toFixed(0) : '—';
      addCost = addDistance ? (addDistance * rate * addPassengerCount).toFixed(0) : '0';
      remainingPassengers = mainPassengerCount;
      return { mainCost, addCost, dropCost: '0', remainingPassengers };
    } else if (updatedDrop && dropPassengerCount > 0 && segmentDistances.length > 1) {
      dropDistance = segmentDistances[0];
      mainDistance = segmentDistances[1];
      remainingPassengers = mainPassengerCount - dropPassengerCount;
      mainCost = mainDistance ? (mainDistance * rate * remainingPassengers).toFixed(0) : '—';
      dropCost = dropDistance ? (dropDistance * rate * dropPassengerCount).toFixed(0) : '0';
      return { mainCost, addCost: '0', dropCost, remainingPassengers };
    } else {
      mainCost = mainDistance ? (mainDistance * rate * mainPassengerCount).toFixed(0) : '—';
      remainingPassengers = mainPassengerCount;
      return { mainCost, addCost: '0', dropCost: '0', remainingPassengers };
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={drivers}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <View style={styles.locationSummaryCard}>
              <View style={styles.locationSummaryContent}>
                <Text style={styles.locationTitle} numberOfLines={2}>
                  {updatedFrom} → {updatedAdd ? `${updatedAdd} → ` : ''}{updatedDrop ? `${updatedDrop} → ` : ''}{updatedTo}
                </Text>
                <View style={styles.passengerSummary}>
                  <View style={styles.passengerInfo}>
                    <MaterialIcons name="people" size={16} color="#757575" />
                    <Text style={styles.subText}>
                      Main: {mainPassengerCount} {mainPassengerCount === 1 ? 'passenger' : 'passengers'}
                    </Text>
                  </View>
                  {updatedAdd && addPassengerCount > 0 && (
                    <View style={styles.passengerInfo}>
                      <MaterialIcons name="people" size={16} color="#757575" />
                      <Text style={styles.subText}>
                        Add: {addPassengerCount} {addPassengerCount === 1 ? 'passenger' : 'passengers'}
                      </Text>
                    </View>
                  )}
                  {updatedDrop && dropPassengerCount > 0 && (
                    <View style={styles.passengerInfo}>
                      <MaterialIcons name="people" size={16} color="#757575" />
                      <Text style={styles.subText}>
                        Drop: {dropPassengerCount} {dropPassengerCount === 1 ? 'passenger' : 'passengers'}
                      </Text>
                    </View>
                  )}
                  <View style={styles.passengerInfo}>
                    <MaterialIcons name="group" size={16} color="#757575" />
                    <Text style={styles.subText}>
                      Total: {updatedAdd ? mainPassengerCount + addPassengerCount : mainPassengerCount} {updatedAdd ? (mainPassengerCount + addPassengerCount === 1 ? 'passenger' : 'passengers') : (mainPassengerCount === 1 ? 'passenger' : 'passengers')}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {(totalDistance && duration) && (
              <View style={styles.distanceDurationContainer}>
                <Text style={styles.distanceDurationText}>
                  Total Distance: {totalDistance} km | Duration: {duration}
                </Text>
              </View>
            )}

            <MapView
              ref={mapRef}
              style={styles.map}
              initialRegion={{
                latitude: 20.5937,
                longitude: 78.9629,
                latitudeDelta: 8,
                longitudeDelta: 8,
              }}
            >
              {fromCoords && <Marker coordinate={fromCoords} title="From" />}
              {toCoords && <Marker coordinate={toCoords} title="To" />}
              {addCoords && updatedAdd && <Marker coordinate={addCoords} title="Add" pinColor="green" />}
              {dropCoords && updatedDrop && <Marker coordinate={dropCoords} title="Drop" pinColor="green" />}
              {routeCoords.length > 0 && <Polyline coordinates={routeCoords} strokeColor="#007AFF" strokeWidth={4} />}
            </MapView>

            <Text style={styles.rideSectionTitle}>Available Rides</Text>
            <View style={styles.rideSectionDivider} />
          </>
        }
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => {
          const rate = getRatePerKm(item.type);
          const mainDistance = segmentDistances.length > 1 ? parseFloat(totalDistance) : parseFloat(totalDistance);
          const addDistance = updatedAdd && segmentDistances.length > 1 ? segmentDistances[1] : 0;
          const dropDistance = updatedDrop && segmentDistances.length > 1 ? segmentDistances[0] : 0;

          const { mainCost, addCost, dropCost, remainingPassengers } = calculateCosts(rate, mainDistance, addDistance, dropDistance);

          const totalCost = totalDistance 
            ? `₹${(parseFloat(mainCost || 0) + parseFloat(addCost || 0) + parseFloat(dropCost || 0)).toFixed(0)}`
            : '—';

          const departureHour = 8 + index;
          const timeSlot = `${departureHour}:30 AM - ${departureHour + 1}:30 AM`;
          const typeColor = item.type === 'Luxury' ? '#0089d8' : item.type === 'AC' ? '#3498db' : '#95a5a6';
          const rating = (4.2 + Math.random() * 0.5).toFixed(1);

          return (
            <TouchableOpacity
              style={[styles.rideCard, { borderLeftColor: typeColor }]}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('BookRide', {
                selectedDriver: { ...item, rating },
                totalCost: (parseFloat(mainCost || 0) + parseFloat(addCost || 0) + parseFloat(dropCost || 0)).toFixed(0),
                fromAddress: updatedFrom,
                toAddress: updatedTo,
                addAddress: updatedAdd,
                dropAddress: updatedDrop,
                mainPassengers,
                addPassengers,
                dropPassengers,
                totalDistance,
                duration,
                timeSlot,
                date,
              })}
            >
              <View style={styles.driverCard}>
                <View style={styles.driverLeft}>
                  <View style={styles.row}>
                    <MaterialIcons name="person" size={20} color={typeColor} />
                    <Text style={styles.driverName}>{item.name}</Text>
                  </View>
                  <View style={styles.row}>
                    <MaterialIcons name="schedule" size={18} color="#0089d8" />
                    <Text style={styles.timeText}>{timeSlot}</Text>
                  </View>
                  <View style={styles.row}>
                    <MaterialIcons name="directions-car" size={20} color="#7c7c7c" />
                    <Text style={styles.carText}>
                      {item.carModel} · <Text style={{ color: typeColor }}>{item.type}</Text>
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <MaterialIcons name="star" size={18} color="#0089d8" />
                    <Text style={styles.ratingText}>{rating} / 5.0</Text>
                  </View>
                </View>
                <View style={styles.driverRight}>
                  <Text style={styles.costText}>Total: {totalCost}</Text>
                  <View style={styles.costBreakdown}>
                    <Text style={styles.costDetail}>
                      Main ({mainPassengerCount}): ₹{mainCost}
                    </Text>
                    {updatedAdd && addPassengerCount > 0 && (
                      <Text style={styles.costDetail}>
                        Add ({addPassengerCount}): ₹{addCost}
                      </Text>
                    )}
                    {updatedDrop && dropPassengerCount > 0 && (
                      <Text style={styles.costDetail}>
                        Drop ({dropPassengerCount}): ₹{dropCost}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.createRideAlertButton}
            onPress={handleCreateRideAlert}
          >
            <Text style={styles.createRideAlertText}>
              Create Ride Alert
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default DisplayScreen;