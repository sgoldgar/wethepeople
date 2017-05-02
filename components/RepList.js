import React, { Component } from 'react';
import Rep from './Rep';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Communications from 'react-native-communications';


import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Image,
  Button,
  TouchableOpacity,
  View
} from 'react-native';


class RepList extends Component {
  //grabbing address from RepPage

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    //this is required for listview
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.reps)
    };
  }

  render() {

    return (
     <Rep />
    )
  } //end render

} //end component
export default RepList;
