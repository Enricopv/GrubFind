import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Main from './components/Main';
import Browse from './components/Browse/Browse';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={Main} title="" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="" />
          <Scene key="browse" component={Browse} title="Where Food" />
        </Scene>
      </Router>
    )
  }
}