import React, { Component } from 'react';
import Rep from './Rep';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Communications from 'react-native-communications';
import MoreInfo from './MoreInfo';

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
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([])
    };
  }

  componentWillReceiveProps(newProps){

    this.setState({
      dataSource: this.ds.cloneWithRows(newProps.reps)
    })
  }



  render() {

    if(!this.props.reps.length){
      return(<Text style= {styles.text} >Loading..</Text>)
    }

    return (
      <View>
         <ListView
           style={ styles.listContainer}
           enableEmptySections={true}
           dataSource={this.state.dataSource}
           renderSeparator={ (sectionId, rowId) => <View key={ rowId } style={ styles.separator } /> }
           renderRow={data => {

            return(
              <Rep
                reps={ data }
              />
            )
            }
          }
        />
        <View style={ styles.footer }></View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  listContainer: {
    flex: 1
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#141414'
  },
  footer: {
    margin: 80
  },
  text: {
    color: '#141414'
  }

});

export default RepList;
