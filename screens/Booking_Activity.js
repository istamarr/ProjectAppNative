import React, {Component} from 'react';

import { View, Text } from 'react-native';

export default class Booking_Activity extends Component {

  static navigationOptions =
  {
     title: 'Details Activity',
  };

  render() {

    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Booking Activity Screen</Text>

      </View>

    );
  }
}