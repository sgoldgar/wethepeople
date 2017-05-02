import React, { Component } from 'react';
<<<<<<< HEAD
import Rep from './Rep.js';
=======
import Icon from 'react-native-vector-icons/MaterialIcons';
import Communications from 'react-native-communications';


>>>>>>> 2529a52a224e30c806f45a92fbc4a065a8999512
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
<<<<<<< HEAD
  View,
  Animated
=======
  Image,
  Button,
  TouchableOpacity,
  View
>>>>>>> 2529a52a224e30c806f45a92fbc4a065a8999512
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
<<<<<<< HEAD
          <Text>{this.state.reps}</Text>
          <Rep />
          </View>
      )
=======
        <Image style={styles.lineItem} source={{uri: rep.photoUrl}}/>
        <Text style={styles.lineItem}>{rep.name}</Text>
        <Text style={styles.lineItem}>{rep.party}</Text>
        <Text style={styles.lineItem}>{rep.phones[0]}</Text>
        </View>
      );
    });

    return (
      <View>
        {repsList}
      </View>
    )

>>>>>>> 2529a52a224e30c806f45a92fbc4a065a8999512
  }

}



// <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
//   <View style={styles.holder}>
//     <Text style={styles.text}>Make phonecall</Text>
//   </View>
// </TouchableOpacity>
// <TouchableOpacity onPress={() => Communications.email(rep.emails, null ,null,null,'My Subject','My body text')}>
//   <View style={styles.holder}>
//     <Icon.Button name="mail" backgroundColor="#141414" accessibilityLabel="Email your rep">
//     </Icon.Button>
//   </View>
// </TouchableOpacity>


const styles = StyleSheet.create({
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
});

// App registration and rendering
export default RepList;
