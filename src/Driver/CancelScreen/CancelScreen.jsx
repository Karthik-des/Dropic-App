import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './CancelScreenCss';

const PhoneIcon = ({ size = 20, color = '#2196F3' }) => (
  <View style={{
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: size/4,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Text style={{ color: 'white', fontSize: size/3, fontWeight: 'bold' }}>📞</Text>
  </View>
);

const UserIcon = ({ size = 24, color = '#6B7280' }) => (
  <View style={{
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: size/2,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Text style={{ color: 'white', fontSize: size/2, fontWeight: 'bold' }}>👤</Text>
  </View>
);

const CancelScreen = ({ route, navigation }) => {
  const { order } = route.params || {};
  const [selectedReason, setSelectedReason] = useState('');

  const cancelReasons = [
    'Unable to reach customer',
    'Customer asked to cancel',
    'Vehicle breakdown',
    'Emergency situation',
    'Wrong pickup location',
    'Customer not available at pickup'
  ];

  const handleCallCustomer = () => {
    if (order?.userPhone) {
      Alert.alert(
        "Call Customer",
        `Do you want to call ${order.userName}?`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Call", onPress: () => console.log(`Calling ${order.userPhone}`) }
        ]
      );
    }
  };

  const handleCancelOrder = () => {
    if (!selectedReason) {
      Alert.alert(
        "Select Reason",
        "Please select a reason for cancellation.",
        [{ text: "OK" }]
      );
      return;
    }

    Alert.alert(
      "Confirm Cancellation",
      `Are you sure you want to cancel this order?\n\nReason: ${selectedReason}`,
      [
        { text: "No", style: "cancel" },
        { 
          text: "Yes, Cancel", 
          style: "destructive",
          onPress: () => {
            // Navigate back to OrderScreen
            navigation.navigate('OrderScreen');
          }
        }
      ]
    );
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Order Information */}
        <View style={styles.orderInfoCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.orderIdText}>Order ID: #{order?.id || 'N/A'}</Text>
            <View style={styles.orderStatus}>
              <Text style={styles.orderStatusText}>ACTIVE</Text>
            </View>
          </View>
          
          {/* Customer Information */}
          <View style={styles.customerSection}>
            <View style={styles.customerInfo}>
              <UserIcon size={40} />
              <View style={styles.customerDetails}>
                <Text style={styles.customerName}>{order?.userName || 'Customer Name'}</Text>
                <Text style={styles.customerPhone}>{order?.userPhone || '+91 XXXXXXXXXX'}</Text>
              </View>
              <TouchableOpacity style={styles.callButton} onPress={handleCallCustomer}>
                <PhoneIcon size={24} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Trip Details */}
          <View style={styles.tripSection}>
            <Text style={styles.sectionTitle}>Trip Details</Text>
            <View style={styles.locationItem}>
              <View style={styles.pickupDot} />
              <View style={styles.locationInfo}>
                <Text style={styles.locationLabel}>Pickup</Text>
                <Text style={styles.locationAddress}>
                  {order?.fromAddress || 'Pickup location'}
                </Text>
              </View>
            </View>
            <View style={styles.locationItem}>
              <View style={styles.dropDot} />
              <View style={styles.locationInfo}>
                <Text style={styles.locationLabel}>Drop</Text>
                <Text style={styles.locationAddress}>
                  {order?.toAddress || 'Drop location'}
                </Text>
              </View>
            </View>
          </View>

          {/* Fare Information */}
          <View style={styles.fareSection}>
            <Text style={styles.sectionTitle}>Fare Information</Text>
            <View style={styles.fareRow}>
              <Text style={styles.fareLabel}>Total Amount</Text>
              <Text style={styles.fareValue}>₹{order?.totalCost || '0'}</Text>
            </View>
            <View style={styles.fareRow}>
              <Text style={styles.fareLabel}>Distance</Text>
              <Text style={styles.fareValue}>{order?.dropDistance || '0'} Km</Text>
            </View>
          </View>
        </View>

        {/* Cancellation Reasons */}
        <View style={styles.reasonsCard}>
          <Text style={styles.reasonsTitle}>Why are you cancelling?</Text>
          <Text style={styles.reasonsSubtitle}>Select a reason for cancellation</Text>
          
          {cancelReasons.map((reason, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.reasonItem,
                selectedReason === reason && styles.reasonItemSelected
              ]}
              onPress={() => setSelectedReason(reason)}
            >
              <View style={[
                styles.radioButton,
                selectedReason === reason && styles.radioButtonSelected
              ]}>
                {selectedReason === reason && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={[
                styles.reasonText,
                selectedReason === reason && styles.reasonTextSelected
              ]}>
                {reason}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Warning Message */}
        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>⚠️ Important Note</Text>
          <Text style={styles.warningText}>
            Frequent cancellations may affect your driver rating and availability of future orders.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.continueButton} onPress={handleBackPress}>
          <Text style={styles.continueButtonText}>Continue Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelOrder}>
          <Text style={styles.cancelButtonText}>Cancel My Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CancelScreen;