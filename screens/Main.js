
import React, { Component } from 'react';
import { Button,StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default class Main extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         
        <Text style={styles.logoText}>Welcome </Text>

        <Image style={{ marginTop:1,height: 430, width: width}} resizeMode="contain" source={require("../assets/icon.png")} /> 
       <View style = {styles.containers}>
         <TouchableOpacity style={styles.redbox} onPress={() => navigation.navigate('Signup')}> 
         <Text style={{textAlign:"center",padding:10,color:"white",fontSize:23}}>Get start</Text>
         </TouchableOpacity>
       
      </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
    containers: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      
     },
     redbox: {
      textAlign:'center',
        width:"60%",
        height:50,
        backgroundColor: '#83ba42'
     },
   
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',

  },
  text: {
    textAlign: 'center',
    color: "#0C5515",
    fontSize: 21,
  },
  logoText: {
    textAlign: 'center', 
    fontSize: 44,
    color: "#0C5515"
  },
  buttonLeft: {
    position: 'absolute',
    bottom: 30,
  }
});