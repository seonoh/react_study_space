import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import Count from './components/Count'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer/index';

export default function App() {

  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Button
          title="저장하기"
          onPress={_storeData}>

        </Button>
        <Button
          title="불러오기"
          onPress={_retrieveData}>

        </Button>
        <Text>Open up App.js to start working on your app!</Text>
        <Count />
      </View>
    </Provider>
  );
}
_storeData = async () => {
  try {
    await AsyncStorage.setItem('uuid', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
};

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('uuid');
    if (value !== null) {
      // We have data!!
      console.log("저장된 데이터가 있습니다.  // " + value);
    } else {
      console.log("저장된 데이터가 없습니다.  // ");
    }
  } catch (error) {
    // Error retrieving data
    console.log("try catch !!");
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
