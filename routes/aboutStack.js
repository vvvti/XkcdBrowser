import {createStackNavigator} from 'react-navigation-stack';

import About from '../components/About';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
    },
  },
};

const AboutStack = createStackNavigator(screens, {
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

export default AboutStack;
