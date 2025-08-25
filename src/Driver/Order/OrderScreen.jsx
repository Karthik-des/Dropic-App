import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, Animated, ScrollView } from "react-native";
import styles from "./OrderScreenCss";

const OrderScreen = ({ route, navigation }) => {
  const { driverId = 1 } = route.params || {};

  // Mock data for 5 car orders with long-distance travel
  const mockOrders = [
    {
      id: 1,
      userName: "Rajesh Kumar",
      userPhone: "+91 9876543210",
      totalSeats: 1,
      fromAddress: "Hyderabad, Telangana",
      toAddress: "Bangalore, Karnataka",
      pickupDistance: 2.5,
      dropDistance: 600,
      totalCost: 6000,
      extraAmount: 500,
      date: "Today",
      startTime: "2:45 PM",
      estimatedDuration: "8 hours",
      status: "PENDING",
      vehicleType: "Car",
      priority: "high",
      onlineStatus: "Online"
    },
    {
      id: 2,
      userName: "Priya Sharma",
      userPhone: "+91 8765432109",
      totalSeats: 2,
      fromAddress: "Mumbai, Maharashtra",
      toAddress: "Pune, Maharashtra",
      pickupDistance: 3.2,
      dropDistance: 150,
      totalCost: 1500,
      extraAmount: 200,
      date: "Today",
      startTime: "3:15 PM",
      estimatedDuration: "3 hours",
      status: "PENDING",
      vehicleType: "Car",
      priority: "medium",
      onlineStatus: "Online"
    },
    {
      id: 3,
      userName: "Mohammed Ali",
      userPhone: "+91 7654321098",
      totalSeats: 1,
      fromAddress: "Delhi",
      toAddress: "Agra, Uttar Pradesh",
      pickupDistance: 4.1,
      dropDistance: 200,
      totalCost: 2000,
      extraAmount: 300,
      date: "Today",
      startTime: "4:00 PM",
      estimatedDuration: "4 hours",
      status: "PENDING",
      vehicleType: "Car",
      priority: "high",
      onlineStatus: "Online"
    },
    {
      id: 4,
      userName: "Lakshmi Reddy",
      userPhone: "+91 6543210987",
      totalSeats: 1,
      fromAddress: "Chennai, Tamil Nadu",
      toAddress: "Pondicherry",
      pickupDistance: 1.8,
      dropDistance: 160,
      totalCost: 1600,
      extraAmount: 150,
      date: "Today",
      startTime: "4:30 PM",
      estimatedDuration: "3.5 hours",
      status: "PENDING",
      vehicleType: "Car",
      priority: "low",
      onlineStatus: "Online"
    },
    {
      id: 5,
      userName: "Suresh Babu",
      userPhone: "+91 9988776655",
      totalSeats: 3,
      fromAddress: "Kolkata, West Bengal",
      toAddress: "Darjeeling, West Bengal",
      pickupDistance: 2.5,
      dropDistance: 620,
      totalCost: 6200,
      extraAmount: 600,
      date: "Today",
      startTime: "5:00 PM",
      estimatedDuration: "12 hours",
      status: "PENDING",
      vehicleType: "Car",
      priority: "high",
      onlineStatus: "Online"
    }
  ];

  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState(mockOrders[0]);
  const [loading, setLoading] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const updateStatus = (id, status) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status } : order
    ));
  };

  const removeOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
    if (selectedOrder?.id === id) {
      setSelectedOrder(newOrders[0] || null);
    }
  };

  const getVehicleIcon = () => "🚗"; // Only cars

  const renderLeftItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.leftListItem,
        selectedOrder?.id === item.id && styles.leftListItemSelected,
      ]}
      onPress={() => setSelectedOrder(item)}
    >
      <View style={styles.leftItemContent}>
        <Text style={styles.leftItemAmount}>₹{item.totalCost}</Text>
        <Text style={styles.leftItemExtra}>+₹{item.extraAmount}</Text>
        <Text style={styles.leftItemDistance}>{item.dropDistance} Km</Text>
      </View>
      {selectedOrder?.id === item.id && <View style={styles.selectionIndicator} />}
    </TouchableOpacity>
  );

  const renderDetailView = () => {
    if (!selectedOrder) {
      return (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No orders selected</Text>
        </View>
      );
    }

    return (
      <View style={styles.detailCard}>
        <View style={styles.distanceHeader}>
          <Text style={styles.totalDistanceText}>
            {selectedOrder.pickupDistance + selectedOrder.dropDistance} Km Total
          </Text>
          <Text style={styles.durationText}>{selectedOrder.estimatedDuration}</Text>
        </View>
        
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardContent}>
            <View style={styles.customerSection}>
              <Text style={styles.customerName}>{selectedOrder.userName}</Text>
              <Text style={styles.customerPhone}>{selectedOrder.userPhone}</Text>
              <Text style={styles.seatsInfo}>{selectedOrder.totalSeats} Seats</Text>
            </View>
            
            <View style={styles.earningsSection}>
              <View style={styles.earningsRow}>
                <Text style={styles.vehicleIcon}>{getVehicleIcon()}</Text>
                <Text style={styles.earningsText}>₹{selectedOrder.totalCost}</Text>
                <Text style={styles.extraEarningsText}> + ₹{selectedOrder.extraAmount}</Text>
              </View>
              <Text style={styles.onlineStatus}>({selectedOrder.onlineStatus})</Text>
            </View>
            
            <View style={styles.routeContainer}>
              <View style={styles.routeItem}>
                <View style={styles.pickupDot} />
                <View style={styles.locationInfo}>
                  <Text style={styles.locationLabel}>From</Text>
                  <Text style={styles.addressText} numberOfLines={2}>
                    {selectedOrder.fromAddress}
                  </Text>
                </View>
              </View>
              <View style={styles.routeItem}>
                <View style={styles.dropDot} />
                <View style={styles.locationInfo}>
                  <Text style={styles.locationLabel}>To</Text>
                  <Text style={styles.addressText} numberOfLines={2}>
                    {selectedOrder.toAddress}
                  </Text>
                </View>
              </View>
            </View>
            
            <View style={styles.priceBreakdown}>
              <Text style={styles.priceTitle}>Price Breakdown</Text>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Base Fare ({selectedOrder.dropDistance} Km)</Text>
                <Text style={styles.priceValue}>₹{selectedOrder.totalCost - selectedOrder.extraAmount}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Extra</Text>
                <Text style={styles.priceValue}>₹{selectedOrder.extraAmount}</Text>
              </View>
              <View style={styles.totalPriceRow}>
                <Text style={styles.totalPriceLabel}>Total</Text>
                <Text style={styles.totalPriceValue}>₹{selectedOrder.totalCost}</Text>
              </View>
            </View>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => removeOrder(selectedOrder.id)}
                style={styles.rejectButton}
              >
                <Text style={styles.rejectButtonText}>✕</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("ReplyScreen", { order: selectedOrder })}
                style={styles.acceptButton}
              >
                <Text style={styles.acceptButtonText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Text style={styles.heading}>OrderScreen</Text>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading orders...</Text>
        </View>
      ) : orders.length === 0 ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No orders available</Text>
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.leftContainer}>
            <FlatList
              data={orders}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderLeftItem}
              contentContainerStyle={styles.leftListContainer}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.rightContainer}>{renderDetailView()}</View>
        </View>
      )}
    </View>
  );
};

export default OrderScreen;