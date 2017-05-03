import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  ScrollView
} from 'react-native';

import RepList from './RepList';


class LocalReps extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

    for (let i=0, x=response.offices.length; i<x; i++) {
      if(response.offices[i].divisionId.indexOf("place")>-1 || response.offices[i].divisionId.indexOf("county")>-1) {
        localIndex.push.apply(localIndex, [{
          title: response.offices[i].name,
          index: response.offices[i].officialIndices
        }])
      }
    }

    let localReps = []
    for(let i=0, x=localIndex.length; i<x; i++) {
      for(let j=0, y=localIndex[i].index.length; j<y; j++) {
        localReps.push.apply(localReps, [{
          title: localIndex[i].title,
          info: response.officials[localIndex[i].index[j]]
        }])
      }
    }

    this.setState({

      localReps: localReps
    })
  }

  render() {
    return(
      <ScrollView style={styles.localreps}>
        <RepList reps={this.state.localReps}/>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({

});

export default LocalReps;
