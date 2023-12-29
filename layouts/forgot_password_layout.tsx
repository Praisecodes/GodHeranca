import { View, Text, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons';

const ForgotPasswordLayout = ({ children, title, navigation }: { children: React.ReactNode; title: string; navigation: any }) => {
  return (
    <View style={[tw`pt-4 flex-1`]}>
      <View style={[tw`flex flex-row py-4 px-2 w-[100%] gap-x-4 items-center`]}>
        <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </TouchableWithoutFeedback>
        <Text style={[tw`text-xl`, { fontFamily: "satoshi-bold" }]}>
          {title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={[tw`px-5 min-h-[90%] pb-3`]}>
        {children}
      </ScrollView>
    </View>
  )
}

export default ForgotPasswordLayout;
