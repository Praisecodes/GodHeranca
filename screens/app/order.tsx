import { View, Text } from 'react-native'
import React from 'react'
import { AppScreenLayout } from '../../layouts';
import { appRootStackParamList } from '../../navigators/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Order = ({ navigation }: { navigation: NativeStackNavigationProp<appRootStackParamList, "Order"> }) => {
  return (
    <AppScreenLayout>
      <Text>Order</Text>
    </AppScreenLayout>
  )
}

export default Order;
