import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Soft blue-gray for consistency
    paddingHorizontal:24
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Replaced #fff for consistency
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom:16
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
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16, // Increased for better spacing
  },
  icon: {
    padding: 8, // Replaced marginLeft for consistency
  },
  title: {
    fontSize: 26, // Increased from 20 for hierarchy
    fontWeight: '800', // Bolder for premium feel
    color: '#1a2a44', // Dark blue-gray for elegance
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
    fontFamily: 'Roboto', // Ensure available or use system font
    lineHeight: 34,
  },
  input: {
    backgroundColor: '#ffffff', // White for contrast
    borderRadius: 12, // Increased from 8
    padding: 16, // Increased from 12
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 120,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    borderLeftWidth: 4, // Added for visual flair
    borderLeftColor: '#0089d8', // Blue for input focus
  },
  submitButton: {
    backgroundColor: '#0089d8', // Coral for prominence, replaced #0089d8
    paddingVertical: 16, // Increased from 14
    paddingHorizontal: 24,
    borderRadius: 30, // Slightly adjusted from 32
    alignItems: 'center',
    shadowColor: '#ff6f61',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  submitText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800', // Bolder for emphasis
    letterSpacing: 1.2,
    textTransform: 'uppercase', // Added for sophistication
  },
});