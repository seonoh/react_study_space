import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import UserHeaderView from './view/UserHeaderView';
import styles from './styles';
import request from './netRequest'

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false }
    }

    componentDidMount() {
        this.loadData()
    }

    async loadData() {
        let result = null
        try { 
            result = await request.getContents()
        } catch (err) {
            console.log(`loaddata',"error code -> ${err}`)
        }

        console.log('result', result)

        this.setState({
            dataSource: result
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style = {
                            {
                                height : 400,
                                alignSelf : 'baseline'
                            }
                        }>
                            <UserHeaderView
                                name={item.contentsId}
                                image={item.profileImage} />
                            <Image
                                source={{ uri: item.mainImage }}
                                style={{
                                    width: 500,
                                    height: 200,
                                    marginTop: 20
                                }} />
                            <View style={styles.iconContainer}>
                                <Image
                                    source={require('./res/icon_heart_liked.png')}
                                    style={styles.image} />
                                <Image
                                    source={require('./res/btn_icon_reply.png')}
                                    style={styles.image} />
                                <Image
                                    source={require('./res/icon.png')}
                                    style={styles.image} />
                            </View>
                            <View style = {
                                {
                                    flex : 1,
                                    flexDirection : 'column'
                                }
                            }>
                                <Text style={styles.bottomText}>좋아요 14개</Text>

<                               Text style={styles.bottomText}>닉네임</Text>
                            </View>
                        </View>
                    )} />
            </View>
        );
    }
}


export default HomeScreen