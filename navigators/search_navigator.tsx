import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchType } from './types'
import { Search } from '../screens/app';

const Stack = createNativeStackNavigator<SearchType>();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

export default SearchNavigator