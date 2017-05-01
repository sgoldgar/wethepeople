import React, { Component } from 'react';
// import Rep from './Rep.js';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Image,
  View
} from 'react-native';

const googleApiKey = 'AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
const googleApiUrl = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
const address = '&address=1200%20Bentwood%20Rd.%20Austin%20TX';
const roles = '&roles=legislatorUpperBody';


class RepList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    //this is required for listview
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //set state to be the list of reps from the parent container, repsData will need to be an array of objects
    this.state = {
      reps: []
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
    if(!this.state.reps.length){
      return(<Text>Loading..</Text>)
    }

    const repsList = this.state.reps.map((rep) => {
      console.log('rep is: ', rep)
      return (
        <View>
        <Image source={{uri: rep.photoUrl}}/>
        <Text>{rep.name}</Text>
        <Text>{rep.party}</Text>
        {/*<Text>{rep.phones[0]}</Text>*/}
        {/*<Text>{rep.emails}</Text>*/}
        </View>
      );
    });

    return (
      <View>
        {repsList}
      </View>
    )

  }

}

// App registration and rendering
export default RepList;
