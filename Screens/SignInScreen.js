import * as React from 'react'
import { View, ScrollView, KeyboardAvoidingView, Modal, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import firebase from 'firebase'
import db from '../config'
import { Alert } from 'react-native'

export default class LoginScreen extends React.Component {

 constructor() {
  super()

  this.state = {

   Email_ID: '',
   Password: '',
   First_Name: '',
   Last_Name: '',
   User_name: '',
   isVisible: false,
   secureText: true
  }
 }

 SignUpUser = (Email, Password, User_Name) => {

  if (User_Name && Email && Password) {

   firebase.auth().createUserWithEmailAndPassword(Email, Password)

    .then((response) => {

     db.collection("Users").add({

      'Email': Email,
      'Password': Password,
      'First_Name': this.state.First_Name,
      'Last_Name': this.state.Last_Name,
      'User_Name': User_Name

     });

     return Alert.alert(

      "Account Created Sucessfully",
      "",

      [

       { text: 'Ok', onPress: () => { this.setState({ isVisible: false }) } }

      ]
     )
    })

    .catch(function (error) {

     var ErrorMessage = error.code
     alert(ErrorMessage)

    })
  }
 }

 ShowModel = () => {
  return (

   <Modal animationType='slide' transparent={true} visible={this.state.isVisible}>

    <View style={styles.ModalContainer}>

     <ScrollView style={{ width: '100%' }}>

      <KeyboardAvoidingView style={{ marginTop: 30, alignSelf: 'center', justifyContent: 'center' }}>

       <Text style={styles.ModalTitle}>Sign In</Text>

       <TextInput

        style={styles.TextInputStyle}
        placeholder='FirstName'
        keyboardAppearance='dark'

        onChangeText={(text) => {

         this.setState({ First_Name: text })

        }}

       />

       <TextInput

        style={styles.TextInputStyle}
        placeholder='LastName'
        keyboardAppearance='dark'

        onChangeText={(text) => {

         this.setState({ Last_Name: text })

        }}
       />

       <TextInput

        style={styles.TextInputStyle}
        placeholder='Email'
        keyboardAppearance='dark'
        keyboardType='email-address'

        onChangeText={(text) => {

         this.setState({ Email_ID: text })

        }}
       />

       <TextInput

        style={styles.TextInputStyle}
        keyboardAppearance='dark'
        secureTextEntry={this.state.secureText}
        placeholder='Password'

        onChangeText={(text) => {

         this.setState({ Password: text })

        }}
       />

       <View>

        <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 6, marginTop: -19, marginLeft: 200, width: 100 }} onPressIn={() => {

         this.setState({ secureText: false })

        }}

         onPressOut={() => {

          this.setState({ secureText: true })

         }}>

         <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Unhide</Text>

        </TouchableOpacity>

       </View>


       <TextInput

        style={styles.TextInputStyle}
        placeholder='User-name'
        keyboardAppearance='dark'
        autoCompleteType='username'

        onChangeText={(text) => {

         this.setState({ User_name: text })

        }}
       />

       <View>

        <TouchableOpacity style={styles.ModalButton} onPress={() => {

         this.SignUpUser(this.state.Email_ID, this.state.Password, this.state.User_name)

        }}>

         <Text style={styles.LoginButtonText}>Register</Text>

        </TouchableOpacity>

       </View>

       <View>

        <TouchableOpacity style={styles.ModalButton} onPress={() => {

         this.setState({ isVisible: false })

        }}>

         <Text style={styles.LoginButtonText}>Cancel</Text>

        </TouchableOpacity>

       </View>
      </KeyboardAvoidingView>

     </ScrollView>

    </View >
   </Modal>

  )
 }

 render() {
  return (

   <View style={styles.container}>
    {this.ShowModel()}
    <View style={styles.LoginBox}>

     <View>

      <Text style={{ fontSize: 32, color: 'orange', fontWeight: 'bold', alignSelf: 'center', marginTop: -580, marginLeft: -290 }}>SignUp to continue...</Text>

     </View>

     <View>

      <View>

       <Image

        style={{ width: 70, height: 70, marginTop: -525, marginLeft: -174 }}
        source={require('../assets/LoginAvatar.png')}

       />

      </View>

      <TextInput

       style={styles.TextInputStyleEmail}
       placeholder='abc@example.com'

       onChangeText={(text) => {

        this.setState({

         Email_ID: text

        })
       }}
      />

     </View>

     <View>

      <TextInput

       style={styles.TextInputStylePassword}
       placeholder='Password'

       onChangeText={(text) => {

        this.setState({

         Password: text

        })
       }}
      />

     </View>

     <View>

      <TextInput

       style={styles.TextInputStyleUserName}
       placeholder='User-name'

       onChangeText={(text) => {

        this.setState({

         User_name: text

        })
       }}
      />

     </View>

     <View>

      <TouchableOpacity style={styles.LoginButton} onPress={() => {

       this.setState({ isVisible: true })

      }}>

       <Text style={styles.LoginButtonText}>Sign up</Text>

      </TouchableOpacity>

     </View>

     <View>

      <TouchableOpacity style={{ alignSelf: 'center', marginLeft: -300, marginTop: -200 }} onPress={() => {

       this.props.navigation.navigate("LoginScreen")

      }}>

       <Text style={styles.newUser}>already have an account? click here</Text>

      </TouchableOpacity>


     </View>

    </View>

   </View >

  )
 }
}

const styles = StyleSheet.create({

 container: {

  flex: 1,
  backgroundColor: 'orange'

 },

 LoginBox: {

  borderRadius: 5,
  alignSelf: 'center',
  paddingTop: 600,
  paddingLeft: 300,
  marginTop: 100,
  backgroundColor: 'white'

 },

 TextInputStyleEmail: {

  alignSelf: 'center',
  marginTop: -450,
  marginLeft: -300,
  borderBottomWidth: 1.0,
  width: 200

 },

 TextInputStyleUserName: {

  alignSelf: 'center',
  marginTop: -360,
  marginLeft: -300,
  borderBottomWidth: 1.0,
  width: 200

 },

 TextInputStylePassword: {

  alignSelf: 'center',
  marginTop: -407,
  marginLeft: -300,
  borderBottomWidth: 1.0,
  width: 200

 },

 newUser: {

  color: 'blue',
  alignSelf: 'center',
  marginTop: 20
 },

 LoginButton: {

  backgroundColor: '#F26161',
  borderRadius: 30,
  alignSelf: 'center',
  width: 200,
  height: 30,
  marginLeft: -300,
  marginTop: -290
 },

 ModalButton: {

  backgroundColor: '#F26161',
  borderRadius: 30,
  alignSelf: 'center',
  width: 200,
  height: 30,
  marginLeft: -20,
  marginTop: 20
 },

 LoginButtonText: {

  fontWeight: 'bold',
  alignSelf: 'center',
  marginTop: 5,
  color: 'darkred'

 },

 ModalContainer: {

  alignSelf: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  marginRight: 90,
  marginLeft: 90,
  marginTop: 100,
  paddingLeft: 60,
  paddingRight: 60,
  marginBottom: 100,
  paddingBottom: 40,
  backgroundColor: 'white'

 },

 ModalTitle: {

  alignSelf: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: 'orange',
  fontWeight: 'bold',
  fontSize: 30

 },

 TextInputStyle: {

  alignSelf: 'center',
  justifyContent: 'center',
  borderBottomWidth: 0.1,
  width: 300,
  marginTop: 30,

 }
})