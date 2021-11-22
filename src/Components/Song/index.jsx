import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WHITE, YELLOW} from '../../Common/Utils';
import CustomText from '../CustomText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
const index = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('single', {
          item,
        });
      }}>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: 'red',
          justifyContent: 'flex-start',
          marginVertical: 10,
          borderBottomWidth: 2,
          paddingBottom: 10,
          borderColor: '#17171F',
        }}>
        <View>
          <Image
            style={{
              resizeMode: 'contain',
              height: 90,
              width: 90,
              borderRadius: 50,
            }}
            source={item.url}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View>
            <View>
              <CustomText>{item.name}</CustomText>
            </View>
            <View>
              <CustomText size={'ssm'}>{item.singer}</CustomText>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText size="sm">3</CustomText>
              <MaterialCommunityIcons
                backgroundColor={YELLOW}
                color={YELLOW}
                name="star"
                size={20}
              />
            </View>
            <View style={{marginHorizontal: 8}}>
              <MaterialCommunityIcons
                color={WHITE}
                name="dots-horizontal"
                size={20}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({});
