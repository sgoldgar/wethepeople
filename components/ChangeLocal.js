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

  componentDidMount() {
    this.refs.address.focus()
  }

  updateAddress(e) {
    const address = this.state.addressInput;
    const city = this.state.cityInput;
    const usState = this.state.stateInput;
    const zip = this.state.zipInput;

    this.props.changeAddress(address, city, usState, zip);

  }


  render() {

    const stateList = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];


    return(
      <View style={ styles.changeLocal }>
        <Text style={ styles.question }>
          Where are you registered to vote?
        </Text>
        <View style={ styles.inputBlock }>
          <View style={ styles.textInput }>
            <TextInput
              ref="address"
              style={ styles.input }
              onChange={ input => this.setState({ addressInput: input }) }
              placeholder="Address"
              value={ this.state.addressInput }
              returnKeyType='next'
              autoCapitalize="words"
              onSubmitEditing={(event) => {
                this.refs.city.focus();
              } }
            />
          </View>
          <View style={ styles.textInput }>
            <TextInput
              ref="city"
              style={ styles.input }
              onChangeText={ input => this.setState({ cityInput: input }) }
              placeholder="City"
              value={ this.state.cityInput }
              returnKeyType='next'
              autoCapitalize="words"
              onSubmitEditing={(event) => {
                this.refs.state.focus();
              } }
            />
          </View>
          <View style={ styles.textInput }>
            <TextInput
              ref="state"
              style={ styles.input }
              onChangeText={ input => this.setState({ stateInput: input }) }
              placeholder="State"
              value={ this.state.stateInput }
              returnKeyType='next'
              autoCapitalize="characters"
              onSubmitEditing={(event) => {
                this.refs.zip.focus();
              } }
            />
          </View>
          <View>
            <TextInput
              ref="zip"
              style={ styles.input }
              onChangeText={ input => this.setState({ zipInput: input }) }
              placeholder="Zip"
              value={ this.state.zipInput }
              returnKeyType='go'
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={ styles.button }
            onPress={ this.updateAddress.bind(this) }
            >
            <Text style={ styles.buttonText }>See your Representatives!</Text>
          </TouchableHighlight>
        </View>
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
  fontSize: 25,
  marginHorizontal: 10,
  marginTop: 40
},

inputBlock: {
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  borderTopWidth: StyleSheet.hairlineWidth,
  borderBottomWidth: StyleSheet.hairlineWidth,
  marginBottom: 50
},

textInput: {

},

input: {
  flex: 1,
  textAlign: 'left',
  margin: 20,
  paddingLeft: '10%',
  height: 30,
},

buttonContainer:{
  flex: 1,
  alignItems: 'center',
  marginBottom: 20
},

button:{
  width: '80%',
  backgroundColor: '#2E9298',
  borderRadius: 10,
  padding: 10,
  shadowColor: '#141414',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 10,
  shadowOpacity: 0.25
},

buttonText:{
  color: 'white',
  paddingVertical: 10,
  textAlign: 'center',
  fontSize: 20
}

});

export default ChangeLocal;
