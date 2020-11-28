
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import firebase from '../../database/firebaseDb';
import Header from '../../component/Header';

export default class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      show: true,
      hide: false,
      isLoding: false,
      isEMailError: null, 
      isLNameError: null, 
      isPasswordError: null,

    }

  }


  validateEmail() {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState((state) => {
      let isEMailError = null;
      if (state.email && state.email.length > 0) {
        if (!regEx.test(String(state.email).toLowerCase())) {
          isEMailError = 'You have entered an invalid e-mail address.';
        }
      } else {
        isEMailError = 'Please enter an e-mail address.';
      }
      return { isEMailError };
    });
  }

  checkPassword() {
    this.setState((state) => {
      let isPasswordError = null;
      let isVerifyPasswordError = null;
      if (state.password && state.password.length > 0) {
        if (state.password.length < 6) {
          isPasswordError = 'Password must contain at least 6 characters.';
        } 

      } else {
        isPasswordError = 'Password is required.';
      }

      return { isPasswordError };
    });
  }


  componentDidMount() {
    console.log("ssssssdsds", this.state.show);
    this.setState({ isLoding: true })
  }
  ShowHideComponent() {


    console.log("Fsfd", this.state.show);
    if (this.state.show == true) {

      this.setState({ show: false });
      this.setState({ hide: true });


    } else {
      this.setState({ show: true });
    }
  }

  hide = () => {
    if (this.state.hide == true) {
      this.setState({ hide: false });
      this.setState({ show: true });
    } else {
      this.setState({ hide: true });
    }
  };

  SignIn(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {

        var userid = firebase.auth().currentUser.uid;
        var email = firebase.auth().currentUser.email;

        console.log("ggggggggggggggg", userid);
        this.props.navigation.navigate('Home');
      }).catch((e) => {
        console.log('fail', e);

      })

  }

  SignUp(username, email, password) {
console.log("hghghg",email,username,password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {

        var userid = firebase.auth().currentUser.uid;
        var email = firebase.auth().currentUser.email;

        console.log("ggggggggggggggg", userid);

        const db = firebase.database();

        db.ref('/users/' + userid).set({

          email: email,
          username: username

        })

      }).then((e) => {
        console.log('success');
        this.props.navigation.navigate('Home');

      }).catch((e) => {
        console.log('fail', e);

      })


  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <Header />
          <View style={styles.subcontainer}>

            {this.state.show ? (

              <View style={{ margin: 10 }}>
                <Text bold style={styles.headertext}>Sign in here</Text>

                <TextInput
              // style={ (!this.state.isEMailError) ? styles.input : styles.errorTextField}

              style={styles.input}
                  placeholder='email'
                  autoCapitalize="none"
                  onBlur={() => this.validateEmail()}
                  onChangeText={email => this.setState({ email })}
                />
          { (this.state.isEMailError) ? <Text style={styles.validationError}>{this.state.isEMailError}</Text> : null }

                <TextInput
                  // style={styles.input}
                  password
                  style={styles.input}

                  // style={ (!this.state.isPasswordError ) ? styles.input : styles.halfPasswordErrorTextField} 
                  placeholder="* Min. 6 characters"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  placeholder="Password"
                  onBlur={() => this.checkPassword()}
                  onChangeText={password => this.setState({ password })}
                />
 { (this.state.isPasswordError) ? <Text style={styles.validationError}>{this.state.isPasswordError}</Text> : null }

                <TouchableOpacity style={styles.buttonLeft} onPress={() => this.SignIn(this.state.email, this.state.password)}>
                  <Text style={styles.buttontext}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRight} onPress={() => this.ShowHideComponent()}>
                  <Text style={styles.buttontext}>Sign up</Text>
                </TouchableOpacity>

                <View style={{ margin:  50}}>
                </View>

              </View>
            ) : null}

            {this.state.hide ? (

              <View style={{ margin: 10 }} >
                <Text bold style={styles.header}>Sign up here</Text>
                <TextInput

                  style={styles.input}
                  autoCapitalize="none"
                  placeholder="username"
                  onChangeText={username => this.setState({ username })}
                />

             
              <TextInput
              style={ (!this.state.isEMailError) ? styles.input : styles.errorTextField}

                  placeholder='email'
                  autoCapitalize="none"
                  onBlur={() => this.validateEmail()}
                  onChangeText={email => this.setState({ email })}
                />
          { (this.state.isEMailError) ? <Text style={styles.validationError}>{this.state.isEMailError}</Text> : null }

                <TextInput
                  // style={styles.input}
                  password
                  style={styles.input} 
                  placeholder="* Min. 6 characters"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onBlur={() => this.checkPassword()}
                  onChangeText={password => this.setState({ password })}
                />
 { (this.state.isPasswordError) ? <Text style={styles.validationError}>{this.state.isPasswordError}</Text> : null }

                <View style={styles.containers}>
                  <TouchableOpacity style={styles.SignUpbtn} onPress={() => this.SignUp(this.state.username, this.state.email, this.state.password)}>
                    <Text style={styles.buttontext}>Continue</Text>
                  </TouchableOpacity>
                </View>

              </View>
            ) : null}
          </View>

        </View>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D3F2BA"},
  subcontainer: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -10,
    backgroundColor: "#D3F2BA"
  },

  header: {
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 10,

  },

  headertext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 40,
    
    fontWeight: "bold",
   margin:10
  },

  input: {
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    color: 'black',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  },


  buttonRight: {
    right: 10,
    position: 'absolute',
    bottom:20,
    backgroundColor: '#39988c',
    width: "35%",

  },
  buttonLeft: {
    left: 10,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#39988c',
    width: "35%",

  }
  ,
  buttontext: {
    textAlign: "center", padding: 10, color: "white", fontSize: 23
  },
  containers: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  SignUpbtn: {
    marginBottom: 12,
    textAlign: 'center',
    width: "40%",
    height: 50,
    backgroundColor: '#39988c',
    marginTop: 12

  },
  validationError: {
    fontSize: 18,
    color: '#d84237',
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
  },
  halfPasswordErrorTextField: {
    // borderBottomColor: '#d84237',
    textAlign: 'center',
    // marginLeft: 20,
    // marginRight: 20,
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 30,
    paddingBottom: 10,
    // borderBottomWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',

    margin: 10,
    fontSize: 12,
    // width: '80%'
  },

  errorTextField: {
    textAlign: 'center',
    // marginLeft: 20,
    // marginRight: 20,
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 30,
    paddingBottom: 10,
    borderColor:'red',
    // borderBottomWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'black',

    margin: 10,
    fontSize: 12,
  },

});



