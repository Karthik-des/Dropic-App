import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from './BookingRequestScreenCss';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';


const BookingRequestScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract params from BookRideScreen
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

  // Calculate total seats
  const totalSeats = parseInt(mainPassengers) + parseInt(addPassengers);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      ><Animated.View entering={FadeIn.duration(300)} style={styles.header}>
              <Image
                source={require('../../../assets/Dropic.png')}
                style={styles.logo}
                onError={(e) => console.log('Image error:', e.nativeEvent.error)}
              />
            </Animated.View>

            
        <Text style={styles.heading}>Check your booking request details</Text>
        <Text style={styles.note}>
          Your booking won’t be confirmed until the driver approves your request
        </Text>

        <View style={styles.rideCard}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.timeRoute}>{startTime} → {endTime}</Text>
          <Text style={styles.route}>{fromAddress} → {toAddress}</Text>
          {addAddress && <Text style={styles.route}>Add: {addAddress}</Text>}
          {dropAddress && <Text style={styles.route}>Drop: {dropAddress}</Text>}
        </View>

        <View style={styles.rideCard}>
          <Text style={styles.priceLabel}>Price summary</Text>
          <Text style={styles.priceDetails}>{totalSeats} seat{totalSeats > 1 ? 's' : ''}: ₹{totalCost}</Text>
          <Text style={styles.cash}>Cash</Text>
          <Text style={styles.subText}>Pay in the car</Text>
        </View>

        <View style={styles.messageCard}>
          <Text style={styles.messageLabel}>
            Send a message to {selectedDriver.name} to introduce yourself
          </Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={5}
            placeholder={`Hello ${selectedDriver.name}, I'm ${userName}! I've just booked your ride. I'd be glad to travel with you. Can I get more information on ...?`}
            placeholderTextColor="#777"
          />
        </View>

        <TouchableOpacity
          style={styles.requestButton}
          onPress={() => navigation.navigate('BookingConfirmation', {
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
          <FontAwesome name="paper-plane" size={16} color="#fff" />
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BookingRequestScreen;