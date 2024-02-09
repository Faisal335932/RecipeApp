import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import Login from './Login';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})