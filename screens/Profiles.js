
import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import api from '../Api.json';


// import Icon from 'react-native-vector-icons/Ionicons';
// export class profiles extends Component {
//   constructor(props)
//   {
//     super(props);
//     // this.state = {
//       // dataBanner:[],
//       // dataCategories:[],
//       // selectCatg:0,
//       // dataFood:[],
//       // carts:[]
      
// //  } 
//   }
 
//   componentDidMount(){

//     this.setState({
        
//           dataBanner: api.banner,
//           dataCategories: api.categories,
//           dataFood:api.food

//         });
  

//   }

//   render() {
//     const { navigation } = this.props;
//     return (
//       <View>
//  <FlatList
//               horizontal={true}
//               data={this.state.dataFood}
//               renderItem={({ item }) => (


//                 <TouchableOpacity style={[styles.divFood]}
//                 onPress={()=>this.setState({selectCatg:item.id})}>                 
//                  <Image
//                     style={{width:200,height:90}}
//                     resizeMode="contain"
//                     source={{uri : item.image}} />
                    
//                   <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>

//                 </TouchableOpacity>

//  )}
// />               </View>
//     )
//   }
// }

// export default profiles

export default class Profiles extends Component {
  constructor(props)
  {
    super(props);
  
  }
  
  
  render() {
    
    return (
      <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
        <Text>sfdfdsf</Text>
        <Text>sfdfdsf</Text>

        <Text>sfdfdsf</Text>

        <Text>sfdfdsf</Text>

      <Button 
         title={'Test'} 

         onPress={() => this.props.navigation.navigate('Test', {  itemid: 89 , text: 'Hello from screen 1'})} />
      </View>
    )
  }
}