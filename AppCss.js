import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,                     // full screen
    backgroundColor: 'white',  // soft gray background
    alignItems: 'center',        // center horizontally
    justifyContent: 'center', 
    padding: 20,
  },
  home: {
    width: '100%',
    backgroundColor : 'white',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center', 
    justifyContent: 'center', 

  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e3a8a',            // dark blue text
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default styles;
