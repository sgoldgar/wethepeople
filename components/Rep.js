
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

class Rep extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <View style={styles.rowContainer}>
      <Text>image</Text>
      <Text>Name</Text>
      <Text>Party</Text>
      <Text>Chamber</Text>
      <Text>Address</Text>
        <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
          <View style={styles.holder}>
            <Text style={styles.text}>Make phonecall</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')}>
          <View style={styles.holder}>
            <Text style={styles.text}>Send an email</Text>
          </View>
        </TouchableOpacity>

          </View>
    );
  }
}


const styles = StyleSheet.create ({
  rowContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  image:{
    backgroundColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 50
  },
holder: {

  },
  text: {
    fontSize: 12
  },
});

export default Rep;
