import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './screens/home'
import Page from './screens/page'  
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Page : Page,
  Home : Home,
});

const AppContainer = createAppContainer(AppNavigator);