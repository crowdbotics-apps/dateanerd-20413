import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile103638Navigator from '../features/UserProfile103638/navigator';
import Settings103637Navigator from '../features/Settings103637/navigator';
import Settings103635Navigator from '../features/Settings103635/navigator';
import SignIn2103633Navigator from '../features/SignIn2103633/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile103638: { screen: UserProfile103638Navigator },
Settings103637: { screen: Settings103637Navigator },
Settings103635: { screen: Settings103635Navigator },
SignIn2103633: { screen: SignIn2103633Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
