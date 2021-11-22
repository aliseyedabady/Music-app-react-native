import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Home from "./src/Screens/Home/Pages"
const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

