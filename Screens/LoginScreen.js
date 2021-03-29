import * as React from 'react'
import { View, KeyboardAvoidingView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput, Image, Modal } from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class LoginScreen extends React.Component {

  constructor() {
    super()

    this.state = {

      Email_ID: '',
      Password: '',
      isVisible: false

    }
  }

  LogInUser = async (Email, Password) => {

    if (Email && Password) {

      try {

        const Response = await firebase.auth().signInWithEmailAndPassword(Email, Password)

        if (Response) {

          alert('Login was sucessful')
          this.props.navigation.navigate("Home")

        }
      }
      catch (error) {

        var ErrorMessage = error.code

        alert(ErrorMessage)
        
      }
    }
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.LoginBox}>

          <View>

            <Text style={{ fontSize: 28, color: 'orange', fontWeight: 'bold', alignSelf: 'center', marginTop: -580, marginLeft: -300 }}>Login to continue...</Text>

          </View>

          <View>

            <View>

              <Image

                style={{ width: 70, height: 70, marginTop: -530, marginLeft: -188 }}
                source={require('../assets/LoginAvatar.png')}

              />

            </View>

            <TextInput

              style={styles.TextInputStyleEmail}
              placeholder='abc@example.com'
              keyboardAppearance='dark'
              keyboardType='email-address'
              autoCompleteType='email7'

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
              keyboardAppearance='dark'
              autoCompleteType='password'

              onChangeText={(text) => {

                this.setState({

                  Password: text

                })
              }}
            />

          </View>

          <View>

            <TouchableOpacity style={styles.LoginButton} onPress={() => {

              this.LogInUser(this.state.Email_ID, this.state.Password)

            }}>

              <Text style={styles.LoginButtonText}>Login</Text>

            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.newUser} onPress={() => {

              this.props.navigation.navigate("SignUpScreen")

            }}>

              <Text style={styles.newUser}>New User? click here to continue </Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>

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
    marginTop: -420,
    marginLeft: -300,
    borderBottomWidth: 1.0,
    width: 200

  },

  TextInputStylePassword: {

    alignSelf: 'center',
    marginTop: -360,
    marginLeft: -300,
    borderBottomWidth: 1.0,
    width: 200

  },

  LoginButton: {

    backgroundColor: '#F26161',
    borderRadius: 30,
    alignSelf: 'center',
    width: 200,
    height: 30,
    marginLeft: -300,
    marginTop: -300
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

  LoginButtonText: {

    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5,
    color: 'darkred'

  },

  LoginButtonText: {

    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5,
    color: 'darkred'

  },

  newUser: {

    alignSelf: 'center',
    marginLeft: -150,
    marginTop: -80,
    alignSelf: 'center',
    color: 'blue'
  },
})