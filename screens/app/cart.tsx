import { View, Text } from 'react-native'
import React from 'react'
import { AppScreenLayout } from '../../layouts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appRootStackParamList } from '../../navigators/types';

const Cart = ({ navigation }: { navigation: NativeStackNavigationProp<appRootStackParamList, "Home"> }) => {
  return (
    <AppScreenLayout>
      <Text>Cart</Text>
    </AppScreenLayout>
  )
}

export default Cart;
