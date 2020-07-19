import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigator from './routes/routesStack';

const App = (props) => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
