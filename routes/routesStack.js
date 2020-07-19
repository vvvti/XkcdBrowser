import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
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
    headerStyle: {
      backgroundColor: '#2B313B',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(RoutesStack);
