import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons';

const AccountSetupLayout = ({ children, navigation }: { children: React.ReactNode; navigation: any }) => {
  return (
    <View style={[tw`pt-4 flex-1 bg-white`]}>
      <View style={[tw`flex flex-row py-4 px-2 w-[100%] gap-x-4 items-center`]}>
        <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </TouchableWithoutFeedback>
        <Text style={[tw`text-2xl`, { fontFamily: "satoshi-bold" }]}>
          Setup Your Account
        </Text>
      </View>

      <ScrollView contentContainerStyle={[tw`px-5 min-h-[90%] bg-white pb-3`]}>
        {children}
      </ScrollView>
    </View>
  )
}

export default AccountSetupLayout;
