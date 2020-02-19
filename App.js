import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 64,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 64
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '80%',
    borderBottomColor: '#1E91D6',
    borderBottomWidth: 1
  },
});
