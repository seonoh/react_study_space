import React from 'react';
import PropTypes from 'prop-types'
import { Text,View } from 'react-native'
import styles from './styles';

const Box = (children : string) => (
  <View style = {styles.box}>
    <Text style = {styles.boxText}>{children}</Text>
  </View>
)

Box.propTypes = {
  children : PropTypes.string.isRequired
}

export default Box;