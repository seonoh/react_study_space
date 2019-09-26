import { Image } from 'react-native'
import React,{ Component } from 'react'

class CircleImageView extends Component{
    render(){
        const { image } = this.props;
        return(
            <Image
                source = {{ uri: `${image}`}}
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
