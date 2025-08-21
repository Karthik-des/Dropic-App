import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './BookRideScreenCss';
import { useNavigation, useRoute } from '@react-navigation/native';
import drivericon from '../../../assets/drivericon.jpg';
import passenger from '../../../assets/usericon.jpg';
import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';

const BookRideScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract data from DisplayScreen
  const {
    selectedDriver = { name: 'Unknown', carModel: 'Unknown', type: 'Unknown', rating: '4.5' },
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
    timeSlot = '8:30 AM - 9:30 AM', // Default fallback
    date = new Date().toDateString(), // Default fallback
    userName = 'Guest', // Default username (replace with auth system)
  } = route.params || {};

  // Map data to match original BookRideScreen
  const [startTime, endTime] = timeSlot.split(' - ');
  const landmark = addAddress || dropAddress || 'None';
  const fare = totalCost;
  const driverTrips = selectedDriver.trips || '100'; // Placeholder

  // Handle booking request
  const handleRequestToBook = () => {
    navigation.navigate('BookingRequest', {
      selectedDriver,
      totalCost: fare,
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
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Animated.View entering={FadeIn.duration(300)} style={styles.header}>
        <Image
          source={require('../../../assets/Dropic.png')}
          style={styles.logo}
          onError={(e) => console.log('Image error:', e.nativeEvent.error)}
        />
      </Animated.View>

      <Text style={styles.dateTitle}>{date}</Text>

      <View style={styles.card}>
        <Text style={styles.time}>{startTime} → {endTime}</Text>
        <Text style={styles.place}>{fromAddress} → {toAddress}</Text>
        {landmark !== 'None' && <Text style={styles.place}>{landmark}</Text>}
        <Text style={styles.place}>Main Passengers: {mainPassengers}</Text>
        {addPassengers > 0 && <Text style={styles.place}>Additional Passengers: {addPassengers}</Text>}
        {dropPassengers > 0 && <Text style={styles.place}>Drop-off Passengers: {dropPassengers}</Text>}
        <Text style={styles.place}>Distance: {totalDistance} km</Text>
        <Text style={styles.place}>Duration: {duration}</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.rowBetween}
          onPress={() => navigation.navigate('ContactDriver')}
        >
          <View style={styles.row}>
            <Image source={drivericon} style={styles.avatar} />
            <View>
              <Text style={styles.driverName}>{selectedDriver.name}</Text>
              <Text style={styles.detailText}>⭐ {selectedDriver.rating} - {driverTrips} trips</Text>
              <Text style={styles.detailText}>{selectedDriver.carModel} - {selectedDriver.type}</Text>
            </View>
          </View>
          <Text style={{ fontSize: 20, color: '#999' }}>›</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10, gap: 6 }}>
          <Text style={styles.detailText}>
            <Ionicons name="checkmark-circle-outline" size={14} color="green" /> Verified Profile
          </Text>
          <Text style={styles.detailText}>
            <MaterialIcons name="cancel" size={14} color="#ff4444" /> Sometimes cancels rides
          </Text>
          <Text style={styles.detailText}>
            <Ionicons name="navigate" size={14} color="#007bff" /> Drop points on highways only
          </Text>
          <Text style={styles.detailText}>
            <MaterialIcons name="lock-outline" size={14} color="#555" /> Booking approval required
          </Text>
          <Text style={styles.detailText}>
            <FontAwesome5 name="smoking-ban" size={14} color="#ff4444" /> No smoking
          </Text>
          <Text style={styles.detailText}>
            <FontAwesome5 name="dog" size={14} color="#666" /> Prefer no pets
          </Text>
          <Text style={styles.detailText}>
            <MaterialIcons name="people-outline" size={14} color="#555" /> Max. 2 in back
          </Text>
        </View>

        <TouchableOpacity style={styles.contactButton} onPress={() => navigation.navigate('ContactDriver')}>
          <Text style={styles.contactText}>Contact Driver</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={() => navigation.navigate('ReportRide')}>
          <Text style={styles.contactText}>Report ride</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.subTitle}>Passenger</Text>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image source={passenger} style={styles.avatarSmall} />
            <Text style={styles.passengerText}>{userName} → {toAddress}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PassengerContact')}>
            <Text style={{ fontSize: 25, color: '#999' }}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.dateRight}>{date}</Text>
        <Text style={styles.summaryTime}>{startTime} → {endTime}</Text>
        <Text style={styles.summaryPlace}>{fromAddress} → {toAddress}</Text>
        {landmark !== 'None' && <Text style={styles.summaryPlace}>{landmark}</Text>}
        <View style={styles.driverSummary}>
          <Image source={drivericon} style={styles.avatarSmall} />
          <Text style={styles.detailText}>{selectedDriver.name} ⭐ {selectedDriver.rating}</Text>
        </View>
        <Text style={styles.price}>₹{fare}</Text>
        <TouchableOpacity style={styles.bookButton} onPress={handleRequestToBook}>
          <Text style={styles.bookText}>Request to book</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookRideScreen;