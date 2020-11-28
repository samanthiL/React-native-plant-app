

import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class Loding extends Component {
    constructor(props) {
        super(props)
        this.state = {
         isLoding: false
        }
    
      }

 
render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />

            </View>
        )}
}
    
