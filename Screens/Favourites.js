import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import firebase from 'firebase'
import db from '../config'
import CustomHeader from '../components/Header'

export default class Favourites extends React.Component {
 render() {
  return (
   <View>

    <CustomHeader

     navigation={this.props.navigation}
     title='My Favourites'

    />

   </View>

  )
 }
}
