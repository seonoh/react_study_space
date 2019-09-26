import HomeScreen from './HomeScreen'
import SearchScreen from './SearchScreen'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
});

export default createAppContainer(TabNavigator);