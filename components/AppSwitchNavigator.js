import { createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../Screens/LoginScreen'
import SignInScreen from '../Screens/SignInScreen'
import { BottomTabNavigator } from './BottomTabNavigator'
import { SideDrawer } from './SideDrawer'

export const AppSwitchNavigator = createSwitchNavigator({

 LoginScreen: {

  screen: LoginScreen,

 },

 SignUpScreen: {

  screen: SignInScreen,

 },

 Drawer: {

  screen: SideDrawer

 }
})