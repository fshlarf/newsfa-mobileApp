import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { createStackNavigator, createBottomTabNavigator, createTabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import ProfileScreen from './screen/ProfileScreen';
import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/details/details'
import Settings from './screen/settings/settings'
import NotifScreen from './screen/NotifScreen'

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
});

const NotifStack = createStackNavigator({
    Notif: { screen: NotifScreen },
});

const ProfileStack = createStackNavigator({
    Profile: { screen: ProfileScreen },
    Details: { screen: DetailsScreen },
    Settings: { screen: Settings }
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Notif: { screen: NotifStack },
    Profile: { screen: ProfileStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notif') {
            iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
            iconName = `ios-contact${focused ? '' : '-outline'}`
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: createTabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
