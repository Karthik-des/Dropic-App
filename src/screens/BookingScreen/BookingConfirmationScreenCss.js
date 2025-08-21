import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Soft blue-gray to match BookRideScreen and BookingRequestScreen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  iconContainer: {
    marginBottom: 36,
  },
  circle: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    padding: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#0089d8', // Blue border for consistency
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: '#1a2a44', // Dark blue-gray for elegance
    marginBottom: 12,
    letterSpacing: 1,
    fontFamily: 'Roboto', // Ensure available or use system font
    lineHeight: 36,
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    marginBottom: 36,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#0089d8', // Coral for prominence
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 25,
   
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});