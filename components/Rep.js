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

class Rep extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.dataSource[0].name)
    return(
    <View style={styles.rowContainer}>
      <Text>{this.props.dataSource.name}</Text>
      <Text>Hi</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create ({
  rowContainer:{
    flex: 1,
    flexDirection: 'row'
  }

})

export default Rep;
