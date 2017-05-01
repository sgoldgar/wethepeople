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
import RepPage from './RepPage';

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      selectedTab: 'home',
      latitude: '',
      longitude: '',
      address: {
        streetNumber: '',
        street: '',
        city: '',
        state: ''
      }
    }

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        this.setState({
          latitude: latitude,
          longitude: longitude
        });
        this.getAddressFromLatLong();
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }


  getAddressFromLatLong() {
    fetch(`http://api.geonames.org/findNearestAddressJSON?lat=37.785834&lng=-122.406417&username=wethepeople`)
    .then(function(response) {
      return response.json()
    })
    .then(data => {
      this.setState({
        address: {
          streetNumber: data.address.streetNumber,
          street: data.address.street,
          state: data.address.adminCode1,
          zipCode: data.address.postalcode,
          city: data.address.placename
        }
      });

    })
    .catch((error) => {
      console.error(error);
    });
  }

  changeAddress() {

  }




  render() {

    const address = this.state.address

    return(
        <View style={ styles.app }>
          <TabBarIOS
            barTintColor="#512DA8"
            tintColor="white"
            unselectedItemTintColor="black"
            unselectedTintColor="black"
            >

            <Icon.TabBarItem
              style={ styles.bottomBar }
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
                <Home address={ address } />
              </View>
            </Icon.TabBarItem>

            <Icon.TabBarItem
              title="Representatives"
              iconName="ios-man"
              selectedIconName="ios-man"
              selected={this.state.selectedTab === 'repPage'}
              onPress={() => {
                this.setState({
                  selectedTab: 'repPage'
                });
              }}>

              <View style={ styles.appContainer }>
                <Header />
                <RepPage address={ address } />
              </View>

            </Icon.TabBarItem>

            <Icon.TabBarItem
              title="Change Location"
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
                <ChangeLocal address={ address } />
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
                <GoVote address={ address } />
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
  },
  bottomBar: {
    flex: 1
  }

});

export default App;
