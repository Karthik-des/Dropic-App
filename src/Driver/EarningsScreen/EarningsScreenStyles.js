import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, // replaces display:'flex' + height:'100vh'
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 8,
  },
});

export default styles;
