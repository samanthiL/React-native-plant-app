
import {
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  View,
  Button

} from 'react-native';
var { height, width } = Dimensions.get('window');

import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

import Plants from "./screens/Plants";
import Cart from "./screens/Cart";
import Profile from "./screens/Profile";
import Profiles from "./screens/Profiles";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Test from "./screens/Test";
import Routes from "./Navigation/Routes"
import { render } from 'react-dom';


const Drawer = createDrawerNavigator();
// 
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator >
          <Drawer.Screen name="Profile" component={Profile} style={{ fontSize: 26, fontWeight: "bold" }} />
          <Drawer.Screen name="Signin" component={Signin} style={{ fontSize: 26, fontWeight: "bold" }} />
          <Drawer.Screen name="Signup" component={Signup} style={{ fontSize: 26, fontWeight: "bold" }} />
          <Drawer.Screen name="Plants" component={Plants} style={{ fontSize: 26, fontWeight: "bold" }} />
          <Drawer.Screen name="Test" component={Test} style={{ fontSize: 26, fontWeight: "bold" }} />
        </Drawer.Navigator>
      </NavigationContainer>

    )

  }

}