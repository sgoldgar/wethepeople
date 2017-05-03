
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



class FederalReps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fedReps: [],
      stateReps: [],
      localReps: []
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
        localIndex.push.apply(localIndex, [{
          title: response.offices[i].name,
          index: response.offices[i].officialIndices
        }])
      } else if(response.offices[i].name.indexOf("United")>-1) {
        federalIndex.push.apply(federalIndex, [{
          title: response.offices[i].name,
          index: response.offices[i].officialIndices
        }])
      } else {
        stateIndex.push.apply(stateIndex, [{
          title: response.offices[i].name,
          index: response.offices[i].officialIndices
        }])
      }
    }

    let fedReps = []
    for(let i=0, x=federalIndex.length; i<x; i++) {
      for(let j=0, y=federalIndex[i].index.length; j<y; j++) {
        fedReps.push.apply(fedReps, [{
          title: federalIndex[i].title,
          info: response.officials[federalIndex[i].index[j]]
        }])
      }
    }

    this.setState({
      fedReps: fedReps,
      stateReps: stateIndex,
      localReps: localIndex
    })
  }



  render() {

    return(
      <ScrollView style={styles.fedreps}>
        <RepList reps={this.state.fedReps}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  fedreps: {
    flex: 1
  }
});

export default FederalReps;
