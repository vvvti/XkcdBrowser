import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
// import ComicsFlatList from './components/ComicsFlatList';
import ComicsList2 from './components/ComicsList2';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <ComicsFlatList /> */}
      <ComicsList2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
