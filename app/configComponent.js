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
  Button,
  View,
  Image,
  TextInput,
  AsyncStorage
} from 'react-native';

import { VictoryBar } from "victory-native";

const CONFIG = 'config';
export default class ConfigComponent extends Component {

  static navigationOptions = {
    title: 'Configuration',
  };

  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      long: "",
      gpsError: false,
      persistanceError: false
    };
  }

  async componentWillMount() {
    let config = await AsyncStorage.getItem(CONFIG);
    if (config) {
      config = JSON.parse(config);
      this.setState({
        lat: config.lat,
        long: config.long
      });
    }
  }

  getCurrentGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: String(position.coords.latitude),
        long: String(position.coords.longitude)
      })
    }, (error) => {
      this.setState({ gpsError: true })
    });
  }

  async goHome() {
    try {
      await AsyncStorage.setItem(CONFIG, JSON.stringify({ lat: this.state.lat, long: this.state.long }));
      this.props.navigation.navigate('Home');
    } catch (error) {
      // todo handle persistance error
      this.setState({ persistanceError: true });
    }
  }

  renderGpsError() {
    if (this.state.gpsError) {
      return (
        <View>
          <Text style={{ color: 'red' }}>Problem while finding GPS position.</Text>
        </View>
      );
    }
  }
  renderPersistanceError() {
    if (this.state.persistanceError) {
      return (
        <View>
          <Text style={{ color: 'red' }}>Problem while persisting data.</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Installation Coordinates</Text>
        <Image source={require('./assets/icon-plan.png')} />
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <View style={{ flex: 2 }}>
            <TextInput placeholder="Latitude" keyboardType="numeric" value={this.state.lat} onChangeText={(lat) => this.setState({ lat: String(lat) })} />
            <TextInput placeholder="longitude" keyboardType="numeric" value={this.state.long} onChangeText={(long) => this.setState({ long: String(long) })} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title="Current position" onPress={this.getCurrentGeolocation.bind(this)} />
          </View>
        </View>
        {this.renderGpsError()}
        {this.renderPersistanceError()}
        <Button title="Finish" disabled={!this.state.lat || !this.state.long} onPress={this.goHome.bind(this)} />
      </View >
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
