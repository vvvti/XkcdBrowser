import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ComicsFlatList from '../components/ComicsFlatList';

const screens = {
  List: {
    screen: ComicsFlatList,
  },
};

const RoutesStack = createStackNavigator(screens);

export default createAppContainer(RoutesStack);
