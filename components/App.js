import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';

import Home from './Home';
import ChangeLocal from './ChangeLocal';
import GoVote from './GoVote';
import Header from './Header';
import RepList from './RepList';


class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      selectedTab: 'home'
    };

  }



  render() {
    return(
        <View style={ styles.app }>
          <TabBarIOS
            barTintColor="#512DA8"
            tintColor="white"
            unselectedItemTintColor="black"
            unselectedTintColor="black"
            >

            <Icon.TabBarItem
              title="Home"
              iconName="md-home"
              selectedIconName="md-home"
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.setState({
                  selectedTab: 'home'
                });
              }}>
              <View style={ styles.appContainer }>
                <Home />
              </View>
            </Icon.TabBarItem>

            <Icon.TabBarItem
              title="Change Zip"
              iconName="ios-pin"
              selectedIconName="ios-pin"
              selected={this.state.selectedTab === 'changeLocal'}
              onPress={() => {
                this.setState({
                  selectedTab: 'changeLocal'
                });
              }}>

              <View style={ styles.appContainer }>
                <Header />
                <ChangeLocal/>
              </View>

            </Icon.TabBarItem>

            <Icon.TabBarItem
              title="Go Vote"
              iconName="md-checkmark-circle-outline"
              selectedIconName="md-checkmark-circle-outline"
              selected={this.state.selectedTab === 'goVote'}
              onPress={() => {
                this.setState({
                  selectedTab: 'goVote'
                });
              }}>
              <View style={ styles.appContainer }>
                <Header />
                <GoVote />
              </View>
            </Icon.TabBarItem>

          </TabBarIOS>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appContainer: {
    flex: 1,
    flexDirection: 'column',

  }

});

export default App;
