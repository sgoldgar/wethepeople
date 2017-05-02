import React, { Component } from 'react';
import RepList from './RepList';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';


const googleApiKey = 'AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
const googleApiUrl = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
const addressTest = '&address=1200%20Bentwood%20Rd.%20Austin%20TX';
const roles = '&roles=legislatorUpperBody';


class FederalReps extends Component {
  construtor(props) {
    super(props)
    this.state = {
      reps: [],
      address: {
        street: this.props.address.street,
        city: this.props.address.city,
        state: this.props.address.state,
        zipCode: this.props.address.zipCode
      }
    }
  }

  componentDidMount(){
    fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=1200%20Bentwood%20Rd.%20Austin%20TX&roles=legislatorUpperBody')
      .then((response) => {
        return response.json()
        console.log(response.json());
      })
      .then((response) => {
        console.log('response: ',response);
        console.log('response.officials: ',response.officials);

        this.setState({
          reps: response.officials
         });

         console.log('this.state.reps: ', this.state.reps)
      })
  }



  render() {
    return(
      <View>
        <Text>Federal Reps</Text>
        <RepList />
      </View>

    )
  }
}

const styles = StyleSheet.create({

});

export default FederalReps;
