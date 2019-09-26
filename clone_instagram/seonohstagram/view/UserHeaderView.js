import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CircleImageView from './CircleImageView'
import styles from '../styles'

class UserHeaderView extends Component {
    render() {
        const { name } = this.props;
        const { image } = this.props;
        return (
            <View style = {styles.container}>
                <CircleImageView
                    image = {image}/>
                <Text style = {
                    styles.text
                }>{name}</Text>
            </View>
        )
    }
}

export default UserHeaderView