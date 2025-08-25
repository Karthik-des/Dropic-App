import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
  },
  
  // Success Animation Container
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  
  // Success Icon
  successIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  
  successIcon: {
    fontSize: 60,
    color: 'white',
  },
  
  // Success Text
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  
  successSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  
  // Trip Summary Card
  summaryCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  summaryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  
  summaryIcon: {
    fontSize: 20,
    color: '#2563EB',
  },
  
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  
  // Summary Rows
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  
  summaryRowLast: {
    borderBottomWidth: 0,
  },
  
  summaryLabel: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'right',
    flex: 1,
  },
  
  summaryValueHighlight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
  },
  
  // Rating Section
  ratingCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  
  ratingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  
  ratingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  
  star: {
    fontSize: 32,
    marginHorizontal: 4,
    color: '#D1D5DB',
  },
  
  starFilled: {
    color: '#F59E0B',
  },
  
  feedbackInput: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#1F2937',
    textAlignVertical: 'top',
    backgroundColor: '#F9FAFB',
  },
  
  // Action Buttons
  actionButtons: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  
  primaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.5,
  },
  
  secondaryButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
    letterSpacing: 0.5,
  },
  
  // Receipt Section
  receiptCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  
  receiptHeader: {
    backgroundColor: '#1F2937',
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  
  receiptTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  
  receiptBody: {
    padding: 24,
  },
  
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  
  receiptLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  receiptValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  
  receiptDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
  
  receiptTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#F9FAFB',
    marginHorizontal: -24,
    paddingHorizontal: 24,
    marginTop: 12,
  },
  
  receiptTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  
  receiptTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10B981',
  },
  
  // Animation styles
  fadeIn: {
    opacity: 1,
  },
  
  scaleIn: {
    transform: [{ scale: 1 }],
  },
  
  // Driver info section
  driverCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  
  driverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  driverAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  
  driverAvatarText: {
    fontSize: 24,
    color: '#2563EB',
  },
  
  driverInfo: {
    flex: 1,
  },
  
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  
  driverDetails: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  driverRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  
  driverRatingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F59E0B',
    marginLeft: 4,
  },
});

export default styles;