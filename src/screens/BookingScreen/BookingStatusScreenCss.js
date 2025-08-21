import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Soft blue-gray for consistency
    paddingHorizontal:16
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff', // White from your palette for crisp header
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(0, 137, 216, 0.3)', // Subtle #0089d8 accent
  },
  logo: {
    width: width * 0.4,
    height: 100,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#0b0c0cff', // Your vibrant blue for logo pop
    shadowColor: '#0089d8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  banner: {
    backgroundColor: '#ffffff', // White with blue border instead of #fecf4f
    padding: 24,
    borderRadius: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 6,
    borderLeftColor: '#0089d8', // Blue accent
  },
  bannerText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1a2a44', // Dark blue-gray
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1,
    fontFamily: 'Roboto', // Ensure available or use system font
  },
  responseBox: {
    backgroundColor: '#0089d8', // Blue, kept for contrast
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'center',
  },
  responseText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.8,
  },
  ridePlanBox: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 6,
    borderLeftColor: '#0089d8',
  },
  ridePlanHeading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1a2a44',
    marginBottom: 12,
    alignSelf: 'center',
    letterSpacing: 1,
  },
  rideDate: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a2a44',
    marginBottom: 12,
    textAlign: 'center',
  },
  rideDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0089d8', // Blue for time
    marginBottom: 12,
  },
  duration: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 10,
  },
  locations: {
    marginLeft: 20,
    flex: 1,
  },
  city: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a2a44',
    marginBottom: 8,
  },
  stop: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  paymentBox: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 18,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 6,
    borderLeftColor: '#0089d8', // Coral for payment emphasis
  },
  paymentText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1a2a44',
    marginBottom: 8,
  },
  seats: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a2a44', // Coral for standout pricing
  },
  driverBox: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderRadius: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#0089d8',
  },
  driverName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a2a44',
    marginBottom: 4,
  },
  carDetails: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  carColor: {
    fontSize: 15,
    fontWeight: '500',
    color: '#555',
  },
  noPassenger: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 20,
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0089d8', // Blue for links
    textDecorationLine: 'underline',
    letterSpacing: 0.8,
  },
});