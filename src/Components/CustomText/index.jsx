import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WHITE} from '../../Common/Utils';

const Index = ({children, size, weight, align}) => {
  const renderSize = () => {
    switch (size) {
      case 'sm':
        return 12;
      case 'ssm':
        return 10;
      case 'md':
        return 15;
      default:
        return 20;
    }
  };
  const renderWeight = () => {
    switch (size) {
      case 'sm':
        return '500';

      default:
        return '7000';
    }
  };

  return (
    <Text
      style={{
        color: WHITE,
        fontSize: renderSize(size),
        fontWeight: renderWeight(weight),
        textAlign: align ? align : 'auto',
      }}>
      {children}
    </Text>
  );
};

export default Index;

const styles = StyleSheet.create({});
