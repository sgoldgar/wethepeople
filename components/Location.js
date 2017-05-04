//location should have the name, address & distance for the location of the polling place

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';

class Location extends Component {
  render() {
    return(
      <View>
        <Text style= {styles.text} >Location</Text>

      </View>

    )
  }
}

const styles = StyleSheet.create({
text: {
  color: '#141414'
}
});

export default Location;
