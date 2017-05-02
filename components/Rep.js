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
      <Text style={styles.holder}>image</Text>
      <Text style={styles.holder}>Name</Text>
      <Text style={styles.holder}>Party</Text>
      <Text style={styles.holder}>Chamber</Text>
      <Text style={styles.holder}>Address</Text>
        <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
          <View style={styles.holder}>
            <Icon style={styles.icon} name="phone" color="#549E95" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')}>
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
