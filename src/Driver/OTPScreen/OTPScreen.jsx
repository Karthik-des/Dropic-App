import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import styles from './OtpScreenCss';

const UserIcon = ({ size = 60, color = '#2196F3' }) => (
  <View style={{
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: size/2,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Text style={{ color: 'white', fontSize: size/2.5, fontWeight: 'bold' }}>👤</Text>
  </View>
);

const OtpScreen = ({ route, navigation }) => {
  const { order, currentLocation, destination } = route.params || {};
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  
  // Generate a random 4-digit OTP for demo purposes
  const [correctOtp] = useState(() => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  });

  useEffect(() => {
    // Auto-focus first input
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    
    // Show the correct OTP in console for testing
    console.log('Demo OTP:', correctOtp);
  }, [correctOtp]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all 4 digits are entered
    if (newOtp.every(digit => digit !== '') && index === 3) {
      setTimeout(() => verifyOtp(newOtp.join('')), 100);
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = (enteredOtp = otp.join('')) => {
    if (enteredOtp.length !== 4) {
      Alert.alert('Invalid OTP', 'Please enter a 4-digit OTP');
      return;
    }

    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      
      if (enteredOtp === correctOtp) {
        // Navigate directly to DrivingMapScreen without alert
        navigation.navigate('DrivingMapScreen', {
          order,
          currentLocation,
          destination
        });
      } else {
        Alert.alert(
          'Invalid OTP',
          'Please check the OTP and try again.',
          [{ text: 'OK', onPress: () => clearOtp() }]
        );
      }
    }, 1500);
  };

  const clearOtp = () => {
    setOtp(['', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const resendOtp = () => {
    Alert.alert(
      'OTP Resent',
      `New OTP: ${correctOtp}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Enter OTP</Text>
          <Text style={styles.headerSubtitle}>
            Enter the 4-digit OTP shared by the customer
          </Text>
        </View>

        {/* Customer Info */}
        <View style={styles.customerCard}>
          <UserIcon size={60} />
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>{order?.userName || 'Customer'}</Text>
            <Text style={styles.customerPhone}>{order?.userPhone || '+91 XXXXXXXXXX'}</Text>
          </View>
        </View>

        {/* Trip Info */}
        <View style={styles.tripInfo}>
          <View style={styles.tripRow}>
            <View style={styles.pickupDot} />
            <View style={styles.tripDetails}>
              <Text style={styles.tripLabel}>Pickup</Text>
              <Text style={styles.tripAddress}>{order?.fromAddress || 'Pickup Location'}</Text>
            </View>
          </View>
          <View style={styles.tripRow}>
            <View style={styles.dropDot} />
            <View style={styles.tripDetails}>
              <Text style={styles.tripLabel}>Drop</Text>
              <Text style={styles.tripAddress}>{order?.toAddress || 'Drop Location'}</Text>
            </View>
          </View>
        </View>

        {/* Demo OTP Display */}
        <View style={styles.demoOtpCard}>
          <Text style={styles.demoOtpTitle}>Demo OTP (for testing):</Text>
          <Text style={styles.demoOtpValue}>{correctOtp}</Text>
        </View>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          <Text style={styles.otpLabel}>Entering OTP...</Text>
          <View style={styles.otpInputContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => inputRefs.current[index] = ref}
                style={[
                  styles.otpInput,
                  digit && styles.otpInputFilled
                ]}
                value={digit}
                onChangeText={(text) => handleOtpChange(text.slice(-1), index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                keyboardType="numeric"
                maxLength={1}
                selectTextOnFocus
                placeholder="•"
                placeholderTextColor="#D1D5DB"
              />
            ))}
          </View>
        </View>

        {/* Resend OTP */}
        <TouchableOpacity style={styles.resendButton} onPress={resendOtp}>
          <Text style={styles.resendButtonText}>Didn't receive OTP? Resend</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity 
          style={[
            styles.verifyButton,
            isLoading && styles.verifyButtonDisabled
          ]} 
          onPress={() => verifyOtp()}
          disabled={isLoading}
        >
          <Text style={styles.verifyButtonText}>
            {isLoading ? 'Verifying...' : 'VERIFY OTP'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;