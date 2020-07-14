import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {List, ListItem} from 'react-native-elements';

class ComicsFlatList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    // const urls = [
    //   'https://jsonplaceholder.typicode.com/photos?_limit=10',
    // ];
    // Promise.all(
    //   urls.map(url =>
    //     fetch(url)
    //       .then(res => res.json())
    //       .then(res => res.items)
    //   )
    // ).then(items => {
    //   this.setState({
    //     data: items.items,
    //   });
    // });
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  };

  renderRow = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  item: {
    borderBottomColor: '#7F9493',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  itemImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 14,
    padding: 5,
    color: 'black',
  },
});

export default ComicsFlatList;
