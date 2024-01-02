import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Cart, Favorites, Home, Order, Profile } from '../screens/app';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const MainScreensNavigators = (): React.ReactNode => {
  return (
    <>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabelStyle: { fontFamily: "satoshi-bold", fontSize: 12 },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#CACACA",
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: "6.5%" },
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcons name="home-filled" size={27} color={focused ? "black" : "#CACACA"} />
            )
          }}
        />

        <Tabs.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabelStyle: { fontFamily: "satoshi-bold", fontSize: 12 },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#CACACA",
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: "6.5%" },
            tabBarIcon: ({ focused, size, color }) => (
              focused ? <MaterialCommunityIcons name="shopping" size={27} color="black" /> : <MaterialCommunityIcons name="shopping-outline" size={27} color={"#CACACA"} />
            )
          }}
        />

        <Tabs.Screen
          name="Order"
          component={Order}
          options={{
            tabBarLabelStyle: { fontFamily: "satoshi-bold", fontSize: 12 },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#CACACA",
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: "6.5%" },
            tabBarIcon: ({ focused, size, color }) => (
              !focused ? <AntDesign name="shoppingcart" size={27} color="#CACACA" /> : <MaterialIcons name="shopping-cart" size={27} color="black" />
            )
          }}
        />

        <Tabs.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabelStyle: { fontFamily: "satoshi-bold", fontSize: 12 },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#CACACA",
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: "6.5%" },
            tabBarIcon: ({ focused, size, color }) => (
              !focused ? <MaterialIcons name="favorite-border" size={27} color="#CACACA" /> : <MaterialIcons name="favorite" size={27} color="black" />
            )
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabelStyle: { fontFamily: "satoshi-bold", fontSize: 12 },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#CACACA",
            tabBarHideOnKeyboard: true,
            tabBarStyle: { height: "6.5%" },
            tabBarIcon: ({ focused, size, color }) => (
              !focused ? <FontAwesome5 name="user" size={27} color="#CACACA" /> : <FontAwesome5 name="user-alt" size={27} color="black" />
            )
          }}
        />
      </Tabs.Navigator>
    </>
  )
}

export default MainScreensNavigators;

