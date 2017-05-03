import React, { Component } from 'react';
import RepList from './RepList';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  ScrollView
} from 'react-native';



class StateReps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stateReps: []
    }
  }

  componentWillReceiveProps() {
    this.getReps();
  }


  getReps() {
    let address = this.props.address.street.replace(/\s/g, "%20");
    let city = this.props.address.city.replace(/\s/g, "%20");
    let state = this.props.address.state;

    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=${address}+${city}+${state}`)
      .then(response => response.json())
      .then((response) => {
        this.seperateReps(response)

      })
  }


  seperateReps(response) {
    let localIndex=[]
    let stateIndex=[]
    let federalIndex=[]
    for (let i=0, x=response.offices.length; i<x; i++) {
      if(response.offices[i].divisionId.indexOf("place")>-1 || response.offices[i].divisionId.indexOf("county")>-1) {

      } else if(response.offices[i].name.indexOf("United")>-1) {

      } else {
        stateIndex.push.apply(stateIndex, [{
          title: response.offices[i].name,
          index: response.offices[i].officialIndices
        }])
      }
    }

    let stateReps = []
    for(let i=0, x=stateIndex.length; i<x; i++) {
      for(let j=0, y=stateIndex[i].index.length; j<y; j++) {
        stateReps.push.apply(stateReps, [{
          title: stateIndex[i].title,
          info: response.officials[stateIndex[i].index[j]]
        }])
      }
    }

    this.setState({
      stateReps: stateReps,

    })
  }


  render() {
    return(
      <ScrollView style={styles.stateRepPage}>
        <RepList reps={this.state.stateReps}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  stateRepPage: {
    flex: 1
  }
});

export default StateReps;
