// Example to Send Text SMS on Button Click in React Native
// https://aboutreact.com/send-text-sms-in-react-native/

// import React in our code
import React, {Fragment, useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const App = () => {
  const [state, setstate] = useState({
    result: '',
    show: false,
  });
  const Handler = () => {
    setstate({...state, show: true, result: eval(state.result)});
  };
  const calculaterStyle = (numbers, index) => {
    switch (numbers) {
      case '*':
      case '+':
      case '/':
      case '-':
      case '%':
        return (
          <TouchableOpacity
            key={index}
            style={styles.operation}
            onPress={() =>
              setstate({...state, result: state.result + numbers})
            }>
            <Text style={{color: '#E9F0F1', fontSize: 26}}>{numbers}</Text>
          </TouchableOpacity>
        );
      case 7:
      case 8:
      case 9:
      case 4:
      case 5:
      case 6:
      case 1:
      case 2:
      case 3:
      case '00':
      case 0:
      case '.':
        return (
          <TouchableOpacity
            key={index}
            style={styles.numberBtn}
            onPress={() =>
              setstate({...state, result: state.result + numbers})
            }>
            <Text style={{color: '#E9F0F1', fontSize: 26}}>{numbers}</Text>
          </TouchableOpacity>
        );
      case 'c':
        return (
          <TouchableOpacity
            style={styles.operation}
            onPress={() => setstate({...state, result: '', show: false})}>
            <Text style={{color: '#E9F0F1', fontSize: 26}}>{numbers}</Text>
          </TouchableOpacity>
        );
      case '+/-':
        return (
          <TouchableOpacity
            style={styles.operation}
            onPress={() => setstate({...state, result: '-' + state.result})}>
            <Text style={{color: '#E9F0F1', fontSize: 26}}>{numbers}</Text>
          </TouchableOpacity>
        );
      case '=':
        return (
          <TouchableOpacity style={styles.operation} onPress={Handler}>
            <Text style={{color: '#E9F0F1', fontSize: 26}}>{numbers}</Text>
          </TouchableOpacity>
        );
      default:
        break;
    }
  };
  const numbers = [
    'c',
    '+/-',
    '%',
    ,
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '+',
    1,
    2,
    3,
    '-',
    '00',
    0,
    '.',
    '=',
  ];
  const operations = [];

  console.log('object', state.result);

  return (
    <View
      style={{
        paddingHorizontal: 15,
        backgroundColor: '#2C2E3D',
        height: windowHeight,
      }}>
      <View style={[styles.container, {width: windowWidth}, {height: 200}]}>
        <Text style={{color: '#E9F0F1', fontSize: 40}}>{state.result}</Text>
      </View>
      <View>
        {/* <View style={styles.container}>
          <TouchableOpacity style={styles.operation} onPress={Handler} >
            <Text style={{ color: "#E9F0F1" }}>
              =
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operation} onPress={() => setstate({ ...state, result: "", show: false })} >
            <Text style={{ color: "#E9F0F1" }}>
              c
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.container}>
          {operations.map((operation, index) => {
            return <TouchableOpacity key={index} style={styles.operation} onPress={() => setstate({ ...state, result: state.result + operation })}>
              <Text style={{ color: "#E9F0F1" }}>
                {operation}

              </Text>
            </TouchableOpacity>
          })}
        </View> */}
        <View style={[styles.container, {flexWrap: 'wrap'}]}>
          {numbers.map((num, index) => {
            return calculaterStyle(num, index);
          })}
        </View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberBtn: {
    // marginVertical: 20,
    width: windowWidth / 5,
    marginTop: 50,
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343A4A',
  },
  // result: {
  //   backgroundColor: "green",
  //   padding: 50,
  //   borderRadius: 5,
  //   marginTop: 250,
  //   fontSize: 20,
  //   color: "#E9F0F1",
  //   textAlign: 'center'
  // },
  operation: {
    width: windowWidth / 5,
    backgroundColor: '#CE6F22',
    marginTop: 50,
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
