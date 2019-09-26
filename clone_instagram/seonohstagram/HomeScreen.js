import React from 'react';
import { View, FlatList } from 'react-native';
import UserHeaderView from './view/UserHeaderView';

const data = new Array(3)
    .fill(null)
    .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <UserHeaderView />
                    )} />
            </View>
        );
    }
}

export default HomeScreen