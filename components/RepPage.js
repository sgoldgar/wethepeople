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
      reload: false
    }
  }

  componentWillReceiveProps(nextProps){
    this.reloadNeeded(nextProps.fedReps)
    this.reloadNeeded(nextProps.stateReps)
    this.reloadNeeded(nextProps.localReps)
  }

  reloadNeeded(reps) {
    let reload = (this.props.reps !== reps)
    if (reload) {
      this.setState({ reload: reload })
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
      return (<FederalReps
          fedReps={ this.props.fedReps }
        />
      );
    case '2':
      return <StateReps stateReps={ this.props.stateReps } />;
    case '3':
      return <LocalReps localReps={ this.props.localReps } />;
    default:
      return null;
    }
  };


  render() {
    return(
      <TabViewAnimated
        style={ styles.repPage }
        navigationState={ this.state }
        renderScene={ this._renderScene }
        renderHeader={ this._renderHeader }
        onRequestChangeTab={ this._handleChangeTab }
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
