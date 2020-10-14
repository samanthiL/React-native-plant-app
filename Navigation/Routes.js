import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Plants from "../screens/Plants";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Test from "../screens/Test";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
 <Stack.Navigator >
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const route = createDrawerNavigator({
//   Plants: {
//    screen: Plants,
//    navigationOptions: {
//        title: 'palbts',
//    }
//   },
//   Cart: {
//     screen: Cart,
//     navigationOptions: {
//         title: 'Cart',
//     }
//    },
//    Profile: {
//     screen: Profile,
//     navigationOptions: {
//         title: 'Profile',
//     }
//    }
// });
// export default NavigationContainer(route);


// <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>


