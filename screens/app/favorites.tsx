import { View, Text } from 'react-native'
import React from 'react'
import { AppScreenLayout } from '../../layouts'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { appRootStackParamList } from '../../navigators/types'

const Favorites = ({ navigation }: { navigation: NativeStackNavigationProp<appRootStackParamList, "Home"> }) => {
  return (
    <AppScreenLayout>
      <Text>Favorites</Text>
    </AppScreenLayout>

  )
}

export default Favorites;
