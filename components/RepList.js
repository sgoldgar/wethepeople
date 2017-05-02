import React, { Component } from 'react';
import Rep from './Rep.js';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Animated
} from 'react-native';

const googleApiKey = 'AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
const googleApiUrl = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
const address = '&address=1200%20Bentwood%20Rd.%20Austin%20TX';
const roles = '&roles=legislatorUpperBody';


class RepList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    //this is required for listview
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //set state to be the list of reps from the parent container, repsData will need to be an array of objects
    this.state = {
      reps: [],
      // dataSource: ds.cloneWithRows(repsData),
    }


  }


  componentDidMount(){
    fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=1200%20Bentwood%20Rd.%20Austin%20TX&roles=legislatorUpperBody')
      .then(function(response) {
        return response.json()
        console.log(response.json());
      })
      .then(function(response) {
        console.log(response);
        console.log(response.officials)
        // this.setState({ reps: response.officials });
      })
  }


  render() {
      return (
        <View>
          <Text>{this.state.reps}</Text>
          <Rep />
          </View>
      )
  }
}

// App registration and rendering
export default RepList;

// <ListView
//    style={styles.container}
//    dataSource={this.state.dataSource}
//    renderRow={(data) => <View><Text>{data}</Text></View>}
// />
