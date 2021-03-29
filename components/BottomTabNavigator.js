import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../Screens/Home'
import WriteStory from '../Screens/WriteStory'
import Favourites from '../Screens/Favourites'
import { AppStackNavigator } from './AppStackNavigator'

export const BottomTabNavigator = createBottomTabNavigator({

 Home: {

  screen: AppStackNavigator,

  navigationOptions: {
   tabBarIcon: <Image

    style={{ height: 30, width: 30 }}
    source={require("../assets/Home.png")}
   />
  }
 },

 StoryWriting: {

  screen: WriteStory,

  navigationOptions: {
   tabBarIcon: <Image

    style={{ height: 40, width: 40 }}
    source={require("../assets/Book.png")}
   />

  },
  tabBarLabel: "Story-Writing"
 },

 YourFavourites: {


  screen: Favourites,

  navigationOptions: {
   tabBarIcon: <Image

    style={{ height: 30, width: 30 }}
    source={require("../assets/Favourites.png")}
   />

  },

 }

})