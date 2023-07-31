import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import { useEffect, useState } from 'react';
import { auth } from './src/utils/firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';

<StatusBar style='dark' />

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
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const RootNavigation = () => {

  const [currUser, setCurrUser] = useState(null)

  const userHandler = user => user ? setCurrUser(user) : setCurrUser(null)

  useEffect(() => auth.onAuthStateChanged(user => userHandler(user)), []);

  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container} >
        <>{currUser ? <SignUpStack /> : <MainStack />}</>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default function App() {
  return (
    <RootNavigation />
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
