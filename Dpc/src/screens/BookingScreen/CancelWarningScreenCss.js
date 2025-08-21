import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Soft blue-gray for consistency
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  icon: {
    marginBottom: 32,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#1a2a44', // Dark blue-gray for elegance
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
    fontFamily: 'Roboto', // Ensure available or use system font
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
  },
  cancelBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#0089d8', // Blue for cancel button
  },
  confirmBtn: {
    backgroundColor: '#0089d8', // Coral for prominence
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    shadowColor: '#ff6f61',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  confirmText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
    marginLeft: 8,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
});