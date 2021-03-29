import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'
import ReadScreen from '../Screens/ReadScreen'

export const AppStackNavigator = createStackNavigator({

 Home: {
  screen: Home,
  navigationOptions: {
   
   headerShown: false,

  }
 },
 ReadScreen: { screen: ReadScreen }

},
 {
  initialRouteName: 'Home'
 }
)