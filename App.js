import React, { Fragment, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import HomeScreen from "./src/Screens/Home/Pages"
import SingleScreen from "./src/Screens/Single/Pages"

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="single" component={SingleScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

