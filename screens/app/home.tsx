import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import { AppScreenLayout } from '../../layouts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { appRootStackParamList } from '../../navigators/types';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }: { navigation: NativeStackNavigationProp<appRootStackParamList, "Home"> }): React.ReactNode => {

  return (
    <AppScreenLayout>
      <View style={[tw`flex flex-row justify-between py-3 items-center`]}>
        <View style={[tw`flex flex-row items-center gap-x-2`]}>
          <View style={[tw`p-8 rounded-full bg-[#aaaaaa]`]}></View>

          <View>
            <Text style={[tw`text-base`, { fontFamily: "satoshi" }]}>
              Good Afternoon
            </Text>
            <Text numberOfLines={1} style={[tw`text-xl`, { fontFamily: "satoshi-bold" }]}>
              Martinez White
            </Text>
          </View>
        </View>

        <TouchableWithoutFeedback>
          <Ionicons name="ios-notifications-outline" size={30} color="black" />
        </TouchableWithoutFeedback>
      </View>
    </AppScreenLayout>
  )
}

export default Home;
