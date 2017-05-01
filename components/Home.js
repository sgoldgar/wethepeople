import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  TouchableHighlight,
  Image
} from 'react-native';

import heroImage from '../assets/images/caleb-wright-14716.jpg';


class Home extends Component {




  render() {
    return(
      <View style={ styles.home }>
        <View style={ styles.homeLogo }>
          <Image source={ heroImage } style={ styles.hero }>
            <Text style={ styles.logo }>We the People...</Text>
          </Image>
        </View>
        <View style={ styles.homeVal }>
          <Text>We see you're located in</Text>
          <Text style={ styles.location }>Austin, TX 78701</Text>
          <Text>Is this where you are registered to vote?</Text>
          <View style= { styles.valButtons}>
            <TouchableHighlight>
              <View>
                <Text>Yes!</Text>
                <Text>Take me to my representatives</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View>
                <Text>No,</Text>
                <Text>I'll enter my zip code</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
home: {
  backgroundColor: '#FFFFFF',
  flex: 9,
  flexDirection: 'column'
},
homeLogo: {
flex: 1,
flexDirection: 'column',
},
hero: {
  flex: 1,
  resizeMode: 'cover',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height:400,
  width: 400
},
logo: {
  flex: 1,
  fontFamily: 'Zapfino',
  fontSize: 40,
  color: '#FFFFFF',
  backgroundColor:'transparent',
  marginTop: 30,
  lineHeight: 100
},
homeVal: {
flex: 2,
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center'
},
valButtons: {
  flexDirection: 'row'
},
});

export default Home;
