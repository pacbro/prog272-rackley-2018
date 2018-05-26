import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import GetFile from './GetFile';

export default class App extends React.Component {
  render() {
    return (
<nativeRouter>
        <View style={styles.addressContainer}>
        <GetFile />
      </View>
        </nativeRouter>
    );
  }
}