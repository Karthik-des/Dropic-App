import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
    paddingHorizontal:10,
  },
  locationSummaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
     backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 10,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  locationSummaryContent: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#212121',
    marginBottom: 8,
    lineHeight: 24,
  },
  passengerSummary: {
    marginTop: 4,
  },
  passengerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  subText: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 6,
    fontWeight: '500',
  },
  distanceDurationContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderRadius: 12,
  },
  distanceDurationText: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '600',
  },
  map: {
    width: width - 24,
    height: height * 0.28,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  rideListContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  rideCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    marginBottom: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    borderLeftWidth: 4,
  },
  driverCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 20,
  },
  driverLeft: {
    flex: 3,
    justifyContent: 'center',
  },
  driverRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212121',
    marginLeft: 8,
  },
  timeText: {
    marginLeft: 8,
    color: '#444',
    fontSize: 14,
  },
  carText: {
    marginLeft: 8,
    color: '#555',
    fontSize: 14,
  },
  ratingText: {
    marginLeft: 8,
    color: '#0089d8ff',
    fontSize: 14,
  },
  costText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  costBreakdown: {
    alignItems: 'flex-end',
  },
  costDetail: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
    textAlign: 'right',
  },
  rideSectionTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
  },
  rideSectionDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  createRideAlertButton: {
    backgroundColor: '#0089d8ff',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  createRideAlertText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;