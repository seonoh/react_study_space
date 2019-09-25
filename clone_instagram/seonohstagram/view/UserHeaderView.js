import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CircleImageView from './CircleImageView'
import styles from '../styles'

class UserHeaderView extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <CircleImageView/>
                <Text style = {
                    styles.text
                }>asdasdas</Text>
            </View>
        )
    }
}

export default UserHeaderView