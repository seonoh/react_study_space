import React from 'react';
import ReactDom from 'react-dom';
import{
  Text,
  View
} from 'react-native';
import styles from './styles'
const StyleSheets = () => (
  <View style = {styles.container}>
    <View style = {styles.box}>        
      <Text style = {styles.boxText}>
        I;m in a box
      </Text>
    </View>
  </View>
);       
                                       
export default function App() {
  return (
    <StyleSheets/>
  );
}

