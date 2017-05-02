
import  React, { Component } from 'react';

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
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/FontAwesome'
class Rep extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <View style={styles.rowContainer}>
      <Text style={styles.holder}>{this.props.reps.name}</Text>
      <Text style={styles.holder}>{this.props.reps.party}</Text>
      <Text style={styles.holder}>{this.props.reps.address[0].line1}</Text>
      <Text style={styles.holder}>{this.props.reps.address[0].city }</Text>
        <TouchableOpacity onPress={() => Communications.phonecall('{this.props.reps.phones}', true)}>
          <View style={styles.holder}>
            <Icon style={styles.icon} name="phone" color="#549E95" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.email('{this.props.reps.urls}',null,null,'My Subject','My body text')}>
          <View style={styles.holder}>
            <Icon style={styles.icon} name="envelope" color="#549E95" />
          </View>
        </TouchableOpacity>
          </View>
    );
  }
}


const styles = StyleSheet.create ({
  rowContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image:{
    backgroundColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 50
  },
holder: {
  color: '#141414',
  marginHorizontal: 5
  },
  icon: {
    fontSize: 30
  },
});

export default Rep;
