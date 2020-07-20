import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import axios from 'axios';

class ComicsFlatList extends Component {
  state = {
    comicsList: [],
    latestComic: [],
  };

  fetchComicsList(jsonList) {
    return (
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={jsonList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <ListItem
              title={item.title}
              titleStyle={{
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}
              subtitle={
                <View style={styles.comicsContainer}>
                  <Image
                    source={{uri: `${item.img}`}}
                    style={styles.comicsImage}
                    resizeMode="contain"
                  />
                  <TouchableOpacity 
                    onPress={() =>
                      this.props.navigation.navigate('DetailView', item)
                    }>
                    <Text style={styles.details}>COMIC DETAILS -></Text>
                  </TouchableOpacity>
                </View>
              }
              onPress={() => {}}
            />
          );
        }}
      />
    );
  }
  async componentDidMount() {
    await axios.get('https://xkcd.com/info.0.json').then((response) => {
      this.setState((state) => ({
        latestComic: (state.latestComic = [].concat(response.data)),
      }));
    });
    const num = this.state.latestComic[0].num;
    const requestOne = await axios.get('https://xkcd.com/info.0.json');
    const requestTwo = await axios.get(`https://xkcd.com/${num - 1}/info.0.json`);
    const requestThree = await axios.get(`https://xkcd.com/${num - 2}/info.0.json`);
    const requestFour = await axios.get(`https://xkcd.com/${num - 3}/info.0.json`);
    const requestFive = await axios.get(`https://xkcd.com/${num - 4}/info.0.json`);
    const requestSix = await axios.get(`https://xkcd.com/${num - 5}/info.0.json`);
    const requestSeven = await axios.get(`https://xkcd.com/${num - 6}/info.0.json`);
    const requestEight = await axios.get(`https://xkcd.com/${num - 7}/info.0.json`);

    axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight])
      .then(([responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven, responseEight]) => {
        this.setState(prevState => ({
          comicsList: (prevState.comicsList = [].concat(responseOne.data, responseTwo.data, responseThree.data, responseFour.data, responseFive.data, responseSix.data, responseSeven.data, responseEight.data)),
        }));
      });
  }

  render() {
      return (
         <View>
             {this.fetchComicsList(this.state.comicsList)}
         </View> 
      );
  }
}

const styles = StyleSheet.create({
  comicsContainer: {
    marginLeft: 25,
    padding: 15,
    alignItems: 'center',
  },
  separator: {
    height: 3,
    backgroundColor: '#7F9493',
  },
  comicsImage: {
    height: 120,
    width: 300,
  },
  details: {
    fontSize: 18,
    color: '#14768A',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ComicsFlatList;
