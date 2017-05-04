//this is the list of the polling places
//import React, { Component } from 'react';

import React, { Component } from 'react';
import Location from './Location';


import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  TabBarIOS,
  ScrollView
} from 'react-native';



class LocationList extends Component {

  render() {
    return(
      <View>
        <Text>List</Text>

  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      pollingPlaces: [],
      dataSource: this.ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps() {
    this.getPollingPlaces();
  }


  getPollingPlaces() {
    let address = this.props.address.street.replace(/\s/g, "%20");
    let city = this.props.address.city.replace(/\s/g, "%20");
    let state = this.props.address.state;

    fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=${address}+${city}+${state}`)
      .then(response => response.json())
      .then((response) => {
          this.setState({
            pollingPlaces : response,
            dataSource: this.ds.cloneWithRows(newProps.response.pollingLocations)
          })
          console.log(pollingPlaces)
      })
      .catch((err) => {
        console.log('err: ', err);
        this.setState({
          pollingPlaces : []
        })
      })
  }


  render() {

      if(this.pollingPlaces){
        return (
          <View style={styles.voteBox}>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={data => {
               return <Location locations={ data } />
               }}
             />
           </View>
        )
      } else {
        return(
          <View style={styles.voteBox}>
            <View>
              <Text style={styles.defaultText}>There are no elections in your area right now!</Text>
            </View>
          </View>
        )
      }
  }
}

const styles = StyleSheet.create({

  voteBox:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  defaultText:{
    fontSize: 20,
    flexDirection: 'row',
    alignContent: 'center',
    marginHorizontal: 40,
    marginTop: 30
  }

});

export default LocationList;
