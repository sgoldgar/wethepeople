import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  StatusBar
} from 'react-native';


class Home extends Component {


  render() {
    return(

        <View style={ styles.header }>
          <Text style={ styles.headerText }>We the People...</Text>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D1C4E9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerText: {
    fontFamily: 'Zapfino',
    flex: 1,
    marginTop: 20,
    color: '#FFFFFF'
  }
});

export default Home;
