import React, { Fragment, useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// EvilIcons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// AntDesign
// Octicons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Octicons';

// Feather

import Carousel from 'react-native-snap-carousel';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const THEME_COLOR = '#F4446B';
const WHITE_COLOR = "#F5FDFD"
const DARK_COLOR = '#4E4E4E'

const App = () => {

  const initialState = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "HP Chromebook 11-inch Laptop",
        text: "Arrives: Monday, Nov 22",
        url: './src/assets/images/item1.jpg'
      },
      {
        title: "TOPOSH 14 Inch Laptop, Windows 10 Pro PC",
        text: "Arrives: Monday, Nov 22", url: './src/assets/images/item2.jpg',
      },

    ]
  }
  const [state, setstate] = useState(initialState)




  const Tab = createBottomTabNavigator();
  function MyTabs() {
    return (
      <Tab.Navigator
        tabBar={props => <Tabs {...props} />}
        screenOptions={{ headerShown: false }}
      // tabBarOptions={{
      //   activeTintColor: 'red',
      //   inactiveTintColor: 'black',
      //   style: {
      //     borderTopColor: 'black',
      //     backgroundColor: 'yellow',
      //     elevation: 0,
      //   },
      // }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ComingSoon" component={ComingSoon} />


      </Tab.Navigator>
    );
  }
  return (
    <>
      <NavigationContainer >
        <MyTabs />
      </NavigationContainer>

    </>
  );
};
const Tabs = ({ state, navigation, descriptors }) => {
  const styles = StyleSheet.create({
    View: {
      flexDirection: 'row',
      width: '100%',
      paddingVertical: 10,
      backgroundColor: "#FDFDFF",
      borderWidth: 1, borderColor: "#eee"
    },


  });

  return (
    <View style={styles.View}>
      {/* <BlurView style={styles.Blur} blurAmount={20} blurRadius={25} blurType="light" /> */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const ConditionIcon = label => {
          switch (label) {
            case 'Home':
              return (
                <Icon
                  color={isFocused ? THEME_COLOR : "#C7C7C7"}
                  name="home"
                  size={30}
                />
              );
            default:
              return (
                <Icon
                  color={isFocused ? THEME_COLOR : "#C7C7C7"}
                  name={"shopping-basket"}
                  size={30}
                />
              );
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {ConditionIcon(label)}

          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const Home = () => {
  const initialState = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "HP Chromebook 11-inch Laptop",
        text: "Arrives: Monday, Nov 22",
        url: './src/assets/images/item1.jpg'
      },
      {
        title: "TOPOSH 14 Inch Laptop, Windows 10 Pro PC",
        text: "Arrives: Monday, Nov 22", url: './src/assets/images/item2.jpg',
      },

    ]
  }
  const [state, setstate] = useState(initialState)
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <SafeAreaView style={styles.bottomSafeArea}>
        <AppStatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
        <View>
          {/* Search Arae Start */}
          <View style={{ backgroundColor: THEME_COLOR, paddingHorizontal: 15, paddingTop: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
              <Text style={{ color: WHITE_COLOR, fontSize: 25, fontWeight: "700" }}>Browse</Text>
              <Text style={{ color: WHITE_COLOR, fontSize: 20, fontWeight: "400" }}>Filter</Text>
            </View>
            <View>

              <View style={{
                backgroundColor: WHITE_COLOR, borderRadius: 10, flexDirection: "row", alignItems: "center", marginVertical: 15, elevation: 2,
                shadowColor: 'black', shadowOpacity: 0.6
              }}>
                <Icon size={20} style={{ marginLeft: 15, marginRight: 5 }} color="#CDD0D1" name="search" />
                <TextInput placeholder="Search..." style={{ color: "#CDD0D1" }} />
              </View>
            </View>
          </View>
          {/* Search Arae End */}
          {/* Trend Area Start */}
          <View style={{}}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 15, marginBottom: 5, paddingHorizontal: 15 }}>
              <Text style={{ color: DARK_COLOR, fontSize: 18, fontWeight: "700" }}>Trending this week</Text>
              <Text style={{ color: DARK_COLOR, fontSize: 13, fontWeight: "400" }}>View All</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 15, marginVertical: 15 }}>

              <Carousel
                layout={"default"}
                data={state.carouselItems}

                sliderWidth={350}
                itemWidth={280}
                renderItem={renderItem}
                onSnapToItem={index => setstate({ ...state, activeIndex: index })}
              />
            </View>

          </View>
          {/* Trend Area End */}
          <View style={{

            marginHorizontal: 15,
          }}>
            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 5, paddingHorizontal: 15 }}>
              <Text style={{ color: DARK_COLOR, fontSize: 18, fontWeight: "700" }}>Most popular</Text>
              <Text style={{ color: DARK_COLOR, fontSize: 13, fontWeight: "400" }}>26 places </Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <View style={{
                shadowColor: DARK_COLOR,
                shadowOpacity: 0.8,
                elevation: 2,
                padding: 15,


              }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 15, marginVertical: 15 }}>
                  <Carousel
                    layout={"default"}
                    data={[
                      1, 25, 45, 151, 66, 51, 262, 6
                    ]}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    sliderWidth={150}
                    itemWidth={150} activeSlideAlignment={'start'}
                    renderItem={() => (<Image
                      style={{
                        width: 100,
                        borderRadius: 10,
                        resizeMode: 'contain',
                        height: 100

                      }}
                      source={require('./src/assets/images/item2.jpg')}
                    />)}
                    onSnapToItem={index => setstate({ ...state, activeIndex: index })}
                  />
                </View>
                <View>
                  <View>
                    <Text style={{ color: DARK_COLOR, fontSize: 15, fontWeight: "700" }}>
                      HP Chromebook 11
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "700" }}>
                      Arrives: Monday, Nov 22
                    </Text>
                  </View>
                  <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={{ color: DARK_COLOR, fontSize: 15, fontWeight: "700" }}>2021/12/1</Text>
                    <Text style={{ color: DARK_COLOR, fontSize: 15, fontWeight: "700" }}>$25.00</Text>
                  </View>

                </View>
              </View>
            </View>

          </View>
        </View>
      </SafeAreaView>
    </>

  )
}
export default App;
const ComingSoon = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "#0E0E0E", }}>
      <View style={{ justifyContent: "flex-start", flexDirection: "row", marginVertical: 30 }}>

        <Text style={{ fontSize: 25, color: "white", textAlign: "left" }}>
          Card UI
        </Text>
      </View>
      <View style={{ backgroundColor: "#E3E3E3", borderRadius: 5, flexDirection: "row" }}>
        <View>
          <Image
            style={{

              resizeMode: 'cover',
              borderRadius: 5,
              height: 140,
              width: 150,

            }}
            source={require('./src/assets/images/1.jpg')}
          />
        </View>
        <View style={{ padding: 20, alignContent: "center" }}>
          <View>
            <Text style={{

              color: "#0E0E0E", fontWeight: "700", marginTop: 5, marginBottom: 10, fontSize: 15
            }}>
              Show Moving in Sunday
            </Text>
          </View>
          <View>
            <Text>
              17 hours ago
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "flex-end" }}>
            <EvilIcons
              color={THEME_COLOR}
              name="heart"
              size={30}
              style={{ marginRight: 10 }}
            />
            <EvilIcons
              color={"#0E0E0E"}
              name="share-apple"
              size={30}
            />
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#E1E1E1", marginTop: 20, borderRadius: 5 }}>
        <View>
          <View style={{ paddingLeft: 10, marginVertical: 12, }}>
            <Text style={{

              color: "#0E0E0E", fontWeight: "700", fontSize: 15
            }}>Living Room</Text>
            <Text>3 Devices</Text>
          </View>
          <View>
            <Image
              style={{

                resizeMode: 'cover',
                borderRadius: 5,
                height: 250,
                width: 368,

              }}
              source={require('./src/assets/images/5.jpg')}
            />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                color={"#CB920D"}
                name="poweroff"
                size={25}
                style={{ marginRight: 10 }}
              />
              <Octicons
                color={"#CB920D"}
                name="settings"
                size={25}
              />
            </View>
            <View style={{ flexDirection: "row" }}>

              <AntDesign
                color={"#CB920D"}
                name="setting"
                size={30}
              />
            </View>
          </View>
        </View>
        <View></View>
        <View></View>
      </View>
    </View >
  )
}
const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusBar, backgroundColor]}>
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  );
};
const renderItem = ({ item, index }) => (

  <View style={{
    borderWidth: 1, borderColor: "#eee",
    borderRadius: 5,
  }}>
    <View>
      <Image
        style={{
          width: '100%',
          borderRadius: 10,
          resizeMode: 'contain',
          height: 140, marginVertical: 20

        }}
        source={require('./src/assets/images/item2.jpg')}
      />
    </View>
    <View style={{ padding: 10 }}>
      <View>
        <Text style={{ color: DARK_COLOR, fontSize: 15, fontWeight: "700" }}>
          {item.title}
        </Text>
      </View>
      <View>
        <Text>
          {item.text}
        </Text>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
        <Text style={{ color: DARK_COLOR, fontSize: 15, fontWeight: "700" }}>2021/12/1</Text>
        <Text style={{ color: DARK_COLOR, fontSize: 15, fontWeight: "700" }}>$25.00</Text>
      </View>
    </View>

  </View>
)
const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "white"

  }, statusBar: {
    height: 0,
  },
});