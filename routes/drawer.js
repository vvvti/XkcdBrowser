import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AboutStack from './aboutStack';
import RoutesStack from './routesStack';

const RootDrawerNavigator = createDrawerNavigator({
  ComicsList: {
    screen: RoutesStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);