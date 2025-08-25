import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  
  // Distance Bar
  distanceBar: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  distanceLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  distanceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  
  // Map Container
  mapContainer: {
    flex: 1,
    marginTop: 50,
  },
  map: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
  },
  mapPlaceholderText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  
  // Destination Card
  destinationCard: {
    position: 'absolute',
    bottom: 120,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  destinationIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  destinationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#EF4444',
  },
  destinationInfo: {
    flex: 1,
  },
  destinationLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  destinationAddress: {
    fontSize: 14,
    color: '#1F2937',
    lineHeight: 20,
    marginBottom: 4,
  },
  remainingDistance: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '600',
  },
  
  // Bottom Actions
  bottomActions: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  completeRideButton: {
    backgroundColor: '#2196F3',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  completeRideButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
});

export default styles;