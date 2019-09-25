import { Image } from 'react-native'
import React,{ Component } from 'react'

class CircleImageView extends Component{
    render(){
        return(
            <Image
                source = {require('../ts.jpeg')}
                style = {{
                    width : 30, 
                    height : 30, 
                    borderRadius : 30/2
                }}
            />
        );
    }
}
export default CircleImageView
