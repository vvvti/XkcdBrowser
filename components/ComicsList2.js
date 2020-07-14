import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import axios from 'axios';

class ComicsFlatList extends Component {
  state = {
    comicsList: [],
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
              subtitle={
                <View>
                  <Image source={{uri: `${item.img}`}} style={styles.comicsImage} resizeMode="contain"/>
                </View>
              }
              onPress={() => {}}
            />
          );
        }}
      />
    );
  }
  componentDidMount() {
    axios.get('https://xkcd.com/2032/info.0.json')
      .then((response) => {
        this.setState(prevState => ({
          comicsList: prevState.comicsList = [].concat(response.data)
        }))
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
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  separator: {
    height: 2,
    backgroundColor: '#7F9493',
  },
  comicsImage: {
    margin: 5,
    alignSelf: 'center',
    height: 120,
    width: 300,
  },
});

export default ComicsFlatList;
