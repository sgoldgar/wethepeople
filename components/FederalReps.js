
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



class FederalReps extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return(
      <ScrollView style={ styles.fedreps }>
        <RepList reps={ this.props.fedReps }/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  fedreps: {
    flex: 1
  }
});

export default FederalReps;
