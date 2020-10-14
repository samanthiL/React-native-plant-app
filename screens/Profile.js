
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
var {height, width } = Dimensions.get('window');
import api from '../Api.json';
import Swiper from 'react-native-swiper/src';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
export default class Profile extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner:[],
      dataCategories:[],
      selectCatg:0,
      dataFood:[],
      carts:[]
      
    }
  }
 
  componentDidMount(){

    this.setState({
        
          dataBanner: api.banner,
          dataCategories: api.categories,
          dataFood:api.food

        });

  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
         
       
          <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'white'}}>
            <Text style={styles.titleCatg}>Categories {this.state.selectCatg}</Text>
           
            <TouchableOpacity
            //  onPress={()=>this.next()}
             
            style={{
              width:(width/2)-40,
              backgroundColor:'#33c37d',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:4,
              flexDirection:'row'
            }}>
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add asasa</Text>
            <View style={{width:10}} />
</TouchableOpacity>

            <FlatList
              horizontal={true}
              data={this.state.dataCategories}

              renderItem={({ item }) => (


                <TouchableOpacity style={[styles.divFood]}
                onPress={()=>this.setState({selectCatg:item.id})}>                 
                 <Image
                    style={{width:200,height:90}}
                    resizeMode="contain"
                    source={{uri : item.image}} />                  
                  <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
                </TouchableOpacity>

                  )}
                  keyExtractor = { (item,index) => index.toString() }

/>          
<FlatList
              //horizontal={true}
              data={this.state.dataFood}
              numColumns={2}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor = { (item,index) => index.toString() }
            />
           
              <View style={{height:20}} />
          </View>

      </View>
      </ScrollView>
    );
  }

  _renderItemFood(item){

    const { navigation } = this.props;
 

    let catg = this.state.selectCatg
    if(catg==item.categorie)
    {
      // const id = item.id;
      // console.log("rr",id)
      return(
      
  
        <TouchableOpacity style={styles.divFood}  onPress={() => navigation.navigate('Test', {itemid: item.id})} >
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri:item.image}} />
            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
              {item.name}
            </Text>
          
            <Text style={{fontSize:20,color:"green"}}>${item.price}</Text>
            <Text style={{fontSize:20,color:"blue"}}>{item.description}</Text>


          </TouchableOpacity>
         )
    }
  }
// next ()
// {
//   const { navigation } = this.props;
//   const carts = this.state.carts
//  console.log("asasss",carts)

//   navigation.navigate('Test',carts)

// }

//   onClickAddCart = async (id,name) => {

//     const cart  = []
//     const carts = this.state.carts
//     if (name !== null) {

//  cart.push(name)
//  carts.push(name)
// //  console.log("asasss",carts)
//  console.log("asassssdsdsdss", JSON.stringify(carts))
//  await AsyncStorage.setItem( 'items',JSON.stringify(carts));
// // const va = await AsyncStorage.getItem('items')
// //  console.log("sdsdsds",va)


// }


 }

const styles = StyleSheet.create({
  imageBanner: {
    height:width/2,
    width:width-40,
    borderRadius:10,
    marginHorizontal:20
  },
  divCategorie:{
     backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    padding:10,
  

  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  } ,
  imageFood:{
    width:((width/2)-20)-10,
    height:((width/2)-20)-30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:55,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  } 
});