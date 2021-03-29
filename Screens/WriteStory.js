import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import firebase from 'firebase'
import db from '../config'
import CustomHeader from '../components/Header'

export default class WriteStory extends React.Component {

  constructor() {
    super()

    this.state = {

      Title: '',
      Story: '',
      Author: '',
      Type: '',
      User_Name: '',
      PublisherName: '',
      CurrentUser: firebase.auth().currentUser.email

    }
  }

  createRandomID = () => {

    return Math.random().toString(36).substring(7);

  }

  GetAllPublisherDetails = () => {

    db.collection("Users").where("Email", '==', this.state.CurrentUser).get()
      .then(snapshot => {

        snapshot.forEach(doc => {

          this.setState({

            PublisherName: doc.data().First_Name + " " + doc.data().Last_Name,
            User_Name: doc.data().User_Name

          })
        })
      })
  }

  SubmitUserStories = (Title, Story, Author, Type) => {

    if (Title && Story && Author && Type) {

      var RandomID = this.createRandomID();

      db.collection("All_Stories").add({

        "Title": Title,
        "Story": Story,
        "Author": Author,
        "User_Name": this.state.User_Name,
        "Type": Type,
        "Name": this.state.PublisherName,
        "Email": this.state.CurrentUser,
        "Random_ID": RandomID,
        "Likes": 0,
        "Views": 0,

      })

      alert("Story Published");

    } else {

      alert("Please Check All The Fields")

    }
  }

  componentDidMount = () => {

    this.GetAllPublisherDetails()

  }

  render() {
    return (

      <KeyboardAvoidingView>

        <View>

          <CustomHeader

            navigation={this.props.navigation}
            title='Story Writing'

          />

          <TextInput

            style={styles.TextInputTitle}
            placeholder='Title'

            onChangeText={(text) => {

              this.setState({ Title: text })

            }}
          />

          <TextInput

            style={styles.Story}
            multiline={true}
            placeholder='Write Story Here!'

            onChangeText={(text) => {

              this.setState({ Story: text })

            }}
          />

          <TextInput

            style={styles.TextInputAuthor}
            placeholder='Author'

            onChangeText={(text) => {

              this.setState({ Author: text })

            }}
          />

          <TextInput

            style={styles.TextInputTitle}
            placeholder='Type(eg: fantasy)'

            onChangeText={(text) => {

              this.setState({ Type: text })

            }}
          />

          <TouchableOpacity style={styles.Publish} onPress={() => {

            this.SubmitUserStories(this.state.Title, this.state.Story, this.state.Author, this.state.Type)

          }}>

            <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: 'white', marginTop: 4 }}>Publish</Text>

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

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

  TextInputAuthor: {

    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1.0,
    width: 600,
    marginTop: 60,
    FontWeight: 'bold',
    fontFamily: 'Montserrat',

  },

  Story: {

    borderRadius: 4,
    fontWeight: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 600,
    height: 300,
    marginTop: 10,
    FontWeight: 'bold',
    fontFamily: 'serif',
    backgroundColor: '#F7F7F7',
    fontSize: 17

  },

  Publish: {

    alignSelf: 'center',
    backgroundColor: '#F4C400',
    marginTop: 10,
    width: 200,
    height: 30,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FFD480'

  }
})
