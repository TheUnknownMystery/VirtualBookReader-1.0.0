import * as React from 'react'
import { createAppContainer } from 'react-navigation'
import { AppSwitchNavigator } from './components/AppSwitchNavigator'

export default class App extends React.Component {
  render() {
    return (

      <AppContainer/>
      
    )
  }
}


const AppContainer = createAppContainer(AppSwitchNavigator)