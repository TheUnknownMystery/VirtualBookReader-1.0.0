import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import firebase from 'firebase'
import db from '../config'
import CustomHeader from '../components/Header'

export default class Settings extends React.Component {

 constructor() {
  super()

  this.state = {

   DOC_ID: '',
   FirstName: '',
   LastName: '',
   UserName: '',
   CurrentUser: firebase.auth().currentUser.email
  }
 }

 updateUserDetails = (FirstName, LastName, UserName) => {

  if (FirstName && LastName && UserName) {

   db.collection("Users").doc(this.state.DOC_ID).update({

    'First_Name': FirstName,
    'Last_Name': LastName,
    'User_Name': UserName


   })
  }
 }

 getAllUserInfo = () => {

  db.collection("Users").where("Email", '==', this.state.CurrentUser).get()
   .then(snapshot => {
    snapshot.forEach(doc => {

     this.setState({

      FirstName: doc.data().First_Name,
      LastName: doc.data().Last_Name,
      UserName: doc.data().User_Name,
      DOC_ID: doc.id

     })

    })
   })
 }

 componentDidMount() {

  this.getAllUserInfo()

 }

 render() {
  return (

   <View>

    <CustomHeader

     navigation={this.props.navigation}
     title='Settings'

    />

    <View>

     <TextInput

      style={styles.TextInputTitle}
      placeholder='FirstName'
      value={this.state.FirstName}
      onChangeText={(text) => {

       this.setState({ FirstName: text })

      }}
     />

     <TextInput

      style={styles.TextInputTitle}
      placeholder='LastName'
      value={this.state.LastName}

      onChangeText={(text) => {

       this.setState({ LastName: text })

      }}
     />

     <TextInput

      style={styles.TextInputTitle}
      placeholder='User Name'
      value={this.state.UserName}

      onChangeText={(text) => {

       this.setState({ UserName: text })

      }}
     />


     <TouchableOpacity style={styles.ButtonStyle} onPress={() => {

      this.updateUserDetails(this.state.FirstName, this.state.LastName, this.state.UserName)

     }}>

      <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>Save</Text>

     </TouchableOpacity>

    </View>

   </View>

  )
 }
}

const styles = StyleSheet.create({

 TextInputTitle: {

  alignSelf: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1.0,
  width: 600,
  marginTop: 60,
  FontWeight: 'bold',
  fontFamily: 'Montserrat',

 },

 ButtonStyle: {

  alignSelf: 'center',
  backgroundColor: '#2196F3',
  width: 100,
  height: 30,
  borderRadius: 6,
  borderWidth: 4,
  borderColor: 'darkblue',
  marginTop: 30
 }

})