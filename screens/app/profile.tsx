import { View, Text } from 'react-native'
import React from 'react'
import { AppScreenLayout } from '../../layouts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appRootStackParamList } from '../../navigators/types';

const Profile = ({ navigation }: { navigation: NativeStackNavigationProp<appRootStackParamList, "Profile"> }) => {
  return (
    <AppScreenLayout>
      <Text>Profile</Text>
    </AppScreenLayout>
  )
}

export default Profile;
