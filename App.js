import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Loding from './screens/Users/Loding';
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import items from './screens/items';
import Signup from "./screens/Users/Signup";
import Main from "./screens/Main";
 const Stack = createStackNavigator();

export default class App extends Component{


  constructor(props) {
    super(props);
     this.state = {
      dta: [],
     }
  }

render(){
    return (
      <NavigationContainer>
      <Stack.Navigator  
    //  initialRouteName="Main"
       screenOptions={{
        
        headerTintColor: 'red',
        headerStyle: { 
          backgroundColor:"white",
          height:80 }
      }} >
          <Stack.Screen  name="Main" component={Main}  options={{ headerShown: false }} />

 <Stack.Screen  name="Signup" component={Signup}    options={{ headerShown: false }}
        // options={{ title:' Sign in here', headerTintColor: "#0C5515", headerTitleStyle: {
        //   fontWeight: 'bold',fontSize:30}}}  />
       />
<Stack.Screen name="Home" component={Home}    
        options={{ title:'Select plant category', headerTintColor: "#0C5515", headerTitleStyle: {
          fontWeight: 'bold',fontSize:28
        },}}/>
       
        <Stack.Screen name="Profile" component={Profile} 
        
        
        options={{ title:'Plant Profile', headerTintColor: "#0C5515", headerTitleStyle: {
          fontWeight: 'bold',fontSize:28
        },}}
  />

     
        <Stack.Screen name="items" component={items}   
        options={{ title:'Plant items', headerTintColor: "#0C5515", headerTitleStyle: {
          fontWeight: 'bold',fontSize:28
        },}} />
        <Stack.Screen name="Loding" component={Loding} />        
      </Stack.Navigator>
    </NavigationContainer>

    )

  }
}