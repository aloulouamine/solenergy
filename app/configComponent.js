/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage
} from 'react-native';

import { VictoryBar } from "victory-native";

export default class ConfigComponent extends Component {

  static navigationOptions = {
    title: 'Configuration',
  };

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Config component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
