import React, { Component } from 'react';

import Map from './Map';
import Location from './Location';
import LocationList from './LocationList';

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
        <Text style={styles.text} >
          Go Vote
        </Text>


      </View>

    )
  }
}

const styles = StyleSheet.create({
goVote: {
  flex: 9
},
text: {
  color: '#141414'
}
});

export default GoVote;
