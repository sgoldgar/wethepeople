import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';


class ChangeLocal extends Component {



  render() {
    return(
      <View style={ styles.changeLocal }>
        <Text>
          Change Local
        </Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
changeLocal: {
  flex: 9
}
});

export default ChangeLocal;
