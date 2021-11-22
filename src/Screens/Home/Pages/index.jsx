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

const Index = () => {
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
          renderItem={SongItem}
        />
      </View>
    </Layout>
  );
};

export default Index;
const SongItem = ({item}) => {
  return (
    <>
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
    </>
  );
};
const styles = StyleSheet.create({});
