import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './AppCss';
import { useEffect, useState } from 'react';
import car from './assets/Car.webm';

export default function App() {
  const [startingValue, setStartingValue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartingValue(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {startingValue ? (
        <View style={styles.container}>
          <View style={styles.home}>
            <Image
              source={car}
              style={{ width: 200, height: 200, resizeMode: 'contain' }}
            />
            <StatusBar style="auto" />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to Bla Bla</Text>
        </View>
      )}
    </View>
  );
}
