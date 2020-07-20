import {createStackNavigator} from 'react-navigation-stack';
import ComicsFlatList from '../components/ComicsFlatList';
import About from '../components/About';
import ComicDetailView from '../components/ComicDetailView';
import Header from '../components/Header';
import React from 'react';

const screens = {
  List: {
    screen: ComicsFlatList,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
    },
  },
  DetailView: {
    screen: ComicDetailView,
    navigationOptions: {
      title: 'Comic details',
    },
  },
};

const RoutesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2B313B',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default RoutesStack;
