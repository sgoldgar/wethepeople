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

  callPhone() {
    console.log(this.props.reps.info.phones)
    if(this.props.reps.info.phones) {
      Communications.phonecall( this.props.reps.info.phones[0], true)
    }
  }

  emailEmail() {
    console.log(this.props.reps.info.emails)
    if(this.props.reps.info.emails) { Communications.email(this.props.reps.info.emails,null,null,null,null)}
  }

  render(){

    return(
    <View style={styles.rowContainer}>
      <Text style={styles.holder}>{this.props.reps.info.name}</Text>
      <Text style={styles.holder}>{this.props.reps.info.party}</Text>
      {/* <Text style={styles.holder}>{this.props.reps.info.address[0].line1}</Text>
      <Text style={styles.holder}>{this.props.reps.info.address[0].city }</Text> */}
        <TouchableOpacity onPress={ () => this.callPhone() }>
          <View>
            <Icon style={styles.icon} name="phone" color="#549E95" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.emailEmail() }>
          <View>
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
