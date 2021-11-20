import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Login from 'screens/Login/Login';
import Signup from 'screens/Signup/Signup';
import ForgotPassword from 'screens/ForgotPassword/ForgotPassword';
import Home from 'screens/Home/Home';
import SignupMusic from 'screens/SignupMusic/SignupMusic';

import HeaderOptions from 'constants/HeaderOptions';

const Stack = createStackNavigator();

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} options={HeaderOptions} />
        <Stack.Screen
          name="SignupMusic"
          component={SignupMusic}
          options={HeaderOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
