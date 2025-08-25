import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import styles from './TransactionScreenCss';

// QR Code generation (simple base64 QR code)
const generateQRCode = (amount) => {
  // In a real app, you'd use a library like react-native-qrcode-svg
  // For demo purposes, we'll use a placeholder QR code
  const qrData = `upi://pay?pa=merchant@paytm&pn=TaxiService&am=${amount}&cu=INR&tn=Taxi Payment`;
  return qrData;
};

const QRCodePlaceholder = ({ size = 200, amount }) => (
  <View style={[styles.qrCodePlaceholder, { width: size, height: size }]}>
    <View style={styles.qrPattern}>
      {[...Array(8)].map((_, i) => (
        <View key={i} style={styles.qrRow}>
          {[...Array(8)].map((_, j) => (
            <View 
              key={j} 
              style={[
                styles.qrPixel, 
                { backgroundColor: (i + j) % 2 === 0 ? '#000' : '#fff' }
              ]} 
            />
          ))}
        </View>
      ))}
    </View>
    <Text style={styles.qrAmount}>₹{amount || '150'}</Text>
  </View>
);

const TransactionScreen = ({ route, navigation }) => {
  const { order, traveledDistance, finalCost } = route.params || {};
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');

  const paymentMethods = [
    {
      id: 'phonepe',
      name: 'PhonePe',
      icon: 'https://logos-world.net/wp-content/uploads/2023/03/PhonePe-Logo.png',
      color: '#5F2EEA',
      type: 'upi'
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      icon: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Pay-Logo.png',
      color: '#4285F4',
      type: 'upi'
    },
    {
      id: 'paytm',
      name: 'Paytm',
      icon: 'https://logos-world.net/wp-content/uploads/2020/09/Paytm-Logo.png',
      color: '#00BAF2',
      type: 'upi'
    },
    {
      id: 'amazonpay',
      name: 'Amazon Pay',
      icon: 'https://logos-world.net/wp-content/uploads/2021/03/Amazon-Pay-Logo.png',
      color: '#FF9900',
      type: 'upi'
    },
    {
      id: 'bhim',
      name: 'BHIM UPI',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/BHIM_logo.svg/1200px-BHIM_logo.svg.png',
      color: '#2E7D32',
      type: 'upi'
    },
    {
      id: 'cash',
      name: 'Cash Payment',
      icon: '💵',
      color: '#4CAF50',
      type: 'cash'
    }
  ];

  useEffect(() => {
    if (selectedPaymentMethod && selectedPaymentMethod !== 'cash') {
      setQrCodeData(generateQRCode(finalCost || calculateFare()));
    }
  }, [selectedPaymentMethod, finalCost]);

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method.id);
    if (method.type === 'upi') {
      setShowQRCode(true);
    } else {
      setShowQRCode(false);
    }
  };

  const handlePaymentComplete = () => {
    if (!selectedPaymentMethod) {
      Alert.alert('Select Payment Method', 'Please select a payment method to continue');
      return;
    }

    const paymentMethodName = paymentMethods.find(m => m.id === selectedPaymentMethod)?.name;
    const amount = finalCost || calculateFare();
    
    Alert.alert(
      'Payment Confirmation',
      `Confirm payment of ₹${amount} via ${paymentMethodName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert(
              'Payment Successful!',
              `Payment of ₹${amount} completed successfully.\nThank you for using our service!`,
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('CompletedScreen')
                }
              ]
            );
          }
        }
      ]
    );
  };

  const calculateFare = () => {
    const baseFare = 50;
    const perKmRate = 15;
    const distanceCharge = parseFloat(traveledDistance || 0) * perKmRate;
    const totalFare = baseFare + distanceCharge;
    return Math.round(totalFare);
  };

  const calculatedFare = calculateFare();
  const displayAmount = finalCost || calculatedFare;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payment</Text>
        <Text style={styles.headerSubtitle}>Choose your payment method</Text>
      </View>

      {/* Ride Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Ride Summary</Text>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Customer</Text>
          <Text style={styles.summaryValue}>{order?.userName || 'Customer'}</Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Distance Traveled</Text>
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
      </View>

      {/* Fare Breakdown */}
      <View style={styles.fareCard}>
        <Text style={styles.fareTitle}>Fare Breakdown</Text>
        
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Base Fare</Text>
          <Text style={styles.fareValue}>₹50</Text>
        </View>
        
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Distance ({traveledDistance || '0'} km @ ₹15/km)</Text>
          <Text style={styles.fareValue}>₹{Math.round(parseFloat(traveledDistance || 0) * 15)}</Text>
        </View>
        
        <View style={styles.fareDivider} />
        
        <View style={styles.fareRow}>
          <Text style={styles.fareTotalLabel}>Total Amount</Text>
          <Text style={styles.fareTotalValue}>₹{displayAmount}</Text>
        </View>
      </View>

      {/* Payment Methods */}
      <View style={styles.paymentCard}>
        <Text style={styles.paymentTitle}>Select Payment Method</Text>
        
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentMethod,
              selectedPaymentMethod === method.id && styles.paymentMethodSelected
            ]}
            onPress={() => handlePaymentMethodSelect(method)}
          >
            <View style={[styles.paymentIcon, { backgroundColor: method.color }]}>
              {method.id === 'cash' ? (
                <Text style={styles.paymentIconText}>{method.icon}</Text>
              ) : (
                <Image 
                  source={{ uri: method.icon }} 
                  style={styles.paymentIconImage}
                  resizeMode="contain"
                />
              )}
            </View>
            <Text style={styles.paymentMethodName}>{method.name}</Text>
            <View style={[
              styles.radioButton,
              selectedPaymentMethod === method.id && styles.radioButtonSelected
            ]}>
              {selectedPaymentMethod === method.id && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* QR Code Section */}
      {showQRCode && selectedPaymentMethod !== 'cash' && (
        <View style={styles.qrCard}>
          <Text style={styles.qrTitle}>Scan QR Code to Pay</Text>
          <Text style={styles.qrSubtitle}>
            Scan this QR code with your {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name} app
          </Text>
          
          <View style={styles.qrContainer}>
            <QRCodePlaceholder size={200} amount={displayAmount} />
          </View>
          
          <View style={styles.qrInfo}>
            <Text style={styles.qrInfoText}>Amount: ₹{displayAmount}</Text>
            <Text style={styles.qrInfoText}>Merchant: TaxiService</Text>
          </View>
        </View>
      )}

      {/* Payment Button */}
      <View style={styles.bottomActions}>
        <TouchableOpacity 
          style={[
            styles.payButton,
            !selectedPaymentMethod && styles.payButtonDisabled
          ]} 
          onPress={handlePaymentComplete}
          disabled={!selectedPaymentMethod}
        >
          <Text style={styles.payButtonText}>
            {selectedPaymentMethod === 'cash' 
              ? `CONFIRM CASH PAYMENT ₹${displayAmount}`
              : `PAY ₹${displayAmount}`
            }
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TransactionScreen;