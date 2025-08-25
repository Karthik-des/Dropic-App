import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import styles from "./ReplyScreenCss";

const ReplyScreen = ({ route, navigation }) => {
  const { order } = route.params || {};

  const handleSendMessage = () => {
    navigation.navigate("MeetCustomer", { order });
  };

  return (
    <View style={styles.container}>
   
      
      
      <View style={styles.messageContainer}>
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>
            {order?.userName || "Unknown"}
          </Text>
          <Text style={styles.customerPhone}>
            {order?.userPhone || "N/A"}
          </Text>
        </View>
        
        <View style={styles.sendMessageContainer}>
          <Text style={styles.messageInput}>I am on the way</Text>
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReplyScreen;