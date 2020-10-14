

import React, { Component } from 'react'
import { Text, ScrollView, View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import facebook from '../assets/facebook.png';
import Google from '../assets/Google.png';
import star from '../assets/star.png';

export default class Signup extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{
                        fontSize: 35, marginTop: 10,
                        //  <Text style={{fontSize:25, marginTop:70,
                        textAlign: 'left', marginLeft: 35, color: "Black", fontWeight: "bold"
                    }}>Sign Up</Text>
                    
                    <Text style={{ fontSize: 15, color: '#828282', textAlign: 'left', marginLeft: 35, marginTop: 30 }}>
                        USERNAME:</Text>

                    <TextInput
                        style={{
                            height: 40, flex: 0.28,
                            borderBottomWidth: 1, marginRight:25,
                            borderBottomColor: '#bbbbbb', marginTop: 4, borderBottom: 2, textDecorationColor: 'black', marginLeft: 25, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}
                    >
                        <Text> <Image source={star} style={{ width: 5, height: 10, marginLeft: 30 }} />Your email (eg: johnsmith@abc.com)</Text>
                    </TextInput>

                    <View style={styles.row}>
                        <View>
                            <Text style={{ fontSize: 15, color: '#bbbbbb', marginTop: 10 }}>
                                PASSWORD:</Text>
                            <TextInput
                                password
                                style={{

                                    borderBottomWidth: 1,
                                    borderBottomColor: '#bbbbbb', borderBottom: 2, fontSize: 18,
                                }}
                            >
                                <Text style={{ fontSize:15 }}  ><Image source={star} style={{ width: 5, height: 10,marginLeft: 30 }} />Minimum 6 characters</Text>
                            </TextInput>


                        </View>
                        <View>
                            <Text style={{ fontSize: 15, color: '#bbbbbb', marginLeft:3,marginTop: 10 }}>
                                CONFIRM PASSWORD:</Text>
                            <TextInput
                                password
                                style={{

                                    borderBottomWidth: 1, width: 125, marginLeft: 10,
                                    borderBottomColor: '#bbbbbb', borderBottom: 2, fontSize: 18
                                }}

                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                    <TextInput
                        style={{
                            height: 40, flex: 0.50,
                            borderBottomWidth: 1,
                            borderBottomColor: '#bbbbbb', marginTop: 4, borderBottom: 2, textDecorationColor: 'black', textAlign: 'left', marginLeft: -7, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}

                    >  <Text><Image source={star} style={{ width: 5, height: 10, marginLeft: 30 }} />Your First name</Text>
                    </TextInput>


                    <TextInput
                        style={{
                            height: 40, flex: 0.54, color: "BLACK",
                            borderBottomWidth: 1,
                            borderBottomColor: '#bbbbbb', marginTop: 4, borderBottom: 2, textDecorationColor: 'black', textAlign: 'right',marginLeft:35, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}
                    >

                        <Text><Image source={star} style={{ width: 5, height: 10, marginLeft: 30 }} />Last name</Text>
                    </TextInput>
</View>

                    <TextInput
                        style={{
                            height: 40, flex: 0.28,
                            borderBottomWidth: 1, width: 245, borderBottomColor: '#bbbbbb', marginTop: 4, borderBottom: 2, textAlign: 'left', marginLeft: 35, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}
                    >
                        <Text><Image source={star} style={{ width: 5, height: 10, marginLeft: 30 }} />Gender</Text>
                    </TextInput>
                    <TextInput
                        style={{
                            height: 40, flex: 0.28,
                            borderBottomWidth: 1, width: 245, color: "black",
                            borderBottomColor: '#bbbbbb', marginTop: 4, borderBottom: 2, textDecorationColor: 'black', textAlign: 'left', marginLeft: 35, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}
                        placeholder="Mobile phone(optional)"
                    >
                        <Text style={{ flexDirection: "row" }}>
                            <Text><Image source={star} style={{ width: 5, height: 10, marginLeft: 30 }} />Mobile phone </Text>
                            <Text style={{
                                color: "#bbbbbb"
                            }}> (optional)</Text>
                        </Text>
                    </TextInput>

                    <TextInput
                        style={{
                            height: 40, flex: 0.28,
                            borderBottomWidth: 1, width: 245,
                            borderBottomColor: '#bbbbbb', marginTop: 4, borderBottom: 2, textDecorationColor: 'black', textAlign: 'left', marginLeft: 35, borderColor: "#bbbbbb", border: 3, fontSize: 15
                        }}

                    >
                        <Text style={{ flexDirection: "row" }}>
                            <Text><Image source={star} style={{ width: 20, height: 15, marginLeft: 30 }} />Nationalidentity</Text>

                            <Text style={{
                                color: "#bbbbbb"
                            }}> (optional)</Text>
                        </Text>
                    </TextInput>


                    <TouchableOpacity style={styles.buttonleft}>
                        <Text style={{
                            textAlign: 'center',
                            marginTop: 9,
                            color: "#fffbf5",
                            fontSize: 22,
                        }}>Sign Up</Text>
                    </TouchableOpacity>


                    <Text onPress={() => navigation.navigate('Signin')} style={{ textAlign: 'center', color: '#bbbbbb', fontSize: 15 }}>Already have an account ? <Text style={{ color: '#0dacee', fontSize: 15 }}> Sign In
                </Text></Text>

                    <View style={styles.row}>
                        <Text style={styles.border} />
                        <Text style={{ color: '#bbbbbb', fontSize: 15 }}>OR</Text>
                        <Text style={styles.border}
                        ></Text>

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
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',

    },
    buttonTop: {
        right: 10,
        height: 45,
        width: 45,
        borderColor: "black",
        position: 'absolute',
        top: 10,
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
        marginTop: 59,
        marginLeft: 20,
        marginRight: 20,
        borderColor: "black",
        backgroundColor: "#00BFFF",
        borderRadius: 9,
        marginBottom: 12
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
});
