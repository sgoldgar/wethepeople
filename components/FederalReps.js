import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';

import RepList from './RepList';


class FederalReps extends Component {



  render() {
    return(
      <View>
        <Text>Federal Reps</Text>
        <RepList />
      </View>

    )
  }
}

const styles = StyleSheet.create({

});

export default FederalReps;
