// src/config/api.js

import { Platform } from "react-native";

// Detect if running on Android Emulator
const isAndroidEmulator = Platform.OS === "android" && !__DEV__ ? false : true;

// Change this IPv4 to your PC's IP (from ipconfig)
const LOCAL_IPV4 = "192.168.1.7";  // 👈 replace with yours
const PORT = 5000;

// Base URL logic
let API_URL;

if (Platform.OS === "android") {
  // On Android Emulator
  API_URL = "http://10.0.2.2:" + PORT;
} else if (Platform.OS === "ios") {
  // On iOS Simulator
  API_URL = "http://127.0.0.1:" + PORT;
} else {
  // On physical device (Expo Go on phone)
  API_URL = `http://${LOCAL_IPV4}:${PORT}`;
}

export default API_URL;
