import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  ScrollView
} from 'react-native';

import RepList from './RepList';


class LocalReps extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return(
      <ScrollView style={ styles.localreps }>
        <RepList reps={ this.props.localReps } />
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({

});

export default LocalReps;
