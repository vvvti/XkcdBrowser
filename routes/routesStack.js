import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ComicsFlatList from '../components/ComicsFlatList';
import About from '../components/About';
import ComicDetailView from '../components/ComicDetailView';

const screens = {
  List: {
    screen: ComicsFlatList,
  },
  About: {
    screen: About,
  },
  DetailView: {
    screen: ComicDetailView,
  },
};

const RoutesStack = createStackNavigator(screens);

export default createAppContainer(RoutesStack);
