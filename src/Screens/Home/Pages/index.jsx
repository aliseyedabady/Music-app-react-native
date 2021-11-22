import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Layout from '../../../Components/Layout';
import CustomText from '../../../Components/CustomText';
import {PINK, WHITE, YELLOW} from '../../../Common/Utils/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import Song from '../../../Components/Song';

const Index = () => {
  const Render = ({item}) => {
    return <Song item={item} />;
  };
  return (
    <Layout>
      <ImageBackground
        blurRadius={4}
        style={{
          height: 320,
          justifyContent: 'flex-end',
          paddingBottom: 40,
          paddingHorizontal: 30,
        }}
        resizeMode="cover"
        source={require('../../../assets/images/m1.jpg')}>
        <View>
          <CustomText>Your Weekly</CustomText>
        </View>
        <View>
          <CustomText>Music Mix</CustomText>
        </View>
        <View>
          <TouchableOpacity
            style={{
              paddingVertical: 6,
              marginTop: 10,
              backgroundColor: PINK,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <CustomText size={'sm'}>Listen</CustomText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{marginHorizontal: 30}}>
        <View style={{marginVertical: 16}}>
          <CustomText>Recently played</CustomText>
        </View>
        <FlatList
          data={[
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
            {
              name: 'U-Turn (Lili)',
              singer: 'AaRon',
              url: require('../../../assets/images/d.jpeg'),
            },
          ]}
          renderItem={Render}
        />
      </View>
    </Layout>
  );
};

export default Index;
