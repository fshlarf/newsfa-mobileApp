import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Button
  } from 'react-native';
import Expo from 'expo';
import { 
  createStackNavigator 
} from 'react-navigation';

import HomeScreen from './screen/HomeScreen'
import ProfileScreen from './screen/ProfileScreen'

const NavigationApp = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
  }, 
  {
  navigationOptions: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight
    }
  }
})

export default class Main extends React.Component {
  render() {
    return <NavigationApp/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNav: {
    color: 'dodgerblue'
  }
});
