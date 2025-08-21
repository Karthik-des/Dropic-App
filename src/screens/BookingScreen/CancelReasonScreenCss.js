import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8', // Soft blue-gray for consistency
    paddingHorizontal: 24,
    paddingVertical: 20,
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
    padding: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a2a44', // Dark blue-gray for elegance
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
    fontFamily: 'Roboto', // Ensure available or use system font
    lineHeight: 34,
  },
  reasonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#0089d8', // Coral for prominence
  },
  reasonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 12,
    lineHeight: 24,
  },
});