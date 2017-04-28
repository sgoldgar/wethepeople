import React, { Component } from 'react';
import Rep from './Rep.js';
import {
  AppRegistry
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';


class RepList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    //this is required for listview
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //set state to be the list of reps from the parent container
    this.state = {
      reps: repsData,
      dataSource: ds.cloneWithRows(repsData),
    })
  };

}
  render() {
    return (
      return (
        <View style={styles.container}>
            <RepList dataSource={this.state.dataSource} />
        </View>
      )
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('RepList', () => RepList);
