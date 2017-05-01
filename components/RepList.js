import React, { Component } from 'react';
import Rep from './Rep.js';
import {
  AppRegistry
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

key = 'AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns'
const state = TX //input.state eventually depending on input from user

//senate requests
fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS')
  .then(function(repsData) {
    return response.json()
  })

class RepList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    //this is required for listview
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //set state to be the list of reps from the parent container, repsData will need to be an array of objects
    this.state = {
      reps: repsData,
      dataSource: ds.cloneWithRows(repsData),
    })
  };

}
  render() {
    return (
      return (
        <ListView
           style={styles.container}
           dataSource={this.state.dataSource}
           renderRow={(data) => <Reps {...data} />
      )
    );
  }
}


//we will need to filter getbyaddres api results by indices
// "offices": [
//  {
//   "name": "United States House of Representatives KS-03",
//   "level": "federal",
//   "officialIndices": [ 0 ]
//  },
//  {
//   "name": "KS State House District 32",
//   "level": "state",
//   "officialIndices": [ 1 ]
//  },
// {
//    "name": "KS State Senate District 6",
//    "level": "state",
//    "officialIndices": [ 19 ]
//   }

/*would be inputting this information above, coming from federal or local or state*/
const Reps = (props) => (
  <View style={styles.container}>
    <Image source={uri: reps.photoUrl} />
    <Text style={styles.text}>
      {`${reps.name}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.party}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.role}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.emails}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.phones}`}
    </Text>
  </View>
);

// App registration and rendering
AppRegistry.registerComponent('RepList', () => RepList);
