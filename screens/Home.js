
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
  Alert

} from 'react-native';

var { height, width } = Dimensions.get('window');
import api from '../Api.json';
import Swiper from 'react-native-swiper/src';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataCategories: [],
      selectCatg: 0,
      dataFood: [],
      carts: []

    }
  }

  componentDidMount() {

    this.setState({

      dataBanner: api.banner,
      dataCategories: api.categories,
      dataFood: api.food

    });

  }
  
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          {/* <View style={{ flexDirection: 'row', backgroundColor: "white", marginTop: 30 }} >
            <Image style={{ height: 70, width: width / 2 }} resizeMode="contain" source={require("../assets/icon.png")} />
            <Text style={styles.header}>Plant app</Text>
          </View> */}
          <View style={{ width: width, alignItems: 'center', backgroundColor: "#D3F2BA" }} >
            <Swiper style={{ height: width / 2, marginTop: 25 }} >

              {
                this.state.dataBanner.map((items,key) => {
                  return (
                    <View key={key}> 


                    <Image style={styles.imageBanner} resizeMode="contain" source={{ uri: items }} />
                    </View>
                  )
                })
              }

            </Swiper>

            <View style={{ height: 10 }} />

            <FlatList
              vertical={true}
              numColumns={2}
              data={this.state.dataCategories}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor={(item, index) => index.toString()}

            />

          </View>
        </View>
{/* 
        <NavigationContainer>
          <Tabnavigator />
        </NavigationContainer> */}
      </ScrollView>

    );
  }

  _renderItemFood(item) {

    const { navigation } = this.props;

    let ids = item.id
   console.log("kkkkkkkkkkk", ids)
    return (

      <TouchableOpacity style={styles.divFood} onPress={() => navigation.navigate('items', { itemid: item.id })} >
        <Image

          style={{ width: 200, height: 90 }}
          resizeMode="contain"
          source={{ uri: item.image }} />

        <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )

  }


}

const styles = StyleSheet.create({


  header: {
    fontSize: 27,
    color: "blue",
    fontWeight: 'bold',
    marginTop: 16
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20
  },
  divCategorie: {
    backgroundColor: 'red',
    margin: 5, alignItems: 'center',
    borderRadius: 10,
    padding: 10,


  },
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
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  imageFood: {
    width: ((width / 2) - 20) - 10,
    height: ((width / 2) - 20) - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45
  },
  divFood: {
    width: (width / 2) - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 5,
    alignItems: 'center',
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: 'white',
  }
});


