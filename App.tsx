import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import SearchScreenController from './src/screens/Search/SearchScreenController';
import useStyles from './App.modules';

const App = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.theme}>
      <StatusBar />
      <SearchScreenController />
    </SafeAreaView>
  );
};

export default App;
