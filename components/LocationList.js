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
  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      pollingLocations: [],
      dataSource: this.ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps() {
    this.getPollingLocations();
  }


  getPollingLocations() {
    let address = this.props.address.street.replace(/\s/g, "%20");
    let city = this.props.address.city.replace(/\s/g, "%20");
    let state = this.props.address.state;

    fetch(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=${address}+${city}+${state}`)
      .then(response => response.json())
      .then((response) => {
          this.setState({
            pollingLocations : response,
            dataSource: this.ds.cloneWithRows(newProps.response)
          })
      })
  }

  render() {

      if(this.pollingLocations == []){
        return(<Text>There are no elections in your area right now!</Text>)
      }

      return (
        <View style={styles.voteBox}>
          <View style={styles.textBox}>
            <Text style={styles.defaultText}>There are no elections in your area right now!</Text>
          </View>
           <ListView
             enableEmptySections={true}
             dataSource={this.state.dataSource}
             renderRow={data => {
              return <Location locations={ data } />
              }}
            />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  voteBox:{
    display: 'flex',
    flexDirection: 'column'
  },
  textBox: {
    marginVertical: 60,
    marginHorizontal: 30
  },

  defaultText:{
    fontSize: 20,
    justifyContent: 'center',
    marginRight: 40,
    paddingRight: 30,
  }
});

export default LocationList;
