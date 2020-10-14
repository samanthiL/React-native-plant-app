
import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import facebook from '../assets/facebook.png';
import Google from '../assets/Google.png';

export default class Signin extends Component {
    render() {
        const { navigation } = this.props;

        return (

            <ScrollView>
                <View style={styles.container}>


                    <Text style={{
                        fontSize: 35, marginTop: 10,
                        //  <Text style={{fontSize:25, marginTop:70,
                        textAlign: 'left', marginLeft: 35, color: "Black", fontWeight: "bold"
                    }}>Ayubowan</Text>
                    
                    <Text style={{
                        fontSize: 23, marginTop: 30,
                        textAlign: 'left', marginLeft: 35, color: "Black", fontWeight: "bold"
                    }}>Sign in </Text>


                    <Text style={{ fontSize: 15, color: '#bbbbbb', textAlign: 'left', marginLeft: 35, marginTop: 30 }}>
                        USERNAME:</Text>

                    <TextInput
                        style={{
                            height: 40, flex: 0.28,
                            borderBottomWidth: 1, width: 245,
                            borderBottomColor: '#bbbbbb', borderBottom: 2, textDecorationColor: 'black', textAlign: 'left', marginLeft: 35, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}
                        placeholder="Johnsmith@abc.com"

                    />


                    <Text style={{ fontSize: 15, color: '#bbbbbb', marginBottom: -18, textAlign: 'left', marginLeft: 35, marginTop: 10 }}>
                        PASSWORD:</Text>
                    <View style={styles.row}>
                        <View>

                            <TextInput
                                password
                                style={{

                                    borderBottomWidth: 1, width: 270,
                                    borderBottomColor: '#bbbbbb', borderBottom: 3, fontSize: 18,
                                }}
                            >
                                <Text >.......................</Text>
                            </TextInput>


                        </View>

                        <Text style={{ fontSize: 15, color: "#00BFFF", right: 5, position: 'absolute' }}>
                            SHOW</Text>

                    </View>

                    <Text style={{ marginTop: 30, marginRight: 40, textAlign: 'right', color: '#bbbbbb', fontSize: 15 }}>Forgot password ?</Text>

                    <TouchableOpacity style={styles.buttonleft}>
                        <Text style={{
                            textAlign: 'center',
                            marginTop: 9,
                            color: "#fffbf5",
                            fontSize: 22,
                        }}>Sign in</Text>
                    </TouchableOpacity>


                    <Text onPress={() => navigation.navigate('Signup')} style={{ textAlign: 'center', color: '#bbbbbb', fontSize: 18 }}>Don't have an account ? <Text style={{ color: '#0dacee', fontSize: 18 }}> Sign Up</Text></Text>

                    <View style={styles.row}>
                        <Text style={styles.border} />
                        <Text style={{ color: '#bbbbbb', fontSize: 15 }}>OR</Text>
                        <Text style={styles.border} />


                    </View>
                    <View style={styles.row}>
                        <Image source={facebook} style={{ width: 45, height: 45, marginLeft: 30 }, styles.textleft} />
                        <Image source={Google} style={{ width: 45, height: 45, marginLeft: 40 }, styles.textright} />


                    </View>

                </View>
            </ScrollView>


        )
    }
}


const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        // backgroundColor: '#0DACEE',
        //  alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: ''
        //  justifyContent: 'center',

    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 55,
        color: "#fffbf5"
    },

    row: {
        flexDirection: 'row',
        marginTop: 25
        , marginLeft: 35,
        width: 279
    },
    buttonright: {
        right: 25,
        height: 45,
        width: 100,
        borderColor: "black",
        backgroundColor: "#00BFFF",

        position: 'absolute',
        bottom: 35,
    },
    buttonleft: {
        height: 50,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderColor: "black",
        backgroundColor: "#00BFFF",
        borderRadius: 9,
        marginBottom: 15
    },

    title: {
        fontSize: 18,
        marginBottom: 2,
    },
    borderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    border: {
        flex: 1.18,
        borderBottomWidth: 1,
        borderBottomColor: '#bbbbbb',
        width: 423
    },
    textleft: {
        left: 25,
        marginLeft: 23,
        marginBottom: 19

    },
    textright: {

        right: 32,
        position: 'absolute',
    },
    buttonTop: {
        right: 10,
        height: 45,
        width: 45,
        borderColor: "black",
        position: 'absolute',
        top: 10,
    },
});
