/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';
//import codepush from 'react-native-code-push';
// import Push from 'appcenter-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
//    codepush.sync({ updateDialog: true, installMode: codepush.InstallMode.IMMEDIATE });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://image.ibb.co/iN832R/Logo.png'}} style={styles.backgroundImage} />
        <Text style={styles.welcome}>
          React native updated app installed
        </Text>
        <Text style={styles.instructions}>
          To get started
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
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
    backgroundImage: {
        alignSelf: 'center',
        width: 100,
        height:100
    }
});
