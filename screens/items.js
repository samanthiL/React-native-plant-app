
import React, { Component } from 'react';
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
var { height, width } = Dimensions.get('window');
import api from '../Api.json';


export default class items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectCatg: '',
      dataFood: [],
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    let selcteditem = this.props.route.params;
    console.log("sdd", selcteditem.itemid);

    let item = selcteditem.itemid;
    console.log("itemaaaaaaaaaaaaaaa",item);

    this.setState({
      dataFood: api.food,
      selectCatg: item
    });
  }
  render() {
    const { navigation } = this.props;
    return (
     
     <SafeAreaView> 
     <ScrollView>
        <View>

          <View style={{ width: width, backgroundColor: '#D3F2BA' }}>
            <FlatList
               vertical={true}
              //  horizontal={true}
               numColumns={2}
              data={this.state.dataFood}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }


  _renderItemFood(item) {

    const { navigation } = this.props;

    let catg = this.state.selectCatg
    console.log("ids",item.categorie);
    if (catg == item.categorie) {
      let ids = item.id;
    

      return (
        <TouchableOpacity style={styles.divFood} onPress={() => navigation.navigate('Profile', { itemid: ids })} >
          <Image
            style={{ width: 150, height: 125 }}
            resizeMode="contain"
            source={{ uri: item.image }} />
          <Text style={{ marginTop: 8, fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
        </TouchableOpacity>

      )
    }
  }


}

const styles = StyleSheet.create({

  header: {
    fontSize: 27,
    color: "blue",
    fontWeight: 'bold',
    marginTop: 16
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
    backgroundColor: 'white',
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
  }
});






