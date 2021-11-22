import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../../../Screens/Single/Pages';
import CustomText from '../../../Components/CustomText';
import {THEME_COLOR} from '../../../Common/Utils';

const Index = ({route}) => {
  const {item} = route.params;

  return (
    <View style={{backgroundColor: THEME_COLOR, flex: 1}}>
      <View>
        <View></View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={item.url}
          style={{width: 220, height: 220, borderRadius: 110}}
        />
      </View>
      <View>
        <View>
          <CustomText align="center">{item.name}</CustomText>
        </View>
        <View>
          <CustomText align="center">{item.singer}</CustomText>
        </View>
        <View>{/* Slider */}</View>
        <View>
          <View>{/* Shuffle */}</View>
          <View>{/* Play Btn */}</View>
          <View>{/* Repeat */}</View>
        </View>
        <View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
