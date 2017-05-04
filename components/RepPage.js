import React, { Component } from 'react';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  Animated
} from 'react-native';

import FederalReps from './FederalReps';
import StateReps from './StateReps';
import LocalReps from './LocalReps';


class RepPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      routes: [
      { key: '1', title: 'Federal' },
      { key: '2', title: 'State' },
      { key: '3', title: 'Local'}
      ],
      // fedReps: [],
      // stateReps: [],
      // localReps: []
    }
  }


  // componentWillReceiveProps() {
  //   this.getReps();
  // }
  //
  //
  // getReps() {
  //   let address = this.props.address.street.replace(/\s/g, "%20");
  //   let city = this.props.address.city.replace(/\s/g, "%20");
  //   let state = this.props.address.state;
  //
  //   fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyB6NrpRei3RgGwXreJOfnM3f9hSeX1wtns&address=${address}+${city}+${state}`)
  //     .then(response => response.json())
  //     .then((response) => {
  //       this.seperateReps(response)
  //
  //     })
  // }
  //
  //
  // seperateReps(response) {
  //   let localIndex=[]
  //   let stateIndex=[]
  //   let federalIndex=[]
  //   for (let i=0, x=response.offices.length; i<x; i++) {
  //     if(response.offices[i].divisionId.indexOf("place")>-1 || response.offices[i].divisionId.indexOf("county")>-1) {
  //       localIndex.push.apply(localIndex, [{
  //         title: response.offices[i].name,
  //         index: response.offices[i].officialIndices
  //       }])
  //     } else if(response.offices[i].name.indexOf("United")>-1) {
  //       federalIndex.push.apply(federalIndex, [{
  //         title: response.offices[i].name,
  //         index: response.offices[i].officialIndices
  //       }])
  //     } else {
  //       stateIndex.push.apply(stateIndex, [{
  //         title: response.offices[i].name,
  //         index: response.offices[i].officialIndices
  //       }])
  //     }
  //   }
  //   this.setState({
  //     fedReps: federalIndex,
  //     stateReps: stateIndex,
  //     localReps: localIndex
  //   })
  //
  // }




  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar
      {...props}
      tabStyle={ styles.tabs }
      indicatorStyle={ styles.indicator }
      style={ styles.tabbar }
      labelStyle={ styles.label }
    />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <FederalReps address={this.props.address} />;
    case '2':
      return <StateReps address={this.props.address} />;
    case '3':
      return <LocalReps address={this.props.address} />;
    default:
      return null;
    }
  };


  render() {

    return(
      <TabViewAnimated
        style={ styles.repPage }
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    )
  }
}

const styles = StyleSheet.create({
  repPage: {
    flex: 9
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbar: {
    backgroundColor: '#FFFFFF'
  },
  tabs: {

  },
  indicator: {
    backgroundColor: '#352245'
  },
  label: {
    color: '#141414',

  }
});

export default RepPage;
