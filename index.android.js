/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ConfigComponent from './app/configComponent';
import homeComponent from './app/homeComponent';

import { DrawerNavigator } from 'react-navigation';

AppRegistry.registerComponent('solenergy', () => DrawerNavigator({
  Home: { screen: homeComponent },
  Config: { screen: ConfigComponent },
}));
