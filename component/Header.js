
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  View,

} from 'react-native';
var { height, width } = Dimensions.get('window');
export class Header extends Component {
  render() {
    return (

      <View style={styles.header}>

        <View style={{ marginTop: 5, backgroundColor: "#D3F2BA" }} >
          <Image style={{ height: 300, width: width }} resizeMode="contain" source={require("../assets/icon.png")} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({


  header: {
    marginTop: 5,
    backgroundColor: "#D3F2BA"
  },

});

export default Header
