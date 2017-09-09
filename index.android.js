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
import HomeComponent from './app/homeComponent';

import { StackNavigator } from 'react-navigation';

AppRegistry.registerComponent('solenergy', () => StackNavigator({
  Config: { screen: ConfigComponent },
  Home: { screen: HomeComponent },
}));
