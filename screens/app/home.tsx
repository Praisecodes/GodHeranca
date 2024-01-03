import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { AppScreenLayout } from '../../layouts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appRootStackParamList } from '../../navigators/types';

const Home = ({ navigation }: { navigation: NativeStackNavigationProp<appRootStackParamList, "Home"> }): React.ReactNode => {

  return (
    <AppScreenLayout>
      <Text>
        Home
      </Text>
    </AppScreenLayout>
  )
}

export default Home;
