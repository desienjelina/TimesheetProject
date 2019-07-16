import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import Moment from 'moment'

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedStartDate: null };
    this.onDateChange = this.onDateChange.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('ProfileScreen', { bookingDate : day })
  }


  render() {
    return (
      <View>
        <CalendarPicker
          minDate={Moment().startOf('day') - 1}
          maxDate={new Date()}
          onDayPress={this.onDayPress}
          markedDates={{ [this.state.selected]: { selected: true } }}
          onDateChange={this.onDateChange}

        />
      </View>

    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    marginBottom: 50,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10

  }
});