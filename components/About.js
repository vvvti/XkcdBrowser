import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>XKCD - Browser</Text>
      <Text style={styles.text}>
        a simple app for reprint occasional comics from XKCD website.
      </Text>
      <Text style={styles.textHeader}>What does XKCD stand for?</Text>
      <Text style={styles.text}>
        It's not actually an acronym. It's just a word with no phonetic
        pronunciation -- a treasured and carefully-guarded point in the space of
        four-character strings.
      </Text>
      <Text style={styles.textHeader}>
        How do I write "xkcd"? There's nothing in Strunk and White about this.
      </Text>
      <Text style={styles.text}>
        For those of us pedantic enough to want a rule, here it is: The preferred form is "xkcd", all lower-case. In formal contexts where a lowercase word shouldn't start a sentence, "XKCD" is an okay alternative. "Xkcd" is frowned upon.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  textHeader: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default About;
