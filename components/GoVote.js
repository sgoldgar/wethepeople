import React, { Component } from 'react';
import LocationList from './LocationList';
import Map from './Map';
import Location from './Location';

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
  flexDirection: 'column',
  marginVertical: 20,
  alignItems: 'center'
},
voteText:{
  fontSize: 40,
  color: '#2E9298'

}
});

export default GoVote;
