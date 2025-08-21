import { registerRootComponent } from 'expo';
import { View, Text } from 'react-native';

import App from './App';

function ErrorFallback() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:20, color:'red' }}>Error occurred, please wait…</Text>
    </View>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App ? App : ErrorFallback);
