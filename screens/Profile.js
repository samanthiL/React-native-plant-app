
import React, { Component } from 'react';
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  Button,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import api from '../Api.json';
import { floor } from 'react-native-reanimated';
var { height, width } = Dimensions.get('window');
import { AsyncStorage } from 'react-native';

import backicon from '../assets/icons/back.png'
var SampleArray = [];
export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFood: [],
      carts: [],

    }
  }
  componentDidMount() {
    this.setState({
      dataFood: api.food,
    });
  }

  render() {
    const { navigation } = this.props;

    const socialMediaList = api.food;
    let itemids = this.props.route.params;


    console.log("iiiii",itemids);
    return (

      <View >
        <ScrollView>


          {socialMediaList.map(s => {
            if (itemids.itemid == s.id) {

              let data = s.name
              AsyncStorage.setItem(
                'name', JSON.stringify(data)

              );
              return (
                <View>
                  <View style={styles.header}>
                    <ImageBackground source={{ uri: s.image }} style={styles.image}>
                    </ImageBackground>
                  </View>
                  <View>

                    <View style={styles.content}>
                      <Text bold style={styles.mainheadertext}>{s.name}</Text>
                      <Text style={styles.headertext}>BotanicalName
</Text>
                      <Text style={styles.botinal}> {s.BotanicalName}</Text>

                      {(s.Commonnames == null) ? null : <Text style={styles.headertext}>Common names

                      <Text style={styles.info}> {s.Commonnames}</Text></Text>}
                      <Text style={styles.headertext}>Description
</Text>


                      <Text style={styles.info}> {s.description}</Text>


                      {(s.types == null) ? null : <Text style={styles.subheadertext}>types:   <Text style={styles.info}>{s.types}</Text></Text>}


                      
                  {(s.medicaltretment == null) ? null : <Text style={styles.subheadertext}>medical uses:   <Text style={styles.info}>{s.medicaltretment}</Text></Text>}

                      <Text style={styles.headertext}>How to care plant
</Text>


                      {(s.Exposure == null) ? null : <Text style={styles.subheadertext} >Exposure<Text style={styles.info}>   {s.Exposure}</Text></Text>}

                      {(s.Water == null) ? null : <Text Bold style={styles.subheadertext}>Water:  <Text style={styles.info}>{s.Water}</Text></Text>}


                      {(s.Colorvarieties == null) ? null : <Text style={styles.subheadertext}>Color varieties:  <Text style={styles.info}>{s.Colorvarieties}</Text></Text>}

                      {(s.Diseases == null) ? null : <Text style={styles.subheadertext}>Diseases:   <Text style={styles.info}>{s.Diseases}</Text></Text>}



                      <View>


                      </View>

                    </View>
                  </View>
                </View>
              )
            }
          })}
        </ScrollView>
      </View>


    )
  }
}
const styles = StyleSheet.create({

 
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },

  header: {
    height: 250
    // height: 200,
  },

  avatar: {
    width: 270,
    height: 250,
    marginTop: -50,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf: 'center',
    position: 'absolute',
  },


  bodyContent: {
    alignItems: 'center',
    backgroundColor: "white",

  },
  content: {
    backgroundColor: 'white',

    // pkadding:33
    padding: 25,

    justifyContent:'center'
    // paddingRight: 42
  },
  mainheadertext: {
    marginTop: 10,
    fontSize: 35,
    color: "#8E4115",
    fontWeight: "900",
    textAlign: 'center',

  },

  headertext: {
    fontSize: 23,
    margin: 19,
    color: "#0C5515",
    fontWeight: "100",
    textAlign: 'left',

  },
  subheadertext: {
    fontSize: 21,
    margin: 7,
    color: "#06480E",
    fontWeight: "900",

  },
  info: {
    fontSize: 18,
    color: "black",
    justifyContent: 'center',
    textAlign: 'left'

  },

  botinal: {
    fontSize: 18,
    color: "black",
    justifyContent: 'center',
    textAlign: 'left',
    fontStyle: 'italic'
  },
  description: {
    fontSize: 16,
    color: "black",

    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
    flex: 1,
    paddingRight: 40
  },
  buttonleft: {
    height: 50,
    marginTop: 59,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "black",
    backgroundColor: "#00BFFF",
    borderRadius: 9,
    marginBottom: 12
  },

  leftItem: {
    height: 45,
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    flex: 1,
    paddingLeft: 2
  },
  rightItem: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 40
  },

});
