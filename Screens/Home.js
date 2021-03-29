import * as React from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import CustomHeader from '../components/Header'
import firebase from 'firebase'
import db from '../config'

export default class Home extends React.Component {

  constructor() {
    super()

    this.state = {

      AllStories: ''

    }
    this.request = null
  }

  getAllStories = () => {

    this.request = db.collection("All_Stories")
      .onSnapshot((snapshot => {

        var All_Stories = snapshot.docs.map(document => document.data());

        this.setState({

          AllStories: All_Stories
                                                                                                                                                   
        })
      }))
  }

  AddView = () => {

   


  }

  componentDidMount = () => {

    this.getAllStories()

  }

  render() {
    return (


      <View>

        <CustomHeader

          navigation={this.props.navigation}
          title='Home'

        />

        <View>
          {

            this.state.AllStories.length === 0
              ? (

                <Text style={{ alignSelf: 'center', color: 'blue', fontSize: 30, marginTop: 100, fontWeight: 'normal' }}>Sorry No stories found!</Text>

              ) : (

                <FlatList

                  data={this.state.AllStories}
                  renderItem={({ item }) => {
                    return (

                      <View>
                        <ListItem bottomDivider>

                          <ListItem.Content>

                            <ListItem.Title>

                              {item.Title}

                            </ListItem.Title>

                            <ListItem.Subtitle>

                              {item.Type}

                            </ListItem.Subtitle>

                          </ListItem.Content>

                          <TouchableOpacity style={styles.ButtonStyle} onPress={() => {

                            this.AddView()
                            this.props.navigation.navigate("ReadScreen", { "Details": item })

                          }}>

                            <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>Read</Text>

                          </TouchableOpacity>

                        </ListItem>

                      </View>


                    )

                  }} />
              )
          }
        </View>

      </View >

    )
  }
}

const styles = StyleSheet.create({

  ButtonStyle: {

    alignSelf: 'center',
    backgroundColor: '#2196F3',
    width: 100,
    height: 30,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: 'darkblue'

  }
})