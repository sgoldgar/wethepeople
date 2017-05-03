import React, { Component } from 'react';
import LocationList from './LocationList';
import Map from './Map';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  TabBarIOS
} from 'react-native';


class GoVote extends Component {



  render() {
    return(
      <View style={ styles.goVote }>
        <Text style={styles.voteText}>
          Go Vote
        </Text>
          <Map />
          <LocationList address={this.props.address}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
goVote: {
  flex: 9,
  marginLeft: 110,
  marginVertical: 20
},
voteText:{
  fontSize: 40,
  color: '#2E9298'
}
});

export default GoVote;
