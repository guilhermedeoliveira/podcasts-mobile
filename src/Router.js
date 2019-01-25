import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';

// import WelcomeScreen from './screens/WelcomeScreen';
// import AuthLoadingScreen from './screens/AuthLoadingScreen';

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

/*
const SwitchNavigator = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    Details: DetailsScreen,
    List: ListScreen,

    App: StackNavigator,
    Auth: AuthNavigator
  },
  {
    // initialRouteName: 'AuthLoading'
    initialRouteName: 'App'
  }
);
*/

export default StackNavigator;
