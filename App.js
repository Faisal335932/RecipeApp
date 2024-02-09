import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import StackNavigation from './src/components/StackNavigation';
import HomeScreen from './src/components/HomeScreen';
import Login from './src/components/Login';
import Receipes from './src/components/Receipes';


const App = () => {
  return (
    <StackNavigation/>
  )
}

export default App

const styles = StyleSheet.create({})