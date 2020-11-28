
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
  TouchableOpacity,
  Picker,


} from 'react-native';
import firebase from '../../database/firebaseDb';

var { height, width } = Dimensions.get('window');
import DropDownPicker from 'react-native-dropdown-picker';

export default class Userprofile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      items: [],
      getdata: [],
      states: '',
      gender: '',
      mobile: '',
      fname: '',
      lname: ''

    };

  };
  componentDidMount() {

    var userid = firebase.auth().currentUser.uid;

    const db = firebase.database();

    // db.ref('/users/'+userid).set({

    let itemsRef = db.ref('/users/' + userid);

    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      data = data
      console.log("DFsds", data);

      const itemss = data

      console.log("sdadssdsdsddssdsdsd", itemss);
      const getdata = [];
      getdata.push({
        email: itemss.email,
        username: itemss.username
      })
      this.setState({ getdata: getdata });
    });

  }

  Update(states, gender, mobile, fname, lname) {

    var userid = firebase.auth().currentUser.uid;

    const db = firebase.database();

    db.ref('/users/' + userid).update({

      states: states,
      gender: gender,
      mobile: mobile,
      fname: fname,
      lname: lname

    
  }).then((e) => {
    // console.log('success');

    alert("signup succesfully");

    this.props.navigation.navigate('Home');

  }).catch((e) => {
    console.log('fail', e);

  })


  }
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "#D3F2BA" }}>
        <View style={styles.divFood}>
          <Text bold style={{ color: 'blue', fontSize: 24, textAlign: 'center',marginTop:22,marginBottom:22 }}>My profile</Text>

          {this.state.getdata.map((getdata, index) => (

            <View>
              <View style={styles.customRow}>
                <View style={styles.column}>

                  <Text style={styles.info}> First name</Text>

                  <TextInput style={styles.textField} placeholder="username"

                    value={(getdata.fname) ? getdata.fname : this.state.fname}
                    onChangeText={fname => this.setState({ fname })} />
                </View>
                <View style={styles.column}>

                  <Text style={styles.info}> Last name</Text>

                  <TextInput style={styles.textField} placeholder="lname"

                    value={(getdata.lname) ? getdata.lname : this.state.lname}
                    onChangeText={lname => this.setState({ lname })} />
                </View>


              </View>
              <Text style={styles.info}>Contact number: </Text>

              <TextInput
                style={styles.textField} 
                autoCapitalize="none"
                placeholder="number"
                value={(getdata.mobile) ? getdata.mobile : this.state.mobile}
                onChangeText={mobile => this.setState({ mobile })}
              />

<View style={{flexDirection:'row'}}>
              <Text style={styles.info}>gender: </Text>
              <Picker style={styles.pickerStyle}

                selectedValue={(getdata.gender) ? getdata.gender : this.state.gender}
                onValueChange={(itemValue, itemPosition) =>
                  this.setState({ gender: itemValue })}
              >
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Male" value="Male" />
              </Picker>
</View>
<Text style={styles.info}>adress: </Text>

              <TextInput
               style={styles.textField} 
                autoCapitalize="none"
                placeholder="adress"
                value={(getdata.adress) ? getdata.adress : this.state.adress}
                onChangeText={adress => this.setState({ adress })}
              />



<View style={{flexDirection:'row'}}>
<Text style={styles.info}>states: </Text>
              <Picker style={styles.pickerStyle}

                selectedValue={(getdata.states) ? getdata.states : this.state.states}
                onValueChange={(itemValue, itemPosition) =>
                  this.setState({ states: itemValue })}
              >
                <Picker.Item label="Northern Province" value="Northern Province" />
                <Picker.Item label="Southern Province" value="Southern Province" />
                <Picker.Item label="Western Province" value="Western Province" />
                <Picker.Item label="Central Province" value="Central Province" />
              </Picker>

</View>
            </View>
          ))}
<View style={{height:120}}>


</View>
          <Button style={{ marginBottom: 4,marginTop:203, width: 180 }}
            onPress={() => this.Update(this.state.states, this.state.gender, this.state.mobile, this.state.fname, this.state.lname)} title="Press Me"
          >
            Press Me
</Button>



        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  pickerStyle: {
    marginTop:12,
    height: 20,
    width: "50%",
    color: 'blue',
    justifyContent: 'center',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  divFood: {
    // width: (width / 2) - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 48,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 5,
    // alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  },
  textField: {
    borderColor: '#e0dede',
    textAlign: 'left',
    // marginLeft: 30,
    marginRight: 20,
    paddingTop: 10,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    fontSize: 15
  },
  info: {
    fontSize: 16,
    color: "black",
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
  },
  customRow: {
    marginTop: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'flex-start',
  },

});