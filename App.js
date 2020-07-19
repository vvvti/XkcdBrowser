import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Navigator from './routes/routesStack';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default App;
