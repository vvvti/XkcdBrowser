import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>XKCD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 65,
    padding: 20,
    backgroundColor: '#2B313B',
  },
  text: {
    color: '#F4F4F4',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Header;
