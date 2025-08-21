import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function VerificationPendingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VerificationPendingScreen</Text>
      <Text>Placeholder — add your UI & logic here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
