import * as React from 'react'
import { View } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class CustomHeader extends React.Component {
 render() {
  return (

   <SafeAreaProvider>
    <View>

     <Header

      backgroundColor={'#F7F7F7'}
      centerComponent={{
       text: this.props.title, style: { fontSize: 40, fontWeight: '100' }
      }}

      leftComponent={<Icon

       name="bars"
       type='font-awesome'
       color='black'

       onPress={() => {
        
        this.props.navigation.toggleDrawer()

       }}

      />}

     />

    </View>
   </SafeAreaProvider>

  )
 }
}