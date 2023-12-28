import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Cart, Favorites, Home, Order, Profile } from '../screens/app';

const Tabs = createBottomTabNavigator();

const MainScreensNavigators = (): React.ReactNode => {
  return (
    <>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={Home} />
          <Tabs.Screen name="Cart" component={Cart} />
          <Tabs.Screen name="Order" component={Order} />
          <Tabs.Screen name="Favorites" component={Favorites} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  )
}

export default MainScreensNavigators;

