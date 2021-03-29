import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import * as ImagePicker from 'expo-image-picker'

export default class CustomSideBarMenu extends React.Component {


  constructor() {
    super()

    this.state = {

      Image: '#',
      userId: firebase.auth().currentUser.email,
      UserName: ''

    }
  }

  GetAllUserDetails = () => {

    db.collection("Users").where("Email", '==', this.state.userId).get()
      .then(snapshot => {

        snapshot.forEach(doc => {

          this.setState({

            UserName: doc.data().First_Name + " " + doc.data().Last_Name,


          })
        })
      })
  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({

      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 3

    })

    if (!cancelled) {
      this.setState({

        Image: uri

      })
      this.uploadImage(uri, this.state.userId)

    }
  }

  uploadImage = async (uri, imageName) => {

    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase.storage().ref().child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    })

  }

  fetchImage = (imageName) => {
    var storageRef = firebase.storage().ref().child("user_profiles/" + imageName);

    storageRef.getDownloadURL()
      .then((url) => {
        this.setState({
          Image: url
        })

      })
      .catch((error) => {
        this.setState({
          Image: '#'
        })
      })
  }

  componentDidMount() {

    this.fetchImage(this.state.userId)
    this.GetAllUserDetails()
    
  }
  render() {
    return (

      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.8, marginTop: 14 }}>

          <Avatar
            rounded
            source={{

              uri: this.state.Image

            }}
            size="medium"
            onPress={() => {
              this.selectPicture();
            }}
            containerStyle={styles.imageContainer}
            showEditButton

          />

          <Text style={styles.Title}>{'Hello ' + this.state.UserName + ' Welcome back'}</Text>
          <DrawerItems {...this.props} />

        </View>

        <View style={styles.logOutContainer}>

          <TouchableOpacity style={styles.logOutButton} onPress={() => {

            firebase.auth().signOut()
            this.props.navigation.navigate("LoginScreen")

          }}>

            <Text style={styles.logOutText}>Log Out</Text>

          </TouchableOpacity>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({

  logOutContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',

  },

  logOutButton: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    marginTop: 200
  },

  logOutText: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  ImageContainer: {
    flex: 0.75,
    width: "20%",
    height: "20%",
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 40,
  },

  Title: {

  fontWeight: 'bold',
  marginTop: -10,
  marginLeft: 60,
  fontSize: 10


  }
})