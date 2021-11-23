import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from '../../../Screens/Single/Pages';
import CustomText from '../../../Components/CustomText';
import {THEME_COLOR, YELLOW, WHITE, PINK} from '../../../Common/Utils';
// Entypo Feather
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Index = ({route}) => {
  const {item} = route.params;
  const [state, setstate] = useState({
    min: 0,
    max: 50,
  });

  return (
    <View
      style={{
        backgroundColor: THEME_COLOR,
        flex: 1,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginBottom: 120,
            paddingTop: 20,
          }}>
          <View>
            <Entypo color={WHITE} name="chevron-left" size={20} />
          </View>
          <View style={{flexDirection: 'row', marginLeft: 145}}>
            <CustomText size="sm">Favorites</CustomText>
            <Entypo color={WHITE} name="chevron-down" size={20} />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 80,
        }}>
        <Image
          source={item.url}
          style={{width: 220, height: 220, borderRadius: 110}}
        />
      </View>
      <View>
        <View style={{paddingBottom: 20}}>
          <View>
            <CustomText align="center">{item.name}</CustomText>
          </View>
          <View>
            <CustomText align="center" size="md">
              {item.singer}
            </CustomText>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row-reverse',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <CustomText size="sm">{state.max}</CustomText>
          <Slider
            style={{height: 40, width: '90%'}}
            minimumTrackTintColor={WHITE}
            maximumTrackTintColor="#565660"
            maximumValue={3}
            minimumValue={0}
            value={2}
          />
          <CustomText size="sm">{state.min}</CustomText>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 40,
          }}>
          <View>
            <MaterialCommunityIcons color={WHITE} name="shuffle" size={26} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              color={PINK}
              name="skip-previous"
              size={40}
            />
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: PINK,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo color={WHITE} name="controller-play" size={40} />
            </View>
            <MaterialCommunityIcons color={PINK} name="skip-next" size={40} />
          </View>
          <View>
            <Feather color={WHITE} name="repeat" size={23} />
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
