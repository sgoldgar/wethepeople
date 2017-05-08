import React, { Component } from 'react';
import RepList from './RepList';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  ScrollView
} from 'react-native';



class StateReps extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ScrollView style={ styles.stateRepPage}>
        <RepList reps={ this.props.stateReps }/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  stateRepPage: {
    flex: 1
  }
});

export default StateReps;
