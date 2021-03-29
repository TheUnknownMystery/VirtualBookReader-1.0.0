import { createDrawerNavigator } from 'react-navigation-drawer'
import { BottomTabNavigator } from './BottomTabNavigator'
import Settings from '../Screens/Settings'
import CustomSideBarMenu from './CustomSideDrawer'

export const SideDrawer = createDrawerNavigator({

 Home: {

  screen: BottomTabNavigator

 },

 Settings: {

  screen: Settings

 }
},

 { contentComponent: CustomSideBarMenu },

 {

  initialRouteName: 'Home'

 }
)