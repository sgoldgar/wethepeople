import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';

import FederalReps from './FederalReps';


class RepPage extends Component {
  render() {
    return(
      <View style={ styles.repPage }>
        <Text>Rep Page</Text>
        <FederalReps />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  repPage: {
    flex: 9
  }
});

export default RepPage;
