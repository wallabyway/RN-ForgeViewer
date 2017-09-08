import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from './config/router';

export default class App extends React.Component {
  render() {
    return (
      return <Root />;
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
