import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './components/LoginScreen';
import { PasswordScreen } from './components/PasswordScreen';
import { HomeScreen } from './components/HomeScreen';
import { TransferListScreen } from './components/TransferListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TransferList" component={TransferListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}