import React, { Component } from 'react';
import Rep from './Rep'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  Button,
  TouchableHighlight,
  Image,
  StatusBar
} from 'react-native';

import heroImage from '../assets/images/caleb-wright-14716.jpg';


class Home extends Component {

componentDidMount() {
  StatusBar.setBarStyle('light-content', true)
}


  render() {
    const address = this.props.address;

    return(
      <View style={ styles.home }>
        <View style={ styles.homeLogo }>
          <Image source={ heroImage } style={ styles.hero }>
            <Text style={ styles.logo }>We the People ...</Text>
          </Image>
        </View>
        <View style={ styles.homeVal }>
          <View style={styles.homeText}>
            <Text style= {styles.text} >We see you're located at:</Text>
            <Text style={ styles.locationStreet }>{ address.street }</Text>
            <Text style={ styles.locationCity }>{ address.city }, { address.state} { address.zipCode }</Text>
            <Text style= {styles.text} >Is this where you are registered to vote?</Text>
          </View>

          <View style= { styles.valButtons}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                underlayColor="#549E95"
                style={ styles.button }
                onPress={ () => this.props.changePage('repPage') }
                >
                <Text style={ styles.buttonText }>Yes! Take me to my reps</Text>
              </TouchableHighlight>
            </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight
                  underlayColor="#549E95"
                  style={ styles.button }
                  onPress={ () => this.props.changePage('changeLocal') }
                  >
                  <Text style={ styles.buttonText }>No, I'll input my address</Text>
                </TouchableHighlight>
              </View>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  home:{
    flex: 1,
    flexDirection: 'column'
  },
  homeLogo: {
    flex: 2,
    flexDirection: 'column',


  },
  hero:{
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover'


  },
  logo:{
    fontFamily: 'Zapfino',
    fontSize: 33,
    fontWeight: '700',
    backgroundColor: 'transparent',
    color: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '50%',

  },
  homeVal:{
    flex: 3,
    flexDirection: 'column',
    marginTop: '30%'

  },
  homeText:{
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,

  },
  locationStreet:{
    fontSize: 20,
    marginTop: 5,
    color: '#141414',
    paddingVertical: 5
  },
  locationCity:{
    fontSize: 20,
    marginBottom: 10,
    color: '#141414'
  },
  valButtons:{
    flexDirection:'row'
  },
  buttonContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop: 10
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
  },
  text: {
    color: '#141414',
    fontSize: 16
  }

});
export default Home;
