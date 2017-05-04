//this is the list of the polling places

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';

class LocationList extends Component {
  render() {
    return(
      <View>
        <Text style= {styles.text} >List</Text>

      </View>

    )
  }
}

const styles = StyleSheet.create({
text: {
  color: '#141414'
}
});

export default LocationList;
