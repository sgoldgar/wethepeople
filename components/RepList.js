import React, { Component } from 'react';
import Rep from './Rep.js';
import {
  AppRegistry
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

googleApiKey = 'AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns';
googleApiUrl + key = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns'



//senate requests
fetch(googleApiUrl, {
  body: JSON.stringify({
    address: input.addess, //whatever address is input by user
    roles: 'legislatorUpperBody' // or legislatorLowerBody
  })
})
.then(function(repsData) {
    return repsData.json()
  })
.catch((error) => {
  console.error(error);
});


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


/*would be inputting this information above, coming from federal or local or state*/
const Reps = (props) => (
  <View style={styles.container}>
    <Image source={uri: reps.officials.photoUrl} />
    <Text style={styles.text}>
      {`${reps.officials.name}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.officials.party}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.officials.role}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.officials.emails}`}
    </Text>
    <Text style={styles.text}>
      {`${reps.officials.phones}`}
    </Text>
  </View>
);

// App registration and rendering
AppRegistry.registerComponent('RepList', () => RepList);
