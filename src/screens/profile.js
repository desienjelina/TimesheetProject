import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state ={
      bookingDate: this.props.navigation.state.params.bookingDate
    }
  }


  render() {
    return (
      <View>
        <Text> profile </Text>
      </View>
    )
  }
}
