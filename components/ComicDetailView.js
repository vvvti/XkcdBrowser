import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComicDetailView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#F4F4F4',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ComicDetailView;
