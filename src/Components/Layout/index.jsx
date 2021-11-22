import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Index = ({children}) => {
  return (
    <View style={{backgroundColor: THEME_COLOR, flex: 1}}>{children}</View>
  );
};

export default Index;

const styles = StyleSheet.create({});
