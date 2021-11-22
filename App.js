import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, Image, Text, TouchableOpacity, View, ImageBackground } from 'react-native';


const THEME_COLOR = '#16161e';
const WHITE = '#ffffff';
const PINK = '#FF6750';
const YELLOW = '#fad437';





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
const CustomText = ({ children, size, weight }) => {
  const renderSize = () => {
    switch (size) {
      case "sm":
        return 12
      case "ssm":

        return 12
      default:
        return 20
    }
  }
  const renderWeight = () => {
    switch (size) {
      case "sm":
        return "500"

      default:
        return "7000"
    }
  }
  return (
    <Text style={{ color: WHITE, fontSize: renderSize(size), fontWeight: renderWeight(weight) }} >{children}</Text>
  )
}

const Home = () => {
  return (
    <Layout >
      <ImageBackground blurRadius={4} style={{ height: 320, justifyContent: "flex-end", paddingBottom: 40, paddingHorizontal: 30 }} resizeMode="cover" source={require("./src/assets/images/m1.jpg")} >
        <View >
          <CustomText>Your Weekly</CustomText>
        </View>
        <View>
          <CustomText>Music Mix</CustomText>
        </View>
        <View>
          <TouchableOpacity style={{ paddingVertical: 6, marginTop: 10, backgroundColor: PINK, width: 100, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
            <CustomText size={"sm"}>
              Listen
            </CustomText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 30 }}>
        <View style={{ marginVertical: 16 }}>
          <CustomText >
            Recently played
          </CustomText>
        </View>
        <FlatList

          data={
            [
              { name: "U-Turn (Lili)", singer: "AaRon", url: require('./src/assets/images/item1.jpg') },
              // { name: "illusion", singer: "Soen", url: require('./src/assets/images/d.jpg') },

            ]
          }
          renderItem={({ item }) => <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View >
              {/* <Image
                style={{

                  resizeMode: 'contain',
                  height: 140

                }}
                source={item.url}
              /> */}
            </View>
            <View>
              <View>
                <CustomText>{item.name}</CustomText>
              </View>
              <View>
                <CustomText size={"ssm"}>{item.singer}</CustomText>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <CustomText weight="sm">
                  3 Rate
                </CustomText>
              </View>
              <CustomText>..</CustomText>
            </View>
          </View>}
        />
      </View>
    </Layout >
  )
}
const Layout = ({ children }) => {
  return (

    <View style={{ backgroundColor: THEME_COLOR, flex: 1, }}>
      {children}
    </View>
  )

}