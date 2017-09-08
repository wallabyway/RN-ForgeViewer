import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from './config/router';
import DrawerExample from './screens/Drawer';

export default class App extends React.Component {
  render() {
    return (
        <DrawerExample />
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


