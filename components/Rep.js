import  React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Animated
} from 'react-native';


const Rep = props => {
  let {imageUrl, name, party, phones, emails} = props.Rep
  return(
    <View style={styles.container}>
    <Image source={imageUrl} />
      <Text> john doe </Text>
      <Text> party </Text>
      <Text> phones </Text>
      <Text> emails</Text>
    </View>
    )
}








export default Rep;


