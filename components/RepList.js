import React, { Component } from 'react';
import Rep from './Rep';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Communications from 'react-native-communications';
import moreInfo from './moreInfo';

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
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }

  componentWillReceiveProps(newProps){

    this.setState({
      dataSource: this.ds.cloneWithRows(newProps.reps)
    })
  }

  render() {


    if(!this.props.reps.length){
      return(<Text>Loading..</Text>)
    }

    return (
       <ListView
         enableEmptySections={true}
         dataSource={this.state.dataSource}
         renderRow={data => {


          return <Text>{ data.info.name }</Text>
          //return <Rep reps={ data } />


         }}
       />

    )
  } //end render

} //end component

export default RepList;
