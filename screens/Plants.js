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
// import Swiper from 'react-native-swiper'
import Swiper from 'react-native-swiper/src';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
export default class Plants extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner:[],
      dataCategories:[],
      selectCatg:0,
      dataFood:[],

    }
  }
 
  componentDidMount(){
    // const url = "http://tutofox.com/foodapp/api.json"
    // return fetch(url)
    // .then((response) => response.json())
    // .then((responseJson) => {

    //   this.setState({
    //     isLoading: false,
    //     dataBanner: responseJson.banner,
    //   });

    // })
    // .catch((error) =>{
    //   console.error(error);
    // });

    this.setState({
        
          dataBanner: api.banner,
          dataCategories: api.categories,
          dataFood:api.food

        });
  

  }
 

  
  // _renderItem(item){
  //   return(
  //     <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]}
  //     onPress={()=>this.setState({selectCatg:item.id})}>
  //       <Image
  //         style={{width:100,height:80}}
  //         resizeMode="contain"
  //         source={{uri : item.image}} />
  //       <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
  //     </TouchableOpacity>
  //   )
  // }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
           <View style={{width: width, alignItems:'center'}} >
              <Image style={{height:60,width:width/2,margin:10 }} resizeMode="contain" source={require("../assets/images/plants_1.png")}  />
              <Swiper style={{height:width/2}} >
                {
                  this.state.dataBanner.map((items)=>{
                    return(
                      <Image style={styles.imageBanner} resizeMode="contain" source={{uri:items}}/>
                    )
                  })
                }
              </Swiper>
              
      
                    
              <View style={{height:20}} />
          </View>
       
       
          <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'white'}}>
            <Text style={styles.titleCatg}>Categories {this.state.selectCatg}</Text>
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

 
                // <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]}
                // onPress={()=>this.setState({selectCatg:item.id})}>
                //   <Image
                //     style={{width:100,height:80}}
                //     resizeMode="contain"
                //     source={{uri : item.image}} />
                //   <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
                // </TouchableOpacity>
             


              // renderItem={({ item }) => this._renderItem(item)}

              // keyExtractor = { (item,index) => index.toString() }
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

      return(
      
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri:item.image}} />
            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
              {item.name}
            </Text>
            <Text style={{fontSize:20,color:"green"}}>${item.id}</Text>

            <Text style={{fontSize:20,color:"green"}}>${item.price}</Text>
            <Text style={{fontSize:20,color:"blue"}}>{item.description}</Text>
            <TouchableOpacity
            onPress={()=>this.onClickAddCart(item)}
              // onPress={() =>
              // navigation.navigate('Profile',{name:(item)})}
            //  onPress={()=>this.onClickAddCart(item)}

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
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
            <View style={{width:10}} />
          </TouchableOpacity>
          </TouchableOpacity>
         )
    }
  }

//   onClickAddCart(data){
// console.log("ASASASASA",data);
//   const itemcart = {
//     food:data,
//     quantity:1,
//     price:data.price
//   }
//   console.log("sasasasasas",data.name);

  // AsyncStorage.getItem('cart').then((datacart)=>{
  //   if (datacart !== null) {
  //     // We have data!!
  //     const cart = JSON.parse(datacart)
  //     cart.push(datacart)
  //     AsyncStorage.setItem('cart',JSON.stringify(cart));
  //     console.log("dsds",datacart)
  //   }
  //   else{
  //     const cart  = []
  //     cart.push(itemcart)
  //     AsyncStorage.setItem('cart',JSON.stringify(cart));
  //   }
  //   alert("Add Cart")
  // })
  // .catch((err)=>{
  //   alert(err)
  // })


}
// }

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