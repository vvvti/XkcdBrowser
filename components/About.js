import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        XKCD - Browser - a simple app for reprint occasional comics from XKCD
        website.
         hat does XKCD stand for?
        It's not actually an acronym. It's just a word with no phonetic
        pronunciation -- a treasured and carefully-guarded point in the
        space of four-character strings. 
      </Text>
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

export default About;
