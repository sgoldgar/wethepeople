import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';


class Home extends Component {




  render() {
    return(
      <View style={ styles.home }>
        <Text>
          Home
        </Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
home: {
  backgroundColor: '#FFFFFF',
  flex: 9,
  justifyContent: 'center',
  alignItems: 'center',
}
});

export default Home;
