import React from 'react';
import styles from './styles'
import CircleImageView from './view/CircleImageView'
import UserHeaderView from './view/UserHeaderView'
import { View, FlatList ,Text} from 'react-native'

const data = new Array(3)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <UserHeaderView />
          )} />
      </View>
    )
  }
}