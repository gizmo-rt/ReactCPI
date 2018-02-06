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
  View
} from 'react-native';
import codepush from 'react-native-code-push';
import Push from 'appcenter-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    codepush.sync({ updateDialog: true, installMode: codepush.InstallMode.IMMEDIATE });
  }

  render() {
    return (
      <View style={styles.container}>
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

Push.setListener({
    onPushNotificationReceived(pushNotification) {
        let message = pushNotification.message;
        let title = pushNotification.title;

        // Any custom name/value pairs added in the portal are in customProperties
        if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
            message += `\nCustom properties:\n${JSON.stringify(pushNotification.customProperties)}`;
        }

        if (AppState.currentState === 'active') {
            Alert.alert(title, message);
        } else {
            Alert.alert(title, message);
        }
    }
});

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
