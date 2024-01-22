import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Counter from './src/pages/Counter';
import Home from './src/pages/Home';
import Prueba from './src/pages/Prueba';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName='Home'
          >
            <Stack.Screen name="Counter" component={Counter} />
            <Stack.Screen name="Prueba" component={Prueba} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </ NavigationContainer>
    </SafeAreaView>
  );
}

export default App;