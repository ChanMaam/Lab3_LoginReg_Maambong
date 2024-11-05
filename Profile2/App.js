import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from './components/ProfilePage';
import ManageProfilePage from './components/ManageProfilePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ title: 'Register' }} />
        <Stack.Screen 
          name="Profile" 
          component={ProfilePage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ManageProfile" 
          component={ManageProfilePage} 
          options={{ title: 'Manage Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
