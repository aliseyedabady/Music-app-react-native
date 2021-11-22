import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../../../Screens/Single/Pages';
import CustomText from '../../../Components/CustomText';
import {THEME_COLOR, YELLOW} from '../../../Common/Utils';
// Entypo Feather
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Entypo';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Index = ({route}) => {
  const {item} = route.params;

  return (
    <View style={{backgroundColor: THEME_COLOR, flex: 1}}>
      <View>
        <View>
          <Entypo color={THEME_COLOR} name="chevron-left" size={20} />
          {/* chevron-down */}
          <Entypo color={THEME_COLOR} name="chevron-down" size={20} />
        </View>
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
          <View>
            {/* MaterialCommunityIcons */}
            <MaterialCommunityIcons color={YELLOW} name="shuffle" size={20} />

            {/* Shuffle */}
          </View>
          <View>
            {/* Play Btn */}
            <MaterialCommunityIcons
              color={YELLOW}
              name="skip-previous"
              size={20}
            />
            <Entypo color={YELLOW} name="controller-play" size={20} />
            <MaterialCommunityIcons color={YELLOW} name="skip-next" size={20} />
          </View>
          <View>
            {/* Repeat */}
            <Feather color={YELLOW} name="repeat" size={20} />
            {/* repeat */}
          </View>
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
