/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  AsyncStorage
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
const createLibraryModule = require('create-react-native-module');
var SharedPreferences = require('react-native-shared-preferences');

const App = () => {
  createLibraryModule({
    name: 'MyFancyLibraryModule'
  }).then(() => {
    console.log('Oh yay! My library module has been created!');
  })

  return (
  <View style={styles.container}>
    <Button
      title="저장하기"
      onPress={_storeData}>

    </Button>
    <Text>Open up App.js to start working on your app!</Text>


    <Button
      title="불러오기"
      onPress={_retrieveData}>

    </Button>
  </View>
  );
};

// DefaultPreference.get('uuid').then(function(value) {console.log(value)});
// DefaultPreference.set('my key', 'my value').then(function() {console.log('done')});

_storeData = async () => {

// DefaultPreference.set('seonohuuid', '100').then(function() {
//   console.log('done')
//   // this.refs.toast.show('done')
// });

//   try {
//     await AsyncStorage.setItem('seonohuuid', 'I like to save it.');
//   } catch (error) {
//     // Error saving data
//   }

SharedPreferences.setItem("seonohuuid","asdasd");
};

_retrieveData = async () => {

  
  // this.refs.toast.show(
  //   DefaultPreference.get('seonohuuid').then(function(value) {
  //     console.log(value)
  //     // this.refs.toast.show(value)
  //   })
  //     // );
  // try {
  //   const value = await AsyncStorage.getItem('seonohuuid');
  //   if (value !== null) {
  //     // We have data!!
  //     console.log("저장된 데이터가 있습니다.  // " + value);
  //   } else {
  //     console.log("저장된 데이터가 없습니다.  // ");
  //   }
  // } catch (error) {
  //   // Error retrieving data
  //   console.log("try catch !!");
  // }

  SharedPreferences.getItem("seonohuuid", function(value){
    console.log('저장된 값은 : '+value);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
