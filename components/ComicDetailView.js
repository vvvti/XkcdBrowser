import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ComicDetailView = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.navigation.getParam('title')}</Text>
      <Image
        source={{uri: `${props.navigation.getParam('img')}`}}
        resizeMode="contain"
        style={styles.detailImage}
      />
      <Text style={styles.alt}>{props.navigation.getParam('alt')}</Text>
      <Text style={styles.description}>Comic number:</Text>
      <Text style={styles.text}>{props.navigation.getParam('num')}</Text>
      <Text style={styles.description}>Published on:</Text>
      <Text style={styles.text}>
        {props.navigation.getParam('day')}.{props.navigation.getParam('month')}.
        {props.navigation.getParam('year')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  detailImage: {
    alignSelf: 'center',
    height: 120,
    width: 300,
  },
  alt: {
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
  },
  description: {
    alignSelf: 'center',
  },
  container: {
    marginTop: 30,
  },
});

export default ComicDetailView;
