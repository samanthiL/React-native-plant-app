// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   ScrollView,

//   TouchableOpacity, Picker
// } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import moment from 'moment';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
//  import firebase from '../database/firebaseDb';
// const db = firebase.database();
// let itemsRef = db.ref('/profile');


// export default class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//       name: "",
//       adress: "",
//       gender: "",
//       dateofbirh: "",
//       description: "",
//       items: [],
//       isVisible: false,
//       chosedate: '',
//       date: '',
// item: ''
//     };
//   };  
//   handlePicker = (date) => {

//     this.setState({
//       isVisible: true,

//       dates: moment(date).format('MMMM ,Do YYYY HH:mm').split('T'),
//       chosedate: moment(date).format('MMMM ,Do YYYY _HH:mm'),
//       //  date: myString.split('_')[1].trim() ,
//       //      time: times
//     })

//     var myString = this.state.chosedate;
//     var date = myString.split('_')[0].trim();
//     ;
//     this.setState({ date });

//     // console.log("date", this.state.date);

//   }
//   hidePicker = () => {
//     this.setState({
//       isVisible: true,

//       // chosedate: moment(datetime).format('MMMM ,Do YYYY HH:mm')
//     })
//   }
//   showPicker = () => {


//     this.setState({
//       isVisible: true
//     })
//   }

//     componentDidMount() {
//       itemsRef.on('value', snapshot => {
//         let data = snapshot.val();
//         data = data
//         let items = Object.values(data);
//         this.setState({ items });
//   console.log("it",items)

// alert("Sdsfd",items)
// });

//     }

//   handleChange = e => {
//     this.setState({
//       name: this.state.name,
//       adress: this.state.gender,
//       price: 'ddd'
//     });
//   };

//   handleUpdate = (name, gender, date, adress) => {
//     console.log('success', name, gender, date, adress);

//     db.ref('/profile').update({
//       name: name,
//       adress: adress,
//       gender: gender,
//       date: date

//     }).then((e) => {
//       console.log('success', JSON.stringify(e));
//       alert('Item update successfully');

//     }).catch((e) => {
//       console.log('fail', JSON.stringify(e));

//     });
//   }

//   handleSubmit = (name, gender, date, adress) => {
//     console.log('success', name, gender, date, adress);
//     db.ref('/profile').push({
//       name: name,
//       adress: adress,
//       gender: gender,
//       date: date

//     }).then((e) => {
//       console.log('success', JSON.stringify(e));
//       alert('Item saved successfully');

//     }).catch((e) => {
//       console.log('fail', JSON.stringify(e));

//     });
//   }


//   render() {

//     return (

//       <ScrollView>
//  {/* {items.map((item, index) => {
        
//           return (    */}
//         <View style={styles.container}>

//           <View style={styles.header}></View>
//           <View style={styles.body}> 
//             <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} /> 

//             <Text style={styles.name}>{items.adress}</Text>
//             <Text style={styles.name}>{items.name}</Text>
//             <Text style={styles.name}>John xzxzxz</Text>
//             <Text style={styles.name}>John xzxzxz</Text> 

//             <View style={styles.ia}>
//               <Text style={styles.userNameText}>Full name:</Text>

//               <TextInput
//                 style={{ height: 40, fontSize: 18, marginLeft: 15 }}
//                 placeholder="kkkkk"
//                 value={this.state.name}
//                 onChangeText={name => this.setState({ name })}

//               />
//             </View>


//             <View style={styles.ia}>

//               <Text style={styles.userNameText}> Gender </Text>
//               <DropDownPicker
//                 items={[
//                   { label: ' Female', value: 'Female' },
//                   { label: 'Male', value: 'Male' }
//                 ]}
//                 placeholder={this.state.gender}
//                 defaultValue={this.state.gender}
//                 containerStyle={{ height: 40 }}
//                 style={{ backgroundColor: '#fafafa', width: 140 }}
//                 itemStyle={{
//                   justifyContent: 'flex-start'
//                 }}
//                 dropDownStyle={{ backgroundColor: '#fafafa' }}
//                 onChangeItem={item => this.setState({
//                   gender: item.value
//                 })}
//               />
//             </View>

//             <View style={styles.ia}>

//               {/* <Text style={styles.userNameText}>
//                     Dateofbirth:{this.state.chosedate}
//                   </Text> */}

//                <Text style={styles.userNameText} title="Show Date Picker" onPress={() => this.showPicker()}>
//                 Date of birth:</Text> 

//               {/* {this.state.date}
//            */}
              

//              <DateTimePickerModal
//                 isVisible={this.state.isVisible}
//                 //  isVisible ='true'

//                 mode="date"
//                 onConfirm={this.handlePicker}
//                 onCancel={this.hidePicker}
//                 mode={'date'}
//               /> 





//             </View>

//             <View style={styles.ia}>

//               <Text style={styles.userNameText}>
//                 Adress:</Text>


//                 <TextInput
//                 style={{ height: 40, fontSize: 18, marginLeft: 15 }}
//                 placeholder="ghhh"
//                 // value={item.adress}
//                 onChangeText={adress => this.setState({ adress })}

//               />

//             </View>

//             <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleSubmit(this.state.name, this.state.gender, this.state.date, this.state.adress)}
//             >

              
//               <Text>submit</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleUpdate(this.state.name, this.state.gender, this.state.date, this.state.adress)}
//             >
//               <Text>Update</Text>
//             </TouchableOpacity>

//           </View>

//         </View> 
// {/* 
//           )
//           })}

//            */}
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   ia: {
//     flexDirection: 'row',

//   },
//   container: {
//     backgroundColor: 'white',

//   },

//   header: {
//     backgroundColor: "#00BFFF",
//     height: 150,
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",

//     alignSelf: 'center',
//     backgroundColor: 'white',
//     marginTop: -70
//   },

//   input: {
//     // margin: 15,
//     // height: 40,
//     borderColor: 'black',
//     borderWidth: 1
//   },
//   userNameText: {
//     marginTop: 10,
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingBottom: 8,
//     textAlign: 'left',
//     marginLeft: 1

//   },
//   name: {
//     fontSize: 22,
//     color: "#FFFFFF",
//     fontWeight: '600',
//   },
//   body: {
//     marginTop: 30,
//     //   height:380,
//     padding: 10,
//     marginTop: 1,
//     marginBottom: 5,

//     alignItems: 'center',
//     elevation: 8,
//     shadowOpacity: 0.3,
//     shadowRadius: 50,
//     backgroundColor: 'green',
//   },
//   // bodyContent: {
//   //   flex: 1,
//   //   alignItems: 'center',
//   //   padding: 30,

//   // },
//   // name: {
//   //   fontSize: 28,
//   //   color: "#696969",
//   //   fontWeight: "600"
//   // },
//   // info: {
//   //   fontSize: 16,
//   //   color: "#00BFFF",
//   //   marginTop: 10
//   // },
//   // description: {
//   //   fontSize: 16,
//   //   color: "#696969",
//   //   marginTop: 10,
//   //   textAlign: 'center'
//   // },
//   buttonContainer: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 250,
//     borderRadius: 30,
//     backgroundColor: "#00BFFF",
//   },
// });



import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,

  TouchableOpacity, Picker
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
 import firebase from '../database/firebaseDb';
const db = firebase.database();
let itemsRef = db.ref('/profile');

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {

      name: "",
      adress: "",
      gender: "",
      dateofbirh: "",
      description: "",
      items: [],
      isVisible: false,
      chosedate: '',
      date: '',
item: ''
    };
  };  

    componentDidMount() {
      itemsRef.on('value', snapshot => {
        let data = snapshot.val();

        console.log("data",data)
        let items = data;
        this.setState({ items });
  // console.log("it",items)
   console.log("kkkkkkkkkkk",items.gender)

// alert("Sdsfd",items.gender)
});

    }

//   render() {

//     return (

//         <View style={styles.container}>

      
// {this.state.items.map((person, index) => (
//           <View>

//           <Text>Hello, {person.gender} from {person.country}!</Text>
//             <Text>gdg</Text>

//             <Text>gdg</Text>
//             <Text>gdg</Text>
//             </View>
//         ))}
// </View>   
//     )
//   }

renderClubData(){
  return  this.state.items.map((data,index) => {
    const {gender ,age} = c  //destructuring

    return (
      <View key={c.age}>
              
        <Text>xcxcxccxxc</Text>
        <Text>xcxcxccxxc</Text>
        <Text>xcxcxccxxc</Text>
        <Text>xcxcxccxxc</Text>
  <Text>{c.gender}</Text>
           <Text>xcxcxccxxc</Text>
           <Text>xcxcxccxxc</Text> 
           <Text>xcxcxccxxc</Text>
           <Text>xcxcxccxxc</Text>
           <Text>xcxcxccxxc</Text>
        
        
        </View>
    )
  })
}

render() {
  return (
  
    <View style={styles.container}>

    {this.renderClubData()}
</View>
  )
}
}

const styles = StyleSheet.create({
  ia: {
    flexDirection: 'row',

  },
  container: {
    backgroundColor: 'white',

  },

  header: {
    backgroundColor: "#00BFFF",
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",

    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: -70
  },

  input: {
    // margin: 15,
    // height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  userNameText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'left',
    marginLeft: 1

  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 30,
    //   height:380,
    padding: 10,
    marginTop: 1,
    marginBottom: 5,

    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'green',
  },
  // bodyContent: {
  //   flex: 1,
  //   alignItems: 'center',
  //   padding: 30,

  // },
  // name: {
  //   fontSize: 28,
  //   color: "#696969",
  //   fontWeight: "600"
  // },
  // info: {
  //   fontSize: 16,
  //   color: "#00BFFF",
  //   marginTop: 10
  // },
  // description: {
  //   fontSize: 16,
  //   color: "#696969",
  //   marginTop: 10,
  //   textAlign: 'center'
  // },
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
  },
});


