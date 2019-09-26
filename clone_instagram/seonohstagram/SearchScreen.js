import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import request from './netRequest'
let result = null

class SearchScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { isLoading: false }
    }

    componentDidMount() {
        this.loadData()
    }

    async loadData() {
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
        <ScrollView>
          <Text
            data = {this.props.dataSource}>{JSON.stringify(result)}</Text>
        </ScrollView>
      );
    }
  }

  export default SearchScreen