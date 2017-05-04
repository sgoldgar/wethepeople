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
    }
  }


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
      return <FederalReps address={ this.props.address } />;
    case '2':
      return <StateReps address={ this.props.address } />;
    case '3':
      return <LocalReps address={ this.props.address } />;
    default:
      return null;
    }
  };


  render() {

    return(
      <TabViewAnimated
        style={ styles.repPage }
        navigationState={this.state}
        renderScene={this._renderScene }
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
    backgroundColor: '#141414'
  },
  label: {
    color: '#141414',

  }
});

export default RepPage;
