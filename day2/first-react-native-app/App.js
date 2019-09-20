import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

const ThreeColumnLayout = () => (

    <View style={styles.container}>
      <View style={styles.box}>
      <Text>"#1"</Text>
      </View>
    <View style={styles.box}>
      <Text>"#2"</Text>
    </View>
    <View style={styles.box}>
      <Text>"#3"</Text>
    </View>
  </View>
);

