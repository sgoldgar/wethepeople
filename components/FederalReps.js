
import React, { Component } from 'react';
import RepList from './RepList';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';


// const googleApiKey = 'AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
// const googleApiUrl = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
// const addressTest = '&address=1200%20Bentwood%20Rd.%20Austin%20TX';
// const roles = '&roles=legislatorUpperBody';


class FederalReps extends Component {
  constructor(props) {
    super(props)


    this.state = {
      reps: []

    }
  }

  componentWillReceiveProps() {
    this.getFederalReps();

  }


  getFederalReps() {
    let address = this.props.address.street.replace(/\s/g, "%20");
    let city = this.props.address.city.replace(/\s/g, "%20");//"%20Austin";

    let state = this.props.address.state//"%20TX";


    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=${address}%20${city}%20${state}&roles=legislatorUpperBody&levels=country`)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          reps: response.officials
         });
      })
  }


  render() {
    return(
      <View style={styles.fedreps}>
        <Text>Federal Reps</Text>
        <RepList reps={this.state.reps}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  fedreps: {
    flex: 1
  }

});

export default FederalReps;
