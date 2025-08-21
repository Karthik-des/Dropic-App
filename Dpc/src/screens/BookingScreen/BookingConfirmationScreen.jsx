import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './BookingConfirmationScreenCss';

const BookingConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract params from BookingRequestScreen
  const {
    selectedDriver = { name: 'Unknown' },
    totalCost = '0',
    fromAddress = 'Unknown',
    toAddress = 'Unknown',
    addAddress = '',
    dropAddress = '',
    mainPassengers = '1',
    addPassengers = '0',
    dropPassengers = '0',
    totalDistance = '0',
    duration = '0',
    userName = 'Guest',
    date = new Date().toDateString(),
    startTime = '8:30 AM',
    endTime = '9:30 AM',
  } = route.params || {};

  // Calculate response time (placeholder: 1 hour from startTime)
  const responseTime = new Date(
    Date.parse(`${date} ${startTime}`) + 60 * 60 * 1000
  ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <MaterialCommunityIcons name="calendar-clock" size={70} color="#f48c00" />
        </View>
      </View>

      <Text style={styles.heading}>Your booking is{'\n'}awaiting the driver’s approval</Text>
      <Text style={styles.subtext}>{selectedDriver.name} will respond before {responseTime} today</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BookingStatusScreen', {
          selectedDriver,
          totalCost,
          fromAddress,
          toAddress,
          addAddress,
          dropAddress,
          mainPassengers,
          addPassengers,
          dropPassengers,
          totalDistance,
          duration,
          userName,
          date,
          startTime,
          endTime,
        })}
      >
        <Text style={styles.buttonText}>See your booking request</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingConfirmationScreen;