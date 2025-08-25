import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  messageButton: {
    width: 40,
    height: 40,
    backgroundColor: '#2196F3', // Changed to blue
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  mapContainer: {
    height: 300,
    backgroundColor: '#E5E7EB',
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  mapPlaceholderText: {
    fontSize: 16,
    color: '#6B7280',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  goToPickupButton: {
    backgroundColor: '#2196F3', // Changed to blue
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goToPickupIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'white', // Changed to white
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  goToPickupIconText: {
    color: '#2196F3', // Changed to blue
    fontSize: 12,
    fontWeight: 'bold',
  },
  goToPickupText: {
    color: 'white', // Changed to white
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  durationText: {
    color: 'white', // Changed to white
    fontSize: 14,
    fontWeight: '500',
  },
  verificationSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verificationIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#059669',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  verificationDot: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  verificationText: {
    color: '#059669',
    fontWeight: '500',
  },
  cardContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  waitTimerCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  waitTimerTitle: {
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  waitTimerTime: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#EAB308',
  },
  waitTimerInfo: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  waitTimerIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#9CA3AF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  waitTimerDot: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  waitTimerInfoText: {
    color: '#6B7280',
    fontSize: 14,
    flex: 1,
  },
  addressCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addressIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#059669',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginRight: 12,
  },
  addressContent: {
    flex: 1,
  },
  addressTitle: {
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  addressText: {
    color: '#6B7280',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  customerInfo: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  startRideButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startRideText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});