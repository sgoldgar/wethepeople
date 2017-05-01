import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  TextInput,
  TouchableHighlight
} from 'react-native';


class ChangeLocal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressInput: '',
      cityInput: '',
      stateInput: '',
      zipInput: ''
    }
  }


  render() {

    const stateList = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

    return(
      <View style={ styles.changeLocal }>
        <Text style={ styles.question }>
          Where are you registered to vote?
        </Text>
        <View style={ styles.inputBlock }>

            <TextInput
              style={ styles.input }
              onChangeText={ input => this.setState({ addressInput: input }) }
              placeholder="Address"
              value={ this.state.addressInput }
            />

            <TextInput
              style={ styles.input }
              onChangeText={ input => this.setState({ cityInput: input }) }
              placeholder="City"
              value={ this.state.cityInput }
            />

            <TextInput
              style={ styles.input }
              onChangeText={ input => this.setState({ stateInput: input }) }
              placeholder="State"
              value={ this.state.stateInput }
            />
            <TextInput
              style={ styles.input }
              onChangeText={ input => this.setState({ zipInput: input }) }
              placeholder="Zip"
              value={ this.state.zipInput }
            />
        </View>
        <TouchableHighlight
          style={ styles.submit}
          onPress={ () => { this.setState() } }
          >
          <Text style={ styles.submitText }>See your Representatives!</Text>
        </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
changeLocal: {
  flex: 9,
  flexDirection: 'column',
  justifyContent: 'center'

},
question: {
  flex: 1,
  textAlign: 'center',
  fontSize: 30,
  marginTop: 80

},
inputBlock: {
  flex: 3,
  flexDirection: 'column',
  justifyContent: 'center',

},
input: {
textAlign: 'center',
height: 30,
margin: 10
},
submit: {
  flex: 1,
  paddingTop: 40,
  paddingBottom: 30,
  alignItems: 'center',
  backgroundColor: '#549E95'
},
submitText: {
  fontSize: 25
}

});

export default ChangeLocal;
