import React, { Component } from 'react';
// import FederalReps from './FederalReps';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Communications from 'react-native-communications';


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


class RepList extends Component {
  //grabbing address from RepPage

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    //this is required for listview
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.reps);
    };
  }

  render() {
    if(!this.props.reps.length){
      return(<Text>Loading..</Text>)
    }
<<<<<<< HEAD

    const repsList = this.state.reps.map((rep) => {
      console.log('rep is: ', rep)
      return (
        <View key={Math.random()}>
        <Image style={styles.lineItem} source={{uri: rep.photoUrl}}/>
        <Text style={styles.lineItem}>{rep.name}</Text>
        <Text style={styles.lineItem}>{rep.party}</Text>
        <Text style={styles.lineItem}>{rep.phones[0]}</Text>
        <Text style={styles.lineItem}>{rep.emails}</Text>

        </View>
      );
    });

=======
>>>>>>> 0ea29ba832b2e77a933e0a06866d06aeb0be06f7
    return (
      <View style={{flex: 1, paddingTop: 22}}>
           <ListView
             dataSource={this.state.dataSource}
             renderRow={(rowData) => <Rep>{rowData}</Rep>}
           />
         </View>
    )
  } //end render

} //end component


const styles = StyleSheet.create({
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
});

// App registration and rendering
export default RepList;

// const repsList = this.state.reps.map((rep) => {
//   console.log(address)
//   console.log('rep is: ', rep)
//   console.log('social medias for rep:', rep.channels)
//   return (
//     <View key={Math.random()}>
//       <Text style={styles.lineItem}>{rep.address[0].line1}</Text>
//       <Text style={styles.lineItem}>{rep.address[0].city}{rep.address[0].state}{rep.address[0].zip}</Text>
//       <Text style={styles.lineItem}>{rep.photoUrl}</Text>
//       <Text style={styles.lineItem}>{rep.name}</Text>
//       <Text style={styles.lineItem}>{rep.party}</Text>
//       <Text style={styles.lineItem}>{rep.phones[0]}</Text>
//       <Text style={styles.lineItem}>{rep.emails}</Text>
//       <Text style={styles.lineItem}>{rep.urls[0]}</Text>
//
//       <TouchableOpacity onPress={() => Communications.phonecall('0123456789', true)}>
//         <View style={styles.holder}>
//           <Text style={styles.text}>Make phonecall</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Communications.email(rep.emails, null ,null,null,'My Subject','My body text')}>
//         <View style={styles.holder}>
//           <Icon.Button name="mail" backgroundColor="#141414" accessibilityLabel="Email your rep">
//           </Icon.Button>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// });
