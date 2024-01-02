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
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcons name="home-filled" size={24} color={focused ? "black" : "#CACACA"} />
            )
          }}
        />

        <Tabs.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              focused ? <MaterialCommunityIcons name="shopping" size={24} color="black" /> : <MaterialCommunityIcons name="shopping-outline" size={24} color={"#CACACA"} />
            )
          }}
        />

        <Tabs.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              !focused ? <AntDesign name="shoppingcart" size={24} color="#CACACA" /> : <MaterialIcons name="shopping-cart" size={24} color="black" />
            )
          }}
        />

        <Tabs.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              !focused ? <MaterialIcons name="favorite-border" size={24} color="#CACACA" /> : <MaterialIcons name="favorite" size={24} color="black" />
            )
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              !focused ? <FontAwesome5 name="user" size={24} color="#CACACA" /> : <FontAwesome5 name="user-alt" size={24} color="black" />
            )
          }}
        />
      </Tabs.Navigator>
    </>
  )
}

export default MainScreensNavigators;

