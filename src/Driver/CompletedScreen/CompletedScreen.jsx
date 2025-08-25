import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  TextInput, 
  Alert,
  Animated,
  Easing
} from 'react-native';
import styles from './CompletedScreenCss';

const CompleatedScreen = ({ route, navigation }) => {
  const { order, traveledDistance, finalCost, paymentMethod } = route.params || {};
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animate success icon and content
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const calculateFare = () => {
    const baseFare = 50;
    const perKmRate = 15;
    const distanceCharge = parseFloat(traveledDistance || 0) * perKmRate;
    const totalFare = baseFare + distanceCharge;
    return Math.round(totalFare);
  };

  const displayAmount = finalCost || calculateFare();

  const handleStarPress = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleSubmitRating = () => {
    if (rating === 0) {
      Alert.alert('Rating Required', 'Please select a rating before submitting.');
      return;
    }

    Alert.alert(
      'Thank You!',
      'Your rating has been submitted successfully.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('HomeScreen')
        }
      ]
    );
  };

  const handleBookAnother = () => {
    navigation.navigate('HomeScreen');
  };

  const handleViewReceipt = () => {
    Alert.alert(
      'Receipt',
      'Receipt has been saved to your device and sent to your email.',
      [{ text: 'OK' }]
    );
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-IN');
    const time = now.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    return { date, time };
  };

  const { date, time } = getCurrentDateTime();

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
        <Text style={[
          styles.star,
          index < rating && styles.starFilled
        ]}>
          ★
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Success Animation */}
      <View style={styles.successContainer}>
        <Animated.View 
          style={[
            styles.successIconContainer,
            {
              transform: [{ scale: scaleAnim }],
            }
          ]}
        >
          <Text style={styles.successIcon}>✓</Text>
        </Animated.View>

        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.successTitle}>Trip Completed!</Text>
          <Text style={styles.successSubtitle}>
            Your payment has been processed successfully. We hope you had a great ride experience.
          </Text>
        </Animated.View>
      </View>

      {/* Trip Summary */}
      <Animated.View style={[styles.summaryCard, { opacity: fadeAnim }]}>
        <View style={styles.summaryHeader}>
          <View style={styles.summaryIconContainer}>
            <Text style={styles.summaryIcon}>🚗</Text>
          </View>
          <Text style={styles.summaryTitle}>Trip Summary</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Customer</Text>
          <Text style={styles.summaryValue}>{order?.userName || 'Customer'}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Date & Time</Text>
          <Text style={styles.summaryValue}>{date} at {time}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Distance</Text>
          <Text style={styles.summaryValue}>{traveledDistance || '0'} km</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>From</Text>
          <Text style={styles.summaryValue}>{order?.fromAddress || 'Pickup Location'}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>To</Text>
          <Text style={styles.summaryValue}>{order?.toAddress || 'Drop Location'}</Text>
        </View>

        <View style={[styles.summaryRow, styles.summaryRowLast]}>
          <Text style={styles.summaryLabel}>Payment Method</Text>
          <Text style={styles.summaryValue}>{paymentMethod || 'Cash'}</Text>
        </View>
      </Animated.View>

      {/* Receipt Card */}
      <Animated.View style={[styles.receiptCard, { opacity: fadeAnim }]}>
        <View style={styles.receiptHeader}>
          <Text style={styles.receiptTitle}>Payment Receipt</Text>
        </View>
        
        <View style={styles.receiptBody}>
          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Base Fare</Text>
            <Text style={styles.receiptValue}>₹50</Text>
          </View>
          
          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Distance Charge</Text>
            <Text style={styles.receiptValue}>
              ₹{Math.round(parseFloat(traveledDistance || 0) * 15)}
            </Text>
          </View>
          
          <View style={styles.receiptRow}>
            <Text style={styles.receiptLabel}>Service Tax</Text>
            <Text style={styles.receiptValue}>₹0</Text>
          </View>
          
          <View style={styles.receiptDivider} />
          
          <View style={styles.receiptTotal}>
            <Text style={styles.receiptTotalLabel}>Total Paid</Text>
            <Text style={styles.receiptTotalValue}>₹{displayAmount}</Text>
          </View>
        </View>
      </Animated.View>

      {/* Driver Rating */}
      <Animated.View style={[styles.ratingCard, { opacity: fadeAnim }]}>
        <Text style={styles.ratingTitle}>Rate Your Driver</Text>
        <Text style={styles.ratingSubtitle}>
          How was your experience with the driver?
        </Text>

        <View style={styles.starsContainer}>
          {renderStars()}
        </View>

        <TextInput
          style={styles.feedbackInput}
          placeholder="Share your feedback (optional)"
          placeholderTextColor="#9CA3AF"
          value={feedback}
          onChangeText={setFeedback}
          multiline
          numberOfLines={3}
        />
      </Animated.View>

      {/* Driver Info */}
      <Animated.View style={[styles.driverCard, { opacity: fadeAnim }]}>
        <View style={styles.driverHeader}>
          <View style={styles.driverAvatar}>
            <Text style={styles.driverAvatarText}>👨‍💼</Text>
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>Rajesh Kumar</Text>
            <Text style={styles.driverDetails}>Car: Maruti Swift • TS 09 AB 1234</Text>
            <View style={styles.driverRating}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.driverRatingText}>4.8 (1,234 rides)</Text>
            </View>
          </View>
        </View>
      </Animated.View>

      {/* Action Buttons */}
      <Animated.View style={[styles.actionButtons, { opacity: fadeAnim }]}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={handleSubmitRating}
        >
          <Text style={styles.primaryButtonText}>
            {rating > 0 ? `SUBMIT ${rating} STAR RATING` : 'SUBMIT RATING'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={handleViewReceipt}
        >
          <Text style={styles.secondaryButtonText}>DOWNLOAD RECEIPT</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={handleBookAnother}
        >
          <Text style={styles.secondaryButtonText}>BOOK ANOTHER RIDE</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default CompleatedScreen;