import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Soft blue-gray forpremium backdrop
    paddingHorizontal: 24,
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(0, 137, 216, 0.3)',
  },
  logo: {
    width: width * 0.4,
    height: 100,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#0a0a0aff',
    shadowColor: '#0089d8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a2a44', // Dark blue-gray for elegance
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1,
    fontFamily: 'Roboto', // Modern font (ensure available)
    textTransform: 'uppercase',
  },
  note: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 12,
    lineHeight: 24,
    fontWeight: '400',
  },
  rideCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 6,
    borderLeftColor: '#0089d8', // Blue to match BookRideScreen
    overflow: 'hidden',
  },
  date: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a2a44',
    marginBottom: 8,
    letterSpacing: 0.8,
  },
  timeRoute: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0089d8', // Vibrant blue for time
    marginBottom: 8,
  },
  route: {
    fontSize: 17,
    color: '#333',
    marginBottom: 8,
    lineHeight: 26,
    fontWeight: '500',
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a2a44',
    marginBottom: 8,
    letterSpacing: 0.6,
  },
  priceDetails: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a2a44', // Dark blue-gray for pricing
    marginBottom: 8,
  },
  cash: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0089d8', // Blue for consistency
    marginTop: 12,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '400',
  },
  messageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 6,
    borderLeftColor: '#0089d8',
  },
  messageLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1a2a44',
    marginBottom: 12,
    letterSpacing: 0.6,
  },
  textArea: {
    height: 140,
    borderWidth: 1,
    borderColor: '#0089d8', // Blue for consistency
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
    backgroundColor: '#f0f4f8', // Light blue-gray for input
  },
  requestButton: {
    flexDirection: 'row',
    backgroundColor: '#0089d8', // Vibrant blue for prominence
    paddingVertical: 18,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#0089d8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 18,
    marginLeft: 8,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});