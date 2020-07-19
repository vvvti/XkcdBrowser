import {createStackNavigator} from 'react-navigation-stack';
import ComicsFlatList from '../components/ComicsFlatList';
import About from '../components/About';
import ComicDetailView from '../components/ComicDetailView';

const screens = {
  List: {
    screen: ComicsFlatList,
    navigationOptions: {
      title: 'XKCD Browser',
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
