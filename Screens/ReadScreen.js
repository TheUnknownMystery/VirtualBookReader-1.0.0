import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class ReadScreen extends React.Component {

 constructor(props) {
  super(props)

  this.state = {

   Story: this.props.navigation.getParam("Details")["Story"],
   Type: this.props.navigation.getParam("Details")["Type"],
   Title: this.props.navigation.getParam("Details")["Title"],
   Author: this.props.navigation.getParam("Details")["Author"],
   Name: this.props.navigation.getParam("Details")["Name"],
   Email: this.props.navigation.getParam("Details")["Email"],
   Likes: this.props.navigation.getParam("Details")["Likes"],
   Views: this.props.navigation.getParam("Details")["Views"],

  }
 }

 render() {
  return (

   <View>

    <Text style={styles.Title}>{'Title: ' + this.state.Title}</Text>
    <Text style={styles.Story}>{this.state.Story}</Text>
    <Text style={styles.Author}>{'Author: ' + this.state.Author}</Text>
    <Text style={styles.Author}>{'Likes: ' +   this.state.Likes}</Text>
    <Text style={styles.Author}>{'Views: ' +   this.state.Likes}</Text>

   </View>

  )
 }
}
const styles = StyleSheet.create({

 Title: {

  fontWeight: 'bold',
  alignSelf: 'center',
  fontSize: 30

 },

 Story: {

  alignSelf: 'center',
  fontWeight: 20,


 },

 Author: {

  alignSelf: 'center',
  fontWeight: 'bold',
  marginLeft: 300

 }

})