import React, { Component } from 'react';

import Map from './Map';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';


class GoVote extends Component {



  render() {
    return(
      <View style={ styles.goVote }>
        <Text>
          Go Vote
        </Text>
          <Map />

      </View>

    )
  }
}

const styles = StyleSheet.create({
goVote: {
  flex: 9
}
});

export default GoVote;
