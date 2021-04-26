/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false,
  };

  inputText = () =>
    this.state.sampleBoolean ? (
      <Text>sampleBoolean is true</Text>
    ) : (
      <Text>sampleBoolean is false</Text>
    );

  render() {
    return <View style={styles.background}>{this.inputText()}</View>;
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
