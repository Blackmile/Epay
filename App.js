import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
