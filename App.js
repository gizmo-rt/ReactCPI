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
  Image,
  AppState,
  Alert
} from 'react-native';
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


Push.setListener({
    onPushNotificationReceived: function (pushNotification) {
        let message = pushNotification.message;
        let title = pushNotification.title;

        if (message === null || message === undefined) {
            // Android messages received in the background don't include a message. On Android, that fact can be used to
            // check if the message was received in the background or foreground. For iOS the message is always present.
            title = 'Android background';
            message = '<empty>';
        }

        // Custom name/value pairs set in the App Center web portal are in customProperties
        if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
            message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
        }

        if (AppState.currentState === 'active') {
            Alert.alert(title, message);
        }
        else {
            // Sometimes the push callback is received shortly before the app is fully active in the foreground.
            // In this case you'll want to save off the notification info and wait until the app is fully shown
            // in the foreground before displaying any UI. You could use AppState.addEventListener to be notified
            // when the app is fully in the foreground.
        }
    }
});
