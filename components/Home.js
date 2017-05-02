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
  Image
} from 'react-native';

import heroImage from '../assets/images/hero_resized_filter.jpg';


class Home extends Component {



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
            <Text>We see you're located at</Text>
            <Text style={ styles.locationStreet }>{ address.street }</Text>
            <Text style={ styles.locationCity }>{ address.city }, { address.state} { address.zipCode }</Text>
            <Text>Is this where you are registered to vote?</Text>
          </View>

          <View style= { styles.valButtons}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight underlayColor="green" style={ styles.button }>
                <Text style={ styles.buttonText }>Yes! Take me to my reps</Text>
              </TouchableHighlight>
            </View>
              <View style={styles.buttonContainer}>
                <TouchableHighlight underlayColor="green" style={ styles.button }>
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
    flexDirection: 'column'
  },
  homeLogo: {
    flex: 1,
    flexDirection: 'column'
  },
  hero:{
    marginTop: 30 ,
    resizeMode: 'cover',
    alignItems: 'center',
    height: 200,
    width: 400
  },
  logo:{
    fontFamily: 'Zapfino',
    fontSize: 30,
    backgroundColor: 'transparent',
    color: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '25%',
  },
  homeVal:{
    flexDirection: 'column',
    marginTop:'80%'
  },
  homeText:{
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40
  },
  locationStreet:{
    fontSize: 20,
    marginTop: 10
  },
  locationCity:{
    fontSize: 20,
    marginBottom: 10
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
    marginLeft: '10%',
    paddingVertical: 10,
  }

});
export default Home;
