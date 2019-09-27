import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Count from './Count'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer/index';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Count />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
